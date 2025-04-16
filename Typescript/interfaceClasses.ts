// 🟢 Interfaces & Classes in TypeScript 🟢


// Interfaces: Define the structure of an object. The Person and User interfaces specify required and optional properties.​
// Classes: Provide a blueprint for creating objects. The Animal class has a method speak, which is overridden in the Cat subclass to provide specific behavior.​
// Inheritance: The Cat class extends the Animal class, inheriting its properties and methods, and overriding the speak method.​
// Implementing Interfaces: The Car class implements the Vehicle interface, ensuring it has the required properties and methods.​
// Optional Properties: The email property in the User interface is optional, allowing objects to omit this property.​
// Class Inheritance with Additional Properties: The Employee class extends the PersonClass, adding a new property jobTitle and overriding the introduce method to include this new property.​


// 1. Interfaces: ​🟥

// Interfaces define the structure that an object should adhere to.

interface Person {
    name: string;
    age: number;
    email?: string; // Optional property
}

// Creating objects that conform to the Person interface
const person1: Person = { name: "Fahad", age: 23 };
const person2: Person = { name: "Fahad", age: 23, email: "fahad@example.com" };


// 2. Classes: ​🟥

// Classes provide a blueprint for creating objects with specific properties and methods.

class Animal {
    constructor(public name: string) { }

    speak(): void {
        console.log(`${this.name} makes a sound.`);
    }
}

// Instantiating the Animal class
const dog = new Animal("Dog");
dog.speak(); // Output: "Dog makes a sound."


// 3. Inheritance: ​🟥

// Classes can extend other classes to inherit properties and methods.

class Cat extends Animal {
    // Overriding the speak method
    speak(): void {
        console.log(`${this.name} meows.`);
    }
}

// Instantiating the Cat class
const cat = new Cat("Nimo");
cat.speak(); // Output: "Nimo meows."


// 4. Implementing Interfaces in Classes: ​🟥

// Classes can implement interfaces to ensure they adhere to a specific structure.

interface Vehicle {
    make: string;
    model: string;
    start(): void;
}

class Car implements Vehicle {
    constructor(public make: string, public model: string) { }

    start(): void {
        console.log(`${this.make} ${this.model} is starting.`);
    }
}

// Instantiating the Car class
const myCar = new Car("Toyota", "Corolla");
myCar.start(); // Output: "Toyota Corolla is starting."


// 5. Interface with Optional Properties: ​🟥

// Interfaces can define optional properties using the '?' symbol.

interface User {
    name: string;
    age: number;
    email?: string; // Optional property
}

// Creating User objects with and without the optional email property
const user1: User = { name: "Fahad", age: 23 };
const user2: User = { name: "Fahad", age: 23, email: "fahad@example.com" };


// 6. Class Inheritance with Additional Properties: ​🟥

// Demonstrating inheritance where the subclass has additional properties.

class PersonClass {
    constructor(public name: string, public age: number) { }

    introduce(): void {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}

class Employee extends PersonClass {
    constructor(name: string, age: number, public jobTitle: string) {
        super(name, age); // Calling the constructor of the base class
    }

    // Overriding the introduce method
    introduce(): void {
        console.log(`Hi, I'm ${this.name}, a ${this.jobTitle}, and I'm ${this.age} years old.`);
    }
}

// Instantiating the Employee class
const employee = new Employee("Fahad", 23, "Software Engineer");
employee.introduce(); // Output: "Hi, I'm Fahad, a Software Engineer, and I'm 23 years old."
