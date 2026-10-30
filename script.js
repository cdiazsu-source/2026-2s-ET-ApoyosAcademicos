(function () {
  'use strict';

  var searchInput = document.getElementById('search');
  var areaSelect = document.getElementById('filter-area');
  var cards = Array.prototype.slice.call(document.querySelectorAll('.course-card'));
  var resultCount = document.getElementById('result-count');
  var noResults = document.getElementById('no-results');
  var groups = Array.prototype.slice.call(document.querySelectorAll('.course-group'));
  var totalCourses = cards.length;

  // Al presionar una ficha se abre el detalle del software
  cards.forEach(function (card) {
    var tile = card.querySelector('.sw-tile');
    var dialog = card.querySelector('.sw-dialog');
    if (!tile || !dialog || typeof dialog.showModal !== 'function') return;

    tile.addEventListener('click', function () { dialog.showModal(); });
    card.querySelector('.dlg-close').addEventListener('click', function () { dialog.close(); });
    dialog.addEventListener('click', function (e) {
      if (e.target === dialog) dialog.close();
    });
  });

  if (!searchInput || !areaSelect) return;

  function normalize(str) {
    return (str || '')
      .toString()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '');
  }

  function applyFilters() {
    var query = normalize(searchInput.value.trim());
    var area = areaSelect.value;
    var visibleCount = 0;

    cards.forEach(function (card) {
      var haystack = normalize(card.dataset.search + ' ' + card.querySelector('.card-title').textContent);
      var matchesQuery = !query || haystack.indexOf(query) !== -1;
      var matchesArea = !area || card.dataset.area === area;
      var visible = matchesQuery && matchesArea;

      card.hidden = !visible;
      if (visible) visibleCount++;
    });

    // Sin filtros las categorías quedan contraídas; al filtrar se abren las que tienen resultados
    var filtering = !!(query || area);
    groups.forEach(function (group) {
      var hasResults = !!group.querySelector('.course-card:not([hidden])');
      group.hidden = !hasResults;
      group.open = filtering && hasResults;
    });

    resultCount.textContent ='Mostrando ' + visibleCount + ' de ' + totalCourses + ' softwares';
    noResults.hidden = visibleCount !== 0;
  }

  [searchInput, areaSelect].forEach(function (el) {
    el.addEventListener('input', applyFilters);
  });

  // Las tarjetas de área del inicio enlazan con catalogo.html#<área>
  var areaParam = decodeURIComponent(window.location.hash.slice(1));
  if (areaParam) {
    Array.prototype.forEach.call(areaSelect.options, function (opt) {
      if (opt.value === areaParam) areaSelect.value = areaParam;
    });
  }

  applyFilters();
})();
