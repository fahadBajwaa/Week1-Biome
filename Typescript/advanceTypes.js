// 🟢 Advanced Types in TypeScript 🟢
var moveDirection = "left"; // Valid assignment
moveDirection = "right"; // Valid assignment
// moveDirection = "up";               // Error: Type '"up"' is not assignable to type 'Direction'
// let ID: 1;
// ID = 2;
// 2. Union Types: ​🟥
// Union types allow a variable to hold more than one type.
function printId(id) {
    console.log("ID:", id);
}
printId("123"); // Output: ID: 123
printId(456); // Output: ID: 456
var employee = {
    name: "Fahad",
    employeeId: 123,
};
// 4. Type Guards: ​🟥
// Type guards are used to narrow down the type of a variable within a conditional block.
function printValue(value) {
    if (typeof value === "string") {
        console.log("String value:", value);
    }
    else {
        console.log("Number value:", value);
    }
}
printValue("Hello"); // Output: String value: Hello
printValue(100); // Output: Number value: 100
function getTrafficLightAction(light) {
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
function logValues(values) {
    values.forEach(function (value) {
        if (typeof value === "string") {
            console.log("String:", value);
        }
        else {
            console.log("Number:", value);
        }
    });
}
logValues(["Fahad", 23, "Developer", 2025]);
var fullEmployee = {
    name: "Fahad",
    employeeId: 456,
    email: "fahad@example.com",
    phone: "123-456-7890",
};
console.log("Full Employee:", fullEmployee);
function isAdmin(account) {
    return account.role === "admin";
}
function getAccountInfo(account) {
    if (isAdmin(account)) {
        console.log("Admin Permissions:", account.permissions);
    }
    else {
        console.log("User Subscription:", account.subscription);
    }
}
var adminAccount = { role: "admin", permissions: ["read", "write"] };
var userAccount = { role: "user", subscription: "premium" };
getAccountInfo(adminAccount); // Output: Admin Permissions: [ 'read', 'write' ]
getAccountInfo(userAccount); // Output: User Subscription: premium
