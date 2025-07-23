// src/components/ui/Loader.tsx
import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="relative w-32 h-12 flex items-center justify-center">
        <div className="Strich1">
          <div className="Strich2">
            <div className="bubble"></div>
            <div className="bubble1"></div>
            <div className="bubble2"></div>
            <div className="bubble3"></div>
            <div className="bubble4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;



// import { cn } from "@/lib/utils"

// interface LoaderProps {
//   className?: string
//   size?: "sm" | "md" | "lg"
// }

// export const Loader = ({ className, size = "md" }: LoaderProps) => {
//   const sizeClasses = {
//     sm: "w-4 h-4",
//     md: "w-8 h-8", 
//     lg: "w-12 h-12"
//   }

//   return (
//     <div className="flex items-center justify-center min-h-[200px]">
//       <div className={cn(
//         "animate-spin rounded-full border-2 border-muted border-t-primary",
//         sizeClasses[size],
//         className
//       )} />
//     </div>
//   )
// }