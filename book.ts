// Book class definition
class Book {
  title: string;
  author: string;
  year: number;
  isAvailable: boolean;

  constructor(
    title: string,
    author: string,
    year: number,
    isAvailable: boolean = true
  ) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.isAvailable = isAvailable;
  }
}

// Library class definition
class Library {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  getAvailableBooks(): Book[] {
    return this.books.filter((book) => book.isAvailable);
  }

  findBookByTitle(title: string): Book | undefined {
    const cleanTitle = title.trim().toLowerCase();
    return this.books.find(
      (book) => book.title.trim().toLowerCase() === cleanTitle
    );
  }

  checkoutBook(title: string): boolean {
    const book = this.findBookByTitle(title);
    if (book && book.isAvailable) {
      book.isAvailable = false;
      return true;
    }
    return false;
  }
}

// Example usage
const library = new Library();

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 1937, true);
const book2 = new Book("1984", "George Orwell", 1949, true);
const book3 = new Book("The Catcher in the Rye", "J.D. Salinger", 1951, false);

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

console.log("✅ Available books:");
console.log(library.getAvailableBooks());

console.log("\n🔎 Find book by title '1984':");
console.log(library.findBookByTitle("1984"));

console.log("\n📚 Checkout book '1984':");
const success = library.checkoutBook("1984");
console.log(success ? "Checkout successful!" : "Book not available.");

console.log("\n📋 Available books after checkout:");
console.log(library.getAvailableBooks());
