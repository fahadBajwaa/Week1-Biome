// Advance Concepts 

// 🟢 ES6 Features: Destructuring, Spread/Rest Operators, Default Parameters  🟢 

// ------------------ Destructuring: 🟥 ------------------

// Allows to "unpack" values from arrays and objects (properties) into "distinct values".

// 1. Object Destructuring:🟥

const person = { name: "Fahad", age: 23 };
const { name, age } = person; // Here, we just performed the Object Destructring
console.log(name); // Output: Fahad ,  it doesn't requires "person.name" here
console.log(age); // Output: 23, it doesn't requires "person.age" here

// console.log(person.name); 
// console.log(person.age); 

// 2. Array Destructuring:🟥

const colors = ['red', 'brown', 'green'];
const [firstColor, secondColor, thirdColor] = colors; // Here, we just performed the Array Destructring
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);

// console.log(colors[0]);


// 3. Nested Destructuring:🟥

const user = {
    id: 1,
    profile: {    // Nested Object, the properties are nested within a object.​
        username: "fahadBajwa",
        email: "fahadbajwa@gmail.com"
    }
};

const {
    profile: { username, email } // Nested Destructuring
} = user;

console.log(username);
console.log(email);

// Without Destructuring..
// console.log(user.profile.email);
// console.log(user['profile']['email']);



// ------------------ Spread Operators: 🟥 ------------------

// The "..." syntax serves two purposes: 
// 1. Spread Operator: Expands elemts of an iterable (like an array) into individual elements.  (Expands array elements into arguments)
// 2. Rest Operator:  Collect multiple elements into a single array.   (Collects remaining arguments into an array)

// 1. In Arrays (Concatenation): 🟥

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combined = [...array1, ...array2];
console.log(combined); // Output: [ 1, 2, 3, 4, 5, 6 ]

// 2. In Objects: 🟥

const obj1 = { a: 1 };
const obj2 = { b: 5 };
const mergedObjects = { ...obj1, ...obj2 };
console.log(mergedObjects); // Output: { a: 1, b: 5 }

// Object Cloning:
const object1 = { a: 1 };
const object2 = { ...object1 };
console.log(object2); // Output: { a: 1 }

// 3. Function Arguments: 🟥

function sum(a, b, c) {
    return a + b + c;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6

// console.log(sum(numbers)); // Output: 1,2,3undefinedundefined



// ------------------ Rest Operators: 🟥 ------------------

// Rest Operator:  Collect multiple elements into a single array. (Opposite of spread operator) 
// Performs Destructuring (Arrays, Objects)

// 1. Arrays Destructuring: 🟥

// const normalArray = [1,2,3,4,5];

const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // Output: 1
console.log(rest); // Output: [ 2, 3, 4, 5 ] , collected into a single array


// 2. Object Destructuring: 🟥

const { a, ...others } = { a: 1, b: 2, c: 3, d: 4 };
console.log(a);   // Output: 1
console.log(others); // Output: { b: 2, c: 3, d: 4 }

// 3. Funtion Paramenters: 🟥

// function sum(...numbers){
//     return numbers.reduce((total, num) => total + num);  // reduce(): transforming an array into a single cumulative value by applying a function to each element in the array.​
// }

function sum(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];          // current value of numbers[i] is added to the existing value of total, and the result is stored back in total.
        //   total = total + numbers[i]; 
    }
    return total;
}

console.log(sum(1, 2, 3)); // Output: 6



// ------------------ Default Parameters: 🟥 ------------------

// Default parameters allow "functions" to have default values for "parameters" if no value is provided or if "undefined"  is passed.

function greet(name = 'Guest') {
    console.log(`Hello, ${name}`);
}

// function greet(name){
//     console.log(`Hello, ${name}`);
// }

greet('Fahad'); // Output: Hello, Fahad
greet();        // Output: Hello, Guest