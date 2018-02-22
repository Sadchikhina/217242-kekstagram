'use strict';

(function () {

  var resizeControls = document.querySelector('.upload-resize-controls');
  var decreasePicture = resizeControls.querySelector('.upload-resize-controls-button-dec');
  var increasePicture = resizeControls.querySelector('.upload-resize-controls-button-inc');
  var resizeValue = resizeControls.querySelector('.upload-resize-controls-value');
  var imagePreview = document.querySelector('.effect-image-preview');

  var MAX = 100;
  var MIN = 25;
  var STEP = 25;

  resizeValue.value = 100;

  decreasePicture.addEventListener('click', function () {
    var newValue = Number(resizeValue.value) - STEP;
    if (newValue < MIN) {
      newValue = MIN;
    }
    var newScale = newValue / 100;
    resizeValue.value = newValue;
    imagePreview.style.transform = 'scale(' + newScale + ')';
  });

  increasePicture.addEventListener('click', function () {
    var newValue = Number(resizeValue.value) + STEP;
    if (newValue > MAX) {
      newValue = MAX;
    }
    var newScale = newValue / 100;
    resizeValue.value = newValue;
    imagePreview.style.transform = 'scale(' + newScale + ')';
  });

})();
