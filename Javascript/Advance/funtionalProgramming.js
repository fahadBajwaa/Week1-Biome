// Advance Concepts 

// 🟢 Functional Programming: Higher-Order Functions, Currying, Function Composition  🟢 


// 1. Higher-Order Functions (HOF): 🟥  ------------------------------

// A higher-order function is a function that takes one or more functions as arguments, or returns a function as a result.

// Example:

function greet(name) {
    return `Hello, ${name}`;
}

function processUser(name, callback) {
    return callback(name);
}

console.log(processUser("Fahad", greet)); // Output: Hello, Fahad

// More common examples:

// map, filter, reduce are all higher-order functions.


const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]

// 2. Currying: 🟥  ------------------------------

// Currying is the process of transforming a function that takes multiple arguments into a series of functions that take one argument at a time.

// Example:

function multiply(a) {
    return function (b) {
        return a * b;
    };
}

const double = multiply(2);
console.log(double(5)); // Output: 10

// Modern ES6 Style:

const multiplyES6 = a => b => a * b;
console.log(multiplyES6(3)(4)); // 12


// 3.  Function Composition: 🟥 ------------------------------

// Function composition is combining multiple functions into one. The output of one function becomes the input of another.

// Example:

const add = x => x + 2;
const multiply = x => x * 3;

const composed = x => multiply(add(x)); // Compose manually

console.log(composed(5)); // (5 + 2) * 3 = 21


// Utility-style Composer:

const compose = (f, g) => x => f(g(x));

const add5 = x => x + 5;
const square = x => x * x;

const addThenSquare = compose(square, add5);

console.log(addThenSquare(2)); // (2 + 5)^2 = 49







