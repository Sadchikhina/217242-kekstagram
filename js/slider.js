'use strict';

var slider = document.querySelector('.upload-effect-level-line');
var sliderPin = document.querySelector('.upload-effect-level-pin');

sliderPin.addEventListener('mousedown', function (evt) {
  evt.preventDefault();
  var sliderPinCoords = getCoords(sliderPin);
  var shiftX = evt.pageX - sliderPinCoords.left;

  var sliderCoords = getCoords(slider);

  var mouseMoveHandler = function (moveEvt) {

    var leftEdge = moveEvt.pageX - shiftX - sliderCoords.left;
    if (leftEdge < 0) {
      leftEdge = 0;
    }

    var rightEdge = slider.offsetWidth;
    if (leftEdge > rightEdge) {
      leftEdge = rightEdge;
    }

    sliderPin.style.left = leftEdge + 'px';

  };
  var mouseUpHandler = function (upEvt) {
    upEvt.preventDefault();
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  };
  document.addEventListener('mousemove', mouseMoveHandler);
  document.addEventListener('mouseup', mouseUpHandler);

});

var getCoords = function (elem) {
  var box = elem.getBoundingClientRect();

  return {
    left: box.left + pageXOffset
  };
};
