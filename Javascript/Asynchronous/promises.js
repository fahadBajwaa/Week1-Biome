// Asynchronous Concepts 

// 🟢 Promises: Basic understanding, chaining, error handling  🟢 


// A "promise" represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// 3 States of Promises: 🟥

// 1. Pending: Initial state, neither fulfilled nor rejected.
// 2. Fulfilled: Operation completed successfully.
// 3. Rejected: Operation failed.


// Basic creation and usage of Promise: 🟢

const myPromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Operation Successfull");
    }
    else {
        reject("Operation Failed")
    }
});


myPromise
    .then(result => console.log(result)) // if resolved (fulfilled), then it will give the result (execution of the .then() block)
    .catch(error => console.error(error)) // if rejected, then it will mention error here as a result. (execution of the .catch() block)


// Chaining Promises 🟢

// Allowing the sequential execution of asynchronous tasks. (ability to chain them)
// Each ".then()" returns a new Promise, enabling further chaining.

function fetchData() {   // fetching data asynchronously.

    return new Promise((resolve) => {
        setTimeout(() => resolve("Data fetched"), 1000);
    });
}

function processData(data) {    // processes the fetched data
    return new Promise((resolve) => {
        setTimeout(() => resolve(`${data} and processed`), 1000);
    });
}

function displayData(data) {  // displays the processed data
    console.log(data);
}

fetchData()
    .then(result => processData(result))
    .then(processedResult => displayData(processedResult))
    .catch(error => console.error(error));


// Error Handling in Promise Chains 🟢

// In Promise chains, errors can be caught using ".catch()". If any "Promise" in the chain is rejected*, the control jumps to the nearest ".catch()" handler.​

new Promise((resolve, reject) => {
    throw new Error("Something went wrong!");
})
    .then(result => console.log(result))
    .catch(error => console.error("Error caught: ", error.message))