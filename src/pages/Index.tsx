
import React from 'react';
import NavBar from '../components/NavBar';
import PrincipleCard from '../components/PrincipleCard';
import RelationshipMatrix from '../components/RelationshipMatrix';
import Tooltip from '../components/Tooltip';
import { solidPrinciples, relationshipMatrix } from '../data/solidPrinciples';

const Index = () => {
  const designPatterns = [
    "Factory", 
    "Strategy", 
    "Decorator", 
    "Observer", 
    "Adapter", 
    "Facade", 
    "Dependency Injection"
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NavBar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Header section */}
        <section className="mb-16 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="text-primary">SOLID</span> Principles
          </h1>
          <p className="text-xl mb-8 text-foreground/80">
            A visual guide to SOLID principles and their relationships with common design patterns
          </p>
          <div className="p-6 bg-card rounded-lg shadow-sm border">
            <p className="mb-4">
              SOLID is an acronym that represents five key design principles in object-oriented programming, introduced by Robert C. Martin. 
              These principles help developers create software that's easy to maintain, extend, and understand.
            </p>
            <p>
              Each principle addresses a specific aspect of software design, from organizing responsibilities to managing dependencies. 
              Together, they form a foundation for creating robust, flexible code that can adapt to changing requirements.
            </p>
          </div>
        </section>
        
        {/* SOLID Principles Cards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 pb-4 border-b">The Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solidPrinciples.map((principle, index) => (
              <PrincipleCard 
                key={index}
                title={principle.title}
                shortName={principle.shortName}
                description={principle.description}
                codeExample={principle.codeExample}
                designPatterns={principle.designPatterns}
              />
            ))}
          </div>
        </section>
        
        {/* Relationship Matrix */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 pb-4 border-b">Relationship to Design Patterns</h2>
          <div className="mb-6">
            <p className="text-lg mb-4">
              SOLID principles often complement and enable common design patterns. This matrix shows how each principle 
              relates to popular design patterns in software development.
            </p>
            <p className="text-muted-foreground">
              Hover over the checkmarks with tooltips for more details about specific relationships.
            </p>
          </div>
          <RelationshipMatrix 
            data={relationshipMatrix}
            patterns={designPatterns}
          />
        </section>
        
        {/* Glossary / Terms */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 pb-4 border-b">Key Terms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border shadow-sm">
              <h3 className="text-xl font-bold mb-4">SOLID Principles</h3>
              <ul className="space-y-2">
                <li><strong className="font-medium text-primary">S - SRP:</strong> <Tooltip text="A class should have only one reason to change">Single Responsibility Principle</Tooltip></li>
                <li><strong className="font-medium text-primary">O - OCP:</strong> <Tooltip text="Software entities should be open for extension but closed for modification">Open/Closed Principle</Tooltip></li>
                <li><strong className="font-medium text-primary">L - LSP:</strong> <Tooltip text="Objects of a superclass should be replaceable with objects of its subclasses without breaking the application">Liskov Substitution Principle</Tooltip></li>
                <li><strong className="font-medium text-primary">I - ISP:</strong> <Tooltip text="Many specific interfaces are better than one general interface">Interface Segregation Principle</Tooltip></li>
                <li><strong className="font-medium text-primary">D - DIP:</strong> <Tooltip text="High-level modules should not depend on low-level modules. Both should depend on abstractions">Dependency Inversion Principle</Tooltip></li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-lg border shadow-sm">
              <h3 className="text-xl font-bold mb-4">Design Patterns</h3>
              <ul className="space-y-2">
                <li><strong className="font-medium text-primary">Factory:</strong> <Tooltip text="Creates objects without specifying the exact class of object that will be created">Creational pattern for object creation</Tooltip></li>
                <li><strong className="font-medium text-primary">Strategy:</strong> <Tooltip text="Defines a family of algorithms, encapsulates each one, and makes them interchangeable">Behavioral pattern for algorithm selection</Tooltip></li>
                <li><strong className="font-medium text-primary">Decorator:</strong> <Tooltip text="Attaches additional responsibilities to objects dynamically">Structural pattern for extending functionality</Tooltip></li>
                <li><strong className="font-medium text-primary">Observer:</strong> <Tooltip text="Defines a one-to-many dependency so that when one object changes state, its dependents are notified">Behavioral pattern for event notification</Tooltip></li>
                <li><strong className="font-medium text-primary">Adapter:</strong> <Tooltip text="Allows incompatible interfaces to work together">Structural pattern for interface compatibility</Tooltip></li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="py-6 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">SOLID Principles Guide — Created with React and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
