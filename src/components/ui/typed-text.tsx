import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface TypedTextProps {
  text: string
  className?: string
  speed?: number
  showCursor?: boolean
  onComplete?: () => void
}

export const TypedText = ({ 
  text, 
  className, 
  speed = 100, 
  showCursor = true,
  onComplete 
}: TypedTextProps) => {
  const [displayedText, setDisplayedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1))
        index++
      } else {
        setIsComplete(true)
        onComplete?.()
        clearInterval(timer)
      }
    }, speed)

    return () => clearInterval(timer)
  }, [text, speed, onComplete])

  return (
    <span className={cn("", className)}>
      {displayedText}
      {showCursor && !isComplete && (
        <span className="animate-pulse">_</span>
      )}
    </span>
  )
}