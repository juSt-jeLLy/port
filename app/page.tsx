'use client'

import { useEffect, useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import GameBackground from './components/GameBackground'
import GlitchText from './components/GlitchText'
import GameButton from './components/GameButton'
import Terminal from './components/Terminal'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>('home')
  const [isLoading, setIsLoading] = useState(true)
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Section navigation handler
  const navigateToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setActiveTab(sectionId)
    }
  }

  // Loading screen
  if (isLoading) {
  return (
      <div className="bg-background min-h-screen flex items-center justify-center">
        <GameBackground />
        <div className="text-center">
          <GlitchText 
            text="LOADING PORTFOLIO..." 
            fontSize="2rem"
            className="mb-6"
          />
          <div className="relative w-64 h-4 bg-opacity-20 bg-neon-blue rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-neon-blue"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen font-rajdhani relative">
      <GameBackground />
      <div className="noise-overlay"></div>
      
          {/* Navigation */}
      <motion.nav 
        className="py-6 px-8 md:px-16 border-b border-[#00eaff] bg-opacity-10 backdrop-filter backdrop-blur-md sticky top-0 z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.8, 
          ease: [0.25, 0.1, 0.25, 1],
          staggerChildren: 0.1
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 8px rgb(0, 234, 255)",
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10
              }}
            >
              <motion.div 
                className="bg-[#000f2b] p-2 rounded-full border border-[#00eaff] border-glow"
                animate={{ 
                  boxShadow: ["0 0 10px rgba(0, 234, 255, 0.5)", "0 0 20px rgba(0, 234, 255, 0.7)", "0 0 10px rgba(0, 234, 255, 0.5)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00eaff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                </motion.div>
              </motion.div>
              <GlitchText text="YAGNESH" className="text-xl font-bold text-glow" />
            </motion.div>
            
            <div className="hidden md:flex gap-8">
              {['home', 'projects', 'skills', 'education', 'contact'].map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => navigateToSection(item)}
                  className={`relative group uppercase tracking-wider ${activeTab === item ? 'text-[#00eaff]' : 'text-[#e0e0e0]'}`}
                  whileHover={{ 
                    scale: 1.1,
                    textShadow: "0 0 8px rgb(0, 234, 255)",
                    color: "#00eaff"
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring"
                  }}
                >
                  <span className="transition-colors duration-300">{item}</span>
                  <motion.span 
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#00eaff] transition-all duration-300 ${
                      activeTab === item ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                    animate={activeTab === item ? {
                      boxShadow: ["0 0 5px rgba(0, 234, 255, 0.5)", "0 0 10px rgba(0, 234, 255, 0.7)", "0 0 5px rgba(0, 234, 255, 0.5)"]
                    } : {}}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.button>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <motion.div 
                className="hidden md:flex gap-3"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <motion.a 
                  href="https://github.com/juSt-jeLLy" 
                  target="_blank" 
                  className="text-[#e0e0e0] hover:text-[#00eaff] transition-colors p-2 rounded-full hover:bg-[#000f2b]"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: [0, 10, -10, 0],
                    backgroundColor: "#000f2b",
                    boxShadow: "0 0 8px rgba(0, 234, 255, 0.5)" 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/yagnesh-markana-72aa10204/" 
                  target="_blank" 
                  className="text-[#e0e0e0] hover:text-[#00eaff] transition-colors p-2 rounded-full hover:bg-[#000f2b]"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: [0, 10, -10, 0],
                    backgroundColor: "#000f2b",
                    boxShadow: "0 0 8px rgba(0, 234, 255, 0.5)" 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </motion.a>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 500,
                  duration: 0.5, 
                  delay: 0.6 
                }}
              >
                <GameButton 
                href="/resume.pdf" 
                target="_blank"
                  className="text-white"
                  type="primary"
                  size="sm"
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                  }
                >
                  RESUME
                </GameButton>
              </motion.div>
              
              <motion.button 
                className="md:hidden text-[#e0e0e0] hover:text-[#00eaff] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

            {/* Hero Section */}
      <section id="home" className="py-20 px-8 md:px-16 min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="card-glow p-8 rounded-lg relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              type: "spring",
              damping: 15,
              stiffness: 100
            }}
            whileHover={{
              boxShadow: "0 0 30px rgba(0, 234, 255, 0.4)",
            }}
          >
            {/* Grid background for card */}
            <div className="absolute inset-0 bg-grid">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00eaff] to-transparent opacity-10"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3, 
                  ease: "linear",
                  repeatDelay: 1
                }}
              />
            </div>
            
            {/* Floating particles */}
            <motion.div
              className="absolute w-4 h-4 rounded-full bg-[#00eaff] opacity-20"
              animate={{
                x: [0, 30, 0],
                y: [0, -40, 0],
                opacity: [0.2, 0.3, 0.2],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
              }}
              style={{ left: '10%', top: '20%' }}
            />
            <motion.div
              className="absolute w-2 h-2 rounded-full bg-[#00eaff] opacity-20"
              animate={{
                x: [0, -20, 0],
                y: [0, 30, 0],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 8,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
              }}
              style={{ right: '20%', top: '30%' }}
            />
            <motion.div
              className="absolute w-3 h-3 rounded-full bg-[#00eaff] opacity-20"
              animate={{
                x: [0, 40, 0],
                y: [0, 20, 0],
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 10,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
              }}
              style={{ left: '30%', bottom: '20%' }}
            />
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
              <div className="md:w-3/5">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#000f2b] border border-[#00eaff] text-[#00eaff] mb-6 hover:bg-[#001a33] hover:scale-105 transition-all"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 0 15px rgba(0, 234, 255, 0.7)",
                  }}
                >
                  <motion.div 
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="mr-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  </motion.div>
                  <span>Blockchain Developer</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <GlitchText text="YAGNESH" className="text-4xl md:text-5xl font-bold mb-4" />
                  <motion.h2 
                    className="text-2xl md:text-3xl text-gray-400 mb-6 flex items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <motion.span
                      animate={{ color: ["#e0e0e0", "#00eaff", "#e0e0e0"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      Blockchain Developer
                    </motion.span>
                    <span className="mx-2 text-gray-600">|</span>
                    <motion.span 
                      className="text-[#00eaff]"
                      animate={{ 
                        textShadow: [
                          "0 0 5px rgba(0, 234, 255, 0.3)", 
                          "0 0 15px rgba(0, 234, 255, 0.7)", 
                          "0 0 5px rgba(0, 234, 255, 0.3)"
                        ] 
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Web3 Explorer
                    </motion.span>
                  </motion.h2>
                </motion.div>
                
                <motion.p 
                  className="mb-6 text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Blockchain developer with experience in building decentralized applications (dApps), AI-driven solutions, and smart contracts. 
                  Proficient in React, Next.js, Solidity, and integrating blockchain technologies like Ethers.js and WalletConnect. 
                  Actively participated in hackathons, focusing on Web3, DeFi, and AI innovations.
                </motion.p>
                
                <motion.div 
                  className="flex flex-wrap gap-4 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 500 
                    }}
                  >
                    <GameButton 
                      href="/resume.pdf" 
                      target="_blank"
                      type="primary"
                      icon={
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                      }
                    >
                      VIEW RESUME
                    </GameButton>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 500 
                    }}
                  >
                    <GameButton 
                      onClick={() => navigateToSection('projects')}
                      type="secondary"
                      icon={
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                      }
                    >
                      EXPLORE WORK
                    </GameButton>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <span className="text-gray-400 text-sm">Connect with me:</span>
                  <div className="flex gap-3">
                    <motion.a 
                      href="https://github.com/juSt-jeLLy" 
                      target="_blank" 
                      className="text-gray-400 hover:text-[#00eaff] transition-colors"
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: [0, 15, -15, 0],
                        color: "#00eaff",
                        textShadow: "0 0 8px rgba(0, 234, 255, 0.7)" 
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </motion.a>
                    <motion.a 
                      href="https://www.linkedin.com/in/yagnesh-markana-72aa10204/" 
                      target="_blank" 
                      className="text-gray-400 hover:text-[#00eaff] transition-colors"
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: [0, 15, -15, 0],
                        color: "#00eaff",
                        textShadow: "0 0 8px rgba(0, 234, 255, 0.7)" 
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </motion.a>
                    <motion.a 
                      href="mailto:yagneshpatel931@gmail.com" 
                      className="text-gray-400 hover:text-[#00eaff] transition-colors"
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: [0, 15, -15, 0],
                        color: "#00eaff",
                        textShadow: "0 0 8px rgba(0, 234, 255, 0.7)" 
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </motion.a>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                className="md:w-2/5"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 0 20px rgba(0, 234, 255, 0.4)"
                }}
              >
                <Terminal
                  text={[
                    "Loading profile data...",
                    "Blockchain developer initialized",
                    "Smart contract knowledge: 100%",
                    "Web3 integration expertise: 100%",
                    "React/Next.js proficiency: 100%",
                    "AI integration capability: 100%",
                    "System ready for blockchain operations"
                  ]}
                  className="w-full"
                />
              </motion.div>
                      </div>
          </motion.div>
                    </div>
      </section>

      {/* Accomplishments Section */}
      <section className="py-16 px-8 md:px-16 bg-deep-blue bg-opacity-30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <GlitchText text="ACCOMPLISHMENTS" className="text-3xl md:text-4xl font-bold mb-4" />
            <p className="text-gray-400 max-w-2xl mx-auto">Award-winning blockchain projects from global hackathons</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* ETHGlobal Agentic Ethereum */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15,
                boxShadow: '0 0 30px var(--glow-blue), 0 0 45px var(--glow-blue)'
              }}
              className="card-glow p-6 rounded-lg relative overflow-hidden cursor-pointer group"
            >
              {/* Game-inspired background */}
              <div className="absolute inset-0 bg-grid"></div>
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}
              ></div>
              <motion.div 
                className="absolute -bottom-2 -right-2 w-32 h-32 opacity-10"
                animate={{ 
                  rotate: 360,
                  opacity: [0.1, 0.15, 0.1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  opacity: { duration: 3, repeat: Infinity, yoyo: true }
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[#00eaff]">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                        </svg>
              </motion.div>
              
              {/* Digital circuit lines */}
              <motion.div
                className="absolute inset-0 overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <svg width="100%" height="100%" viewBox="0 0 200 200" className="absolute">
                  <motion.path
                    d="M20,100 L80,100 L100,120 L150,120"
                    stroke="#00eaff"
                    strokeWidth="0.5"
                    strokeDasharray="200"
                    strokeDashoffset="200"
                    fill="none"
                    initial={{ strokeDashoffset: 200 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                  />
                  <motion.path
                    d="M180,40 L150,40 L130,60 L130,150 L110,170 L40,170"
                    stroke="#00eaff"
                    strokeWidth="0.5"
                    strokeDasharray="400"
                    strokeDashoffset="400"
                    fill="none"
                    initial={{ strokeDashoffset: 400 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                        </svg>
              </motion.div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <motion.div 
                    whileHover={{ scale: 1.1 }} 
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#000f2b] border border-[#00eaff] text-[#00eaff]"
                  >
                    Winner
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.1, color: "#ffd700" }}
                    className="text-gold text-lg font-bold"
                  >
                    $3,500
                  </motion.div>
                      </div>
                  
                <h3 className="text-xl font-bold mb-2 text-glow">ETHGlobal's Agentic Ethereum</h3>
                <p className="text-gray-400 text-sm mb-3">1710 hackers, 518 projects, 10 finalists, 94 countries</p>
                
                <p className="text-gray-300 mb-4">Clash of Clout: AI-Powered Meme and Engagement Platform — Gaia/Collab.land Track and Flow Track</p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} 
                  whileTap={{ scale: 0.95 }}
                >
                  <GameButton 
                        href="https://ethglobal.com/showcase/clash-of-clout-qedfz" 
                        target="_blank" 
                    type="primary"
                    size="sm"
                  >
                    View Project Showcase
                  </GameButton>
                </motion.div>
                    </div>
            </motion.div>
            
            {/* ETH Taipei */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15,
                boxShadow: '0 0 30px var(--glow-blue), 0 0 45px var(--glow-blue)'
              }}
              className="card-glow p-6 rounded-lg relative overflow-hidden cursor-pointer group"
            >
              {/* Game-inspired background */}
              <div className="absolute inset-0 bg-grid"></div>
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1603481546238-487240415921?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}
              ></div>
              <motion.div 
                className="absolute -bottom-2 -right-2 w-32 h-32 opacity-10"
                animate={{ 
                  rotate: 360,
                  opacity: [0.1, 0.15, 0.1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  opacity: { duration: 3, repeat: Infinity, yoyo: true }
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[#00eaff]">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              </motion.div>
              
              {/* Digital circuit lines */}
              <motion.div
                className="absolute inset-0 overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <svg width="100%" height="100%" viewBox="0 0 200 200" className="absolute">
                  <motion.path
                    d="M20,50 L60,50 L80,70 L160,70"
                    stroke="#00eaff"
                    strokeWidth="0.5"
                    strokeDasharray="200"
                    strokeDashoffset="200"
                    fill="none"
                    initial={{ strokeDashoffset: 200 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 1.5, delay: 0.4 }}
                  />
                  <motion.path
                    d="M30,160 L80,160 L100,140 L100,90 L120,70 L180,70"
                    stroke="#00eaff"
                    strokeWidth="0.5"
                    strokeDasharray="400"
                    strokeDashoffset="400"
                    fill="none"
                    initial={{ strokeDashoffset: 400 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 2, delay: 0.6 }}
                  />
                </svg>
              </motion.div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <motion.div 
                    whileHover={{ scale: 1.1 }} 
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#000f2b] border border-[#00eaff] text-[#00eaff]"
                  >
                    1st Place
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.1, color: "#ffd700" }}
                    className="text-gold text-lg font-bold"
                  >
                    $4,000
                  </motion.div>
              </div>
              
                <h3 className="text-xl font-bold mb-2 text-glow">ETHGlobal's ETH Taipei 2025</h3>
                <p className="text-gray-400 text-sm mb-3">530 hackers, 226 projects, 8 finalists, 43 countries</p>
                
                <p className="text-gray-300 mb-4">AgentActs.eth: Decentralized AI Agents Builder — 1inch Fusion+ Integration Track</p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} 
                  whileTap={{ scale: 0.95 }}
                >
                  <GameButton 
                    href="https://ethglobal.com/showcase/agentacts-eth-89iga" 
                    target="_blank" 
                    type="primary"
                    size="sm"
                  >
                    View Project Showcase
                  </GameButton>
                </motion.div>
                    </div>
            </motion.div>
            
            {/* Request Network */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15,
                boxShadow: '0 0 30px var(--glow-blue), 0 0 45px var(--glow-blue)'
              }}
              className="card-glow p-6 rounded-lg relative overflow-hidden cursor-pointer group"
            >
              {/* Game-inspired background */}
              <div className="absolute inset-0 bg-grid"></div>
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}
              ></div>
              <motion.div 
                className="absolute -bottom-2 -right-2 w-32 h-32 opacity-10"
                animate={{ 
                  rotate: 360,
                  opacity: [0.1, 0.15, 0.1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  opacity: { duration: 3, repeat: Infinity, yoyo: true }
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[#00eaff]">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
              </motion.div>
              
              {/* Digital circuit lines */}
              <motion.div
                className="absolute inset-0 overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <svg width="100%" height="100%" viewBox="0 0 200 200" className="absolute">
                  <motion.path
                    d="M30,30 L60,30 L80,50 L150,50"
                    stroke="#00eaff"
                    strokeWidth="0.5"
                    strokeDasharray="200"
                    strokeDashoffset="200"
                    fill="none"
                    initial={{ strokeDashoffset: 200 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                  <motion.path
                    d="M160,120 L120,120 L100,140 L100,180"
                    stroke="#00eaff"
                    strokeWidth="0.5"
                    strokeDasharray="200"
                    strokeDashoffset="200"
                    fill="none"
                    initial={{ strokeDashoffset: 200 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 1.5, delay: 0.7 }}
                  />
                        </svg>
              </motion.div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <motion.div 
                    whileHover={{ scale: 1.1 }} 
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#000f2b] border border-[#00eaff] text-[#00eaff]"
                  >
                    Finalist
                  </motion.div>
              </div>
              
                <h3 className="text-xl font-bold mb-2 text-glow">Request Network End of Year Hackathon</h3>
                <p className="text-gray-400 text-sm mb-3">120+ participants, 40+ projects, 5 finalists</p>
                
                <p className="text-gray-300 mb-4">HireFree: Decentralized Freelance Collaboration Platform — Streamlining milestone-based payments for freelancers</p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} 
                  whileTap={{ scale: 0.95 }}
                >
                  <GameButton 
                    href="https://dorahacks.io/buidl/20606" 
                    target="_blank" 
                    type="primary"
                    size="sm"
                  >
                    View Project Showcase
                  </GameButton>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <GlitchText text="PROJECTS" className="text-3xl md:text-4xl font-bold mb-4" />
            <p className="text-gray-400 max-w-2xl mx-auto">A showcase of my blockchain and web development projects.</p>
          </motion.div>
              
          <div className="space-y-16">
            {/* AgentActs.eth */}
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -100, rotateY: 30 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
                viewport={{ once: true }}
                className="md:w-5/12 perspective-1000"
              >
                <motion.div 
                  className="card-glow rounded-lg overflow-hidden transform-gpu"
                  whileHover={{ 
                    rotateY: 10, 
                    rotateX: 5,
                    scale: 1.05,
                    boxShadow: "0 20px 30px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 234, 255, 0.5)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative aspect-video bg-deep-blue overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00eaff] to-transparent opacity-20"
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 1.5, 
                        ease: "linear",
                        repeatDelay: 0.8
                      }}
                    />
                    <Image
                      src="/images.webp"
                      alt="AgentActs.eth"
                      width={500}
                      height={300}
                      className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000f2b] to-transparent opacity-70"></div>
                    <motion.div 
                      className="absolute bottom-4 left-4"
                      animate={{ 
                        textShadow: [
                          "0 0 5px rgba(0, 234, 255, 0.3)", 
                          "0 0 15px rgba(0, 234, 255, 0.7)", 
                          "0 0 5px rgba(0, 234, 255, 0.3)"
                        ] 
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <GlitchText text="AgentActs.eth" fontSize="1.5rem" className="z-10" />
                    </motion.div>
                    <div className="absolute inset-0 bg-grid opacity-20"></div>
                    
                    {/* Digital circuit lines */}
                    <motion.div
                      className="absolute inset-0 overflow-hidden"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                    >
                      <svg width="100%" height="100%" viewBox="0 0 400 225" className="absolute">
                        <motion.path
                          d="M20,100 L80,100 L100,120 L150,120"
                          stroke="#00eaff"
                          strokeWidth="0.5"
                          strokeDasharray="200"
                          strokeDashoffset="200"
                          fill="none"
                          initial={{ strokeDashoffset: 200 }}
                          animate={{ strokeDashoffset: 0 }}
                          transition={{ duration: 1.5, delay: 0.3 }}
                        />
                        <motion.path
                          d="M380,50 L320,50 L300,70 L300,180 L280,200 L100,200"
                          stroke="#00eaff"
                          strokeWidth="0.5"
                          strokeDasharray="600"
                          strokeDashoffset="600"
                          fill="none"
                          initial={{ strokeDashoffset: 600 }}
                          animate={{ strokeDashoffset: 0 }}
                          transition={{ duration: 2, delay: 0.5 }}
                        />
              </svg>
                    </motion.div>
            </div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 100, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
                viewport={{ once: true }}
                className="md:w-7/12"
              >
                <motion.div 
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#000f2b] border border-[#00eaff] text-[#00eaff] mb-3"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 0 15px rgba(0, 234, 255, 0.7)" 
                  }}
                >
                  1st Place Winner at ETHGlobal Taipei
                </motion.div>
                <motion.h3 
                  className="text-2xl font-bold mb-3 text-glow"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  animate={{ 
                    textShadow: [
                      "0 0 5px rgba(0, 234, 255, 0.3)", 
                      "0 0 15px rgba(0, 234, 255, 0.5)", 
                      "0 0 5px rgba(0, 234, 255, 0.3)"
                    ] 
                  }}
                  transition={{ 
                    textShadow: { duration: 2, repeat: Infinity },
                    y: { duration: 0.5, delay: 0.6 },
                    default: { duration: 0.5, delay: 0.6 }
                  }}
                >
                  AgentActs.eth – Decentralized AI Agent Builder
                </motion.h3>
                
                <motion.p 
                  className="text-gray-300 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  Developed platform enabling users to deploy decentralized AI agents; onboarded 50+ test agents across 4 integrated MCPs.
                </motion.p>
                
                <motion.ul 
                  className="space-y-2 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    staggerChildren: 0.1,
                    delayChildren: 0.8
                  }}
                >
                  <motion.li 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="text-[#00eaff] mr-2 mt-1"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >◈</motion.div>
                    <span className="text-gray-300">Integrated MCPs: Twitter (social data), 1inch (DeFi automation), Google Maps, and Hyperbrowser.</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="text-[#00eaff] mr-2 mt-1"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                    >◈</motion.div>
                    <span className="text-gray-300">Built partner integrations with Polygon, ENS, and a Dockerized Python backend.</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="text-[#00eaff] mr-2 mt-1"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                    >◈</motion.div>
                    <span className="text-gray-300">Pay-per-use model supports token-gated access and promotes creator revenue from agent usage.</span>
                  </motion.li>
                </motion.ul>
                
                <motion.div 
                  className="flex flex-wrap gap-3 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  viewport={{ once: true }}
                >
                  {['TypeScript', 'React.js', 'Solidity', '1inch Fusion+', 'ENS', 'Polygon'].map((tech, index) => (
                    <motion.div 
                      key={tech}
                      className="bg-[#0a0a0a] border border-[#2a2a2a] px-3 py-1 rounded-full text-sm"
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: '#000f2b',
                        borderColor: '#00eaff',
                        color: '#00eaff'
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: 1 + (index * 0.1)
                      }}
                    >
                      {tech}
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.div 
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    <GameButton 
                      href="https://ethglobal.com/showcase/agentacts-eth-89iga" 
                      target="_blank" 
                      type="primary"
                      size="sm"
                      icon={
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                      }
                    >
                      Project Showcase
                    </GameButton>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    <GameButton 
                      href="https://github.com/juSt-jeLLy/ETH-Taipei" 
                      target="_blank"
                      type="secondary"
                      size="sm"
                      icon={
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                      }
                    >
                      Source Code
                    </GameButton>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    <GameButton 
                      href="https://dynamic-ai-atelier-5nby.vercel.app/" 
                      target="_blank"
                      type="danger"
                      size="sm"
                      icon={
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                      }
                    >
                      Live Demo
                    </GameButton>
                  </motion.div>
                </motion.div>
              </motion.div>
                </div>
            
            {/* Clash of Clout */}
            <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="md:w-5/12"
              >
                <div className="card-red rounded-lg overflow-hidden">
                  <div className="relative aspect-video bg-deep-blue overflow-hidden">
                    <Image
                      src="/Coc.webp"
                      alt="Clash of Clout"
                      width={500}
                      height={300}
                      className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0012] to-transparent opacity-70"></div>
                    <div className="absolute bottom-4 left-4">
                      <GlitchText text="Clash of Clout" fontSize="1.5rem" className="z-10" highlightColor="var(--red-accent)" />
              </div>
                    <div className="absolute inset-0 bg-grid opacity-20"></div>
            </div>
          </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="md:w-7/12"
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#0a0012] border border-[#ff2c2c] text-[#ff2c2c] mb-3">
                  Winner at ETHGlobal's Agentic Ethereum
            </div>
                <h3 className="text-2xl font-bold mb-3 text-glow">Clash of Clout – AI Meme Battle Platform</h3>
                
                <p className="text-gray-300 mb-4">
                  Launched during ETHGlobal Agentic Hackathon; attracted over 500+ meme interactions and 100+ user votes in 36 hours.
                </p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="text-[#ff2c2c] mr-2 mt-1">◈</div>
                    <span className="text-gray-300">Gamified platform where AI-generated memes meet crypto trends, enabling users to stake, vote, and earn rewards.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-[#ff2c2c] mr-2 mt-1">◈</div>
                    <span className="text-gray-300">Integrated real-time engagement from Twitter and Discord, and generated meme templates using GAIA nodes.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-[#ff2c2c] mr-2 mt-1">◈</div>
                    <span className="text-gray-300">Built on Flow blockchain with reward distribution: 70% to creators, 20% stakers, 10% platform.</span>
                  </li>
                </ul>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="bg-[#0a0a0a] border border-[#2a2a2a] px-3 py-1 rounded-full text-sm">Next.js</div>
                  <div className="bg-[#0a0a0a] border border-[#2a2a2a] px-3 py-1 rounded-full text-sm">TypeScript</div>
                  <div className="bg-[#0a0a0a] border border-[#2a2a2a] px-3 py-1 rounded-full text-sm">Flow Testnet</div>
                  <div className="bg-[#0a0a0a] border border-[#2a2a2a] px-3 py-1 rounded-full text-sm">Express</div>
                  <div className="bg-[#0a0a0a] border border-[#2a2a2a] px-3 py-1 rounded-full text-sm">Collab.Land AI-Agent-Kit</div>
                  <div className="bg-[#0a0a0a] border border-[#2a2a2a] px-3 py-1 rounded-full text-sm">GAIANET</div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <GameButton 
                    href="https://ethglobal.com/showcase/clash-of-clout-qedfz" 
                    target="_blank" 
                    type="danger"
                    size="sm"
                    icon={
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    }
                  >
                    Project Showcase
                  </GameButton>
                  
                  <GameButton 
                    href="https://github.com/juSt-jeLLy/Clash-of-Clout" 
                    target="_blank"
                    type="secondary"
                    size="sm"
                    icon={
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    }
                  >
                    Source Code
                  </GameButton>
                  
                  <GameButton 
                    href="https://clash-of-clout-azure.vercel.app/" 
                    target="_blank"
                    type="primary"
                    size="sm"
                    icon={
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    }
                  >
                    Live Demo
                  </GameButton>
                </div>
              </motion.div>
              </div>
            
            {/* HireFree */}
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="md:w-5/12"
              >
                <div className="card-glow rounded-lg overflow-hidden">
                  <div className="relative aspect-video bg-deep-blue overflow-hidden">
                    <Image
                      src="/logojj.png"
                      alt="HireFree"
                      width={500}
                      height={300}
                      className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000f2b] to-transparent opacity-70"></div>
                    <div className="absolute bottom-4 left-4">
                      <GlitchText text="HireFree" fontSize="1.5rem" className="z-10" />
            </div>
                    <div className="absolute inset-0 bg-grid opacity-20"></div>
          </div>
            </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="md:w-7/12"
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#000f2b] border border-[#00eaff] text-[#00eaff] mb-3">
                  Finalist at Request Network Hackathon
                </div>
                <h3 className="text-2xl font-bold mb-3 text-glow">HireFree – Decentralized Freelance Platform</h3>
                
                <p className="text-gray-300 mb-4">
                  Streamlined freelance payments for small teams; demo tracked 3 milestone-based collaborations totaling $1,500 in simulated invoices.
                </p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="text-[#00eaff] mr-2 mt-1">◈</div>
                    <span className="text-gray-300">Milestone-Based Payments: Automates invoice generation and payments with Request Network.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-[#00eaff] mr-2 mt-1">◈</div>
                    <span className="text-gray-300">Blockchain-Verified Profiles: Immutable, tamper-proof portfolios.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-[#00eaff] mr-2 mt-1">◈</div>
                    <span className="text-gray-300">Real-Time Notifications: Delivered via XMTP + Converse app integration.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-[#00eaff] mr-2 mt-1">◈</div>
                    <span className="text-gray-300">Smart Contract Tracking: Ensures transparent, dispute-free workflows and fund release.</span>
                  </li>
                </ul>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="bg-[#0a0a0a] border border-[#2a2a2a] px-3 py-1 rounded-full text-sm">React.js</div>
                  <div className="bg-[#0a0a0a] border border-[#2a2a2a] px-3 py-1 rounded-full text-sm">Solidity</div>
                  <div className="bg-[#0a0a0a] border border-[#2a2a2a] px-3 py-1 rounded-full text-sm">Request Network</div>
                  <div className="bg-[#0a0a0a] border border-[#2a2a2a] px-3 py-1 rounded-full text-sm">XMTP</div>
                  <div className="bg-[#0a0a0a] border border-[#2a2a2a] px-3 py-1 rounded-full text-sm">Hardhat</div>
                  <div className="bg-[#0a0a0a] border border-[#2a2a2a] px-3 py-1 rounded-full text-sm">Ethers.js</div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <GameButton 
                    href="https://dorahacks.io/buidl/20606" 
                    target="_blank" 
                    type="primary"
                    size="sm"
                    icon={
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    }
                  >
                    Project Showcase
                  </GameButton>
                  
                  <GameButton 
                    href="https://github.com/juSt-jeLLy/hirefree" 
                    target="_blank"
                    type="secondary"
                    size="sm"
                    icon={
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    }
                  >
                    Source Code
                  </GameButton>
                  
                  <GameButton 
                    href="https://hirefree.vercel.app/" 
                    target="_blank"
                    type="danger"
                    size="sm"
                    icon={
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    }
                  >
                    Live Demo
                  </GameButton>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-8 md:px-16 bg-deep-blue bg-opacity-30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <GlitchText text="SKILLS" className="text-3xl md:text-4xl font-bold mb-4" />
            <p className="text-gray-400 max-w-2xl mx-auto">My technical expertise and proficiencies.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Languages */}
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="card-glow p-6 rounded-lg relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-grid"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 flex items-center text-glow">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
                  Languages
                </h3>
                
                <motion.div 
                  className="space-y-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: { transition: { staggerChildren: 0.1 } },
                    hidden: {}
                  }}
                >
                  <motion.div 
                    className="bg-[#000a16] p-3 rounded border border-[#00eaff] border-opacity-30 hover:border-opacity-70 transition-colors group"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                    }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">TypeScript</span>
                      <span className="text-[#00eaff] text-sm group-hover:animate-pulse">Advanced</span>
            </div>
                    <div className="h-1.5 bg-[#001a33] rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-[#00eaff] rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "90%" }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                  
                  <div className="bg-[#000a16] p-3 rounded border border-[#00eaff] border-opacity-30 hover:border-opacity-70 transition-colors group">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">JavaScript</span>
                      <span className="text-[#00eaff] text-sm group-hover:animate-pulse">Advanced</span>
                </div>
                    <div className="h-1.5 bg-[#001a33] rounded-full overflow-hidden">
                      <div className="h-full bg-[#00eaff] rounded-full w-[90%]"></div>
              </div>
                  </div>
                  
                  <div className="bg-[#000a16] p-3 rounded border border-[#00eaff] border-opacity-30 hover:border-opacity-70 transition-colors group">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Solidity</span>
                      <span className="text-[#00eaff] text-sm group-hover:animate-pulse">Advanced</span>
                    </div>
                    <div className="h-1.5 bg-[#001a33] rounded-full overflow-hidden">
                      <div className="h-full bg-[#00eaff] rounded-full w-[85%]"></div>
                    </div>
                </div>
                
                  <div className="bg-[#000a16] p-3 rounded border border-[#00eaff] border-opacity-30 hover:border-opacity-70 transition-colors group">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">HTML/CSS</span>
                      <span className="text-[#00eaff] text-sm group-hover:animate-pulse">Advanced</span>
              </div>
                    <div className="h-1.5 bg-[#001a33] rounded-full overflow-hidden">
                      <div className="h-full bg-[#00eaff] rounded-full w-[90%]"></div>
            </div>
          </div>
                </motion.div>
        </div>
            </motion.div>
            
            {/* Frameworks / Libraries */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="card-glow p-6 rounded-lg relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-grid"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 flex items-center text-glow">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                  Frameworks / Libraries
                </h3>
                
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-[#000a16] p-3 rounded border border-[#00eaff] border-opacity-30 hover:border-opacity-70 transition-colors flex items-center justify-center text-center">
                    <span className="font-medium">React.js</span>
              </div>
              
                  <div className="bg-[#000a16] p-3 rounded border border-[#00eaff] border-opacity-30 hover:border-opacity-70 transition-colors flex items-center justify-center text-center">
                    <span className="font-medium">Next.js</span>
                  </div>
                  
                  <div className="bg-[#000a16] p-3 rounded border border-[#00eaff] border-opacity-30 hover:border-opacity-70 transition-colors flex items-center justify-center text-center">
                    <span className="font-medium">Redux</span>
                </div>
                  
                  <div className="bg-[#000a16] p-3 rounded border border-[#00eaff] border-opacity-30 hover:border-opacity-70 transition-colors flex items-center justify-center text-center">
                    <span className="font-medium">Node.js</span>
                  </div>
                  
                  <div className="bg-[#000a16] p-3 rounded border border-[#00eaff] border-opacity-30 hover:border-opacity-70 transition-colors flex items-center justify-center text-center">
                    <span className="font-medium">Express.js</span>
                </div>
                  
                  <div className="bg-[#000a16] p-3 rounded border border-[#00eaff] border-opacity-30 hover:border-opacity-70 transition-colors flex items-center justify-center text-center">
                    <span className="font-medium">Tailwind CSS</span>
              </div>
                  
                  <div className="bg-[#000a16] p-3 rounded border border-[#00eaff] border-opacity-30 hover:border-opacity-70 transition-colors flex items-center justify-center text-center">
                    <span className="font-medium">Socket.io</span>
            </div>
            
                  <div className="bg-[#000a16] p-3 rounded border border-[#00eaff] border-opacity-30 hover:border-opacity-70 transition-colors flex items-center justify-center text-center">
                    <span className="font-medium">MongoDB</span>
              </div>
                </div>
              </div>
            </motion.div>
            
            {/* Blockchain / Web3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card-glow p-6 rounded-lg relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-grid"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 flex items-center text-glow">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  Blockchain / Web3
                </h3>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#000a16] p-3 rounded border border-[#00eaff] border-opacity-30 hover:border-opacity-70 transition-colors flex items-center justify-center text-center">
                    <span className="font-medium">Ethers.js</span>
                  </div>
                  
                  <div className="bg-[#000a16] p-3 rounded border border-[#00eaff] border-opacity-30 hover:border-opacity-70 transition-colors flex items-center justify-center text-center">
                    <span className="font-medium">Hardhat</span>
                </div>
                  
                  <div className="bg-[#000a16] p-3 rounded border border-[#00eaff] border-opacity-30 hover:border-opacity-70 transition-colors flex items-center justify-center text-center">
                    <span className="font-medium">WalletConnect</span>
                  </div>
                  
                  <div className="bg-[#000a16] p-3 rounded border border-[#00eaff] border-opacity-30 hover:border-opacity-70 transition-colors flex items-center justify-center text-center">
                    <span className="font-medium">XMTP</span>
                </div>
                  
                  <div className="bg-[#000a16] p-3 rounded border border-[#00eaff] border-opacity-30 hover:border-opacity-70 transition-colors flex items-center justify-center text-center">
                    <span className="font-medium">Scaffold-ETH 2</span>
              </div>
                  
                  <div className="bg-[#000a16] p-3 rounded border border-[#00eaff] border-opacity-30 hover:border-opacity-70 transition-colors flex items-center justify-center text-center">
                    <span className="font-medium">Flow Blockchain</span>
            </div>
            
                  <div className="bg-[#000a16] p-3 rounded border border-[#00eaff] border-opacity-30 hover:border-opacity-70 transition-colors flex items-center justify-center text-center">
                    <span className="font-medium">Polygon</span>
              </div>
              
                  <div className="bg-[#000a16] p-3 rounded border border-[#00eaff] border-opacity-30 hover:border-opacity-70 transition-colors flex items-center justify-center text-center">
                    <span className="font-medium">ENS</span>
                  </div>
                  
                  <div className="bg-[#000a16] p-3 rounded border border-[#00eaff] border-opacity-30 hover:border-opacity-70 transition-colors flex items-center justify-center text-center">
                    <span className="font-medium">RequestNetwork</span>
                </div>
                  
                  <div className="bg-[#000a16] p-3 rounded border border-[#00eaff] border-opacity-30 hover:border-opacity-70 transition-colors flex items-center justify-center text-center">
                    <span className="font-medium">Tableland</span>
                  </div>
                  
                  <div className="bg-[#000a16] p-3 rounded border border-[#00eaff] border-opacity-30 hover:border-opacity-70 transition-colors flex items-center justify-center text-center">
                    <span className="font-medium">1inch Fusion+</span>
                </div>
                  
                  <div className="bg-[#000a16] p-3 rounded border border-[#00eaff] border-opacity-30 hover:border-opacity-70 transition-colors flex items-center justify-center text-center">
                    <span className="font-medium">Collab.Land</span>
              </div>
            </div>
              </div>
            </motion.div>
            
            {/* Tools / DevOps */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="card-glow p-6 rounded-lg relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-grid"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 flex items-center text-glow">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  Tools / DevOps
                </h3>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#000a16] p-3 rounded border border-[#00eaff] border-opacity-30 hover:border-opacity-70 transition-colors flex items-center justify-center text-center">
                    <span className="font-medium">Git/GitHub</span>
                  </div>
                  
                  <div className="bg-[#000a16] p-3 rounded border border-[#00eaff] border-opacity-30 hover:border-opacity-70 transition-colors flex items-center justify-center text-center">
                    <span className="font-medium">Docker</span>
                </div>
                  
                  <div className="bg-[#000a16] p-3 rounded border border-[#00eaff] border-opacity-30 hover:border-opacity-70 transition-colors flex items-center justify-center text-center">
                    <span className="font-medium">Postman</span>
                  </div>
                </div>
              </div>
            </motion.div>
            

            
            {/* Security / Auditing */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="card-glow p-6 rounded-lg relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-grid"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 flex items-center text-glow">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                  Security / Auditing
                </h3>
                
                <p className="text-gray-300 mb-4">
                  Completed CTFs including Ethernaut (OpenZeppelin), conducted smart contract audits; wrote unit and integration tests.
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#000a16] p-3 rounded border border-[#00eaff] border-opacity-30 hover:border-opacity-70 transition-colors flex items-center justify-center text-center">
                    <span className="font-medium">Smart Contract Auditing</span>
              </div>
              
                  
                  <div className="bg-[#000a16] p-3 rounded border border-[#00eaff] border-opacity-30 hover:border-opacity-70 transition-colors flex items-center justify-center text-center">
                    <span className="font-medium">Ethernaut CTF</span>
                  </div>
                  
                  <div className="bg-[#000a16] p-3 rounded border border-[#00eaff] border-opacity-30 hover:border-opacity-70 transition-colors flex items-center justify-center text-center">
                    <span className="font-medium">Unit Testing</span>
                </div>
                  
                  <div className="bg-[#000a16] p-3 rounded border border-[#00eaff] border-opacity-30 hover:border-opacity-70 transition-colors flex items-center justify-center text-center">
                    <span className="font-medium">Integration Testing</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education & Extracurriculars Section */}
      <section id="education" className="py-20 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <GlitchText text="EDUCATION & ACTIVITIES" className="text-3xl md:text-4xl font-bold mb-4" />
            <p className="text-gray-400 max-w-2xl mx-auto">Academic background and extracurricular involvement</p>
          </motion.div>
            
          <div className="grid md:grid-cols-2 gap-10">
            {/* Education */}
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                type: "spring", 
                stiffness: 100,
                damping: 15 
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 0 25px var(--glow-blue), 0 0 35px var(--glow-blue)'
              }}
            >
              <div className="card-glow p-6 rounded-lg relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-grid"></div>
                
                {/* Digital grid animation */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00eaff] to-transparent opacity-10"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2, 
                    ease: "linear",
                    repeatDelay: 1
                  }}
                />
                
                <motion.div 
                  className="absolute -bottom-2 -right-2 w-32 h-32 opacity-10"
                  animate={{ 
                    rotate: 360,
                    opacity: [0.1, 0.15, 0.1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    opacity: { duration: 3, repeat: Infinity, yoyo: true }
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[#00eaff]">
                    <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                    <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                    <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
              </svg>
                </motion.div>
                
                {/* Circuit lines animation */}
                <motion.div
                  className="absolute inset-0 overflow-hidden pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  <svg width="100%" height="100%" viewBox="0 0 400 400" className="absolute">
                    <motion.path
                      d="M20,100 L80,100 L100,120 L150,120"
                      stroke="#00eaff"
                      strokeWidth="0.5"
                      strokeDasharray="200"
                      strokeDashoffset="200"
                      fill="none"
                      initial={{ strokeDashoffset: 200 }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ duration: 1.5, delay: 0.3 }}
                    />
                    <motion.path
                      d="M380,50 L320,50 L300,70 L300,180 L280,200 L100,200"
                      stroke="#00eaff"
                      strokeWidth="0.5"
                      strokeDasharray="600"
                      strokeDashoffset="600"
                      fill="none"
                      initial={{ strokeDashoffset: 600 }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                  </svg>
                </motion.div>
                <div className="relative z-10">
                  <motion.h3 
                    className="text-xl font-bold mb-6 flex items-center text-glow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                    Academic Background
                  </motion.h3>
                  
                  <div className="space-y-6">
                    <motion.div 
                      className="bg-[#000a16] p-5 rounded border border-[#00eaff] border-opacity-30 hover:border-opacity-70 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.02, 
                        boxShadow: "0 0 15px rgba(0, 234, 255, 0.3)"
                      }}
                    >
                      <h4 className="font-bold text-lg">The LNM Institute of Information Technology</h4>
                      <p className="text-gray-400 mb-1">Bachelor of Engineering (B.E.) in Electronics and Communication Engineering</p>
                      <p className="text-gray-400 mb-3">2021 - 2025 | Jaipur, Rajasthan</p>
                      <div className="border-t border-[#00eaff] border-opacity-20 pt-3 mt-3">
                        <p className="text-gray-300 mb-3">Relevant coursework and achievements:</p>
                        <div className="flex flex-wrap gap-2">
                          {['Blockchain Research', 'Data Structures & Algorithms', 'Computer Networks', 'Technical Writing'].map((course, index) => (
                            <motion.span 
                              key={course}
                              className="bg-[#001a33] px-2 py-1 rounded text-xs"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ 
                                duration: 0.3, 
                                delay: 0.3 + (index * 0.1) 
                              }}
                              whileHover={{ 
                                scale: 1.05, 
                                backgroundColor: '#002a4d',
                                boxShadow: "0 0 8px rgba(0, 234, 255, 0.4)"
                              }}
                            >
                              {course}
                            </motion.span>
                          ))}
                </div>
              </div>
                    </motion.div>
                  </div>
                </div>
            </div>
            </motion.div>
            
            {/* Extracurricular Activities */}
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                type: "spring", 
                stiffness: 100,
                damping: 15 
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 0 25px var(--glow-blue), 0 0 35px var(--glow-blue)'
              }}
            >
              <div className="card-glow p-6 rounded-lg relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-grid"></div>
                
                {/* Digital grid animation */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00eaff] to-transparent opacity-10"
                  initial={{ x: '100%' }}
                  animate={{ x: '-100%' }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2, 
                    ease: "linear",
                    repeatDelay: 1
                  }}
                />
                
                <motion.div 
                  className="absolute -bottom-2 -right-2 w-32 h-32 opacity-10"
                  animate={{ 
                    rotate: 360,
                    opacity: [0.1, 0.15, 0.1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    opacity: { duration: 3, repeat: Infinity, yoyo: true }
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[#00eaff]">
                    <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                      </svg>
                </motion.div>
                
                {/* Circuit lines animation */}
                <motion.div
                  className="absolute inset-0 overflow-hidden pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  <svg width="100%" height="100%" viewBox="0 0 400 400" className="absolute">
                    <motion.path
                      d="M380,100 L320,100 L300,120 L250,120"
                      stroke="#00eaff"
                      strokeWidth="0.5"
                      strokeDasharray="200"
                      strokeDashoffset="200"
                      fill="none"
                      initial={{ strokeDashoffset: 200 }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ duration: 1.5, delay: 0.3 }}
                    />
                    <motion.path
                      d="M20,50 L80,50 L100,70 L100,180 L120,200 L300,200"
                      stroke="#00eaff"
                      strokeWidth="0.5"
                      strokeDasharray="600"
                      strokeDashoffset="600"
                      fill="none"
                      initial={{ strokeDashoffset: 600 }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                  </svg>
                </motion.div>
                
                <div className="relative z-10">
                  <motion.h3 
                    className="text-xl font-bold mb-6 flex items-center text-glow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Extracurricular Activities
                  </motion.h3>
                  
                  <div className="space-y-6">
                    <motion.div 
                      className="bg-[#000a16] p-5 rounded border border-[#00eaff] border-opacity-30 hover:border-opacity-70 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.02, 
                        boxShadow: "0 0 15px rgba(0, 234, 255, 0.3)"
                      }}
                    >
                      <h4 className="font-bold text-lg">Blockchain Club</h4>
                      <p className="text-gray-400 mb-1">Core Member</p>
                      <p className="text-gray-400 mb-3">2022 - Present</p>
                      
                      <div className="space-y-2 mt-2">
                        <div className="flex items-start">
                          <motion.div 
                            className="text-[#00eaff] mr-2 mt-1"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >◆</motion.div>
                          <span className="text-gray-300">Organized blockchain hackathons and workshops for 200+ students</span>
                    </div>
                    <div className="flex items-start">
                          <motion.div 
                            className="text-[#00eaff] mr-2 mt-1"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                          >◆</motion.div>
                          <span className="text-gray-300">Led technical sessions on smart contract development</span>
                    </div>
                  </div>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-[#000a16] p-5 rounded border border-[#00eaff] border-opacity-30 hover:border-opacity-70 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.02, 
                        boxShadow: "0 0 15px rgba(0, 234, 255, 0.3)"
                      }}
                    >
                      <h4 className="font-bold text-lg">ETHGlobal Hackathons</h4>
                      <p className="text-gray-400 mb-1">Regular Participant</p>
                      <p className="text-gray-400 mb-3">2023 - Present</p>
                      
                      <div className="space-y-2 mt-2">
                  <div className="flex items-start">
                          <motion.div 
                            className="text-[#00eaff] mr-2 mt-1"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >◆</motion.div>
                          <span className="text-gray-300">Participated in global blockchain hackathons including ETH Taipei and Agentic Ethereum</span>
                  </div>
                        <div className="flex items-start">
                          <motion.div 
                            className="text-[#00eaff] mr-2 mt-1"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                          >◆</motion.div>
                          <span className="text-gray-300">Mentored junior team members in Web3 development techniques</span>
                </div>
                </div>
                    </motion.div>
              </div>
            </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

           {/* Contact Section */}
      <section id="contact" className="py-20 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <GlitchText text="CONTACT" className="text-3xl md:text-4xl font-bold mb-4" />
            <p className="text-gray-400 max-w-2xl mx-auto">Get in touch for collaborations or opportunities.</p>
            </div>
            
          <div className="flex flex-col lg:flex-row gap-10">
            <motion.div 
              initial={{ opacity: 0, x: -50, rotateY: 10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, type: "spring", damping: 15 }}
              viewport={{ once: true }}
              className="lg:w-1/2 perspective-1000"
              whileHover={{ 
                scale: 1.03, 
                transition: { duration: 0.3 }
              }}
            >
              <div className="card-glow p-8 rounded-lg relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-grid"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 text-glow">Get In Touch</h3>
                  <p className="text-gray-300 mb-8">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the following channels.
                </p>
                
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-[#000f2b] p-3 rounded-full border border-[#00eaff] mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00eaff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                        <h4 className="font-bold mb-1">Phone</h4>
                        <p className="text-gray-300">+91 9409664725</p>
                    </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-[#000f2b] p-3 rounded-full border border-[#00eaff] mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00eaff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                        <h4 className="font-bold mb-1">Email</h4>
                        <p className="text-gray-300">yagneshpatel931@gmail.com</p>
                    </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-[#000f2b] p-3 rounded-full border border-[#00eaff] mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00eaff]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </div>
                    <div>
                        <h4 className="font-bold mb-1">LinkedIn</h4>
                        <a href="https://www.linkedin.com/in/yagnesh-markana-72aa10204/" target="_blank" className="text-[#00eaff] hover:underline">Yagnesh Markana</a>
                    </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-[#000f2b] p-3 rounded-full border border-[#00eaff] mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00eaff]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <div>
                        <h4 className="font-bold mb-1">GitHub</h4>
                        <a href="https://github.com/juSt-jeLLy" target="_blank" className="text-[#00eaff] hover:underline">juSt-jeLLy</a>
                    </div>
                </div>
              </div>
                  </div>
                </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="card-glow p-8 rounded-lg relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-grid"></div>
                <div className="relative z-10">
                  <div className="flex justify-between mb-6">
                    <h3 className="text-2xl font-bold text-glow">Current Status</h3>
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="ml-2 text-sm text-gray-300">Available</span>
  </div>
  </div>
                  
                  <div className="space-y-6 mb-8">
                    <div className="bg-[#000a16] p-4 rounded border border-[#00eaff] border-opacity-30 hover:border-opacity-70 transition-colors">
                      <h4 className="font-bold mb-2">Availability</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Available for full-time jobs</span>
                        </li>
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Open to internship opportunities</span>
                        </li>
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Available for freelance & contract work</span>
                        </li>
                      </ul>
</div>

                    <div className="bg-[#000a16] p-4 rounded border border-[#00eaff] border-opacity-30 hover:border-opacity-70 transition-colors">
                      <h4 className="font-bold mb-2">Preferred Projects</h4>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-[#001a33] px-3 py-1 rounded-full text-sm">Blockchain Development</span>
                        <span className="bg-[#001a33] px-3 py-1 rounded-full text-sm">Smart Contracts</span>
                        <span className="bg-[#001a33] px-3 py-1 rounded-full text-sm">Web3 Integration</span>
                        <span className="bg-[#001a33] px-3 py-1 rounded-full text-sm">DeFi Applications</span>
                        <span className="bg-[#001a33] px-3 py-1 rounded-full text-sm">AI-Blockchain</span>
                    </div>
                  </div>
                </div>
                
                  <div className="text-center">
                    <GameButton 
                    href="mailto:yagneshpatel931@gmail.com" 
                      type="primary"
                      icon={
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                      }
                    >
                      SEND A MESSAGE
                    </GameButton>
                </div>
              </div>
            </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 md:px-16 border-t border-[#00eaff] bg-[#000f2b] bg-opacity-30">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Yagnesh. All rights reserved.</p>
          <div className="flex items-center justify-center mt-4 gap-4">
            <a href="https://github.com/juSt-jeLLy" target="_blank" className="text-gray-400 hover:text-[#00eaff] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/yagnesh-markana-72aa10204/" target="_blank" className="text-gray-400 hover:text-[#00eaff] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="mailto:yagneshpatel931@gmail.com" className="text-gray-400 hover:text-[#00eaff] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-4">Built with Next.js, Tailwind CSS, and Three.js</p>
        </div>
      </footer>
    </div>
  )
}
