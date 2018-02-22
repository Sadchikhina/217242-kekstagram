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
    var decreasedValue = Number(resizeValue.value) - STEP;
    if (decreasedValue < MIN) {
      decreasedValue = MIN;
    }
    var decreasedScale = decreasedValue / 100;
    resizeValue.value = decreasedValue;
    imagePreview.style.transform = 'scale(' + decreasedScale + ')';
  });

  increasePicture.addEventListener('click', function () {
    var increasedValue = Number(resizeValue.value) + STEP;
    if (increasedValue > MAX) {
      increasedValue = MAX;
    }
    var increasedScale = increasedValue / 100;
    resizeValue.value = increasedValue;
    imagePreview.style.transform = 'scale(' + increasedScale + ')';
  });

})();
