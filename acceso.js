(function () {
  'use strict';

  var consent = document.getElementById('consent-checkbox');
  var continueBtn = document.getElementById('continue-btn');

  consent.addEventListener('change', function () {
    continueBtn.disabled = !consent.checked;
  });

  continueBtn.addEventListener('click', function () {
    if (continueBtn.disabled) return;
    window.location.href = 'index.html';
  });
})();
