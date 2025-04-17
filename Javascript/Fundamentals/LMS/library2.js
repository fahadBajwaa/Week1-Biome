// 1. Check Naming Conventions
// 2. let,var,const scope -> add examples Also add Hoisting examples
// 3. primitive vs non-prmitive, mutable vs immutable , With Examples
// 4. Prefix vs Postfix , add examples
// 5. Diff between const,let, var for list & objects, with examples. Why use const?. Output differences.
// 6. filter vs map vs find vs findIndex vs splice vs slice , with examples


// Unique ID for book
// let bookIdCounter = 1; 

let id = 1;

// Book collection 

//arrays/obj/functions are mutable
const library = [];

const x = 1;
//  x = 2;
console.log(x);

// Example of immutable
let y = 1;
let z = y;
z = 2;
console.log(y, z)


//  let bookIdCounterlet = 1; // this is wrong naming convention
//  let bookIdCounterLet = 1; // this is RIGHT naming convention



// Add a book (arrow function)
const addBook = (title, author) => {
  // console.log(bookIdCounter);
  // let id = 1; // Using let we will only have block scope
  // id = id++; // This will not increment id because?
  // console.log(bookIdCounter);
  // var bookIdCounterVar = 1; // Using var we will only have functional scope

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
