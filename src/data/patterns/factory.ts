
export const factoryPattern = {
  title: "Factory Pattern",
  shortName: "Factory",
  description: 
    "Creates objects without specifying the exact class of object that will be created.",
  supportedLanguages: ["TypeScript", "PHP", "Python"],
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
  codeExamplePHP: 
`<?php
// Factory Pattern Example in PHP
interface Product {
    public function operation(): string;
}

class ConcreteProductA implements Product {
    public function operation(): string {
        return "Product A created";
    }
}

class ConcreteProductB implements Product {
    public function operation(): string {
        return "Product B created";
    }
}

abstract class Creator {
    abstract public function factoryMethod(): Product;
    
    public function someOperation(): string {
        $product = $this->factoryMethod();
        return $product->operation();
    }
}

class ConcreteCreatorA extends Creator {
    public function factoryMethod(): Product {
        return new ConcreteProductA();
    }
}

class ConcreteCreatorB extends Creator {
    public function factoryMethod(): Product {
        return new ConcreteProductB();
    }
}`,
  codeExamplePython: 
`# Factory Pattern Example in Python
from abc import ABC, abstractmethod

class Product(ABC):
    @abstractmethod
    def operation(self) -> str:
        pass

class ConcreteProductA(Product):
    def operation(self) -> str:
        return "Product A created"

class ConcreteProductB(Product):
    def operation(self) -> str:
        return "Product B created"

class Creator(ABC):
    @abstractmethod
    def factory_method(self) -> Product:
        pass
    
    def some_operation(self) -> str:
        product = self.factory_method()
        return product.operation()

class ConcreteCreatorA(Creator):
    def factory_method(self) -> Product:
        return ConcreteProductA()

class ConcreteCreatorB(Creator):
    def factory_method(self) -> Product:
        return ConcreteProductB()`,
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
};
