// Javascript Fundamentals

// Conditional Statements: if, else, switch 

// If-else

const x = 5;

if (x > 0) {
    console.log("positive");
}
else if (x < 0) {
    console.log("negative");
}
else {
    console.log("zero");
}


// Switch

switch (x) {
    case 5:
        console.log("five");
        break;
    default:
        console.log("other");
}

// Ternary

const sign = x > 0 ? "true" : "false";
console.log(sign)
