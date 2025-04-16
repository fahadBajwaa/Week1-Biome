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

function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("Fahad")); // Output: "Hello, Fahad!"


// 2. Return Types: ​🟥

// Define the return type of a function for clarity and type safety.

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(10, 15)); // Output: 25


// 3. Optional Parameters: ​🟥

// Use '?' to denote parameters that are not required when calling the function.

function introduce(name: string, age?: number): string {
  return age !== undefined
    ? `Hi, I'm ${name}, and I'm ${age} years old.`
    : `Hi, I'm ${name}.`;
}

console.log(introduce("Fahad", 23)); // Output: "Hi, I'm Fahad, and I'm 23 years old."
console.log(introduce("Fahad"));     // Output: "Hi, I'm Fahad."


// 4. Default Parameters: ​🟥

// Assign default values to parameters to use when no argument is provided.

function welcome(name: string, greeting: string = "Welcome"): string {
  return `${greeting}, ${name}!`;
}

console.log(welcome("Fahad"));                 // Output: "Welcome, Fahad!"
console.log(welcome("Fahad", "Good morning")); // Output: "Good morning, Fahad!"


// 5. Rest Parameters: ​🟥

// Use rest parameters to handle functions with an indefinite number of arguments.

function sumAll(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15


// 6. Function Overloading: ​🟥

// Define multiple function signatures to handle different parameter types.

function format(value: number): string;
function format(value: string): string;
function format(value: number | string): string {
  return typeof value === "number"
    ? value.toFixed(2)
    : value.trim();
}

console.log(format(123.456));    // Output: "123.46"
console.log(format("  Fahad  ")); // Output: "Fahad"


// 7. Void Return Type: ​🟥

// Use 'void' to indicate that a function does not return a value.

function logMessage(message: string): void {
  console.log(`Log: ${message}`);
}

logMessage("This is a log message."); // Output: "Log: This is a log message."


// 8. Function with Object Parameter and Default Values: ​🟥

// Define functions that accept objects with optional properties and default values.

interface User {
  name: string;
  age?: number;
}

function displayUserInfo({ name, age = 18 }: User): string {
  return `User: ${name}, Age: ${age}`;
}

console.log(displayUserInfo({ name: "Fahad", age: 23 })); // Output: "User: Fahad, Age: 23"
console.log(displayUserInfo({ name: "Fahad" }));          // Output: "User: Fahad, Age: 18"
