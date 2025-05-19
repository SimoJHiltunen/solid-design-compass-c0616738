
import React from 'react';

interface MatrixItem {
  principle: string;
  patterns: {
    [key: string]: string | boolean;
  };
}

interface RelationshipMatrixProps {
  data: MatrixItem[];
  patterns: string[];
}

const RelationshipMatrix: React.FC<RelationshipMatrixProps> = ({ data, patterns }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-primary text-primary-foreground">
            <th className="p-3 text-left">Principle</th>
            {patterns.map((pattern) => (
              <th key={pattern} className="p-3 text-center">{pattern}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-card' : 'bg-secondary'}>
              <td className="p-3 border font-medium">{item.principle}</td>
              {patterns.map((pattern) => (
                <td key={pattern} className="p-3 border text-center">
                  {typeof item.patterns[pattern] === 'string' ? (
                    <span className="has-tooltip">
                      <span className="text-primary font-medium">✓</span>
                      <div className="tooltip p-2 bg-popover text-popover-foreground rounded-md shadow-lg text-xs max-w-xs">
                        {item.patterns[pattern] as string}
                      </div>
                    </span>
                  ) : item.patterns[pattern] ? (
                    <span className="text-primary font-medium">✓</span>
                  ) : (
                    <span className="text-muted-foreground">-</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RelationshipMatrix;
