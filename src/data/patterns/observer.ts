
export const observerPattern = {
  title: "Observer Pattern",
  shortName: "Observer",
  description: 
    "Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified.",
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
