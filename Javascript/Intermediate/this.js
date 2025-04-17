// Intermediate Concepts 

// 🟢 This Keyword: How 'this' works in different contexts 🟢

// "this" keyword refers to the object that is executing the current function. Its value varies depending on how and where the function is invoked.


// Global Context: ​🟥

// In the global scope, "this" refers to the "global object".​

console.log(this); // Output: {}


// Inside a Regular Function: ​🟥

// When a regular function is invoked, "this" behaves differently based on strict mode.

// Non-strict mode: "this" refers to the global object.
// Strict mode: "this" is undefined.

function showThis() {
    "use strict";
    console.log(this);
}

showThis(); // Output: undefined


// As a Method of an Object ​🟥

// When a function is called as a method of an object, "this" refers to the object the method is called on.

const person = {
    name: "Fahad",
    greet() {
        console.log(`Hello, I am ${this.name}`)
    }
};

person.greet(); // Output: Hello, I am Fahad


// Inside Constructor Functions ​🟥

// When using constructor functions with the "new" keyword, "this" refers to the newly created object.​

function Person(name) {
    this.name = name;
}
// console.log(this.name) // Output: undefined
const newPerson = new Person("Fahad");
console.log(newPerson.name) // Output: Fahad


// Inside Arrow Functions ​🟥

const person3 = {
    name: "Bajwa",
    greet: () => {
        console.log(`Hello, I am ${this.name}`)
    }
};

person3.greet(); // Output: Hello, I am undefined.