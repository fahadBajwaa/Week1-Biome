// Advance Concepts 

// 🟢 Memory Management: Garbage Collection, References, and Closures  🟢 


// 1. Garbage Collection (GC): 🟥

// JavaScript automatically allocates memory when variables/objects are created and frees it up when they're no longer accessible. This cleanup is done by the Garbage Collector.

//  GC Basics:
//  JavaScript uses a technique called mark-and-sweep:
// It "marks" values that are still accessible.
// It "sweeps" (deletes) those that are not.

let user = {
    name: "Fahad"
};
console.log(user);
user = null; // The object is no longer referenced and will be cleaned up by GC
console.log(user);


// 2. References and Memory Leaks:  🟥

// Memory leaks happen when objects are kept in memory unnecessarily (e.g., due to still having references).

// This is not a good approach:
let cache = {};

function rememberData(key, value) {
    cache[key] = value; // references are stored and never cleared
    console.log(cache[key])
}
rememberData("user1", { name: "Fahad" });


// This is a good approach:
// let cache = {};

// function rememberData(key, value) {
//     cache[key] = value;

//     console.log("Data cached:", cache[key]);

//     setTimeout(() => {
//         delete cache[key]; // remove reference after use
//         console.log(`Data for ${key} deleted:`, cache[key]); // should be undefined
//     }, 5000);
// }

// rememberData("user1", { name: "Fahad" });


// 3. Closures and Memory: 🟥

// Closures keep a reference to the outer function’s variables even after the outer function has finished executing. This is powerful—but can also lead to unintended memory retention.

function createCounter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}

const counter = createCounter();
counter(); // Output: 1
counter(); // Output: 2
