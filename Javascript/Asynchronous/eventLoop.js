// Asynchronous Concepts 

// 🟢 Event Loop: Understanding how JavaScript handles asynchronous operations  🟢 

// Event Loop: 🟥

// Enables JavaScript to perform non-blocking, asynchronous operations despite being single-threaded.
// It manages the execution of multiple tasks, such as executing code, handling events, and processing asynchronous operations like API calls.​


// How Event Loop works? 🟥

// The event loop continuously monitors the "call stack" and the "task queues" ( callback queues) and manages the execution of multiple tasks in a non-blocking* manner.​

//  It checks if the "call stack" is empty. If it is, it first processes all tasks in the "micro-task queue" before moving on to the "macro-task queue". 
//  This ensures that micro-tasks are executed *BEFORE* the next macro-task.

// Call Stack: 🟢
// where JavaScript keeps track of function calls. When a function is called, it's added to the call stack. When the function completes, it's removed from the stack.​

// Task Queues:🟢
// Macro-task Queue: Includes tasks like setTimeout, setInterval, and I/O operations.
// Micro-task Queue: Includes tasks like Promises and queueMicrotask.


// Example: Understanding Execution Order

console.log('Start'); // executed immediately

setTimeout(() => {    // called with a delay of 0 milliseconds. Its callback is sent to the macro-task queue.
    console.log('Timeout');
}, 0);

Promise.resolve().then(() => {   // its callback is sent to the micro-task queue
    console.log('Promise');
});

console.log('End'); // executed immediately

// Output: Start End Promise Timeout


// Another Example:


Promise.resolve().then(() => console.log("Promise 1")); // High priority
setTimeout(() => { // Low priority
    console.log("timeout 1");
}, 0);
Promise.resolve().then(() => console.log("Promise 2"));
setTimeout(() => {
    console.log("timeout 2");
}, 0);

// Output: Promise 1    Promise 2    timeout 1     timeout 2
