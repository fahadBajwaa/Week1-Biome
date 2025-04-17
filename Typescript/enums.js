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
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right"; // 3
})(Direction || (Direction = {}));
var move = Direction.Up;
console.log(move); // Output: 0
// 2. Numeric Enums with Custom Starting Value: ​🟥
// We can set the starting value, and subsequent members will increment from that value.
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["NotFound"] = 201] = "NotFound";
    StatusCode[StatusCode["ServerError"] = 500] = "ServerError";
    StatusCode[StatusCode["Unauthorized"] = 501] = "Unauthorized"; // 501
})(StatusCode || (StatusCode = {}));
console.log(StatusCode.Success); // Output: 200
console.log(StatusCode.NotFound); // Output: 201
console.log(StatusCode.ServerError); // Output: 500
console.log(StatusCode.Unauthorized); // Output: 501
// 3. String Enums: ​🟥
// Each member must be initialized with a string literal.
var DirectionStr;
(function (DirectionStr) {
    DirectionStr["Up"] = "UP";
    DirectionStr["Down"] = "DOWN";
    DirectionStr["Left"] = "LEFT";
    DirectionStr["Right"] = "RIGHT";
})(DirectionStr || (DirectionStr = {}));
var moveStr = DirectionStr.Left;
console.log(moveStr); // Output: "LEFT"
// 4. Heterogeneous Enums: ​🟥
// Enums can contain both string and numeric members, though it's not recommended.
var MixedEnum;
(function (MixedEnum) {
    MixedEnum[MixedEnum["No"] = 0] = "No";
    MixedEnum["Yes"] = "YES";
})(MixedEnum || (MixedEnum = {}));
console.log(MixedEnum.No); // Output: 0
console.log(MixedEnum.Yes); // Output: "YES"
// 5. Computed and Constant Members: ​🟥
// Enums can have computed members, such as expressions or function calls.
function getSomeValue() {
    return 10;
}
var ComputedEnum;
(function (ComputedEnum) {
    ComputedEnum[ComputedEnum["A"] = getSomeValue()] = "A";
    ComputedEnum[ComputedEnum["B"] = ComputedEnum.A * 2] = "B";
})(ComputedEnum || (ComputedEnum = {}));
console.log(ComputedEnum.A); // Output: 10
console.log(ComputedEnum.B); // Output: 20
// 6. Reverse Mapping (Only with Numeric Enums): ​🟥
// TypeScript provides reverse mapping for numeric enums.
var Weekday;
(function (Weekday) {
    Weekday[Weekday["Monday"] = 0] = "Monday";
    Weekday[Weekday["Tuesday"] = 1] = "Tuesday";
    Weekday[Weekday["Wednesday"] = 2] = "Wednesday";
})(Weekday || (Weekday = {}));
var dayName = Weekday[0]; // "Monday"
var dayNumber = Weekday["Tuesday"]; // 1
console.log(dayName); // Output: "Monday"
console.log(dayNumber); // Output: 1
console.log(Weekday.Tuesday); // Output: 1
// 7. Enums as Function Parameters: ​🟥
// Enums can be used to restrict function parameters to a set of predefined constants.
var UserRole;
(function (UserRole) {
    UserRole[UserRole["Admin"] = 0] = "Admin";
    UserRole[UserRole["User"] = 1] = "User";
    UserRole[UserRole["Guest"] = 2] = "Guest";
})(UserRole || (UserRole = {}));
function checkAccess(role) {
    if (role === UserRole.Admin) {
        console.log("Access granted.");
    }
    else {
        console.log("Access denied.");
    }
}
checkAccess(UserRole.Admin); // Output: "Access granted."
checkAccess(UserRole.Guest); // Output: "Access denied."
// 8. Enums in Interfaces: ​🟥
// Enums can be used as types within interfaces.
var SubscriptionType;
(function (SubscriptionType) {
    SubscriptionType[SubscriptionType["Free"] = 0] = "Free";
    SubscriptionType[SubscriptionType["Premium"] = 1] = "Premium";
    SubscriptionType[SubscriptionType["Enterprise"] = 2] = "Enterprise";
})(SubscriptionType || (SubscriptionType = {}));
var user1 = {
    name: "Fahad",
    age: 23,
    subscription: SubscriptionType.Premium
};
console.log(user1);
// Output: { name: 'Fahad', age: 23, subscription: 1 }
