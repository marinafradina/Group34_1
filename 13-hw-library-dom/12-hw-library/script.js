const library = [];
//isbn;title;author;year
let inputData = prompt('Enter book data separate by ";"');
while (inputData);
const arr = inputData.split(';');
if (findBook(library, arr[0]) === -1) {
    const book = new Book(arr[0], arr[1], arr[2], arr[3]);
    library.push(book);
}
printLibrary(library);

function printLibrary(library) {
    for (let i = 0; i < library.length; i++) {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(library[i].toString()))
        result.appendChild(li);
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
        return `ISBN: ${this.isbn}, ...`; // TODO Complete toString
    }
}