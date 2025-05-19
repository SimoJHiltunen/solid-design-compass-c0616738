
export const dependencyInjectionPattern = {
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
};
