const readline = require('readline');

const {
  addBook,
  listAvailableBooks,
  searchBookByTitle,
  markBookAsBorrowed,
  markBookAsReturned,
  removeBookById,
  viewAllBooks
} = require('./newLibrary');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const showMenu = () => {
  console.log(`

*** Library Management System ***

1. Add a Book
2. List All Available Books
3. Search a Book by Title
4. Mark a Book as Borrowed
5. Mark a Book as Returned
6. Remove a Book by ID
7. View All Books
8. Exit
  `);
};

const promptUser = () => {
  showMenu();
  rl.question('Select an option: ', (option) => {
    switch (option.trim()) {
      case '1':
        rl.question('Enter book title: ', (title) => {
          rl.question('Enter author name: ', (author) => {
            addBook(title, author);
            promptUser();
          });
        });
        break;
      case '2':
        const availableBooks = listAvailableBooks();
        console.table(availableBooks);
        promptUser();
        break;
      case '3':
        rl.question('Enter title to search: ', (title) => {
          const results = searchBookByTitle(title);
          console.table(results);
          promptUser();
        });
        break;
      case '4':
        rl.question('Enter book ID to borrow: ', (id) => {
          markBookAsBorrowed(Number(id));
          promptUser();
        });
        break;
      case '5':
        rl.question('Enter book ID to return: ', (id) => {
          markBookAsReturned(Number(id));
          promptUser();
        });
        break;
      case '6':
        rl.question('Enter book ID to remove: ', (id) => {
          removeBookById(Number(id));
          promptUser();
        });
        break;
      case '7':
        viewAllBooks();
        promptUser();
        break;
      case '8':
        console.log('Exiting Library Management System. Goodbye!');
        rl.close();
        break;
      default:
        console.log('Invalid option. Please try again.');
        promptUser();
    }
  });
};

promptUser();
