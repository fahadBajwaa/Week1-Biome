// Advance Concepts 

// 🟢 Classes and Inheritance: Creating classes, extending classes, super keyword  🟢 


class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

class Cat extends Animal {
    speak() {
        console.log(`${this.name} meows.`);
    }
}

const dog = new Dog("Tommy");
dog.speak(); //Output: Tommy Barks.
const cat = new Cat("Nimo");
cat.speak(); //Output: Nimo meows.


// Super Keyword:  🟥

// When a class extends another class, the super keyword is used to:​

// 1. Call the parent class's constructor: 
// This is done using super() within the child class's constructor. It ensures that the parent class is properly initialized before the child class adds its own properties.​

// 2. Access parent class methods: 
// Within methods of the child class, super.methodName() can be used to call methods defined in the parent class.​


class Animal2 {
    constructor(name) {
        this.name = name;
    }
    bio(age) { //class method
        this.age = age;
    }
}

class Dog2 extends Animal2 {
    constructor(name, age, breed) {
        super(name); // Calls the constructor of Animal, 
        super.bio(2);
        this.breed = breed;
    }
}

const myDog = new Dog2('Tommy', 'German');
console.log(myDog.name); // Output: Tommy
console.log(myDog.age); // Output: 2

