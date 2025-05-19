
import React, { useState } from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <span 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      <span className="underline dotted cursor-help">{children}</span>
      {isVisible && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 p-2 mb-1 bg-popover text-popover-foreground rounded-md shadow-lg text-xs max-w-xs z-50">
          {text}
        </div>
      )}
    </span>
  );
};

export default Tooltip;
