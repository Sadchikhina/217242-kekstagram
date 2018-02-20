'use strict';

(function () {

  var imagePreview = document.querySelector('.effect-image-preview');
  var effectControl = document.querySelector('.upload-effect-controls');
  var chrome = effectControl.querySelector('.upload-effect-label-chrome');
  var sepia = effectControl.querySelector('.upload-effect-label-sepia');
  var marvin = effectControl.querySelector('.upload-effect-label-marvin');
  var phobos = effectControl.querySelector('.upload-effect-label-phobos');
  var heat = effectControl.querySelector('.upload-effect-label-heat');
  var original = effectControl.querySelector('#upload-effect-none');


  original.addEventListener('click', function () {
    imagePreview.className = 'upload-effect-label';
  });

  chrome.addEventListener('click', function () {
    imagePreview.className = 'upload-effect-label';
    imagePreview.classList.add('effect-chrome');
  });

  sepia.addEventListener('click', function () {
    imagePreview.className = 'upload-effect-label';
    imagePreview.classList.add('effect-sepia');
  });

  marvin.addEventListener('click', function () {
    imagePreview.className = 'upload-effect-label';
    imagePreview.classList.add('effect-marvin');
  });

  phobos.addEventListener('click', function () {
    imagePreview.className = 'upload-effect-label';
    imagePreview.classList.add('effect-phobos');
  });

  heat.addEventListener('click', function () {
    imagePreview.className = 'upload-effect-label';
    imagePreview.classList.add('effect-heat');
  });


})();
