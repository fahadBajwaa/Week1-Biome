// 🟢 TypeScript Basics: Types, Type Inference, and Type Aliases 🟢


// Explicit Types: Defining variable types explicitly ensures that variables hold only the intended type of data, reducing errors.​
// Type Inference: TypeScript can automatically determine the type of a variable based on its initial value, simplifying code while maintaining type safety.​
// Type Aliases: Creating custom type aliases allows for more readable and maintainable code, especially when dealing with complex types.​
// Union Types: Allows a variable to hold values of different specified types, providing flexibility while still enforcing type constraints.​
// Intersection Types: Combines multiple types into one, enabling the creation of objects that must satisfy multiple type requirements.​
// Function Types: Defining types for function parameters and return values ensures that functions are used correctly throughout the codebase.​
// Optional Properties: Properties that may or may not be present in an object, providing flexibility in object structures.​
// Readonly Properties: Properties that cannot be modified after the object is created, ensuring data integrity.​
// Tuple Types: Arrays with a fixed number of elements where each element can have a different type, useful for representing structured data.​
// Enum Types: Defines a set of named constants, making code more readable and less error-prone when dealing with a set of related values.



// 1. Explicit Types: ​🟥

// Defining variable types explicitly ensures type safety and clarity.

let myName: string = "Fahad";       // 'myName' is of type string
let age: number = 23;               // 'age' is of type number
let isActive: boolean = true;       // 'isActive' is of type boolean

console.log("Name:", myName);       // Output: Name: Fahad
console.log("Age:", age);           // Output: Age: 23
console.log("Active:", isActive);   // Output: Active: true


// 2. Type Inference: ​🟥

// TypeScript can infer types based on the assigned value.

let city = "Rawalpindi"; // TypeScript infers 'city' as string
// city = 100;            // Error: Type 'number' is not assignable to type 'string'
console.log("City:", city); // Output: City: Rawalpindi


// 3. Type Aliases: ​🟥

// Creating custom type aliases for complex or reusable types.

type User = {
  id: number;
  name: string;
};

let user1: User = { id: 1, name: "Fahad" };

console.log("User ID:", user1.id);     // Output: User ID: 1
console.log("User Name:", user1.name); // Output: User Name: Fahad


// 4. Union Types: ​🟥

// Variables that can hold more than one type.

type Status = "active" | "inactive";

let accountStatus: Status = "active";
// accountStatus = "pending"; // Error: Type '"pending"' is not assignable to type 'Status'
console.log("Account Status:", accountStatus); // Output: Account Status: active


// 5. Intersection Types: ​🟥

// Combining multiple types into one.

type ContactInfo = {
  email: string;
  phone: string;
};

type Employee = User & ContactInfo;

let employee1: Employee = {
  id: 2,
  name: "Fahad",
  email: "fahad@example.com",
  phone: "123-456-7890"
};

console.log("Employee:", employee1);


// 6. Function Types: ​🟥

// Defining types for function parameters and return values.

type GreetFunction = (name: string) => string;

const greet: GreetFunction = (name) => `Hello, ${name}!`;

console.log(greet("Fahad")); // Output: Hello, Fahad!


// 7. Optional Properties: ​🟥

// Properties that may or may not be present in an object.

type Product = {
  id: number;
  name: string;
  description?: string; // Optional property
};

let product1: Product = { id: 101, name: "Laptop" };
let product2: Product = { id: 102, name: "Smartphone", description: "Latest model" };

console.log("Product 1:", product1);
console.log("Product 2:", product2);


// 8. Readonly Properties: ​🟥

// Properties that cannot be modified after initialization.

type ImmutablePoint = {
  readonly x: number;
  readonly y: number;
};

let point: ImmutablePoint = { x: 10, y: 20 };
// point.x = 15; // Error: Cannot assign to 'x' because it is a read-only property
console.log("Point:", point);


// 9. Tuple Types: ​🟥

// Arrays with fixed number of elements and specific types.

let person: [string, number] = ["Fahad", 23];
console.log("Person Tuple:", person);


// 10. Enum Types: ​🟥

// Defining a set of named constants.

enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Up;
console.log("Move Direction:", move); // Output: Move Direction: 0
