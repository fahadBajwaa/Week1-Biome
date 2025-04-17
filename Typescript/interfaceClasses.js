// 🟢 Interfaces & Classes in TypeScript 🟢
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
// Creating objects that conform to the Person interface
var person1 = { name: "Fahad", age: 23 };
var person2 = { name: "Fahad", age: 23, email: "fahad@example.com" };
// 2. Classes: ​🟥
// Classes provide a blueprint for creating objects with specific properties and methods.
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.speak = function () {
        console.log("".concat(this.name, " makes a sound."));
    };
    return Animal;
}());
// Instantiating the Animal class
var dog = new Animal("Dog");
dog.speak(); // Output: "Dog makes a sound."
// 3. Inheritance: ​🟥
// Classes can extend other classes to inherit properties and methods.
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Overriding the speak method
    Cat.prototype.speak = function () {
        console.log("".concat(this.name, " meows."));
    };
    return Cat;
}(Animal));
// Instantiating the Cat class
var cat = new Cat("Nimo");
cat.speak(); // Output: "Nimo meows."
var Car = /** @class */ (function () {
    function Car(make, model) {
        this.make = make;
        this.model = model;
    }
    Car.prototype.start = function () {
        console.log("".concat(this.make, " ").concat(this.model, " is starting."));
    };
    return Car;
}());
// Instantiating the Car class
var myCar = new Car("Toyota", "Corolla");
myCar.start(); // Output: "Toyota Corolla is starting."
// Creating User objects with and without the optional email property
var user1 = { name: "Fahad", age: 23 };
var user2 = { name: "Fahad", age: 23, email: "fahad@example.com" };
// 6. Class Inheritance with Additional Properties: ​🟥
// Demonstrating inheritance where the subclass has additional properties.
var PersonClass = /** @class */ (function () {
    function PersonClass(name, age) {
        this.name = name;
        this.age = age;
    }
    PersonClass.prototype.introduce = function () {
        console.log("Hi, I'm ".concat(this.name, " and I'm ").concat(this.age, " years old."));
    };
    return PersonClass;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, jobTitle) {
        var _this = _super.call(this, name, age) || this; // Calling the constructor of the base class
        _this.jobTitle = jobTitle;
        return _this;
    }
    // Overriding the introduce method
    Employee.prototype.introduce = function () {
        console.log("Hi, I'm ".concat(this.name, ", a ").concat(this.jobTitle, ", and I'm ").concat(this.age, " years old."));
    };
    return Employee;
}(PersonClass));
// Instantiating the Employee class
var employee = new Employee("Fahad", 23, "Software Engineer");
employee.introduce(); // Output: "Hi, I'm Fahad, a Software Engineer, and I'm 23 years old."
