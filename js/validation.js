'use strict';

(function () {

  var tagsField = document.querySelector('.upload-form-hashtags');
  var uploadForm = document.querySelector('.upload-form');
  var MAX_HASHTAGS = 5;
  var MAX_LENGTH_HASHTAG = 20;
  var MIN_LENGTH_HASHTAG = 2;

  var tagsHandler = function (stringOfTags) {
    var errorMessage = '';

    stringOfTags = stringOfTags.trim();
    stringOfTags = stringOfTags.toLowerCase();

    var hashtags = stringOfTags.split(' ');

    hashtags = hashtags.filter(function (item) {
      return item !== '';
    });

    if (hashtags.length > MAX_HASHTAGS) {
      errorMessage += 'Не больше 5 хэш-тегов.';
    }

    hashtags.forEach(function (item) {
      if (item.length > MAX_LENGTH_HASHTAG) {
        errorMessage += 'Длина хэш-тега не больше 20 символов.';
      }

      if (item[0] !== '#') {
        errorMessage += 'Хэш-тег должен начинаться с символа "#".';
      }

      if (item.length < MIN_LENGTH_HASHTAG) {
        errorMessage +=
          'После символа "#" минимум 1 знак.';
      }

      if (~item.indexOf('#', 1)) {
        errorMessage += 'Хэш-теги отделяются пробелом.';
      }
    });

    var isDuplicate = function (item, i, array) {
      return ~array.indexOf(item, i + 1);
    };

    if (hashtags.some(isDuplicate)) {
      errorMessage += 'Запрещены повторяющие хэш-теги.';
    }

    if (errorMessage) {
      tagsField.setCustomValidity(errorMessage);
    } else {
      tagsField.setCustomValidity('');
      tagsField.style.border = '';
    }
  };

  tagsField.addEventListener('input', function (evt) {
    tagsHandler(evt.target.value);
  });

  uploadForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
  });

})();
