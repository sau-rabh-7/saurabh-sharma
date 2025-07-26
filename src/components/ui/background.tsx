// src/components/ui/Background.tsx
import React from 'react';

const Background = () => {
  return (
    <div className="absolute inset-0 z-10 backdrop-blur-sm bg-background/20 pointer-events-none">
      {/* Optional grid pattern with subtle animation */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(hsl(var(--foreground) / 0.1) 1px, transparent 1px)',
          backgroundSize: '2rem 2rem',
          //animation: 'move-grid 30s linear infinite',
          opacity: 1.0,
        }}
      ></div>
    </div>
  );
};

export default Background;