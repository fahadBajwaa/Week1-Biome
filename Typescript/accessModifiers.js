// 🟢 Demonstrating Access Modifiers in TypeScript 🟢
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1. PUBLIC (default): Accessible from anywhere: ​🟥
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name));
    };
    return Person;
}());
var person = new Person(" Fahad");
person.greet(); // Hello, my name is  Fahad
console.log(person.name); //  Fahad
// 2.  PRIVATE: Accessible only within the same class: ​🟥
var BankAccount = /** @class */ (function () {
    function BankAccount(accountId, initialAmount) {
        this.accountId = accountId;
        this.balance = initialAmount;
    }
    BankAccount.prototype.logTransaction = function (amount) {
        console.log("Transaction: ".concat(amount));
    };
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        this.logTransaction(amount);
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    BankAccount.prototype.getAccountId = function () {
        return this.accountId;
    };
    return BankAccount;
}());
var account = new BankAccount("ABC123", 1000);
// console.log(account.balance) // Not accessible
account.deposit(500);
console.log(account.getBalance()); // 1500
console.log(account.getAccountId()); // ABC123
//  console.log(account.balance); // Error
//  account.logTransaction(200); // Error
// 3. PROTECTED: Accessible within the class and its subclasses: ​🟥
var Vehicle = /** @class */ (function () {
    function Vehicle() {
        this.speed = 0;
    }
    Vehicle.prototype.accelerate = function () {
        this.speed += 10;
        console.log("Speed is now ".concat(this.speed));
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.turboBoost = function () {
        this.speed += 50; // Accessing protected property
        console.log("Turbo! Speed is now ".concat(this.speed));
    };
    return Car;
}(Vehicle));
var car = new Car();
car.accelerate(); // Speed is now 10
car.turboBoost(); // Turbo! Speed is now 60
//  console.log(car.speed); // Error
//  READONLY: Can be assigned only once
var Employee = /** @class */ (function () {
    function Employee(id) {
        this.id = id;
    }
    Employee.prototype.changeId = function (newId) {
        //  this.id = newId; // Error: Cannot assign to 'id' because it is a read-only property.
    };
    return Employee;
}());
var emp = new Employee(1);
console.log(emp.id); // 1
//  emp.id = 2; // Error
