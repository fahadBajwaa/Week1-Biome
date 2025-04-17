// 🟢 Utility Types – Partial, Pick, Omit, etc. 🟢
var person1 = {
    name: "Fahad",
    // age and address are optional
};
console.log(person1);
var person2 = {
    name: "Fahad",
    age: 23,
    // address and email are omitted
};
console.log(person2);
var person3 = {
    name: "Fahad",
    age: 23,
    email: "fahad@example.com",
    // address is omitted
};
console.log(person3);
var person4 = {
    name: "Fahad",
    age: 23,
    address: "123 Main St",
    email: "fahad@example.com",
    // All properties must be provided
};
console.log(person4);
var person5 = {
    name: "Fahad",
    age: 23,
    address: "123 Main St",
    email: "fahad@example.com",
};
// person5.name = "Ali"; // Error: Cannot assign to 'name' because it is a read-only property
console.log(person5);
var permissions = {
    admin: ["create", "read", "update", "delete"],
    user: ["read", "update"],
    guest: ["read"],
};
console.log(permissions);
// 10. ReturnType<T>: ​🟥
// Constructs a type consisting of the return type of function T
function getUser() {
    return {
        name: "Fahad",
        age: 23,
        address: "123 Main St",
        email: "fahad@example.com",
    };
}
// 11. Parameters<T>:
// Constructs a tuple type from the types used in the parameters of function T
function updateUser(name, age) {
    console.log("Updating user ".concat(name, " to age ").concat(age));
}
var args = ["Fahad", 24];
updateUser.apply(void 0, args);
