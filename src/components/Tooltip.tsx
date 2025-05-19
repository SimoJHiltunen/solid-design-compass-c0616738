
import React from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  return (
    <span className="has-tooltip relative inline-block">
      <span className="underline dotted cursor-help">{children}</span>
      <div className="tooltip p-2 bg-popover text-popover-foreground rounded-md shadow-lg text-xs max-w-xs -mt-1 -ml-4 absolute bottom-full left-0 z-50">
        {text}
      </div>
    </span>
  );
};

export default Tooltip;
