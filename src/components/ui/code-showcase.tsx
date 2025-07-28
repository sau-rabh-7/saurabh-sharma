import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface CodeShowcaseProps {
  title?: string;
  language?: string;
  code: string;
  className?: string;
}

export const CodeShowcase = ({ title, language = "javascript", code, className }: CodeShowcaseProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <div className={cn("glass-card rounded-lg overflow-hidden", className)}>
      {title && (
        <div className="flex items-center justify-between p-4 bg-muted/50 border-b border-border/50">
          <h3 className="text-sm font-semibold text-foreground">{title}</h3>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">{language}</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopy}
              className="h-8 w-8 p-0"
            >
              {copied ? (
                <Check className="h-3 w-3 text-accent" />
              ) : (
                <Copy className="h-3 w-3" />
              )}
            </Button>
          </div>
        </div>
      )}
      <div className="relative">
        <pre className="p-4 overflow-x-auto bg-card text-sm leading-relaxed">
          <code className="text-foreground whitespace-pre-wrap">{code}</code>
        </pre>
        {!title && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="absolute top-2 right-2 h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-smooth"
          >
            {copied ? (
              <Check className="h-3 w-3 text-accent" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
          </Button>
        )}
      </div>
    </div>
  );
};