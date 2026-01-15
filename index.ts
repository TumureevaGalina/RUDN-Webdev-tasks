import { Book } from "./types/Book";
import { LibraryBook } from "./types/LibraryBook";

const firstBook: Book = {
  title: "Война и мир",
  author: "Лев Толстой",
  year: 1869
};

const secondBook: Book = {
  title: "Преступление и наказание",
  author: "Федор Достоевский",
  year: 1866
};

const libraryBook1 = new LibraryBook(firstBook);
const libraryBook2 = new LibraryBook(secondBook);

libraryBook1.borrow("Иван");
libraryBook2.borrow("Мария");
