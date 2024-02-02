const library = [];
//isbn;title;author;year
let inputData = prompt('Enter book data separate by ";"');
while (inputData) {
    //TODO create and add to library only unique book by isbn
    const arr = inputData.split(';');
    if (findBook(library, arr[0] ) === -1) {
        const book = new Book(arr[0], arr[1], arr[2], arr[3]);
        library.push(book);
    }

    inputData = prompt('Enter book data separate by ";"');
}

printLibrary(library);

function printLibrary(library) {
    // /TODO print all books to console
    for (let i = 0; i < library.lenght; i++) {
        console.log(library[i].toString());
    }

    // function printLibrary(library) {
    //     // Перебор каждой книги в библиотеке
    //     for (let i = 0; i < library.length; i++) {
    //         const book = library[i];
    //         console.log(book.toString());
    //     }
    // }
}

function findBook(library, isbn) {
    for (let i = 0; i < library.lenght; i++) {
        if (let[i].isbn === isbn) {
            return index;
        }
    }
    return -1;
}



    //TODO return index if book exists, otherwise return -1
// }
// function findBook(library, isbn) {
//     for (let i = 0; i < library.length; i++) {
//         if (library[i].isbn === isbn) {
//             return i; // Возвращаем индекс, если книга найдена
//         }
//     }
//     return -1; // Книга не найдена, возвращаем -1
// }

function Book(isbn, title, author, year) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = +year;
    this.toString = function () {
        return `ISBN: ${this.isbn}, ...`; // TODO Complete toString
    }
}