
export const solidPrinciples = [
  {
    title: "Single Responsibility Principle",
    shortName: "SRP",
    description: 
      "A class should have only one reason to change, meaning it should have only one responsibility or job.",
    codeExample: 
`// Bad - Multiple responsibilities
class User {
  constructor(name) { this.name = name; }
  
  getName() { return this.name; }
  saveToDatabase() { /* save user to DB */ }
  sendEmail() { /* send email logic */ }
}

// Good - Single responsibility
class User {
  constructor(name) { this.name = name; }
  getName() { return this.name; }
}

class UserRepository {
  saveUser(user) { /* save user to DB */ }
}

class EmailService {
  sendEmail(user, message) { /* send email logic */ }
}`,
    designPatterns: [
      { 
        name: "Facade", 
        description: "Uses a facade to hide complex subsystems, letting each component focus on a single responsibility." 
      },
      { 
        name: "Observer", 
        description: "Separates the core object from observers that depend on it, promoting separation of concerns."
      }
    ]
  },
  {
    title: "Open/Closed Principle",
    shortName: "OCP",
    description: 
      "Software entities should be open for extension but closed for modification.",
    codeExample:
`// Bad - Not extensible
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class AreaCalculator {
  calculateArea(rectangle) {
    return rectangle.width * rectangle.height;
  }
  // Adding a new shape requires modifying this class
}

// Good - Open for extension
interface Shape {
  calculateArea(): number;
}

class Rectangle implements Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  
  calculateArea() {
    return this.width * this.height;
  }
}

class Circle implements Shape {
  constructor(radius) {
    this.radius = radius;
  }
  
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}`,
    designPatterns: [
      { 
        name: "Strategy", 
        description: "Defines a family of algorithms, each encapsulated, making them interchangeable within clients." 
      },
      { 
        name: "Template Method", 
        description: "Defines the skeleton of an algorithm, deferring some steps to subclasses without changing the algorithm's structure." 
      },
      { 
        name: "Decorator", 
        description: "Allows behavior to be added to individual objects without affecting other objects of the same class." 
      }
    ]
  },
  {
    title: "Liskov Substitution Principle",
    shortName: "LSP",
    description: 
      "Objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program.",
    codeExample: 
`// Violates LSP
class Bird {
  fly() {
    console.log("Flying high!");
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error("Cannot fly!"); // Breaks the contract
  }
}

// Follows LSP
interface Bird {
  move(): void;
}

class FlyingBird implements Bird {
  move() {
    this.fly();
  }
  
  fly() {
    console.log("Flying high!");
  }
}

class SwimmingBird implements Bird {
  move() {
    this.swim();
  }
  
  swim() {
    console.log("Swimming!");
  }
}`,
    designPatterns: [
      { 
        name: "Factory Method", 
        description: "Creates objects without specifying the exact class, focusing on the interface not implementation."
      },
      { 
        name: "Adapter", 
        description: "Allows classes with incompatible interfaces to work together through a middle-layer adapter."
      }
    ]
  },
  {
    title: "Interface Segregation Principle",
    shortName: "ISP",
    description: 
      "No client should be forced to depend on methods it does not use. Many specific interfaces are better than one general interface.",
    codeExample: 
`// Violates ISP
interface Worker {
  work(): void;
  eat(): void;
  sleep(): void;
}

// Human workers need all methods
class HumanWorker implements Worker {
  work() { /* work */ }
  eat() { /* eat */ }
  sleep() { /* sleep */ }
}

// Robot only needs work, but forced to implement others
class RobotWorker implements Worker {
  work() { /* work */ }
  eat() { throw new Error("Robots don't eat!"); }
  sleep() { throw new Error("Robots don't sleep!"); }
}

// Follows ISP
interface Workable {
  work(): void;
}

interface Eatable {
  eat(): void;
}

interface Sleepable {
  sleep(): void;
}

class HumanWorker implements Workable, Eatable, Sleepable {
  work() { /* work */ }
  eat() { /* eat */ }
  sleep() { /* sleep */ }
}

class RobotWorker implements Workable {
  work() { /* work */ }
}`,
    designPatterns: [
      { 
        name: "Adapter", 
        description: "Can help adapt large interfaces into smaller ones that clients require." 
      },
      { 
        name: "Facade", 
        description: "Provides a simplified interface to a complex subsystem." 
      }
    ]
  },
  {
    title: "Dependency Inversion Principle",
    shortName: "DIP",
    description: 
      "High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details, but details should depend on abstractions.",
    codeExample: 
`// Violates DIP
class LightBulb {
  turnOn() {
    console.log("Bulb turned on");
  }
  
  turnOff() {
    console.log("Bulb turned off");
  }
}

class Switch {
  constructor(bulb) {
    this.bulb = bulb; // Directly depends on LightBulb
  }
  
  operate() {
    // Some logic to determine on or off
    this.bulb.turnOn();
  }
}

// Follows DIP
interface Switchable {
  turnOn(): void;
  turnOff(): void;
}

class LightBulb implements Switchable {
  turnOn() {
    console.log("Bulb turned on");
  }
  
  turnOff() {
    console.log("Bulb turned off");
  }
}

class Fan implements Switchable {
  turnOn() {
    console.log("Fan turned on");
  }
  
  turnOff() {
    console.log("Fan turned off");
  }
}

class Switch {
  constructor(device: Switchable) {
    this.device = device; // Depends on abstraction
  }
  
  operate() {
    // Some logic to determine on or off
    this.device.turnOn();
  }
}`,
    designPatterns: [
      { 
        name: "Dependency Injection", 
        description: "A technique where one object supplies the dependencies of another object."
      },
      { 
        name: "Factory Method", 
        description: "Creates objects through a common factory interface without specifying concrete classes."
      },
      { 
        name: "Strategy", 
        description: "Defines a family of algorithms, encapsulating each one, and making them interchangeable."
      }
    ]
  }
];

export const relationshipMatrix = [
  {
    principle: "Single Responsibility (SRP)",
    patterns: {
      "Factory": false,
      "Strategy": false,
      "Decorator": false,
      "Observer": "Separates subject from observers",
      "Adapter": false,
      "Facade": "Hides complex subsystems",
      "Dependency Injection": false
    }
  },
  {
    principle: "Open/Closed (OCP)",
    patterns: {
      "Factory": "Creates objects without modifying factory",
      "Strategy": "Adds algorithms without changing context",
      "Decorator": "Adds behavior without changing class",
      "Observer": "Adds observers without modifying subject",
      "Adapter": "Adapts interface without changing client",
      "Facade": false,
      "Dependency Injection": false
    }
  },
  {
    principle: "Liskov Substitution (LSP)",
    patterns: {
      "Factory": "Creates objects that fulfill the same contract",
      "Strategy": "Ensures all strategies can be substituted",
      "Decorator": "Maintains the same interface",
      "Observer": false,
      "Adapter": "Ensures adapted interface works as expected",
      "Facade": false,
      "Dependency Injection": false
    }
  },
  {
    principle: "Interface Segregation (ISP)",
    patterns: {
      "Factory": false,
      "Strategy": "Defines specific interfaces for algorithms",
      "Decorator": false,
      "Observer": false,
      "Adapter": "Can adapt large interfaces to smaller ones",
      "Facade": "Simplifies complex interfaces",
      "Dependency Injection": false
    }
  },
  {
    principle: "Dependency Inversion (DIP)",
    patterns: {
      "Factory": "Depends on abstraction not concrete classes",
      "Strategy": "Context depends on strategy interface",
      "Decorator": false,
      "Observer": "Subject depends on observer interface",
      "Adapter": false,
      "Facade": false,
      "Dependency Injection": "Injects dependencies rather than creating them"
    }
  }
];
