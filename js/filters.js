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

  var calculateFilter = function (filterName, value) {
    switch (filterName) {
      case 'none':
        sliderBar.classList.add('hidden');
        break;
      case 'chrome':
        filterName = 'grayscale(' + value + ')';
        break;
      case 'sepia':
        filterName = 'sepia(' + value + ')';
        break;
      case 'marvin':
        filterName = 'invert(' + value * 100 + '%)';
        break;
      case 'phobos':
        filterName = 'blur(' + value * 3 + 'px)';
        break;
      case 'heat':
        filterName = 'brightness(' + value * 3 + ')';
        break;
      default: break;
    }
    return filterName;
  };

  calculateFilter();

  var getCurrentFilter = function () {
    var effect = document.querySelector('input[name=effect]:checked');
    return effect ? effect.value : '';
  };

  getCurrentFilter();

  var setEffect = function (evt) {
    var target = evt.target;
    if (target.classList !== 'effect-image-preview') {
      imagePreview.classList.add('effect-' + 'filterName');
    }
  };

  var displaySliderControls = function (evt) {
    var target = evt.target;
    if (target.id !== 'upload-effect-none') {

    }

    // если фильтр по умолчанию прячет полоску слайдера
    // если выбран фильтр показывает полоску
  };

})();
**/
