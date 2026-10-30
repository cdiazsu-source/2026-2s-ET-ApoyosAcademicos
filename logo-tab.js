(function () {
  "use strict";

  // El GIF del logo se reinicia cada vez que la pestaña pasa del título al logo,
  // para que siempre se vea la construcción completa de "UiFCE".
  var CYCLE = 14000;   // duración del ciclo de la pestaña (ms), igual que en styles.css
  var RESTART = 5600;  // momento del ciclo en que empieza a aparecer el logo (ms)

  var face = document.querySelector(".tab-official");
  var img = face && face.querySelector("img[data-gif]");
  var title = document.querySelector(".tab-title");
  if (!img || !title || !window.fetch || !window.URL || !URL.createObjectURL) return;
  if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  fetch(img.getAttribute("data-gif"))
    .then(function (r) { return r.blob(); })
    .then(function (blob) {
      var current = null;

      function restart() {
        var url = URL.createObjectURL(blob); // un recurso nuevo reinicia el GIF en el primer cuadro
        img.src = url;
        if (current) URL.revokeObjectURL(current);
        current = url;
      }

      var anim = title.getAnimations ? title.getAnimations()[0] : null;
      var t0 = anim && anim.startTime != null ? anim.startTime : document.timeline.currentTime;

      function schedule() {
        var now = document.timeline.currentTime;
        var k = Math.floor((now - t0 - RESTART) / CYCLE) + 1;
        var at = t0 + k * CYCLE + RESTART;
        setTimeout(function () { restart(); schedule(); }, Math.max(0, at - now));
      }
      schedule();
    })
    .catch(function () { /* sin GIF: la pestaña conserva solo el título */ });
})();
