//  unique ID for book
let bookIdCounter = 1;

// Array for book collection.
const library = [];

//Add a book
const addBook = (title, author) => {
  const book = {
    id: bookIdCounter++,
    title,
    author,
    isAvailable: true
  };
  library.push(book);
  console.log(`Book added: "${book.title}" (ID: ${book.id})`);
};

// List all available books
const listAvailableBooks = () => library.filter(book => book.isAvailable);

// Search a book by title
const searchBookByTitle = (title) => {
  return library.filter(book =>
    book.title.toLowerCase().includes(title.toLowerCase())
  );
};

// Mark a Book as Borrowed
const markBookAsBorrowed = (id) => {
  const book = library.find(b => b.id === id);
  if (book && book.isAvailable) {
    book.isAvailable = false;
    console.log(`Book borrowed: "${book.title}" (ID: ${book.id})`);
  } else if (!book) {
    console.log(`No book found with ID: ${id}`);
  } else {
    console.log(`Book with ID: ${id} is already borrowed.`);
  }
};

// Mark a Book as Returned
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

// Remove a book by ID
const removeBookById = (id) => {
  const index = library.findIndex(book => book.id === id);
  if (index !== -1) {
    const removed = library.splice(index, 1)[0];
    console.log(`Removed book: "${removed.title}" (ID: ${removed.id})`);
  } else {
    console.log(`No book found with ID: ${id}`);
  }
};

// View all books
const viewAllBooks = () => {
  console.table(library);
};

// Sample data
addBook("Aangan", "Khadija Mastoor");
addBook("Ice Candy Man", "Bapsi Sidhwa");
addBook("The Reluctant Fundamentalist", "Mohsin Hamid");
addBook("Moth Smoke", "Mohsin Hamid");
addBook("Patras Kay Mazameen", "Patras Bukhari");


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
