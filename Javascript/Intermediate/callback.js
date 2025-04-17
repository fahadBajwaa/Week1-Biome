// Intermediate Concepts 

// 🟢 Callback Functions: Introduction and how to use them  🟢

// A function passed as an argument to another function, which is then invoked inside the outer function to complete some kind of action.

// This pattern is fundamental in JavaScript, especially for handling asynchronous operations like API calls, event handling, and timers.​


// Example 1: Synchronous Callback 🟥

// callback function is executed immediately after another function finishes its execution.

function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Fahad", sayGoodbye);


// Example 2: Asynchronous Callback with setTimeout 🟥

function greet() {
    console.log("Greetings");
}

function sayName(name) {
    console.log(`Hello ${name}`);
}

setTimeout(greet, 2000);
sayName("Fahad Bajwa");


// Example 3: Using Callbacks with Array Methods 🟥

const number = [1, 2, 3, 4, 5];

const doubled = number.map(function (number) { // callback function inside map is applied to each element of the numbers array, resulting in a new array of doubled values.
    return number * 2;
})

console.log(doubled); // Output: [ 2, 4, 6, 8, 10 ]