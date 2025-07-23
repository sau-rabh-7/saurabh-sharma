// src/components/ui/Background.tsx
import React from 'react';

const Background = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-background"></div>
      <div 
        className="absolute inset-0 opacity-20 dark:opacity-10"
        style={{
          backgroundImage: 'radial-gradient(hsl(var(--foreground) / 0.1) 1px, transparent 1px)',
          backgroundSize: '2rem 2rem',
          animation: 'move-grid 30s linear infinite',
        }}
      ></div>
    </div>
  );
};

export default Background;
