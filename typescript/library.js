var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Book = /** @class */ (function () {
    function Book(title, author) {
        this.title = title;
        this.author = author;
        this.isBorrowed = false;
    }
    Book.prototype.borrowBook = function () {
        this.isBorrowed = true;
    };
    Book.prototype.returnBook = function () {
        this.isBorrowed = false;
    };
    Book.prototype.getInfo = function () {
        return "Book with title: ".concat(this.title, " - ").concat(this.author, " - is available: ").concat(!this.isBorrowed);
    };
    Book.prototype.isBookBorrowed = function () {
        return this.isBorrowed;
    };
    return Book;
}());
var EBook = /** @class */ (function (_super) {
    __extends(EBook, _super);
    function EBook(title, author, fileSizeMB) {
        var _this = _super.call(this, title, author) || this;
        _this.fileSizeMB = fileSizeMB;
        return _this;
    }
    EBook.prototype.getInfo = function () {
        return "".concat(_super.prototype.getInfo.call(this), " [E-Book: ").concat(this.fileSizeMB, "MB] ");
    };
    return EBook;
}(Book));
var PrintedBook = /** @class */ (function (_super) {
    __extends(PrintedBook, _super);
    function PrintedBook(title, author, pages) {
        var _this = _super.call(this, title, author) || this;
        _this.pages = pages;
        return _this;
    }
    PrintedBook.prototype.getInfo = function () {
        return "".concat(_super.prototype.getInfo.call(this), " [Printed Book: ").concat(this.pages, " pages.]");
    };
    return PrintedBook;
}(Book));
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.listBooks = function () {
        if (this.books.length === 0) {
            console.log("No books in the library");
        }
        var listedBook = this.books.map(function (book) {
            return "<li> ".concat(book.title, " </li>");
        });
        return listedBook;
    };
    Library.prototype.findBookByTitle = function (title) {
        return this.books.find(function (book) { return book.title.toLowerCase() === title.toLowerCase(); });
    };
    Library.prototype.borrowBook = function (title) {
        var book = this.findBookByTitle(title);
        if (book) {
            if (!book.isBookBorrowed()) {
                book.borrowBook();
                console.log("You borrowed \"".concat(book.title, "\"."));
            }
            else {
                console.log("\"".concat(book.title, "\" is already borrowed."));
            }
        }
        else {
            console.log("Book titled \"".concat(title, "\" not found."));
        }
    };
    Library.prototype.returnBook = function (title) {
        var book = this.findBookByTitle(title);
        if (book) {
            if (book.isBookBorrowed()) {
                book.returnBook();
                console.log("You returned \"".concat(book.title, "\"."));
            }
            else {
                console.log("\"".concat(book.title, "\" wasn't borrowed."));
            }
        }
        else {
            console.log("Book titled \"".concat(title, "\" not found."));
        }
    };
    Library.prototype.getAllBooks = function () {
        return this.books;
    };
    return Library;
}());
var LibraryUtils = /** @class */ (function () {
    function LibraryUtils() {
    }
    LibraryUtils.prototype.countBorrowedBooks = function (books) {
        return books.length;
    };
    return LibraryUtils;
}());
var ebook = new EBook("1980", "George Orwell", 2.5);
var printedBook = new PrintedBook("Moby Dick", "Herman Melville", 635);
var library = new Library();
library.addBook(ebook);
library.addBook(printedBook);
library.listBooks();
