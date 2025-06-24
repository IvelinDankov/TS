// Book class definition
var Book = /** @class */ (function () {
    function Book(title, author, year, isAvailable) {
        if (isAvailable === void 0) { isAvailable = true; }
        this.title = title;
        this.author = author;
        this.year = year;
        this.isAvailable = isAvailable;
    }
    return Book;
}());
// Library class definition
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.getAvailableBooks = function () {
        return this.books.filter(function (book) { return book.isAvailable; });
    };
    Library.prototype.findBookByTitle = function (title) {
        var cleanTitle = title.trim().toLowerCase();
        return this.books.find(function (book) { return book.title.trim().toLowerCase() === cleanTitle; });
    };
    Library.prototype.checkoutBook = function (title) {
        var book = this.findBookByTitle(title);
        if (book && book.isAvailable) {
            book.isAvailable = false;
            return true;
        }
        return false;
    };
    return Library;
}());
// Example usage
var library = new Library();
var book1 = new Book("The Hobbit", "J.R.R. Tolkien", 1937, true);
var book2 = new Book("1984", "George Orwell", 1949, true);
var book3 = new Book("The Catcher in the Rye", "J.D. Salinger", 1951, false);
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
console.log("✅ Available books:");
console.log(library.getAvailableBooks());
console.log("\n🔎 Find book by title '1984':");
console.log(library.findBookByTitle("1984"));
console.log("\n📚 Checkout book '1984':");
var success = library.checkoutBook("1984");
console.log(success ? "Checkout successful!" : "Book not available.");
console.log("\n📋 Available books after checkout:");
console.log(library.getAvailableBooks());
