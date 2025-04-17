// Advance Concepts 

// 🟢 JavaScript Performance: Optimizing your code for performance  🟢 


// 1. Avoid Unnecessary Loops:  🟥

// Minimize redundant iterations.

// ❌ Inefficient:
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        // Some operation
    }
}

// ✅ Optimized:
let len = arr.length;
for (let i = 0; i < len; i++) {
    // Fewer lookups
}


// 2. Use let and const Instead of var 🟥

// let and const provide block scoping and prevent memory leaks.

const name = 'Fahad'; // Safe & faster
let counter = 0;


// 3. Minimize DOM Manipulations 🟥

// Touch the DOM as little as possible.

// ❌ Bad:
for (let i = 0; i < 100; i++) {
    const item = document.createElement('div');
    item.textContent = i;
    document.body.appendChild(item); // 100 DOM updates
}

// ✅ Good:
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
    const item = document.createElement('div');
    item.textContent = i;
    fragment.appendChild(item);
}
document.body.appendChild(fragment); // 1 DOM update


// 4. Use Async/Await & Promises Wisely 🟥

// Avoid blocking operations.

async function loadData() {
    const res = await fetch('/data');
    const data = await res.json();
    console.log(data);
}


// 5. Use map, filter, reduce Efficiently 🟥

// They are faster and more readable than for loops in many cases.

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8]


// 6.. Avoid Global Variables 🟥

// They stay in memory longer and may conflict with other variables.


// 7. Memory Optimization 🟥

// Use objects and arrays efficiently. Free up memory when done.

let bigData = new Array(100000).fill('x');
bigData = null; // array is no longer needed, allowing the garbage collector to free up the memory during its next cycle.


// 8. Use requestAnimationFrame Instead of setInterval for Animations 🟥

// More efficient and smoother.

function animate() {
    // Update animation here
    requestAnimationFrame(animate); // Run on next frame
}
animate();


// 9. Lazy Loading 🟥

// Load data, images, or components only when needed.

//   <img src="image.jpg" loading="lazy">




// Some Tools for Performance Auditing

// Chrome DevTools → Performance tab
// Lighthouse → For web performance reports
// WebPageTest or PageSpeed Insights → Online tools

