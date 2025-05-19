
export const adapterPattern = {
  title: "Adapter Pattern",
  shortName: "Adapter",
  description: 
    "Allows objects with incompatible interfaces to collaborate by wrapping an object in an adapter to match another object's interface.",
  supportedLanguages: ["TypeScript", "PHP", "Python"],
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
    return \`Adapter: (TRANSLATED) \${result}\`;
  }
}

// Client code
function clientCode(target: Target) {
  return target.request();
}`,
  codeExamplePHP: 
`<?php
// Adapter Pattern Example in PHP
interface Target {
    public function request(): string;
}

class Adaptee {
    public function specificRequest(): string {
        return "Specific request from Adaptee";
    }
}

class Adapter implements Target {
    private $adaptee;
    
    public function __construct(Adaptee $adaptee) {
        $this->adaptee = $adaptee;
    }
    
    public function request(): string {
        $result = $this->adaptee->specificRequest();
        return "Adapter: (TRANSLATED) {$result}";
    }
}

// Client code
function clientCode(Target $target) {
    return $target->request();
}`,
  codeExamplePython: 
`# Adapter Pattern Example in Python
class Target:
    def request(self) -> str:
        pass

class Adaptee:
    def specific_request(self) -> str:
        return "Specific request from Adaptee"

class Adapter(Target):
    def __init__(self, adaptee: Adaptee):
        self.adaptee = adaptee
        
    def request(self) -> str:
        result = self.adaptee.specific_request()
        return f"Adapter: (TRANSLATED) {result}"

# Client code
def client_code(target: Target) -> str:
    return target.request()`,
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
