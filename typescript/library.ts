class Book {
  readonly title: string;
  readonly author: string;
  private isBorrowed: boolean;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
    this.isBorrowed = false;
  }

  borrowBook(): void {
    this.isBorrowed = true;
  }
  returnBook(): void {
    this.isBorrowed = false;
  }
  getInfo() {
    return `Book with title: ${this.title} - ${
      this.author
    } - is available: ${!this.isBorrowed}`;
  }
  isBookBorrowed(): boolean {
    return this.isBorrowed;
  }
}

class EBook extends Book {
  fileSizeMB: number;

  constructor(title: string, author: string, fileSizeMB: number) {
    super(title, author);
    this.fileSizeMB = fileSizeMB;
  }

  getInfo(): string {
    return `${super.getInfo()} [E-Book: ${this.fileSizeMB}MB] `;
  }
}
class PrintedBook extends Book {
  pages: number;

  constructor(title: string, author: string, pages: number) {
    super(title, author);
    this.pages = pages;
  }

  getInfo(): string {
    return `${super.getInfo()} [Printed Book: ${this.pages} pages.]`;
  }
}

class Library {
  books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }
  listBooks() {
    if (this.books.length === 0) {
      console.log("No books in the library");
    }
    const listedBook = this.books.map((book) => {
      return `<li> ${book.title} </li>`;
    });
    return listedBook;
  }
  findBookByTitle(title: string): Book | undefined {
    return this.books.find(
      (book) => book.title.toLowerCase() === title.toLowerCase()
    );
  }
  borrowBook(title: string): void {
    const book = this.findBookByTitle(title);
    if (book) {
      if (!book.isBookBorrowed()) {
        book.borrowBook();
        console.log(`You borrowed "${book.title}".`);
      } else {
        console.log(`"${book.title}" is already borrowed.`);
      }
    } else {
      console.log(`Book titled "${title}" not found.`);
    }
  }

  returnBook(title: string) {
    const book = this.findBookByTitle(title);
    if (book) {
      if (book.isBookBorrowed()) {
        book.returnBook();
        console.log(`You returned "${book.title}".`);
      } else {
        console.log(`"${book.title}" wasn't borrowed.`);
      }
    } else {
      console.log(`Book titled "${title}" not found.`);
    }
  }

  getAllBooks(): Book[] {
    return this.books;
  }
}

class LibraryUtils {
  countBorrowedBooks(books: Book[]): number {
    return books.length;
  }
}

const ebook = new EBook("1980", "George Orwell", 2.5);
const printedBook = new PrintedBook("Moby Dick", "Herman Melville", 635);

const library = new Library();
library.addBook(ebook);
library.addBook(printedBook);

library.listBooks();
