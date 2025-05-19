
import React from 'react';
import { 
  Tooltip as ShadTooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  return (
    <TooltipProvider>
      <ShadTooltip>
        <TooltipTrigger asChild>
          <span className="underline dotted cursor-help">{children}</span>
        </TooltipTrigger>
        <TooltipContent>
          <p className="max-w-xs text-sm">{text}</p>
        </TooltipContent>
      </ShadTooltip>
    </TooltipProvider>
  );
};

export default Tooltip;
