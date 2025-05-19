
export const strategyPattern = {
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
};
