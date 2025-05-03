'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface GameButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  type?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  href?: string
  target?: string
  disabled?: boolean
}

const GameButton: React.FC<GameButtonProps> = ({
  children,
  onClick,
  className = '',
  type = 'primary',
  size = 'md',
  icon,
  href,
  target,
  disabled = false
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  // Determine background color based on type
  const getBgColor = () => {
    switch (type) {
      case 'primary': return 'var(--primary)'
      case 'secondary': return 'var(--secondary)'
      case 'danger': return 'var(--red-accent)'
      default: return 'var(--primary)'
    }
  }

  // Determine glow color based on type
  const getGlowColor = () => {
    switch (type) {
      case 'primary': return 'var(--primary)'
      case 'secondary': return 'var(--secondary)'
      case 'danger': return 'var(--red-accent)'
      default: return 'var(--primary)'
    }
  }

  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-5 py-2',
    lg: 'px-7 py-3 text-lg'
  }

  const buttonClassName = `
    relative overflow-hidden
    inline-flex items-center justify-center
    bg-opacity-20 backdrop-filter backdrop-blur-sm
    font-bold rounded-md
    transition-all duration-300 ease-in-out
    ${sizeClasses[size]}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick()
    }
  }

  // Animation variants
  const buttonVariants = {
    idle: {
      scale: 1,
      boxShadow: `0 0 5px ${getGlowColor()}, 0 0 10px ${getGlowColor()}`
    },
    hover: {
      scale: 1.05,
      boxShadow: `0 0 10px ${getGlowColor()}, 0 0 20px ${getGlowColor()}`
    },
    pressed: {
      scale: 0.95,
      boxShadow: `0 0 15px ${getGlowColor()}, 0 0 30px ${getGlowColor()}`
    },
    disabled: {
      scale: 1,
      boxShadow: 'none'
    }
  }

  // Border animation
  const borderVariants = {
    idle: {
      opacity: 0.5,
      pathLength: 1,
      pathOffset: 0
    },
    hover: {
      opacity: 1,
      pathLength: 1,
      pathOffset: 0
    }
  }

  // Determine current variant based on state
  const getCurrentVariant = () => {
    if (disabled) return 'disabled'
    if (isPressed) return 'pressed'
    if (isHovered) return 'hover'
    return 'idle'
  }

  // Render button or link
  const renderButton = () => (
    <motion.button
      className={buttonClassName}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setIsPressed(false)
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      disabled={disabled}
      variants={buttonVariants}
      initial="idle"
      animate={getCurrentVariant()}
      style={{ 
        backgroundColor: `color-mix(in srgb, ${getBgColor()} 20%, transparent)`,
        border: `1px solid ${getBgColor()}`,
      }}
    >
      {/* SVG Border Animation */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
        <motion.rect
          x="0"
          y="0"
          width="100"
          height="100"
          rx="5"
          fill="none"
          stroke={getBgColor()}
          strokeWidth="1"
          variants={borderVariants}
          initial="idle"
          animate={isHovered ? 'hover' : 'idle'}
          transition={{ duration: 0.6, ease: 'linear' }}
        />
      </svg>

      {/* Interior Glow */}
      <motion.div 
        className="absolute inset-0 opacity-0"
        animate={{ opacity: isHovered ? 0.3 : 0 }}
        style={{ 
          background: `radial-gradient(circle at center, ${getBgColor()} 0%, transparent 70%)`,
          transition: 'opacity 0.3s ease-in-out'
        }}
      />

      {/* Icon and Text */}
      <div className="relative flex items-center justify-center gap-2">
        {icon && <span className="mr-1">{icon}</span>}
        <span>{children}</span>
      </div>
      
      {/* Click Effect */}
      {isPressed && !disabled && (
        <motion.div
          className="absolute inset-0 bg-white rounded-md"
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 0, scale: 2 }}
          transition={{ duration: 0.6 }}
        />
      )}
    </motion.button>
  )

  const renderLink = () => (
    <motion.a
      href={href}
      target={target}
      className={buttonClassName}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setIsPressed(false)
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      variants={buttonVariants}
      initial="idle"
      animate={getCurrentVariant()}
      style={{ 
        backgroundColor: `color-mix(in srgb, ${getBgColor()} 20%, transparent)`,
        border: `1px solid ${getBgColor()}`,
      }}
    >
      {/* SVG Border Animation */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
        <motion.rect
          x="0"
          y="0"
          width="100"
          height="100"
          rx="5"
          fill="none"
          stroke={getBgColor()}
          strokeWidth="1"
          variants={borderVariants}
          initial="idle"
          animate={isHovered ? 'hover' : 'idle'}
          transition={{ duration: 0.6, ease: 'linear' }}
        />
      </svg>

      {/* Interior Glow */}
      <motion.div 
        className="absolute inset-0 opacity-0"
        animate={{ opacity: isHovered ? 0.3 : 0 }}
        style={{ 
          background: `radial-gradient(circle at center, ${getBgColor()} 0%, transparent 70%)`,
          transition: 'opacity 0.3s ease-in-out'
        }}
      />

      {/* Icon and Text */}
      <div className="relative flex items-center justify-center gap-2">
        {icon && <span className="mr-1">{icon}</span>}
        <span>{children}</span>
      </div>
      
      {/* Click Effect */}
      {isPressed && !disabled && (
        <motion.div
          className="absolute inset-0 bg-white rounded-md"
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 0, scale: 2 }}
          transition={{ duration: 0.6 }}
        />
      )}
    </motion.a>
  )

  return href ? renderLink() : renderButton()
}

export default GameButton 