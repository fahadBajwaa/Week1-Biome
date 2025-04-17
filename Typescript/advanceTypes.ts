// 🟢 Advanced Types in TypeScript 🟢


// Literal Types: By defining a variable with specific string values, it restrict its assignment to those exact values, enhancing type safety.​
// Union Types: Allow variables to accept multiple types, providing flexibility while maintaining type checking.​
// Intersection Types: Combine multiple types into one, ensuring that the resulting type has all the properties of the combined types.​
// Type Guards: Functions or expressions that perform runtime checks to ensure a variable is of a specific type, allowing for safe property access.


// 1. Literal Types: ​🟥

// Literal types allow us to specify exact values a variable can hold.

type Direction = "left" | "right";

let moveDirection: Direction = "left"; // Valid assignment
moveDirection = "right";               // Valid assignment
// moveDirection = "up";               // Error: Type '"up"' is not assignable to type 'Direction'

// let ID: 1;
// ID = 2;

// 2. Union Types: ​🟥

// Union types allow a variable to hold more than one type.

function printId(id: string | number): void {
    console.log("ID:", id);
}

printId("123"); // Output: ID: 123
printId(456);   // Output: ID: 456


// 3. Intersection Types: ​🟥

// Intersection types combine multiple types into one.

type Person = { name: string };
type Employee = { employeeId: number };

type EmployeePerson = Person & Employee; // Intersection type

let employee: EmployeePerson = {
    name: "Fahad",
    employeeId: 123,
};


// 4. Type Guards: ​🟥

// Type guards are used to narrow down the type of a variable within a conditional block.

function printValue(value: string | number): void {
    if (typeof value === "string") {
        console.log("String value:", value);
    } else {
        console.log("Number value:", value);
    }
}

printValue("Hello"); // Output: String value: Hello
printValue(100);     // Output: Number value: 100

// Additional Examples:


// Example 1: Literal Types with Function Parameters: ​🟥

type TrafficLight = "red" | "yellow" | "green";

function getTrafficLightAction(light: TrafficLight): string {
    switch (light) {
        case "red":
            return "Stop";
        case "yellow":
            return "Caution";
        case "green":
            return "Go";
        default:
            // The default case is unreachable due to the type constraint
            return "Invalid color";
    }
}

console.log(getTrafficLightAction("green")); // Output: Go
// console.log(getTrafficLightAction("")); 


// Example 2: Union Types with Arrays: ​🟥

function logValues(values: (string | number)[]): void {
    values.forEach((value) => {
        if (typeof value === "string") {
            console.log("String:", value);
        } else {
            console.log("Number:", value);
        }
    });
}

logValues(["Fahad", 23, "Developer", 2025]);
// Output:
// String: Fahad
// Number: 23
// String: Developer
// Number: 2025


// Example 3: Intersection Types with Multiple Interfaces: ​🟥

interface ContactInfo {
    email: string;
    phone: string;
}

type FullEmployee = Person & Employee & ContactInfo;

let fullEmployee: FullEmployee = {
    name: "Fahad",
    employeeId: 456,
    email: "fahad@example.com",
    phone: "123-456-7890",
};

console.log("Full Employee:", fullEmployee);


// Example 4: Custom Type Guard Function: ​🟥

type Admin = { role: "admin"; permissions: string[] };
type User = { role: "user"; subscription: string };

type Account = Admin | User; // Union Type

function isAdmin(account: Account): account is Admin {    // If this function returns true, then treat account as an Admin in that scope.
    return account.role === "admin";
}

function getAccountInfo(account: Account): void {
    if (isAdmin(account)) {
        console.log("Admin Permissions:", account.permissions);
    } else {
        console.log("User Subscription:", account.subscription);
        console.log("My Subscription:", account.subscription);

    }
}

const adminAccount: Account = { role: "admin", permissions: ["read", "write"] };
const userAccount: Account = { role: "user", subscription: "Enterprise" };

getAccountInfo(adminAccount); // Output: Admin Permissions: [ 'read', 'write' ]
getAccountInfo(userAccount);  // Output: User Subscription: premium
