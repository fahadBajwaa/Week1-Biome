// 🟢 Generics – Reusable, Type-Safe Components 🟢
// Generics allow the creation of reusable components that can work with a variety of data types while maintaining type safety.
// Generic Functions: Functions that work with any data type while maintaining type safety.​
// Generic Interfaces and Classes: Structures that can handle various data types, promoting code reusability.​
// Generic Constraints: Restricting generics to certain types to ensure correct usage.​
// Default Generic Types: Providing default types for generics to simplify usage.​
// Generic Type Aliases: Creating reusable function types that can operate on various data types.​
// Generics with Union and Keyof: Enhancing flexibility while maintaining type safety.
// 1. Generic Function: ​🟥
// A generic function that returns the argument it receives.
function identity(arg) {
    return arg;
}
var result1 = identity("Hello, Fahad!");
console.log(result1); // Output: "Hello, Fahad!"
var result2 = identity(23);
console.log(result2); // Output: 23
// 2. Generic Function with Multiple Type Parameters: ​🟥
// A function that takes two arguments of potentially different types and returns them as a tuple.
function pair(first, second) {
    return [first, second];
}
var result3 = pair("Fahad", 23);
console.log(result3); // Output: ["Fahad", 23]
var stringContainer = {
    value: "Hello, Fahad!",
    getValue: function () {
        return this.value;
    },
};
console.log(stringContainer.getValue()); // Output: "Hello, Fahad!"
// 4. Generic Class: ​🟥
// A class that uses a generic type parameter.
var Box = /** @class */ (function () {
    function Box(value) {
        this.contents = value;
    }
    Box.prototype.getContents = function () {
        return this.contents;
    };
    return Box;
}());
var numberBox = new Box(23);
console.log(numberBox.getContents()); // Output: 23
function logLength(item) {
    console.log(item.length);
    return item;
}
logLength("Fahad"); // Output: 5
logLength([1, 2, 3]); // Output: 3
// 6. Default Generic Type: ​🟥
// Providing a default type for a generic parameter.
function greet(name) {
    return "Hello, ".concat(name, "!");
}
console.log(greet("Fahad")); // Output: "Hello, Fahad!"
console.log(greet(23)); // Output: "Hello, 23!"
var toUpperCase = function (input) { return input.toUpperCase(); };
console.log(toUpperCase("fahad")); // Output: "FAHAD"
// 8. Generic with Union Types: ​🟥
// Using generics with union types to allow multiple types.
function combine(a, b) {
    return "".concat(a).concat(b);
}
console.log(combine("Fahad", "23")); // Output: "Fahad23"
console.log(combine(20, 5)); // Output: "205"
// 9. Generic with Keyof Constraint: ​🟥
// Ensuring that the key exists on the object.
function getProperty(obj, key) {
    return obj[key];
}
var person = { name: "Fahad", age: 23 };
console.log(getProperty(person, "name")); // Output: "Fahad"
console.log(getProperty(person, "age")); // Output: 23
