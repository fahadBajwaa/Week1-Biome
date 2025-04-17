// Advance Concepts 

// 🟢 class methods and properties  🟢 



// 1. Public Methods (Default) 🟥 -----------------

// Public methods and properties are accessible from anywhere — no special keyword is needed.

class Person {
    constructor(name) {
        this.name = name; // public
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const person = new Person("Fahad");
person.greet(); // Hello, my name is Fahad
console.log(person.name); // Fahad


// 2. Private Methods/Properties (ES2022+ with # syntax) 🟥 -----------------

// Private members are only accessible within the class using " # ".

class BankAccount {
    #balance = 0; // private property

    constructor(initialAmount) {
        this.#balance = initialAmount;
    }

    #logTransaction(amount) { // private method
        console.log(`Transaction: ${amount}`);
    }

    deposit(amount) {
        this.#balance += amount;
        this.#logTransaction(amount);
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // 1500

//  account.#balance or account.#logTransaction(); // SyntaxError


// 3. Protected (Not natively supported, but emulated via underscore _ or in TypeScript) 🟥 -----------------

// In JavaScript, there's no built-in protected, but developers use _ as a convention to indicate "protected" (i.e., should only be used internally or in subclasses).


class Vehicle {
    constructor() {
        this._speed = 0; // protected by convention
    }

    accelerate() {
        this._speed += 10;
        console.log(`Speed is now ${this._speed}`);
    }
}

class Car extends Vehicle {
    turboBoost() {
        this._speed += 50;
        console.log(`Turbo! Speed is now ${this._speed}`);
    }
}

const car = new Car();
car.accelerate(); // Speed is now 10
car.turboBoost(); // Turbo! Speed is now 60

// "_speed" is still accessible outside the class, but it's a signal that we shouldn’t touch it unless we're extending the class.

