// Asynchronous Concepts 

// 🟢 Callback Hell: What is callback hell and how to avoid it  🟢 - Pyramid of Doom (Deeply Nested Structures)


// Callback Hell in JavaScript refers to a situation where multiple nested callback functions make code difficult to read and maintain.
// This typically occurs when dealing with asynchronous operations that depend on the result of previous operations.


// Consider a scenario where we need to perform a series of asynchronous tasks, each depending on the result of the previous one. 
// Using callbacks, the code might look like this:

fetchData(function (data) {
    processData(data, function (processData) {
        saveData(processedData, function (response) {
            console.log("Data saved successfully!")
        });
    });
});

// As the number of dependent asynchronous operations increases, the nesting becomes deeper, making the code harder to read and maintain.



// How to avoid Callback Hell? 🟥


// 1. By Using Named Functions: ​🟢

// Instead of anonymous functions, we can use named functions to improve readability.

function handleData(data) {
    processedData(data, handleProcessedData);
}

function handleProcessedData(processedData) {
    saveData(processedData, handleSaveResponse);
}

function handleSaveResponse(response) {
    console.log("Data saved successfully!")
}

fetchData(handleData);

// 2. By Using Promises: ​🟢

// Promises alloww chaining asynchronous operations, reducing nesting. 
// I used chaining* concept here...
fetchData()
    .then(processData)
    .then(saveData)
    .then(() => {
        console.log("Data saved successfully!")
    })
    .catch(error => {
        console.error('An error occured:', error);
    });


// 3. By Using Async/Await: ​🟢

// "async/await" provides a cleaner syntax for handling asynchronous operations.

async function handleData() {
    try {
        const data = await fetchData();
        const processedData = await processData(data);
        await saveData(processedData);
        console.log("Data saved successfully!")
    } catch (error) {
        console.error('An error occured:', error);
    }
}


// 4. Modularization: ​🟢

// Breaking down code into smaller, reusable functions or modules. This practice enhances readability and maintainability.