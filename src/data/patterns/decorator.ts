
export const decoratorPattern = {
  title: "Decorator Pattern",
  shortName: "Decorator",
  description: 
    "Attaches additional responsibilities to objects dynamically without modifying their structure.",
  supportedLanguages: ["TypeScript", "PHP", "Python"],
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
  codeExamplePHP: 
`<?php
// Decorator Pattern Example in PHP
interface Component {
    public function operation(): string;
}

class ConcreteComponent implements Component {
    public function operation(): string {
        return "ConcreteComponent";
    }
}

abstract class Decorator implements Component {
    protected $component;
    
    public function __construct(Component $component) {
        $this->component = $component;
    }
    
    public function operation(): string {
        return $this->component->operation();
    }
}

class ConcreteDecoratorA extends Decorator {
    public function operation(): string {
        $result = parent::operation();
        return "ConcreteDecoratorA({$result})";
    }
}

class ConcreteDecoratorB extends Decorator {
    public function operation(): string {
        $result = parent::operation();
        return "ConcreteDecoratorB({$result})";
    }
}`,
  codeExamplePython: 
`# Decorator Pattern Example in Python
from abc import ABC, abstractmethod

class Component(ABC):
    @abstractmethod
    def operation(self) -> str:
        pass

class ConcreteComponent(Component):
    def operation(self) -> str:
        return "ConcreteComponent"

class Decorator(Component, ABC):
    def __init__(self, component: Component):
        self._component = component
    
    @abstractmethod
    def operation(self) -> str:
        return self._component.operation()

class ConcreteDecoratorA(Decorator):
    def operation(self) -> str:
        result = super().operation()
        return f"ConcreteDecoratorA({result})"

class ConcreteDecoratorB(Decorator):
    def operation(self) -> str:
        result = super().operation()
        return f"ConcreteDecoratorB({result})"`,
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
