// Intermediate Concepts 

// 🟢 Error Handling: try-catch blocks 🟢

// try block: Contains code that might throw an error.  🟢
// catch block: Handles the error if one occurs in the try block.​ ​🟥



try {
    // Code that may throw an error
} catch (error) {
    // Code to handle the error
}


// Example 1: Handling a Reference Error ​🟥

//   let undefinedVariable = 1;
try {
    let result = undefinedVariable + 1;  // undefinedVariable is not defined
    console.log(result);
} catch (error) {
    console.error("Error: ", error.message);
}

// Output: undefinedVariable is not defined


// Example 2: Parsing JSON with Error Handling ​🟥

const jsonString = '{"name": "Fahad", "age": 23, "isStudent": false}';
// const myJsonString = '{"name": "Fahad", "age": 23, "isStudent": }';

try {
    const obj = JSON.parse(jsonString); // converting a json string into a js object
    // const obj = JSON.parse(myJsonString); 

    console.log(obj.name);
    // console.log(obj);

    // const newJsonString = JSON.stringify(obj);
    // console.log(newJsonString); 

} catch (error) {
    console.error("Invalid JSON: ", error.message);
}

// Output: Fahad


// Example 3: Using finally for Cleanup ​🟥

try {
    // Code that may throw an error
} catch (error) {
    console.error("Error: ", error.message);
} finally {
    console.log("This runs regardless of an error");
}


// Example 3: Nested try...catch Blocks ​🟥

try {
    try {
        throw new Error("Inner Error");
    } catch (innerError) {
        console.error("Caught Inner Error: ", innerError.message);
        throw new Error("Outer Error");
    }
} catch (outerError) {
    console.error("Caught Outer Error: ", outerError.message);
}

// try {
//     performOperation();
//   } catch (operationError) {
//     console.error("Operation failed:", operationError);
//     try {
//       rollbackOperation();
//     } catch (rollbackError) {
//       console.error("Rollback failed:", rollbackError);
//     }
//   }



function processData(data) {
    console.log()
    try {
        console.log("Outer try block: Starting data processing.");

        try {
            console.log("Inner try block: Validating data.");

            if (!data) {
                throw new Error("Data is missing.");
            }

            if (typeof data !== "string") {
                throw new TypeError("Data must be a string.");
            }

            console.log("Inner try block: Data is valid.");
        } catch (innerError) {
            console.warn("Inner catch block:", innerError.message);
            // Rethrow the error to be handled by the outer catch
            throw innerError;
        }

        console.log("Outer try block: Continuing with data processing.");

    } catch (outerError) {
        console.error("Outer catch block: An error occurred during data processing.");
        console.error("Error details:", outerError.message);
    } finally {
        console.log("Finally block: Data processing attempt completed.");
    }
}

// Test cases
//   processData("Valid data");   //  process without errors
processData(123);            //  trigger TypeError
//   processData(null);           //  trigger Error for missing data

