
export const strategyPattern = {
  title: "Strategy Pattern",
  shortName: "Strategy",
  description: 
    "Defines a family of algorithms, encapsulates each one, and makes them interchangeable at runtime.",
  supportedLanguages: ["TypeScript", "PHP", "Python"],
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
  codeExamplePHP: 
`<?php
// Strategy Pattern Example in PHP
interface Strategy {
    public function doAlgorithm(array $data): array;
}

class ConcreteStrategyA implements Strategy {
    public function doAlgorithm(array $data): array {
        sort($data);
        return $data;
    }
}

class ConcreteStrategyB implements Strategy {
    public function doAlgorithm(array $data): array {
        return array_reverse($data);
    }
}

class Context {
    private $strategy;
    
    public function __construct(Strategy $strategy) {
        $this->strategy = $strategy;
    }
    
    public function setStrategy(Strategy $strategy): void {
        $this->strategy = $strategy;
    }
    
    public function executeStrategy(array $data): array {
        return $this->strategy->doAlgorithm($data);
    }
}`,
  codeExamplePython: 
`# Strategy Pattern Example in Python
from abc import ABC, abstractmethod
from typing import List

class Strategy(ABC):
    @abstractmethod
    def do_algorithm(self, data: List[str]) -> List[str]:
        pass

class ConcreteStrategyA(Strategy):
    def do_algorithm(self, data: List[str]) -> List[str]:
        return sorted(data)

class ConcreteStrategyB(Strategy):
    def do_algorithm(self, data: List[str]) -> List[str]:
        return list(reversed(data))

class Context:
    def __init__(self, strategy: Strategy):
        self._strategy = strategy
    
    def set_strategy(self, strategy: Strategy) -> None:
        self._strategy = strategy
    
    def execute_strategy(self, data: List[str]) -> List[str]:
        return self._strategy.do_algorithm(data)`,
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
