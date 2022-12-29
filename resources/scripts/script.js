"use strict";

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    let readOutput = "";
    if (read === true) {
      readOutput = "the book has been read.";
    } else if (!read) {
      readOutput = "the book has not been read.";
    }
    return `${title} by ${author}, ${pages} pages, ${readOutput}`;
  };
}
const theHobbit = new Book("The Hoobit", "J.R.R", 295, false);
theHobbit.info();
console.log(theHobbit.constructor);
