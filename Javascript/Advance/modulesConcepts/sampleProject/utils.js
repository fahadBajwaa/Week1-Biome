// Combined Exports: 🟢

// We can mix both (named, default) in a single module.


// Example for "Combined Exports":  🟥

export const PI = 3.14;

export default function greet(name) {
    return `Hello, ${name}`;
}

// export default function mood(m) {  // error: Duplicate export of 'default'
//     return `I am ${m}`;
// }