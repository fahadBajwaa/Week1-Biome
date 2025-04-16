// Intermediate Concepts 

// 🟢 Prototypes: Understanding JavaScript inheritance 🟢

// Every JavaScript object has an "internal link" to another object called its prototype. 
// When we try to access a property or method on an object, JavaScript first looks at the object itself. 
// If it doesn't find it there, it looks up the prototype chain until it either finds the property/method or reaches the end of the chain (i.e., null).​


// Example 1: Basic Prototypal Inheritance ​🟥

const animal = {
    eats: true,
    walk() {
        console.log("Animal Walks");
    }
};

const rabbit = {
    jumps: true,
    __proto__: animal // __proto__ link of rabbit with animal
}

console.log(rabbit.eats); //Output: true
rabbit.walk(); //Putput: Animal Walks


// Example 2: Constructor Functions and Prototypes ​🟥

// ---------------------------------------------------------------------------------------------------//

// We can add methods to constructor functions so that all instances share the same behavior.​

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log(`Hello, my name is ${this.name} and my age is ${this.age}`);
    };
}

const person2 = new Person("Fahad", 23);
person2.greet(); // Output: Hello, my name is Fahad and my age is 23 

// In this example, each Person instance has a greet method that introduces the person.​

// ---------------------------------------------------------------------------------------------------//



// We use Prototypes for Shared Methods.  🟢

// To avoid duplicating methods for each instance, you can add methods to the constructor's prototype.​

// function Person(name, age) {  // Person is a constructor function (template for creating multiple objects with similar properties and methods), name starts with Uppercase letters (distinguish them from regular functions).
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.greet = function () {
//     console.log(`Hello, my name is ${this.name} and my age is ${this.age}`);
// };

// const fahad = new Person("Fahad", 23); // instance is created with new Person()
// fahad.greet();



// Example 3: Inheritance with Constructor Functions ​🟥

function Animal(name) { // Defining the Animal Constructor
    this.name = name;
};

Animal.prototype.speak = function () { // Adding a Method to Animal.prototype
    console.log(`${this.name} makes noise`);
};

function Dog(name) {
    Animal.call(this, name); // Call the parent constructor, invoke the Animal constructor in the context of the new Dog instance, ensures that the name property is correctly assigned.​
};

Dog.prototype = Object.create(Animal.prototype); // sets up the prototype chain so that Dog instances inherit from Animal.prototype.​
Dog.prototype.constructor = Dog; // correct the constructor property, which would otherwise point to Animal due to the previous assignment.​

Dog.prototype.speak = function () { // Overriding the speak Method
    console.log(`${this.name} barks`);
};

// function Cat(name) {
//     Animal.call(this, name); 
// };

// Cat.prototype.speak = function () { // Overriding the speak Method
//     console.log(`${this.name} meows`);
// };

const dog = new Dog("Tommy")
dog.speak(); //Output: Tommy Barks


// Prototype Chain Visualization :  dog --> Dog.prototype --> Animal.prototype --> Object.prototype --> null


// const cat = new Cat("Nimo")
// cat.speak();


// Example 4: ES6 Classes 

class Animal2 {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog2 extends Animal2 {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog2 = new Dog("Tommy2");
dog2.speak(); //Output: Tommy2 Barks