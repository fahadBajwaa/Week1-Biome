
// Example for "Named Exports":  🟥 ----------------------------------

// Importing named exports requires curly braces.

import { add, subtract } from './math.js';

console.log(add(2, 3));        // Output: 5
console.log(subtract(20, 13)); // Output: 7



// Example for "Default Exports":  🟥 ----------------------------------

// Importing a default export doesn't require curly braces.

import log from './logger.js';

log('Hello, World!'); // Output: Hello, World!



// Example for "Combined Exports":  🟥 ----------------------------------

import { PI } from './utils.js';
import greet from './utils.js';
// import mood from './utils.js';

console.log(PI);        // Output: 3.14
console.log(greet('Fahad'));     // Output: Hello, Fahad
// console.log(mood('happy'));   // Output: I am happy



