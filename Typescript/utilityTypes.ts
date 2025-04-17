// 🟢 Utility Types – Partial, Pick, Omit, etc. 🟢

// TypeScript provides utility types to manipulate types in various ways.

// Define a base interface for a person

interface Person {
    name: string;
    age: number;
    address: string;
    email?: string; // Optional property
}


// Partial<T>: Makes all properties optional.
// Pick<T, K>: Selects specific properties.
// Omit<T, K>: Excludes specific properties.
// Required<T>: Makes all properties required.
// Readonly<T>: Makes all properties read-only.
// Record<K, T>: Creates a type with specified keys and values.
// Exclude<T, U>: Excludes types from a union.
// Extract<T, U>: Extracts types from a union.
// NonNullable<T>: Removes null and undefined from a type.
// ReturnType<T>: Obtains the return type of a function.
// Parameters<T>: Obtains the parameter types of a function


// 1. Partial<T>: ​🟥

// Makes all properties in T optional

type PartialPerson = Partial<Person>;

const person1: PartialPerson = {
    name: "Fahad",
    // age and address are optional
};

console.log(person1);


// 2. Pick<T, K>: ​🟥

// Creates a type by picking the set of properties K from T

type NameAndAge = Pick<Person, "name" | "age">;

const person2: NameAndAge = {
    name: "Fahad",
    age: 23,
    // address and email are omitted
};

console.log(person2);


// 3. Omit<T, K> : ​🟥

// Constructs a type by picking all properties from T and then removing K

type PersonWithoutAddress = Omit<Person, "address">;

const person3: PersonWithoutAddress = {
    name: "Fahad",
    age: 23,
    email: "fahad@example.com",
    // address is omitted
};

console.log(person3);


// 4. Required<T>: ​🟥

// Makes all properties in T required

type CompletePerson = Required<Person>;

const person4: CompletePerson = {
    name: "Fahad",
    age: 23,
    address: "123 Main St",
    email: "fahad@example.com",
    // All properties must be provided
};

console.log(person4);


// 5. Readonly<T>: ​🟥

// Makes all properties in T read-only

type ReadonlyPerson = Readonly<Person>;

const person5: ReadonlyPerson = {
    name: "Fahad",
    age: 23,
    address: "123 Main St",
    email: "fahad@example.com",
};

// person5.name = "Ali"; // Error: Cannot assign to 'name' because it is a read-only property

console.log(person5);


// 6. Record<K, T> : ​🟥

// Constructs an object type whose property keys are K and property values are T

type Role = "admin" | "user" | "guest";
type RolePermissions = Record<Role, string[]>;

const permissions: RolePermissions = {
    admin: ["create", "read", "update", "delete"],
    user: ["read", "update"],
    guest: ["read"],
};

console.log(permissions);


// 7. Exclude<T, U> : ​🟥

// Constructs a type by excluding from T all properties that are assignable to U

type Status = "active" | "inactive" | "pending";
type NonPendingStatus = Exclude<Status, "pending">; // "active" | "inactive"


// 8. Extract<T, U> : ​🟥

// Constructs a type by extracting from T all properties that are assignable to U

type StringOrNumber = string | number | boolean;
type OnlyString = Extract<StringOrNumber, string>; // string


// 9. NonNullable<T>: ​🟥

// Constructs a type by excluding null and undefined from T

type NullableString = string | null | undefined;
type NonNullableString = NonNullable<NullableString>; // string


// 10. ReturnType<T>: ​🟥

// Constructs a type consisting of the return type of function T

function getUser(): Person {
    return {
        name: "Fahad",
        age: 23,
        address: "123 Main St",
        email: "fahad@example.com",
    };
}

type UserReturnType = ReturnType<typeof getUser>; // Person


// 11. Parameters<T>:

// Constructs a tuple type from the types used in the parameters of function T

function updateUser(name: string, age: number): void {
    console.log(`Updating user ${name} to age ${age}`);
}

type UpdateUserParams = Parameters<typeof updateUser>; // [string, number]

const args: UpdateUserParams = ["Fahad", 24];
updateUser(...args);
