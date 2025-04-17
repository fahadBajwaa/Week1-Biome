// 🟢 Enums – Define Constant Values 🟢

// Enums allows to define a set of named constants.
// They can be numeric or string-based.


// Numeric Enums: Default behavior; members are auto-incremented numbers starting from 0.​
// String Enums: Each member must be explicitly assigned a string value.​
// Heterogeneous Enums: Mix of string and numeric members; generally discouraged due to complexity.​
// Computed Members: Enum members can be assigned values computed from expressions or function calls.​
// Reverse Mapping: Available only for numeric enums; allows accessing the name of an enum member from its value.​
// Enums in Functions and Interfaces: Useful for restricting values and enhancing code readability and type safety.​



// 1. Numeric Enums (Default Behavior): ​🟥

// By default, enums are numeric, starting from 0 and incrementing by 1.

enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}

let move: Direction = Direction.Up;
console.log(move); // Output: 0

// 2. Numeric Enums with Custom Starting Value: ​🟥

// We can set the starting value, and subsequent members will increment from that value.

enum StatusCode {
  Success = 200,
  NotFound,        // 201
  ServerError = 500,
  Unauthorized     // 501
}

console.log(StatusCode.Success);      // Output: 200
console.log(StatusCode.NotFound);     // Output: 201
console.log(StatusCode.ServerError);  // Output: 500
console.log(StatusCode.Unauthorized); // Output: 501


// 3. String Enums: ​🟥

// Each member must be initialized with a string literal.

enum DirectionStr {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

let moveStr: DirectionStr = DirectionStr.Left;
console.log(moveStr); // Output: "LEFT"


// 4. Heterogeneous Enums: ​🟥

// Enums can contain both string and numeric members, though it's not recommended.

enum MixedEnum {
  No = 0,
  Yes = "YES"
}

console.log(MixedEnum.No);  // Output: 0
console.log(MixedEnum.Yes); // Output: "YES"


// 5. Computed and Constant Members: ​🟥

// Enums can have computed members, such as expressions or function calls.

function getSomeValue(): number {
  return 10;
}

enum ComputedEnum {
  A = getSomeValue(),
  B = A * 2
}

console.log(ComputedEnum.A); // Output: 10
console.log(ComputedEnum.B); // Output: 20


// 6. Reverse Mapping (Only with Numeric Enums): ​🟥

// TypeScript provides reverse mapping for numeric enums. (name->num, num->name)

enum Weekday {
  Monday,
  Tuesday,
  Wednesday
}

//Behind the scenes:
// const Weekday = {
//   0: "Monday",
//   1: "Tuesday",
//   2: "Wednesday",
//   Monday: 0,
//   Tuesday: 1,
//   Wednesday: 2
// };


let dayName: string = Weekday[0]; // "Monday"  
let dayNumber: number = Weekday["Tuesday"]; // 1

console.log(dayName);   // Output: "Monday"
console.log(dayNumber); // Output: 1

console.log(Weekday.Tuesday); // Output: 1



// 7. Enums as Function Parameters: ​🟥

// Enums can be used to restrict function parameters to a set of predefined constants.

enum UserRole {
  Admin,
  User,
  Guest
}

function checkAccess(role: UserRole): void {
  if (role === UserRole.Admin) {
    console.log("Access granted.");
  } else {
    console.log("Access denied.");
  }
}

checkAccess(UserRole.Admin); // Output: "Access granted."
checkAccess(UserRole.Guest); // Output: "Access denied."


// 8. Enums in Interfaces: ​🟥

// Enums can be used as types within interfaces.

enum SubscriptionType {
  Free,
  Premium,
  Enterprise
}

interface User {
  name: string;
  age: number;
  subscription: SubscriptionType;
}

const user1: User = {
  name: "Fahad",
  age: 23,
  subscription: SubscriptionType.Premium
};

console.log(user1);
// Output: { name: 'Fahad', age: 23, subscription: 1 }
