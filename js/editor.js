'use strict';

(function () {

  var inputUpload = document.querySelector('#upload-file');
  var uploadForm = document.querySelector('.upload-form');
  var editor = document.querySelector('.upload-overlay');
  var editorClose = editor.querySelector('.upload-form-cancel');

  var showForm = function () {

    /**
     * Закрывает окно по нажатию на ESC
     * @param  {type} evt
     */
    var openEditorHandler = function (evt) {
      window.data.isEscClose(evt, closeEditor);
    };

    /**
   * Открывает окно, закрывает по нажатию на ESC
    */
    var openEditor = function () {
      editor.classList.remove('hidden');
      document.addEventListener('keydown', openEditorHandler);
    };

    /**
     * Закрытие формы
     */
    var closeEditor = function () {
      editor.classList.add('hidden');
      editor.removeEventListener('keydown', openEditorHandler);
      uploadForm.reset();
    };

    inputUpload.addEventListener('change', function () {
      openEditor();
    });

    editorClose.addEventListener('click', function () {
      closeEditor();
    });
  };

  showForm();

  /**
   * Отправка формы
   *
   */
  var commentField = editor.querySelector('.upload-form-description');

  commentField.addEventListener('keydown', function (evt) {
    window.data.isEscClose(evt, evt.stopPropagation);
  });
})();
