'use strict';
/**
(function () {

  var uploadForm = document.querySelector('.upload-form');
  var imagePreview = document.querySelector('.effect-image-preview');
  var effectControl = document.querySelector('.upload-effect-controls');

  var sliderBar = effectControl.querySelector('.upload-effect-level');
  var sliderLine = document.querySelector('.upload-effect-level-line');
  var sliderIntensity = document.querySelector('.upload-effect-level-val');
  var sliderPin = document.querySelector('.upload-effect-level-pin');
  var sliderValue = document.querySelector('.upload-effect-level-value');

  uploadForm.addEventListener('click', function (evt) {
    var target = evt.target;
    if (target.classList !== 'effect-image-preview') {
      setEffect();
      displaySliderControls();
    }
  });

  uploadForm.addEventListener('reset', function () {
    imagePreview.className = 'upload-effect-label';
    sliderBar.classList.add('hidden');
  });

  var calculateFilter = function (filterName) {
    switch (filterName) {
      case 'none':
        sliderBar.classList.add('hidden');
        break;
      case 'chrome':
        filterName = 'grayscale(' + sliderValue.value + ')';
        break;
      case 'sepia':
        filterName = 'sepia(' + sliderValue.value + ')';
        break;
      case 'marvin':
        filterName = 'invert(' + sliderValue.value * 100 + '%)';
        break;
      case 'phobos':
        filterName = 'blur(' + sliderValue.value * 3 + 'px)';
        break;
      case 'heat':
        filterName = 'brightness(' + sliderValue.value * 3 + ')';
        break;
      default: break;
    }
    return filterName;
  };

  var setEffect = function (evt) {
    var target = evt.target;
    if (target.name === 'effect') {
      imagePreview.classList.add('effect-' + 'filterName');
    }
  };

  var getCurrentFilter = function () {
    if (imagePreview.checked) {

    }
    // через селектор вычисляет какой фильтр сейчас активен
  };

})();

**/
