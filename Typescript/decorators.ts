// 🟢 Decorators – Metadata & Advanced Class Features 🟢

//  To use decorators in TypeScript, ensure that the experimentalDecorators option is enabled in tsconfig.json.​

// {
//   "compilerOptions": {
//     "target": "ES6",
//     "experimentalDecorators": true
//   }
// }


// Class Decorators: Modify or enhance class constructors.
// Method Decorators: Intercept and augment method behavior.
// Property Decorators: Add validation or transformation logic to properties.


// 1. Class Decorator: @sealed ​🟥

// This decorator seals the class constructor and its prototype, preventing any extensions or modifications.​

function sealed(constructor: Function): void {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  greet(): void {
    console.log(`Hello, ${this.name}`);
  }
}

const fahad = new Person("Fahad");
fahad.greet(); // Output: Hello, Fahad

// Attempting to add new properties will fail silently in non-strict mode
// or throw an error in strict mode
// (fahad as any).age = 23; // Error in strict mode

// The @sealed decorator ensures that the class and its prototype cannot be extended or modified, enhancing the integrity of the class structure.​


// 2. Method Decorator: @log ​🟥

// This decorator logs the method name and its arguments each time the method is invoked.​

// function log(
//   target: Object,
//   propertyKey: string,
//   descriptor: PropertyDescriptor
// ): PropertyDescriptor {
//   const originalMethod = descriptor.value;

//   descriptor.value = function (...args: any[]) {
//     console.log(`Method ${propertyKey} called with args:`, args);
//     return originalMethod.apply(this, args);
//   };

//   return descriptor;
// }

// class Calculator {
//   @log
//   add(a: number, b: number): number {
//     return a + b;
//   }
// }

// const calc = new Calculator();
// console.log("Result:", calc.add(5, 3)); // Logs method call and Output: Result: 8

// The @log decorator wraps the original method, allowing to inject additional behavior (like logging) before or after the method execution.​


// 3. Property Decorator: @minLength ​🟥

// This decorator enforces a minimum length constraint on string properties.​

// function minLength(length: number) {
//   return function (target: any, propertyKey: string): void {
//     let value: string;

//     const getter = function () {
//       return value;
//     };

//     const setter = function (newVal: string) {
//       if (newVal.length < length) {
//         throw new Error(
//           `The length of ${propertyKey} should be at least ${length} characters.`
//         );
//       }
//       value = newVal;
//     };

//     Object.defineProperty(target, propertyKey, {
//       get: getter,
//       set: setter,
//       enumerable: true,
//       configurable: true,
//     });
//   };
// }

// class User {
//   @minLength(3)
//   username: string;

//   constructor(username: string) {
//     this.username = username;
//   }
// }

// const user1 = new User("Fahad"); // Works fine
// const user2 = new User("Fa"); // Throws error: The length of username should be at least 3 characters.

// The @minLength decorator adds validation logic to the property, ensuring it meets the specified minimum length requirement.​


// 4. Method Decorator: @measureExecutionTime ​🟥

// This decorator measures and logs the execution time of the decorated method.​

// function measureExecutionTime(
//   target: Object,
//   propertyKey: string,
//   descriptor: PropertyDescriptor
// ): PropertyDescriptor {
//   const originalMethod = descriptor.value;

//   descriptor.value = function (...args: any[]) {
//     const start = performance.now();
//     const result = originalMethod.apply(this, args);
//     const end = performance.now();
//     console.log(
//       `Execution time for ${propertyKey}: ${(end - start).toFixed(2)} ms`
//     );
//     return result;
//   };

//   return descriptor;
// }

// class Processor {
//   @measureExecutionTime
//   processData(data: number[]): number[] {
//     // Simulate a time-consuming operation
//     return data.map((num) => num * 2);
//   }
// }

// const processor = new Processor();
// processor.processData([1, 2, 3, 4, 5]); // Logs execution time

// The @measureExecutionTime decorator is useful for performance monitoring, allowing to identify bottlenecks in the code.​


// 5. Class Decorator: @singleton ​🟥

// This decorator ensures that only one instance of the class exists throughout the application.​

function singleton<T extends { new(...args: any[]): {} }>(constructor: T) {
  let instance: any;

  return class extends constructor {
    constructor(...args: any[]) {
      if (!instance) {
        super(...args);
        instance = this;
      }
      return instance;
    }
  };
}

@singleton
class DatabaseConnection {
  connectionId: number;

  constructor() {
    this.connectionId = Math.random();
  }
}

const db1 = new DatabaseConnection();
const db2 = new DatabaseConnection();

console.log(db1.connectionId === db2.connectionId); // Output: true

// The @singleton decorator modifies the class constructor to return the same instance every time, implementing the singleton pattern.