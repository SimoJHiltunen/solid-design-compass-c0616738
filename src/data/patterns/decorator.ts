
export const decoratorPattern = {
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
    const result = super.operation();
    return \`ConcreteDecoratorA(\${result})\`;
  }
}

class ConcreteDecoratorB extends Decorator {
  operation(): string {
    const result = super.operation();
    return \`ConcreteDecoratorB(\${result})\`;
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
};
