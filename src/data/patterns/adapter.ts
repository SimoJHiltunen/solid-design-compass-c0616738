
export const adapterPattern = {
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
    const result = this.adaptee.specificRequest();
    return \`Adapter: (TRANSLATED) ${result}\`;
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
};
