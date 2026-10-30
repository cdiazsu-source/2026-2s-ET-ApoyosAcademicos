(function () {
  "use strict";

  // Las tarjetas de área abren su detalle; el botón interior lleva al catálogo
  Array.prototype.forEach.call(document.querySelectorAll(".area-card"), function (card) {
    var dialog = document.getElementById(card.getAttribute("aria-controls"));
    if (!dialog || typeof dialog.showModal !== "function") return;
    card.addEventListener("click", function () { dialog.showModal(); });
  });

  Array.prototype.forEach.call(document.querySelectorAll(".area-dialog"), function (dialog) {
    dialog.querySelector(".dlg-close").addEventListener("click", function () { dialog.close(); });
    dialog.addEventListener("click", function (e) {
      if (e.target === dialog) dialog.close();
    });
  });
})();
