// 🟢 Functions in TypeScript 🟢
// Parameter Types: Ensures that functions receive arguments of the expected type, enhancing type safety.​
// Return Types: Clearly defines what type of value a function returns, aiding in code readability and maintenance.​
// Optional Parameters: Allows functions to be called with fewer arguments, providing flexibility in function usage.​
// Default Parameters: Provides default values for parameters, reducing the need for additional checks within the function body.​
// Rest Parameters: Enables functions to accept an arbitrary number of arguments as an array, useful for operations like summing numbers.​
// Function Overloading: Allows a function to have multiple signatures, enabling different behaviors based on input types.​
// Void Return Type: Indicates that a function does not return any value, commonly used for functions that perform actions like logging.​
// Function with Object Parameter and Default Values: Demonstrates how to handle object parameters with optional properties and default values, providing flexibility and default behavior.
// 1. Parameter Types: ​🟥
// Specify the type of each parameter to ensure correct usage.
function greet(name) {
    return "Hello, ".concat(name, "!");
}
console.log(greet("Fahad")); // Output: "Hello, Fahad!"
// 2. Return Types: ​🟥
// Define the return type of a function for clarity and type safety.
function add(a, b) {
    return a + b;
}
console.log(add(10, 15)); // Output: 25
// 3. Optional Parameters: ​🟥
// Use '?' to denote parameters that are not required when calling the function.
function introduce(name, age) {
    return age !== undefined
        ? "Hi, I'm ".concat(name, ", and I'm ").concat(age, " years old.")
        : "Hi, I'm ".concat(name, ".");
}
console.log(introduce("Fahad", 23)); // Output: "Hi, I'm Fahad, and I'm 23 years old."
console.log(introduce("Fahad")); // Output: "Hi, I'm Fahad."
// 4. Default Parameters: ​🟥
// Assign default values to parameters to use when no argument is provided.
function welcome(name, greeting) {
    if (greeting === void 0) { greeting = "Welcome"; }
    return "".concat(greeting, ", ").concat(name, "!");
}
console.log(welcome("Fahad")); // Output: "Welcome, Fahad!"
console.log(welcome("Fahad", "Good morning")); // Output: "Good morning, Fahad!"
// 5. Rest Parameters: ​🟥
// Use rest parameters to handle functions with an indefinite number of arguments.
function sumAll() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, num) { return total + num; }, 0);
}
console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15
function format(value) {
    return typeof value === "number"
        ? value.toFixed(2) // Format number to 2 decimal places
        : value.trim(); // Remove whitespace from string
}
console.log(format(1223.456)); // Output: "123.46"
console.log(format("  Fahad  ")); // Output: "Fahad"
// 7. Void Return Type: ​🟥
// Use 'void' to indicate that a function does not return a value.
function logMessage(message) {
    console.log("Log: ".concat(message));
}
logMessage("This is a log message."); // Output: "Log: This is a log message."
function displayUserInfo(_a) {
    var name = _a.name, _b = _a.age, age = _b === void 0 ? 18 : _b;
    return "User: ".concat(name, ", Age: ").concat(age);
}
console.log(displayUserInfo({ name: "Fahad", age: 23 })); // Output: "User: Fahad, Age: 23"
console.log(displayUserInfo({ name: "Fahad" })); // Output: "User: Fahad, Age: 18"
