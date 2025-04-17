//       ----------------------------------------------------------------------------🟡⬇️ Previous Code Review (Task Improvements)  ⬇️🟡----------------------------------------------------------------------------


// -----------🟢 There are 2 ways to increment id. 🟢-------------

// 1) ​🟥

let id = 1; // global scope

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

// 2) ​🟥 


// const getNextId = (() => {  // getNextId is a function that "remembers" its own `id` variable
//     let id = 1;            // this lives in the closure
//     return () => id++;     // each call returns old id, then increments
// })();

// const addBook = (title, author) => {
//     const book = {
//         id: getNextId(),    
//         title,
//         author,
//         isAvailable: true
//     };
//     library.push(book);
//     console.log(`Book added: "${book.title}" (ID: ${book.id})`);
// };


// -----------🟢 This way there is NO increment to id. 🟢-------------


// const addBook = (title, author) => {
//     let id = 1; 

//     const book = {
//         id: id++,
//         title,
//         author,
//         isAvailable: true
//     };
//     library.push(book);
//     console.log(`Book added: "${book.title}" (ID: ${book.id})`);
// };


// const addBook = (title, author) => {
//     let id = 1; 
//     id = id++; 

//     const book = {
//         id: id++,
//         title,
//         author,
//         isAvailable: true
//     };
//     library.push(book);
//     console.log(`Book added: "${book.title}" (ID: ${book.id})`);
// };



//     ----------------------------------------------------------------------------🟡⬇️  Further Concepts  ⬇️🟡----------------------------------------------------------------------------



//                                                               ------------ 🟢 Postfix Operator 🟢-------------------

let x = 3;
const y = x++;

// After this: x === 4, y === 3 (the old value of x)
console.log(x, y)

// Conclusion: We use postfix when we need the old value in an expression, but still want the variable to go up by one afterward.



//                                                                ------------🟢 Prefix Operator 🟢-------------------

let a = 3;
const b = ++a;
// After this: a === 4, b === 4 (immediate increment)
console.log(a, b)

// Conclusion: We use prefix when we want to both increment and use the incremented value immediately.



//                                              -----------------🟢 Differences between const, let, and var for lists and objects 🟢-----------------



// Use "const" When we want to prevent reassignment of the variable, but still allow modification of the object's or array's contents.​🟥

const colors = ['red', 'green'];
colors.push('blue');
console.log(colors); // Output: ['red', 'green', 'blue']

//Attempting reassignment
// colors = ['yellow']; // Error: Assignment to constant variable



// We use "let" When we need to reassign the variable later in our code.​ 🟥

// let colors = ['red', 'green'];
// colors.push('blue');
// console.log(colors); // Output: ['red', 'green', 'blue']

// // Reassignment allowed
// colors = ['yellow'];
// console.log(colors); // Output: ['yellow']



// We avoid "var" due to its function-scoped nature and hoisting behavior, which can lead to unexpected results 🟥
// var colors = ['red', 'green'];
// colors.push('blue');
// console.log(colors); // Output: ['red', 'green', 'blue']

// // Reassignment allowed
// colors = ['yellow'];
// console.log(colors); // Output: ['yellow']


//                                                     -----------------🟢 Re-Assignment vs Re-Declaration 🟢-----------------



// Re-Assignment: Updating the value of an existing variable 🟥

let f = 5; // Safer for Re-Assignment
f = 10;
console.log(f)

// const g = 5;
// g =10;
// console.log(g) // Error: TypeError

var g = 5;
g = 6;
console.log(g)

// Re-Declaration: Declaring a variable that has already been declared in the same scope 🟥

// let h = 7;
// let h = "fahad"; // Error: Cannot Re-declare,  Block-scoped variable 

// const i = 5;
// const i =9;  // Error: Cannot Re-declare,  Block-scoped variable 

var i = 9;
var i = "fahad";
console.log(i) // No Error: Can be Re-Declared, Can lead to unexpected behaviors due to hoisting (UNDEFINED) and lack of block scope.




//                                                     -----------------🟢 Scope of let, var, and const + hoisting 🟢-----------------



// We use "let" variable when we need to re-assign/update a value.​🟥

// console.log (variableLet) // Reference Error  -  Hoisted but no Initialized, are in Temporal Dead Zone
let variableLet = "I am Let variable"
console.log(variableLet)


let fahad = 22

if (fahad == "22") {
    let l = "let variable";
    console.log(l);
    var v = "var variable"
    console.log(v);
    const c = "const variable"
    console.log(c);
}
// console.log(l); // Reference Error - Out of scope because let is Block-scoped
console.log(v); // Output = var variable - Function-level scope
// console.log(c); // Reference Error - Out of scope because const is Block-scoped


// We use "const" When we need a variable that shouldn't be re-assigned/changed.​ 🟥

// console.log (variableConst) // Reference Error  -  Hoisted but no Initialized, are in Temporal Dead Zone
const variableConst = "I am Const variable"
console.log(variableConst)


// We avoid "var" due to its function-scoped nature and hoisting behavior, which can lead to unexpected results. 🟥

// console.log(variable) // Undefined  -  Hoisted (Initialized as Undefined)
var variable = "I am Var variable"
console.log(variable)



//                                                     -----------------🟢 Primitive vs Non-Primitive 🟢-----------------


// Feature     |  	Primitive            |   	Non-Primitive
// Type	       |    Immutable            |	    Mutable
//Stored as    |	Value	             |      Reference
//Examples     |	Number, String, etc. |	    Object, Array, Function
//Comparison   |	By value             |      By reference
//Memory       |	Stored in stack	     |      Stored in heap


// Primitive Data Types Examples: 🟥

let age = 22;
console.log(typeof (age)) // number

let myName = "fahad";
console.log(typeof (myName)) // string

let isActive = true;
console.log(typeof (isActive)) // boolean

let undef;
console.log(typeof (undef)) // undefined

let n = null;  // null shows the emptiness of the value in a object
console.log(typeof (n)) // object - legacy issue

let sym = Symbol("symb");
console.log(typeof (sym)) // symbol

let bigNum = 123456788n;
console.log(typeof (bigNum)) // bigint

//Even though primitive values are immutable, variables declared with "let" or "var" can be re-assigned to new values.


//  Non-Primitive (Reference) Data Types Examples: 🟥

let person = {
    name: "Fahad",
    age: 22
};
console.log(typeof (person)) // Object


let colorsExample = ["red", "green", "yellow", "blue"];
console.log(typeof (colorsExample)) // Object - Js has limited set of return values for typeof operator so arrays fall under object category of typeof.
console.log(Array.isArray(colorsExample)); // returns true - meaning it is an Array



function greet() {
    console.log("Hello");
}
console.log(typeof (greet)) // Function


//                                                     --------------------🟢 Mutable vs Immutable 🟢-----------------


// Mutable values can be changed after creation. Non-primitive data types like objects and arrays are mutable.  🟥 

// let user = {
//     name: "fahad",
//     age: 22,
//     profession: "Software Engineer"
// }
// user.age = 23;
// console.log(user) // output : {name: "fahad", age: 23, profession: "Software Engineer" } - age value is updated from 22 -> 23. Hence, object property can be updated. 



// Immutable values cannot be changed once created. All primitive data types in JavaScript are immutable.  🟥

let greeting = "Hi";
greeting[0] = "j"
console.log(greeting) // output : Hi


// For primitive, original value isn't changed instead we have to make a copy.

let count = 5;
let newCount = count + 5;

console.log(count)  // output: 5 - count value remains unchanged after the addition operation
console.log(newCount)   // output: 10 - copy/other variable with new value


//                           --------------------🟢 Comparison of filter, map, find, findIndex, splice, and slice — Provide examples for each 🟢-----------------


// filter(). 🟥
// Creates a new array with all elements that pass the test implemented by the provided function.​ It returns a new array with elements that satisfy the condition. 

// const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const evenNumbers = numbersArr.filter(num => num % 2 === 0);
// console.log(evenNumbers) // Output: [ 2, 4, 6, 8 ] 
// console.log(numbersArr)  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9] - Original Array remains same (is not mutated)

// map(). 🟥
// Creates a new array populated with the results of calling a provided function on every element. It returns a new array with transformed elements.

// const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const squared = numbersArr.map(num => num*num);
// console.log(squared) // Output: [1, 4, 9, 16, 25, 36, 49, 64, 81]
// console.log(numbersArr)  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9] - Original Array remains same (is not mutated)

// find(). 🟥
// It returns the value of the first element that satisfies the provided testing function/ condition. It returns first matching element or undefined if none match.

const user = [
    { id: 1, name: "waqas" }, { id: 2, name: "fahad" }
];
const findUser = user.find(u => u.id === 1);
console.log(findUser) // Output:  { id: 1, name: "waqas" }
console.log(user); // Output:  { id: 1, name: "waqas" }, { id: 2, name: "fahad" } - Original Array remains same (is not mutated)

// findIndex(). 🟥
// It returns the index of the first element that satisfies the provided testing function/ condition.​ It returns the index of the first matching element or -1 if none match.​

const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const index = numbersArr.findIndex(num => num === 8);
console.log(index) // Output: 7
console.log(numbersArr)  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9] - Original Array remains same (is not mutated)

// splice(). 🟥
// It changes the contents of an array by removing/replacing existing elements and/or adding new elements in place​.​ It returns an array containing the deleted elements​

// const fruits = ["Apple", "Banana", "Orange"];
// const replaced = fruits.splice(1, 1, "Cherry");
// console.log(replaced); // Output:  [ 'Banana' ]
// console.log(fruits); // Output: [ 'Apple', 'Cherry', 'Orange' ] - Original Array is mutated ("Banana" is replaced with "Cherry", on index 1)


// slice(). 🟥
// It returns a shallow copy of a portion of an array into a new array object.​ It returns a new array containing the extracted elements.

const fruits = ["Apple", "Banana", "Cherry", "Date"];
const citrus = fruits.slice(1, 3);
console.log(citrus); // [ 'Banana', 'Cherry' ]
console.log(fruits); // Output: [ 'Apple', 'Banana', 'Cherry', 'Date' ] - Original Array remains same (is not mutated)


//                                           ---------------🟢 Event Loop Concepts - MicroTask Queue & MacroTask Queue 🟢-----------------

Promise.resolve().then(() => console.log("Promise 1")); // High priority
setTimeout(() => { // Low priority
    console.log("timeout 1");
}, 0);
Promise.resolve().then(() => console.log("Promise 2"));
setTimeout(() => {
    console.log("timeout 2");
}, 0);








