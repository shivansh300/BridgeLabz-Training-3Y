"use strict";

class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (this.isIssued) {
            console.log(`${this.title} is already issued.`);
            return;
        }

        this.isIssued = true;
        console.log(`${this.title} has been issued.`);
    }

    returnBook() {
        if (!this.isIssued) {
            console.log(`${this.title} was not issued.`);
            return;
        }

        this.isIssued = false;
        console.log(`${this.title} has been returned.`);
    }
}

const books = [
    new Book("JavaScript Basics", "John", "101"),
    new Book("Web Development", "Alex", "102"),
    new Book("Python Guide", "Sam", "103", true)
];

function displayAvailableBooks() {
    const availableBooks = books.filter(book => !book.isIssued);

    console.log("Available Books:");

    availableBooks.forEach(book => {
        console.log(`${book.title} by ${book.author} | ISBN: ${book.ISBN}`);
    });
}

function issueBookByISBN(isbn) {
    const book = books.find(book => book.ISBN === isbn);

    if (book) {
        book.issueBook();
    } else {
        console.log("Book not found.");
    }
}

displayAvailableBooks();
issueBookByISBN("101");
displayAvailableBooks();