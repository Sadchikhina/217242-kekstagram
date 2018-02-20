'use strict';

(function () {

  var resizeControls = document.querySelector('.upload-resize-controls');
  var decreasePicture = resizeControls.querySelector('.upload-resize-controls-button-dec');
  var increasePicture = resizeControls.querySelector('.upload-resize-controls-button-inc');
  var resizeValue = resizeControls.querySelector('.upload-resize-controls-value');
  var imagePreview = document.querySelector('.effect-image-preview');
  resizeValue.value = '100';


  decreasePicture.addEventListener('click', function () {
    if (resizeValue.value >= 100) {
      resizeValue.value = resizeValue.value - 25;
      imagePreview.style.transform = 'scale(0.75)';
    } else if (resizeValue.value >= 75) {
      resizeValue.value = resizeValue.value - 25;
      imagePreview.style.transform = 'scale(0.5)';
    } else if (resizeValue.value >= 50) {
      resizeValue.value = resizeValue.value - 25;
      imagePreview.style.transform = 'scale(0.25)';
    }
  });

  increasePicture.addEventListener('click', function () {
    if (resizeValue.value <= 25) {
      resizeValue.value = resizeValue.value + 25;
      imagePreview.style.transform = 'scale(0.5)';
    } else if (resizeValue.value <= 50) {
      resizeValue.value = resizeValue.value + 25;
      imagePreview.style.transform = 'scale(0.75)';
    } else if (resizeValue.value <= 75) {
      resizeValue.value = resizeValue.value + 25;
      imagePreview.style.transform = 'scale(1)';
    }
  });

})();
