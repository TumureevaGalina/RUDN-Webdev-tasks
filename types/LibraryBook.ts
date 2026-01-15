import { Book } from "./Book";
import { Borrowable } from "./Borrowable";

export class LibraryBook implements Borrowable {
  info: Book;

  constructor(bookInfo: Book) {
    this.info = bookInfo;
  }

  borrow(userName: string): void {
    console.log(`Книга "${this.info.title}" выдана пользователю ${userName}`);
  }
}
