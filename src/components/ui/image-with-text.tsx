import { cn } from "@/lib/utils";

interface ImageWithTextProps {
  src: string;
  alt: string;
  position?: "left" | "right" | "center";
  size?: "small" | "medium" | "large";
  className?: string;
  children: React.ReactNode;
}

export const ImageWithText = ({ 
  src, 
  alt, 
  position = "left", 
  size = "medium", 
  className,
  children 
}: ImageWithTextProps) => {
  const sizeClasses = {
    small: "w-32 h-32",
    medium: "w-48 h-48",
    large: "w-64 h-64"
  };

  const positionClasses = {
    left: "float-left mr-6 mb-4",
    right: "float-right ml-6 mb-4",
    center: "mx-auto mb-6 block"
  };

  return (
    <div className="text-content overflow-hidden">
      <img
        src={src}
        alt={alt}
        className={cn(
          "rounded-lg object-cover shadow-card transition-smooth hover:shadow-elegant",
          sizeClasses[size],
          positionClasses[position],
          className
        )}
      />
      <div className="text-foreground leading-relaxed overflow-hidden">
        {children}
      </div>
    </div>
  );
};