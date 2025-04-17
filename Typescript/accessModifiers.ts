// 🟢 Demonstrating Access Modifiers in TypeScript 🟢


// 1. PUBLIC (default): Accessible from anywhere: ​🟥

class Person {
    name: string; // public by default

    constructor(name: string) {
        this.name = name;
    }

    greet() { // public method
        console.log(`Hello, my name is ${this.name}`);
    }
}

const person = new Person(" Fahad");
person.greet(); // Hello, my name is  Fahad
console.log(person.name); //  Fahad


// 2.  PRIVATE: Accessible only within the same class: ​🟥

class BankAccount {
    private balance: number;
    readonly accountId: string; // readonly property

    constructor(accountId: string, initialAmount: number) {
        this.accountId = accountId;
        this.balance = initialAmount;
    }

    private logTransaction(amount: number) {
        console.log(`Transaction: ${amount}`);
    }

    deposit(amount: number) {
        this.balance += amount;
        this.logTransaction(amount);
    }

    getBalance(): number {
        return this.balance;
    }

    getAccountId(): string {
        return this.accountId;
    }
}
const account = new BankAccount("ABC123", 1000);
// console.log(account.balance) // Not accessible

account.deposit(500);
console.log(account.getBalance()); // 1500
console.log(account.getAccountId()); // ABC123
//  console.log(account.balance); // Error
//  account.logTransaction(200); // Error


// 3. PROTECTED: Accessible within the class and its subclasses: ​🟥

class Vehicle {
    protected speed: number;

    constructor() {
        this.speed = 0;
    }

    accelerate() {
        this.speed += 10;
        console.log(`Speed is now ${this.speed}`);
    }
}

class Car extends Vehicle {
    turboBoost() {
        this.speed += 50; // Accessing protected property
        console.log(`Turbo! Speed is now ${this.speed}`);
    }
}

const car = new Car();
car.accelerate(); // Speed is now 10
car.turboBoost(); // Turbo! Speed is now 60
//  console.log(car.speed); // Error

//  READONLY: Can be assigned only once
class Employee {
    readonly id: number;

    constructor(id: number) {
        this.id = id;
    }

    changeId(newId: number) {
        //  this.id = newId; // Error: Cannot assign to 'id' because it is a read-only property.
    }
}

const emp = new Employee(1);
console.log(emp.id); // 1
//  emp.id = 2; // Error
