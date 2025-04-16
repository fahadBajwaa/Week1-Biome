// Intermediate Concepts 

// 🟢 Understanding Scope: Global vs Local Scope, Function Scope, Block Scope 🟢


var globalVaribale = 1;

function test(a) {
    var a = globalVaribale;
    console.log(a)
    var localVariable = "I am Local";
    console.log(localVariable)
    var b = 2;  // Function Scope

    if (b = 2) {
        let c = "I am Block-level Variable"
        console.log(c);
    }

}

test();

// Also done in revewFile.js