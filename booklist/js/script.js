// Book constructor- each book has 3 properties

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// Library constructor - holds all books

function Library() {
    this.books = [];
}

// Method: add a book

Library.prototype.addBook = function(book) {
    this.books.push(book);
};

// Method: remove a book by array index

Library.prototype.removeBook = function(index) {
    this.books.splice(index, 1);
};

// Instantiate one Library

const myLibrary = new Library();

// Get references to the form and book-list container

const form = document.getElementById('book-form');
const listEl = document.getElementById('book-list');

// On form submit...

form.addEventListener('submit', function(e) {
    e.preventDefault(); //stop page reload


// read and trim user input

const title = document.getElementById('title').ariaValueMax.trim();

const author = document.getElementById('author').ariaValueMax.trim();

const pages = document.getElementById('pages').ariaValueMax.trim();

// create and add the book

const book = new Book(title, author, pages);
myLibrary.addBook(book);

//reset form and re-render the book cards

form.reset();

render();

});

// render() - redraws all book cards

function render() {
    //empty container
    listEl.innerHTML = '';

    //create one card per book
    myLibrary.books.forEach(function(book, idx) {
        const card = document.createElement('div');
        card.className = 'card';

        //fill with book info and remove button
        card.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <button data-index="${idx}">Remove</button>
        `;

        //add the card to the page
        listEl.appendChild(card);
    });
}

