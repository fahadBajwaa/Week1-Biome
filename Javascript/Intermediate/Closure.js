// Intermediate Concepts 

// 🟢 Closures: What are closures? How they work in JavaScript 🟢

// Closure is not just a function its a function combined with its outer state or lexical environment. It requires more memory and processing power than a pure function.
// Closures are often used for data encapsulation, to prevent exposing/ leaking data where it's not needed.

// In JavaScript, a closure is a function that retains access to its lexical scope, even when the function is executed outside of that scope


// This is not a closure. It is a fully self-contained closed expression. ​🟥
function pureFun(a, b) {
    return a + b;
}
console.log(pureFun(2, 5)); // once called, it will get pushed on a call stack and stack memory will have a = 2, b = 5


// This is a closure.🟢
let b = 7;

function impureFun(a, b) {  // Function scope captures "b" value.
    return a + b;
}

console.log(pureFun(2, b)); //  Now, for the interpreter to call this function and also know the value of these free variables. It creates a closure to store them in a place in memory where they can be accessed later. That area of the memory is called "Heap".
// "Heap" can keep data in memory indefinitely then decide once you get rid of it later with the garbage collector




// How it works in js?

// We can create a closure by defining a outer function that contains the state and an inner function that operates on it.  The data here is self contained and not leaked out to surrounding environment.
function outer() {
    let state = "I am state"

    function inner() {  // The inner function has acces to the data defined in outer function 

        return `Hello ${state}`;
        let test = 10;
    }
    console.log(state);
    // console.log(test); // Error - //but outer function does not have access to the inner function.

    return inner;

}

console.log(outer());
console.log(outer()()); // Calls outer(), then immediately calls the returned inner()






// Many javascript APIs are call-back based, so we can use closures to create a function factory,

function alertFun(message) { //that takes an argument  

    return () => {
        console.log(`${message}`)  // then returns a brand new function
    }

}

const alertFriend = alertFun('hi junaid')  // which can be passed along to other functions that expect a callback.

alertFriend();


// Tricky Example: Relating closures and Variable type

// with VAR: ​🟥

for (var i = 0; i < 3; i++) {

    const log = () => {
        // debugger;
        console.log(i);
    }

    setTimeout(log, 100);
}

//Output: 3,3,3

// Also, with VAR: ​🟥

for (var i = 0; i < 3; i++) {

    const log = () => {
        // debugger;
        console.log(i);
    }
    console.log(log())
    // setTimeout(log, 100);
}

//Output: 0, undefined, 1, undefined, 2, undefined

// with let: ​🟥

for (let i = 0; i < 3; i++) {

    const log = () => {
        // debugger;
        console.log(i);
    }

    setTimeout(log, 100);
}

//Output: 0,1,2