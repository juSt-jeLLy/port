'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface GlitchTextProps {
  text: string
  className?: string
  fontSize?: string
  color?: string
  highlightColor?: string
  glitchInterval?: number
  highlightInterval?: number
}

const GlitchText: React.FC<GlitchTextProps> = ({
  text,
  className = '',
  fontSize = '2rem',
  color = 'var(--foreground)',
  highlightColor = 'var(--neon-blue)',
  glitchInterval = 3000,
  highlightInterval = 200
}) => {
  const [isGlitching, setIsGlitching] = useState(false)
  const [glitchedText, setGlitchedText] = useState(text)
  const [highlightIndex, setHighlightIndex] = useState(-1)

  // Characters to use in the glitch effect
  const glitchChars = '!<>-_\\=/[]{}—=+*^?#________'

  // Generate glitched text
  const generateGlitchedText = () => {
    if (!isGlitching) return text

    return text
      .split('')
      .map((char, idx) => {
        // Randomly decide if this character should glitch
        if (Math.random() < 0.3 && char !== ' ') {
          return glitchChars[Math.floor(Math.random() * glitchChars.length)]
        }
        return char
      })
      .join('')
  }

  // Trigger glitch effect at random intervals
  useEffect(() => {
    const glitchTimer = setInterval(() => {
      setIsGlitching(true)
      
      // Generate several glitch frames
      const frames = 3
      let frameCount = 0
      
      const glitchFrameInterval = setInterval(() => {
        setGlitchedText(generateGlitchedText())
        frameCount++
        
        if (frameCount >= frames) {
          clearInterval(glitchFrameInterval)
          setIsGlitching(false)
          setGlitchedText(text)
        }
      }, 50)
      
      return () => clearInterval(glitchFrameInterval)
    }, glitchInterval + Math.random() * 2000) // Add randomness to the interval
    
    return () => clearInterval(glitchTimer)
  }, [text, glitchInterval])

  // Character highlight effect
  useEffect(() => {
    if (text.length === 0) return

    const highlightTimer = setInterval(() => {
      setHighlightIndex(Math.floor(Math.random() * text.length))
      
      setTimeout(() => {
        setHighlightIndex(-1)
      }, highlightInterval)
    }, 2000 + Math.random() * 3000)
    
    return () => clearInterval(highlightTimer)
  }, [text, highlightInterval])

  return (
    <div 
      className={`relative inline-block ${className}`}
      style={{ fontSize }}
      data-text={text}
    >
      {glitchedText.split('').map((char, index) => (
        <motion.span
          key={index}
          style={{
            color: index === highlightIndex ? highlightColor : color,
            display: 'inline-block',
            position: 'relative',
            textShadow: index === highlightIndex 
              ? `0 0 8px ${highlightColor}, 0 0 12px ${highlightColor}` 
              : 'none'
          }}
          animate={isGlitching ? {
            x: [0, Math.random() * 3 - 1.5, 0],
            y: [0, Math.random() * 3 - 1.5, 0],
          } : {}}
          transition={{ duration: 0.1 }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  )
}

export default GlitchText 