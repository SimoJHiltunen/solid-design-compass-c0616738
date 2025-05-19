
import React from 'react';
import ThemeToggle from './ThemeToggle';

const NavBar = () => {
  return (
    <header className="sticky top-0 z-30 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto sm:px-6">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold tracking-tight">
            <span className="text-primary">SOLID</span> Principles
          </h1>
        </div>
        <nav className="flex items-center gap-6">
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
