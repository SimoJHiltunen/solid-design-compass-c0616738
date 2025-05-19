
export const dependencyInjectionPattern = {
  title: "Dependency Injection",
  shortName: "DI",
  description: 
    "A technique where one object (or static method) supplies the dependencies of another object.",
  supportedLanguages: ["TypeScript", "PHP", "Python"],
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
  codeExamplePHP: 
`<?php
// Dependency Injection Example in PHP
interface Service {
    public function operate(): string;
}

class ConcreteService implements Service {
    public function operate(): string {
        return "Service operation";
    }
}

// Constructor injection
class Client {
    private $service;
    
    public function __construct(Service $service) {
        $this->service = $service; // Dependency is injected
    }
    
    public function doSomething(): string {
        return $this->service->operate();
    }
}

// Usage
$service = new ConcreteService();
$client = new Client($service);
$client->doSomething();`,
  codeExamplePython: 
`# Dependency Injection Example in Python
from abc import ABC, abstractmethod

class Service(ABC):
    @abstractmethod
    def operate(self) -> str:
        pass

class ConcreteService(Service):
    def operate(self) -> str:
        return "Service operation"

# Constructor injection
class Client:
    def __init__(self, service: Service):
        self.service = service  # Dependency is injected
        
    def do_something(self) -> str:
        return self.service.operate()

# Usage
service = ConcreteService()
client = Client(service)
client.do_something()`,
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
