'use strict';

(function () {

  var picture = [];
  var gallery = document.querySelector('.gallery-overlay');
  var galleryClose = gallery.querySelector('.gallery-overlay-close');

  /**
   * Создает DOM-элемент картинку
   * @param {Object} id
   */
  var showPhoto = function (id) {
    var photoElement = document.querySelector('.gallery-overlay');
    photoElement.querySelector('.gallery-overlay-image').setAttribute('data-id', picture[id].id);
    photoElement.querySelector('.gallery-overlay-image').setAttribute('src', picture[id].url);
    photoElement.querySelector('.likes-count').textContent = picture[id].likes;
    photoElement.querySelector('.comments-count').textContent = picture[id].comments.length;
  };

  var pictureClickHandler = function (evt) {
    evt.preventDefault();
    var target = evt.target.dataset.id;
    gallery.classList.remove('hidden');
    document.addEventListener('keydown', closeGalleryHandler);
    showPhoto(target);
  };

  var addPictureHandlers = function () {

    var picturePreview = document.querySelectorAll('a.picture');
    for (var i = 0; i < picturePreview.length; i++) {
      picturePreview[i].addEventListener('click', pictureClickHandler);
    }
  };
  addPictureHandlers();

  /**
     * Закрывает окно по нажатию на ESC
     * @param  {type} evt
     */
  var closeGalleryHandler = function (evt) {
    window.util.isEscClose(evt, closeGallery);
  };

  /**
   * Закрывает окно по клику
   */
  var closeGallery = function () {
    gallery.classList.add('hidden');
    gallery.removeEventListener('keydown', closeGalleryHandler);
  };

  galleryClose.addEventListener('click', function () {
    closeGallery();
  });

})();
