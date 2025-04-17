// Advance Concepts 

// 🟢 Design Patterns: Module, Singleton, Observer, and Factory patterns  🟢 


// ------------------ Module Pattern: 🟥 ------------------

// It encapsulate private data and expose public methods. (Uses: Encapsulation, avoiding global variables, maintaining clean code)

const CounterModule = (function () {  //IIFE , PascalCase (starting with a capital letter) -> Singleton (Single-instance) module, Single-Instance: Only one object is created and used throughout the entire app, Instead of creating a new object every time you need it, you reuse the same one.

    let count = 0; // private, is inside the IIFE’s scope, so no outside code can directly access or modify it.

    return {  // returns an object containing 2 functions

        increment: function () {
            count++;
            console.log(count);
        },
        reset: function () {
            count = 0;
            console.log("Reset to: ", count)
        }

    }
})();

// console.log(count);  // Error: count is not defined

//Only the functions returned from the IIFE have access to it (thanks to closures):

CounterModule.increment();  // Output: 1
CounterModule.increment();  // Output: 2
CounterModule.reset();  // Output: 0


// ------------------ Singleton Pattern: 🟥 ------------------

// Ensure that a class has only one instance and provide a global point of access to it.

const Singleton = (function () {
    let instance;

    function createInstance() {
        return { id: Math.random(), message: "I am the only instance!" };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();

console.log(obj1 === obj2); // true
console.log(obj1);
console.log(obj2);



// ------------------ Observer Pattern: 🟥 ------------------

// Allow multiple objects to observe or listen to changes in another object.

class Observable {   // class acts like a "news station" or subject.

    constructor() {
        this.observers = []; // array that holds all functions (observers) that want updates.
    }

    subscribe(fn) {
        this.observers.push(fn);  // Adds a function to the observer list.
    }

    unsubscribe(fn) {
        this.observers = this.observers.filter(obs => obs !== fn); // Removes the function from the observer list.
    }

    notify(data) {
        this.observers.forEach(fn => fn(data)); // Calls all subscribed functions with the provided data
    }
}

const news = new Observable();

function reader1(data) {
    console.log("Reader 1 got news:", data);
}

function reader2(data) {
    console.log("Reader 2 got news:", data);
}

news.subscribe(reader1);
news.subscribe(reader2);

news.notify("Breaking: JavaScript is awesome!");
// Reader 1 got news: Breaking: JavaScript is awesome!
// Reader 2 got news: Breaking: JavaScript is awesome!



// ------------------ Factory Pattern: 🟥 ------------------

// Create objects without exposing the instantiation logic to the client.

class Dog {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} says Woof!`);
    }
}

class Cat {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} says Meow!`);
    }
}

function AnimalFactory(type, name) {  // function that creates objects based on a given type
    switch (type) {
        case "dog":
            return new Dog(name);
        case "cat":
            return new Cat(name);
        default:
            throw new Error("Unknown animal type");
    }
}

const pet1 = AnimalFactory("dog", "Tommy");
const pet2 = AnimalFactory("cat", "Nimo");

pet1.speak(); // Buddy says Woof!
pet2.speak(); // Kitty says Meow!
