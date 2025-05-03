'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TerminalProps {
  text: string | string[]
  className?: string
  typingSpeed?: number
  startDelay?: number
  prefix?: string
  blinkCursor?: boolean
  autoStart?: boolean
  onComplete?: () => void
  textColor?: string
  terminalColor?: string
  height?: string
  width?: string
}

const Terminal: React.FC<TerminalProps> = ({
  text,
  className = '',
  typingSpeed = 30,
  startDelay = 500,
  prefix = '> ',
  blinkCursor = true,
  autoStart = true,
  onComplete,
  textColor = 'var(--neon-blue)',
  terminalColor = 'rgba(0, 10, 20, 0.8)',
  height = 'auto',
  width = 'auto'
}) => {
  const [displayedText, setDisplayedText] = useState<string[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [isTyping, setIsTyping] = useState(autoStart)
  const [isComplete, setIsComplete] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Convert text to array if it's a string
  const textLines = Array.isArray(text) ? text : [text]

  // Cursor blinking effect
  useEffect(() => {
    if (!blinkCursor) return
    
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    
    return () => clearInterval(cursorInterval)
  }, [blinkCursor])

  // Typing effect
  useEffect(() => {
    if (!isTyping) return
    
    const timeout = setTimeout(() => {
      if (currentLineIndex < textLines.length) {
        const currentLine = textLines[currentLineIndex]
        
        if (currentCharIndex < currentLine.length) {
          // Update current line with one more character
          setDisplayedText(prev => {
            const newDisplayedText = [...prev]
            if (newDisplayedText.length <= currentLineIndex) {
              newDisplayedText.push('')
            }
            newDisplayedText[currentLineIndex] = currentLine.substring(0, currentCharIndex + 1)
            return newDisplayedText
          })
          
          setCurrentCharIndex(prev => prev + 1)
        } else {
          // Move to next line
          setCurrentLineIndex(prev => prev + 1)
          setCurrentCharIndex(0)
        }
      } else {
        // Typing complete
        setIsTyping(false)
        setIsComplete(true)
        if (onComplete) {
          onComplete()
        }
      }
    }, currentCharIndex === 0 && currentLineIndex > 0 ? 500 : typingSpeed)
    
    return () => clearTimeout(timeout)
  }, [isTyping, currentLineIndex, currentCharIndex, textLines, typingSpeed, onComplete])

  // Start delay
  useEffect(() => {
    if (!autoStart) return
    
    const delayTimeout = setTimeout(() => {
      setIsTyping(true)
    }, startDelay)
    
    return () => clearTimeout(delayTimeout)
  }, [autoStart, startDelay])

  // Auto-scroll to bottom
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [displayedText])

  const handleStartTyping = () => {
    if (!isTyping && !isComplete) {
      setIsTyping(true)
    }
  }

  return (
    <motion.div 
      className={`rounded-md p-4 font-mono text-sm ${className}`}
      style={{
        backgroundColor: terminalColor,
        color: textColor,
        borderLeft: `2px solid ${textColor}`,
        boxShadow: `0 0 10px rgba(0, 234, 255, 0.3)`,
        maxHeight: height,
        width: width,
        overflow: 'auto'
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={handleStartTyping}
      ref={containerRef}
    >
      {/* Terminal header */}
      <div className="flex items-center justify-between mb-2 pb-2 border-b border-gray-700">
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs opacity-70">terminal@yagnesh</div>
        <div></div>
      </div>
      
      {/* Terminal content */}
      <div className="space-y-1">
        {displayedText.map((line, index) => (
          <div key={index} className="leading-relaxed">
            <span className="opacity-80">{prefix}</span>
            <span>{line}</span>
            
            {index === currentLineIndex && !isComplete && showCursor && (
              <span className="animate-pulse inline-block w-2 h-4 ml-0.5 bg-current"></span>
            )}
          </div>
        ))}
        
        {/* Current line with cursor */}
        {currentLineIndex === textLines.length && !isComplete && showCursor && (
          <div>
            <span className="opacity-80">{prefix}</span>
            <span className="animate-pulse inline-block w-2 h-4 ml-0.5 bg-current"></span>
          </div>
        )}
        
        {/* Start prompt if not auto-started */}
        <AnimatePresence>
          {!autoStart && !isTyping && !isComplete && (
            <motion.div 
              className="mt-4 text-center opacity-70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Click to start...
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default Terminal 