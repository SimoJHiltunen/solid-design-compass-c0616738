
import React, { useState } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export interface PatternCardProps {
  title: string;
  shortName: string;
  description: string;
  codeExample: string;
  codeExamplePHP?: string;
  codeExamplePython?: string;
  supportedLanguages?: string[];
  relatedSOLIDPrinciples: Array<{
    name: string;
    description: string;
  }>;
}

const PatternCard: React.FC<PatternCardProps> = ({
  title,
  shortName,
  description,
  codeExample,
  codeExamplePHP,
  codeExamplePython,
  supportedLanguages = ["TypeScript"],
  relatedSOLIDPrinciples
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`card-transition rounded-lg border bg-card p-6 shadow-sm ${
        isExpanded ? 'col-span-2' : ''
      }`}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold tracking-tight text-primary">{shortName}</h3>
          <h4 className="text-lg font-medium text-muted-foreground">{title}</h4>
        </div>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sm text-primary hover:underline"
        >
          {isExpanded ? 'Show Less' : 'Expand'}
        </button>
      </div>
      
      <p className="mb-4 text-foreground/90">{description}</p>
      
      {isExpanded && (
        <div className="animate-fade-in">
          <div className="mb-6">
            <h5 className="mb-2 font-medium">Code Examples:</h5>
            <Tabs defaultValue={supportedLanguages[0].toLowerCase()}>
              <TabsList>
                {supportedLanguages.map(lang => (
                  <TabsTrigger key={lang.toLowerCase()} value={lang.toLowerCase()}>
                    {lang}
                  </TabsTrigger>
                ))}
              </TabsList>
              {supportedLanguages.includes("TypeScript") && (
                <TabsContent value="typescript">
                  <pre className="bg-secondary p-4 rounded-md overflow-x-auto text-sm">
                    <code>{codeExample}</code>
                  </pre>
                </TabsContent>
              )}
              {supportedLanguages.includes("PHP") && codeExamplePHP && (
                <TabsContent value="php">
                  <pre className="bg-secondary p-4 rounded-md overflow-x-auto text-sm">
                    <code>{codeExamplePHP}</code>
                  </pre>
                </TabsContent>
              )}
              {supportedLanguages.includes("Python") && codeExamplePython && (
                <TabsContent value="python">
                  <pre className="bg-secondary p-4 rounded-md overflow-x-auto text-sm">
                    <code>{codeExamplePython}</code>
                  </pre>
                </TabsContent>
              )}
            </Tabs>
          </div>
          
          <div>
            <h5 className="mb-2 font-medium">Related SOLID Principles:</h5>
            <div className="grid grid-cols-1 gap-2">
              {relatedSOLIDPrinciples.map((principle, index) => (
                <TooltipProvider key={index}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center bg-secondary rounded-md p-2 cursor-help">
                        <span className="font-medium text-sm">{principle.name}</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs text-sm">{principle.description}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatternCard;
