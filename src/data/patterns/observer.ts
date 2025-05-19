
export const observerPattern = {
  title: "Observer Pattern",
  shortName: "Observer",
  description: 
    "Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified.",
  supportedLanguages: ["TypeScript", "PHP", "Python"],
  codeExample: 
`// Observer Pattern Example
interface Observer {
  update(subject: Subject): void;
}

interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

class ConcreteSubject implements Subject {
  private state: number = 0;
  private observers: Observer[] = [];

  attach(observer: Observer): void {
    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    this.observers.splice(index, 1);
  }

  notify(): void {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  setState(state: number): void {
    this.state = state;
    this.notify();
  }

  getState(): number {
    return this.state;
  }
}

class ConcreteObserverA implements Observer {
  update(subject: Subject): void {
    console.log("Observer A updated");
  }
}`,
  codeExamplePHP: 
`<?php
// Observer Pattern Example in PHP
interface Observer {
    public function update(Subject $subject): void;
}

interface Subject {
    public function attach(Observer $observer): void;
    public function detach(Observer $observer): void;
    public function notify(): void;
}

class ConcreteSubject implements Subject {
    private $state = 0;
    private $observers = [];
    
    public function attach(Observer $observer): void {
        $this->observers[] = $observer;
    }
    
    public function detach(Observer $observer): void {
        $index = array_search($observer, $this->observers, true);
        if ($index !== false) {
            unset($this->observers[$index]);
        }
    }
    
    public function notify(): void {
        foreach ($this->observers as $observer) {
            $observer->update($this);
        }
    }
    
    public function setState(int $state): void {
        $this->state = $state;
        $this->notify();
    }
    
    public function getState(): int {
        return $this->state;
    }
}

class ConcreteObserverA implements Observer {
    public function update(Subject $subject): void {
        echo "Observer A updated";
    }
}`,
  codeExamplePython: 
`# Observer Pattern Example in Python
from abc import ABC, abstractmethod
from typing import List

class Observer(ABC):
    @abstractmethod
    def update(self, subject: 'Subject') -> None:
        pass

class Subject(ABC):
    @abstractmethod
    def attach(self, observer: Observer) -> None:
        pass
    
    @abstractmethod
    def detach(self, observer: Observer) -> None:
        pass
    
    @abstractmethod
    def notify(self) -> None:
        pass

class ConcreteSubject(Subject):
    def __init__(self):
        self._state = 0
        self._observers: List[Observer] = []
    
    def attach(self, observer: Observer) -> None:
        self._observers.append(observer)
    
    def detach(self, observer: Observer) -> None:
        self._observers.remove(observer)
    
    def notify(self) -> None:
        for observer in self._observers:
            observer.update(self)
    
    def set_state(self, state: int) -> None:
        self._state = state
        self.notify()
    
    def get_state(self) -> int:
        return self._state

class ConcreteObserverA(Observer):
    def update(self, subject: Subject) -> None:
        print("Observer A updated")`,
  relatedSOLIDPrinciples: [
    { 
      name: "SRP", 
      description: "Separates the observable object from the observers" 
    },
    { 
      name: "OCP", 
      description: "New observers can be added without changing subject"
    }
  ]
};
