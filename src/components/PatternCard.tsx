
import React, { useState } from 'react';

export interface PatternCardProps {
  title: string;
  shortName: string;
  description: string;
  codeExample: string;
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
            <h5 className="mb-2 font-medium">Code Example:</h5>
            <pre className="bg-secondary p-4 rounded-md overflow-x-auto text-sm">
              <code>{codeExample}</code>
            </pre>
          </div>
          
          <div>
            <h5 className="mb-2 font-medium">Related SOLID Principles:</h5>
            <div className="grid grid-cols-1 gap-2">
              {relatedSOLIDPrinciples.map((principle, index) => (
                <div 
                  key={index} 
                  className="has-tooltip flex items-center bg-secondary rounded-md p-2"
                >
                  <span className="font-medium text-sm">{principle.name}</span>
                  <div className="tooltip p-2 bg-popover text-popover-foreground rounded-md shadow-lg text-xs max-w-xs ml-2">
                    {principle.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatternCard;
