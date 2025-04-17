// This file contains:
// 1. Reviewed Naming Conventions
// 2. Enhanced Code Readability (Formatted)

const library = []; // "Const" because array is still mutable. Also, we  can perform all operations (add, borrow,...)  without the risk of accidentally reassigning the entire library array.

let id = 1; // Why "let" ? Re-Assignment needed, Block-level scope : "var" is not preffered because it can be re-declared within same scope leading to bugs/ unintended behaviour.

// Add a book (arrow function)
const addBook = (title, author) => {
    const book = {
        id: id++,
        title,
        author,
        isAvailable: true
    };
    library.push(book);
    console.log(`Book added: "${book.title}" (ID: ${book.id})`);
};

// List all available books using forEach loop
function listAvailableBooks() {
    const availableBooks = [];
    library.forEach((book) => {
        if (book.isAvailable) {
            availableBooks.push(book);
        }
    });
    return availableBooks;
}

// Search a book by title using while loop
const searchBookByTitle = function (title) {
    const results = [];
    let i = 0;
    while (i < library.length) {
        if (library[i].title.toLowerCase().includes(title.toLowerCase())) {
            results.push(library[i]);
        }
        i++;
    }
    return results;
};

// Mark a Book as Borrowed using switch
const markBookAsBorrowed = (id) => {
    const book = library.find(b => b.id === id);

    switch (true) {
        case !book:
            console.log(`No book found with ID: ${id}`);
            break;
        case !book.isAvailable:
            console.log(`Book with ID: ${id} is already borrowed.`);
            break;
        case book.isAvailable:
            book.isAvailable = false;
            console.log(`Book borrowed: "${book.title}" (ID: ${book.id})`);
            break;
    }
};

// Mark a Book as Returned with if/else 
const markBookAsReturned = (id) => {
    const book = library.find(b => b.id === id);

    if (book && !book.isAvailable) {
        book.isAvailable = true;
        console.log(`Book returned: "${book.title}" (ID: ${book.id})`);
    } else if (!book) {
        console.log(`No book found with ID: ${id}`);
    } else {
        console.log(`Book with ID: ${id} was not borrowed.`);
    }
};

// Remove a book by ID using for loop and findIndex
const removeBookById = (id) => {
    let index = -1;

    for (let i = 0; i < library.length; i++) {
        if (library[i].id === id) {
            index = i;
            break;
        }
    }

    if (index !== -1) {
        const removed = library.splice(index, 1)[0]; // Array, object
        console.log(`Removed book: "${removed.title}" (ID: ${removed.id})`);
    } else {
        console.log(`No book found with ID: ${id}`);
    }
};

// View all books with forEach
function viewAllBooks() {
    if (library.length === 0) {
        console.log("No books in the library.");
        return;
    }

    console.log("All Books:");
    library.forEach(book => {
        console.log(`${book.id}: ${book.title} by ${book.author} - ${book.isAvailable ? "Available" : "Borrowed"}`);
    });
    console.table(library);
}

// Sample data using var 
// var sampleTitles = [
//   ["Aangan", "Khadija Mastoor"],
//   ["Ice Candy Man", "Bapsi Sidhwa"],
//   ["The Reluctant Fundamentalist", "Mohsin Hamid"],
//   ["Moth Smoke", "Mohsin Hamid"],
//   ["Patras Kay Mazameen", "Patras Bukhari"]
// ];

// sampleTitles.forEach(book => addBook(book[0], book[1]));

// Export module 
module.exports = {
    addBook,
    listAvailableBooks,
    searchBookByTitle,
    markBookAsBorrowed,
    markBookAsReturned,
    removeBookById,
    viewAllBooks,
    library
};
