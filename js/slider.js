'use strict';


/**
 * var effectControls = document.querySelector('.upload-effect-controls');
 var effectLevel = document.querySelector('.upload-effect-level');
 var sliderPin = document.querySelector('.upload-effect-level-pin');
 var effectImagePreview = document.querySelector('.upload-effect-level-pin');


sliderPin.addEventListener('mousedown', function (evt) {
  evt.preventDefault();

  var startCoords = {
    x: evt.clientX
  };

  var onMouseMove = function (moveEvt) {

    var shift = {
      x: startCoords.x - moveEvt.clientX
    };

    startCoords = {
      x: moveEvt.clientX
    };

    sliderPin.style.left = (sliderPin.offsetLeft - shift.x) + 'px';
  };

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

});

*/
