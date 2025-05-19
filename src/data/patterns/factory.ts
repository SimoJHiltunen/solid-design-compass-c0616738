
export const factoryPattern = {
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
};
