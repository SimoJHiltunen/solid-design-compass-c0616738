
export const designPatterns = [
  {
    title: "Factory Pattern",
    shortName: "Factory",
    description: 
      "Creates objects without specifying the exact class of object that will be created.",
    codeExample: 
`// Factory Pattern Example
interface Product {
  operation(): string;
}

class ConcreteProductA implements Product {
  operation(): string {
    return "Product A created";
  }
}

class ConcreteProductB implements Product {
  operation(): string {
    return "Product B created";
  }
}

abstract class Creator {
  abstract factoryMethod(): Product;
  
  someOperation(): string {
    const product = this.factoryMethod();
    return product.operation();
  }
}

class ConcreteCreatorA extends Creator {
  factoryMethod(): Product {
    return new ConcreteProductA();
  }
}

class ConcreteCreatorB extends Creator {
  factoryMethod(): Product {
    return new ConcreteProductB();
  }
}`,
    relatedSOLIDPrinciples: [
      { 
        name: "OCP", 
        description: "Allows adding new product types without modifying existing factory code" 
      },
      { 
        name: "DIP", 
        description: "Depends on product abstractions rather than concrete classes"
      }
    ]
  },
  {
    title: "Strategy Pattern",
    shortName: "Strategy",
    description: 
      "Defines a family of algorithms, encapsulates each one, and makes them interchangeable at runtime.",
    codeExample: 
`// Strategy Pattern Example
interface Strategy {
  doAlgorithm(data: string[]): string[];
}

class ConcreteStrategyA implements Strategy {
  doAlgorithm(data: string[]): string[] {
    return data.sort();
  }
}

class ConcreteStrategyB implements Strategy {
  doAlgorithm(data: string[]): string[] {
    return data.reverse();
  }
}

class Context {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  executeStrategy(data: string[]): string[] {
    return this.strategy.doAlgorithm(data);
  }
}`,
    relatedSOLIDPrinciples: [
      { 
        name: "OCP", 
        description: "Allows adding new strategies without modifying the context" 
      },
      { 
        name: "DIP", 
        description: "Context depends on strategy abstraction, not implementations"
      },
      { 
        name: "SRP", 
        description: "Each strategy has a single responsibility (algorithm)"
      }
    ]
  },
  {
    title: "Decorator Pattern",
    shortName: "Decorator",
    description: 
      "Attaches additional responsibilities to objects dynamically without modifying their structure.",
    codeExample: 
`// Decorator Pattern Example
interface Component {
  operation(): string;
}

class ConcreteComponent implements Component {
  operation(): string {
    return "ConcreteComponent";
  }
}

abstract class Decorator implements Component {
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  operation(): string {
    return this.component.operation();
  }
}

class ConcreteDecoratorA extends Decorator {
  operation(): string {
    // Fix: added null/undefined check before accessing operation method
    return \`ConcreteDecoratorA(${this.component?.operation() || ""})\`;
  }
}

class ConcreteDecoratorB extends Decorator {
  operation(): string {
    // Fix: added null/undefined check before accessing operation method
    return \`ConcreteDecoratorB(${this.component?.operation() || ""})\`;
  }
}`,
    relatedSOLIDPrinciples: [
      { 
        name: "OCP", 
        description: "Extends behavior without modifying original classes" 
      },
      { 
        name: "SRP", 
        description: "Each decorator has a single responsibility (feature)"
      }
    ]
  },
  {
    title: "Observer Pattern",
    shortName: "Observer",
    description: 
      "Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified.",
    codeExample: 
`// Observer Pattern Example
interface Observer {
  update(subject: Subject): void;
}

interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

class ConcreteSubject implements Subject {
  private state: number = 0;
  private observers: Observer[] = [];

  attach(observer: Observer): void {
    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    this.observers.splice(index, 1);
  }

  notify(): void {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  setState(state: number): void {
    this.state = state;
    this.notify();
  }

  getState(): number {
    return this.state;
  }
}

class ConcreteObserverA implements Observer {
  update(subject: Subject): void {
    console.log("Observer A updated");
  }
}`,
    relatedSOLIDPrinciples: [
      { 
        name: "SRP", 
        description: "Separates the observable object from the observers" 
      },
      { 
        name: "OCP", 
        description: "New observers can be added without changing subject"
      }
    ]
  },
  {
    title: "Adapter Pattern",
    shortName: "Adapter",
    description: 
      "Allows objects with incompatible interfaces to collaborate by wrapping an object in an adapter to match another object's interface.",
    codeExample: 
`// Adapter Pattern Example
interface Target {
  request(): string;
}

class Adaptee {
  specificRequest(): string {
    return "Specific request from Adaptee";
  }
}

class Adapter implements Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    this.adaptee = adaptee;
  }

  request(): string {
    // Fix: corrected variable name from specificResult to specRequest
    const specRequest = this.adaptee.specificRequest();
    return \`Adapter: (TRANSLATED) ${specRequest}\`;
  }
}

// Client code
function clientCode(target: Target) {
  return target.request();
}`,
    relatedSOLIDPrinciples: [
      { 
        name: "OCP", 
        description: "Adapts interfaces without modifying original code" 
      },
      { 
        name: "ISP", 
        description: "Helps adapt large interfaces into smaller, specific ones"
      },
      { 
        name: "LSP", 
        description: "Ensures adapted interface behaves as expected"
      }
    ]
  },
  {
    title: "Dependency Injection",
    shortName: "DI",
    description: 
      "A technique where one object (or static method) supplies the dependencies of another object.",
    codeExample: 
`// Dependency Injection Example
interface Service {
  operate(): string;
}

class ConcreteService implements Service {
  operate(): string {
    return "Service operation";
  }
}

// Constructor injection
class Client {
  private service: Service;

  constructor(service: Service) {
    this.service = service; // Dependency is injected
  }

  doSomething(): string {
    return this.service.operate();
  }
}

// Usage
const service = new ConcreteService();
const client = new Client(service);
client.doSomething();`,
    relatedSOLIDPrinciples: [
      { 
        name: "DIP", 
        description: "Relies on abstractions rather than concrete implementations" 
      },
      { 
        name: "SRP", 
        description: "Separates object creation from business logic"
      }
    ]
  }
];
