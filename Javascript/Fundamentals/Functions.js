// Javascript Fundamentals

//  Functions: Function Declarations, Expressions, Arrow Functions 


//Declaration - Hoisted

// hoistedFunction () // no error
function hoistedFunction() {
    console.log("This function is Hoisted")
}
hoistedFunction()


// Expression - Not hoisted

// notHoisted() // Refrence Error
const notHoisted = function () {
    console.log("This function is not Hoisted")
}
notHoisted()


// Arrow Functions - Lexical this + Not Hoisted

// console.log(sum(5,3)) // Reference Error
const sum = (a, b) => a + b;
console.log(sum(5, 3))
