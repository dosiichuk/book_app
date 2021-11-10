/* global Handlebars, utils, dataSource */

{
  'use strict';
  
  const select = {
    templateOf: {
      book: '#template-book',
    },
    containerOf: {
      books: '.books-list',
    },
  };
  const templates = {
    book: Handlebars.compile(
      document.querySelector(select.templateOf.book).innerHTML
    ),
  };
  function renderBooks(dataSource) {
    dataSource.books.forEach(book => {
      const generatedHTML = templates.book(book);
      const domElement = utils.createDOMFromHTML(generatedHTML);
      const bookContainer = document.querySelector(select.containerOf.books);
      bookContainer.appendChild(domElement);
    });
  }

  renderBooks(dataSource);


}
