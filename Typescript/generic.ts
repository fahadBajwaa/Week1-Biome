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

function identity<T>(arg: T): T {
  return arg;
}

let result1 = identity<string>("Hello, Fahad!");
console.log(result1); // Output: "Hello, Fahad!"

let result2 = identity<number>(23);
console.log(result2); // Output: 23


// 2. Generic Function with Multiple Type Parameters: ​🟥

// A function that takes two arguments of potentially different types and returns them as a tuple.

function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

let result3 = pair<string, number>("Fahad", 23);
console.log(result3); // Output: ["Fahad", 23]


// 3. Generic Interface: ​🟥

// An interface that uses a generic type parameter.

interface Container<T> {
  value: T;
  getValue: () => T;
}

let stringContainer: Container<string> = {
  value: "Hello, Fahad!",
  getValue: function () {
    return this.value;
  },
};

console.log(stringContainer.getValue()); // Output: "Hello, Fahad!"


// 4. Generic Class: ​🟥

// A class that uses a generic type parameter.

class Box<T> {
  private contents: T;

  constructor(value: T) {
    this.contents = value;
  }

  getContents(): T {
    return this.contents;
  }
}

let numberBox = new Box<number>(23);
console.log(numberBox.getContents()); // Output: 23

// 5. Generic Constraints: ​🟥

// Restricting the types that can be used with a generic parameter.

interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(item: T): T {
  console.log(item.length);
  return item;
}

logLength("Fahad"); // Output: 5
logLength([1, 2, 3]); // Output: 3


// 6. Default Generic Type: ​🟥

// Providing a default type for a generic parameter.

function greet<T = string>(name: T): string {
  return `Hello, ${name}!`;
}

console.log(greet("Fahad")); // Output: "Hello, Fahad!"
console.log(greet(23)); // Output: "Hello, 23!"


// 7. Generic Type Alias: ​🟥

// Creating a generic type alias for a function.

type MyTransformer<T> = (input: T) => T;

let toUpperCase: MyTransformer<string> = (input) => input.toUpperCase();
console.log(toUpperCase("fahad")); // Output: "FAHAD"


// 8. Generic with Union Types: ​🟥

// Using generics with union types to allow multiple types.

function combine<T extends string | number>(a: T, b: T): string {
  return `${a}${b}`;
}

console.log(combine("Fahad", "23")); // Output: "Fahad23"
console.log(combine(20, 5)); // Output: "205"


// 9. Generic with Keyof Constraint: ​🟥

// Ensuring that the key exists on the object.

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

let person = { name: "Fahad", age: 23 };
console.log(getProperty(person, "name")); // Output: "Fahad"
console.log(getProperty(person, "age")); // Output: 23
