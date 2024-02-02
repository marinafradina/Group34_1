const addBook = document.getElementById('addBook');
const library = [];

addBook.onclick = function() {
    //TODO Homework Collect data from inputs,
    // create new book and add new book to library if this book unique
    if (findBook(library, isbn.value) === -1) {
        const book = new Book(isbn.value, title.value, author.value, year.value);
        library.push(book);
    } else {
        alert(`Book with isbn = ${isbn.value} exists`);
    }
    isbn.value = title.value = author.value = year.value = '';
}

printBooks.onclick = function() {
    //TODO create ordered list, add all books from libriry
    // to list as list items. and add list to div with id = result.
    // if div with id = result not emplty, then replace its child
    // Hint: see Clock application
    const list = document.createElement('ol');
    for (let i = 0; i < library.length; i++) {
        const text = document.createTextNode(library[i].toString());
        const li = document.createElement('li');
        li.appendChild(text);
        list.appendChild(li);
    }
    if (result.firstElementChild) {
        result.replaceChild(list, result.firstElementChild);
    } else {
        result.appendChild(list);
    }
}
function findBook(library, isbn) {
    for (let i = 0; i < library.lenght; i++) {
        if (let[i].isbn === isbn) {
            return index;
        }
    }
    return -1;
}
function Book(isbn, title, author, year) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = +year;
    this.toString = function () {
        return `ISBN: ${this.isbn}, Title: ${this.title}, Author: ${this.author}, 
        Year of publishing: ${this.year}`;
    }
}