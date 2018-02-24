'use strict';

(function () {

  var MIN = 15;
  var MAX = 200;

  var COMMENTS = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];

  var picture = [];

  /**
   * Создает рандомное количество комментариев
   * @return {Array}
   */
  var getRandomСomments = function () {
    var comments = [];
    if (Math.random() > 0.5) {
      comments.push(COMMENTS[Math.floor(Math.random() * COMMENTS.length)]);
    }
    comments.push(COMMENTS[Math.floor(Math.random() * COMMENTS.length)]);
    return comments;
  };

  /**
   * Создает рандомное количество лайков
   * @return {number}
   */
  var getRandomLikes = function () {
    return Math.floor(Math.random() * (MAX - MIN) + MIN);
  };

  var template = document.querySelector('#picture-template').content;
  var pictureListElement = document.querySelector('.pictures');


  /**
   * Создает DOM-элемент превью картинки
   * @param {Object} elem
   * @return {Object}
   */
  var renderPictures = function (elem) {
    var pictureElement = template.cloneNode(true);
    pictureElement.querySelector('img').setAttribute('data-id', elem.id);
    pictureElement.querySelector('img').setAttribute('src', elem.url);
    pictureElement.querySelector('.picture-likes').textContent = elem.likes;
    pictureElement.querySelector('.picture-comments').textContent = elem.comments;
    return pictureElement;
  };

  var createPhotos = function () {

    /**
     * Создает массив из 25 картинок
     * @param {Array.<picture>}
     */
    var fragment = document.createDocumentFragment();
    for (var i = 1; i < 26; i++) {
      picture[i] = {
        id: i,
        url: 'photos/' + i + '.jpg',
        likes: getRandomLikes(),
        comments: getRandomСomments()
      };
      fragment.appendChild(renderPictures(picture[i]));
    }
    pictureListElement.appendChild(fragment);
  };
  createPhotos();

})();