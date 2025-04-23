import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
          {/* Navigation */}
               {/* Navigation */}
      <nav className="py-6 px-8 md:px-16 border-b bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-blue-50 p-2 rounded-full border border-blue-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div className="text-xl font-bold text-gray-900">Yagnesh</div>
            </div>
            
            <div className="hidden md:flex gap-8">
              <Link href="/" className="relative group">
                <span className="text-gray-800 hover:text-blue-600 transition-colors">Home</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="#projects" className="relative group">
                <span className="text-gray-800 hover:text-blue-600 transition-colors">Projects</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="#skills" className="relative group">
                <span className="text-gray-800 hover:text-blue-600 transition-colors">Skills</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="#contact" className="relative group">
                <span className="text-gray-800 hover:text-blue-600 transition-colors">Contact</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden md:flex gap-3">
                <a href="https://github.com/juSt-jeLLy" target="_blank" className="text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-blue-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/yagnesh-markana-72aa10204/" target="_blank" className="text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-blue-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
              
              <Link 
                href="/resume.pdf" 
                target="_blank"
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors text-sm font-medium flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </Link>
              
              <button className="md:hidden text-gray-600 hover:text-blue-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>



            {/* Hero Section */}
            <section className="py-20 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-600 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-blue-600">
                <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd" />
                <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
              </svg>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-3/5">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Blockchain Developer</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Yagnesh</h1>
                <h2 className="text-2xl md:text-3xl text-gray-600 mb-6 flex items-center">
                  <span>Blockchain Developer</span>
                  <span className="mx-2 text-gray-400"></span>
                  <span className="text-blue-600"></span>
                </h2>
                
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Blockchain developer with experience in building decentralized applications (dApps), AI-driven solutions, and smart contracts. 
                  Proficient in React, Next.js, Solidity, and integrating blockchain technologies like Ethers.js and WalletConnect. 
                  Actively participated in hackathons, focusing on Web3, DeFi, and AI innovations.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <a 
                    href="/resume.pdf" 
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    View Resume
                  </a>
                  <a 
                    href="#projects" 
                    className="inline-flex items-center border border-gray-300 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Explore Work
                  </a>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-gray-500 text-sm">Connect with me:</span>
                  <div className="flex gap-3">
                    <a href="https://github.com/juSt-jeLLy" target="_blank" className="text-gray-600 hover:text-blue-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/yagnesh-markana-72aa10204/" target="_blank" className="text-gray-600 hover:text-blue-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="mailto:yagneshpatel931@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/5">
                <div className="bg-blue-50 p-6 rounded-lg shadow-md border border-blue-100">
                  <h3 className="text-xl font-bold mb-4 text-blue-700 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Core Expertise
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-100 hover:border-blue-300 transition-colors">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <span className="font-medium">Smart Contract Development</span>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-100 hover:border-blue-300 transition-colors">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                      <span className="font-medium">Web3 Integration</span>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-100 hover:border-blue-300 transition-colors">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="font-medium">DeFi Applications</span>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-100 hover:border-blue-300 transition-colors">
                      <div className="bg-blue-100 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <span className="font-medium">AI-Blockchain Integration</span>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-100 hover:border-blue-300 transition-colors">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <span className="font-medium">Modern Frontend Development</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accomplishments Section */}
      <section className="py-16 px-8 md:px-16 bg-gray-50">
        <h2 className="text-3xl font-bold mb-10 text-center">Accomplishments</h2>
        <div className="max-w-5xl mx-auto">
          {/* Timeline-style layout */}
          <div className="relative">
            {/* Center line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
            
            {/* First accomplishment - Left side */}
            <div className="md:flex mb-12">
              <div className="md:w-5/12 md:pr-8 md:text-right">
                <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-600 relative overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-blue-600">
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">Winner – ETHGlobal's Agentic Ethereum</h3>
                      <p className="text-gray-600 mb-1 text-sm">1710 hackers, 518 projects, 10 finalists, 94 countries</p>
                      <p className="text-gray-700 mb-2">Clash of Clout: AI-Powered Meme and Engagement Platform — Gaia/Collab.land Track and Flow Track ($3,500 Prize)</p>
                      <a 
                        href="https://ethglobal.com/showcase/clash-of-clout-ixvs9" 
                        target="_blank" 
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm"
                      >
                        <span>View Project Showcase</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Circle connector - visible only on md and up */}
              <div className="hidden md:flex items-center justify-center w-2/12">
                <div className="bg-blue-600 rounded-full w-6 h-6 border-4 border-white shadow-md z-10"></div>
              </div>
              
              <div className="md:w-5/12 md:pl-8 hidden md:block"></div>
            </div>
            
            {/* Second accomplishment - Right side */}
            <div className="md:flex mb-12">
              <div className="md:w-5/12 md:pr-8 hidden md:block"></div>
              
              {/* Circle connector - visible only on md and up */}
              <div className="hidden md:flex items-center justify-center w-2/12">
                <div className="bg-blue-600 rounded-full w-6 h-6 border-4 border-white shadow-md z-10"></div>
              </div>
              
              <div className="md:w-5/12 md:pl-8">
                <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-600 relative overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-blue-600">
                      <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">1st Place – ETHGlobal's ETH Taipei 2025</h3>
                      <p className="text-gray-600 mb-1 text-sm">530 hackers, 226 projects, 8 finalists, 43 countries</p>
                      <p className="text-gray-700 mb-2">AgentActs.eth: Decentralized AI Agents Builder — 1inch Fusion+ Integration Track (Prize won $4,000)</p>
                      <a 
                        href="https://ethglobal.com/showcase/agentacts-eth-9yjkl" 
                        target="_blank" 
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm"
                      >
                        <span>View Project Showcase</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Third accomplishment - Left side */}
            <div className="md:flex">
              <div className="md:w-5/12 md:pr-8 md:text-right">
                <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-600 relative overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-blue-600">
                      <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">Request Network End of Year Hackathon</h3>
                      <p className="text-gray-600 mb-1 text-sm">120+ participants, 40+ projects, 5 finalists</p>
                      <p className="text-gray-700 mb-2">HireFree: Decentralized Freelance Collaboration Platform — Streamlining milestone-based payments for freelancers</p>
                      <a 
                        href="https://devpost.com/software/hirefree" 
                        target="_blank" 
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm"
                      >
                        <span>View Project Showcase</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Circle connector - visible only on md and up */}
              <div className="hidden md:flex items-center justify-center w-2/12">
                <div className="bg-blue-600 rounded-full w-6 h-6 border-4 border-white shadow-md z-10"></div>
              </div>
              
              <div className="md:w-5/12 md:pl-8 hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>



      {/* Projects Section */}
      <section id="projects" className="py-16 px-8 md:px-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Project 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-40 h-40 opacity-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-blue-600">
                <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                <path fillRule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clipRule="evenodd" />
                <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
              </svg>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="hidden md:block flex-shrink-0">
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">AgentActs.eth – Decentralized AI Agent Builder</h3>
                <p className="text-gray-600 mb-4">1st Place Winner in 1inch Fusion+ Track at ETHGlobal Taipei</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                  <li>Developed platform enabling users to deploy decentralized AI agents; onboarded 50+ test agents across 4 integrated MCPs.</li>
                  <li>Integrated MCPs: Twitter (social data), 1inch (DeFi automation), Google Maps, and Hyperbrowser.</li>
                  <li>Built partner integrations with Polygon, ENS, and a Dockerized Python backend.</li>
                  <li>Pay-per-use model supports token-gated access and promotes creator revenue from agent usage.</li>
                </ul>
                <div className="flex flex-wrap gap-3 mt-4">
                  <a 
                    href="https://ethglobal.com/showcase/agentacts-eth-9yjkl" 
                    target="_blank" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors bg-blue-50 px-3 py-1 rounded-full"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>Project Showcase</span>
                  </a>
                  <a 
                    href="https://github.com/juSt-jeLLy/agentacts" 
                    target="_blank" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors bg-blue-50 px-3 py-1 rounded-full"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>Source Code</span>
                  </a>
                  <a 
                    href="https://agentacts.vercel.app" 
                    target="_blank" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors bg-blue-50 px-3 py-1 rounded-full"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-40 h-40 opacity-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-blue-600">
                <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clipRule="evenodd" />
              </svg>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="hidden md:block flex-shrink-0">
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Clash of Clout – AI Meme Battle Platform</h3>
                <p className="text-gray-600 mb-4">Winner at ETHGlobal's Agentic Ethereum Hackathon</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                  <li>Launched during ETHGlobal Agentic Hackathon; attracted over 500+ meme interactions and 100+ user votes in 36 hours.</li>
                  <li>Gamified platform where AI-generated memes meet crypto trends, enabling users to stake, vote, and earn rewards.</li>
                  <li>Integrated real-time engagement from Twitter and Discord, and generated meme templates using GAIA nodes.</li>
                  <li>Built on Flow blockchain with reward distribution: 70% to creators, 20% stakers, 10% platform.</li>
                  <li>Tech Stack: Next.js, TypeScript, Flow Testnet, Express, Collab.Land AI-Agent-Kit, GAIANET, Twitter API.</li>
                </ul>
                <div className="flex flex-wrap gap-3 mt-4">
                  <a 
                    href="https://ethglobal.com/showcase/clash-of-clout-ixvs9" 
                    target="_blank" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors bg-blue-50 px-3 py-1 rounded-full"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>Project Showcase</span>
                  </a>
                  <a 
                    href="https://github.com/juSt-jeLLy/clash-of-clout" 
                    target="_blank" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors bg-blue-50 px-3 py-1 rounded-full"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>Source Code</span>
                  </a>
                  <a 
                    href="https://clash-of-clout.vercel.app" 
                    target="_blank" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors bg-blue-50 px-3 py-1 rounded-full"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-40 h-40 opacity-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-blue-600">
                <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
              </svg>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="hidden md:block flex-shrink-0">
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">HireFree – Decentralized Freelance Collaboration Platform</h3>
                <p className="text-gray-600 mb-4">Finalist at Request Network End of Year Hackathon</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                  <li>Streamlined freelance payments for small teams; demo tracked 3 milestone-based collaborations totaling $1,500 in simulated invoices.</li>
                  <li>Milestone-Based Payments: Automates invoice generation and payments with Request Network.</li>
                  <li>Blockchain-Verified Profiles: Immutable, tamper-proof portfolios.</li>
                  <li>Real-Time Notifications: Delivered via XMTP + Converse app integration.</li>
                  <li>Smart Contract Tracking: Ensures transparent, dispute-free workflows and fund release.</li>
                </ul>
                <div className="flex flex-wrap gap-3 mt-4">
                  <a 
                    href="https://devpost.com/software/hirefree" 
                    target="_blank" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors bg-blue-50 px-3 py-1 rounded-full"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>Project Showcase</span>
                  </a>
                  <a 
                    href="https://github.com/juSt-jeLLy/hirefree" 
                    target="_blank" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors bg-blue-50 px-3 py-1 rounded-full"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>Source Code</span>
                  </a>
                  <a 
                    href="https://hirefree.vercel.app" 
                    target="_blank" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors bg-blue-50 px-3 py-1 rounded-full"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



          {/* Education Section */}
          <section className="py-16 px-8 md:px-16 bg-gray-50">
        <h2 className="text-3xl font-bold mb-10 text-center">Education</h2>
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-600 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-blue-600">
                <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
              </svg>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="hidden md:block flex-shrink-0">
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">The LNM Institute of Information Technology</h3>
                <p className="text-gray-600 mb-1">Bachelor of Engineering (B.E.) in Electronics and Communication Engineering | 2021 - 2025</p>
                <p className="text-gray-700">Jaipur, Rajasthan</p>
                
                <div className="flex flex-wrap gap-2 mt-3">
                
                  <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    <span>Blockchain Research</span>
                  </span>
                  <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>Technical Club Member</span>
                  </span>
                </div>
                
         
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Technical Skills Section */}
            {/* Technical Skills Section */}
            <section id="skills" className="py-16 px-8 md:px-16">
            <h2 className="text-3xl font-bold mb-10 text-center">Technical Skills</h2>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Languages */}
            <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-600 relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-blue-600">
                  <path fillRule="evenodd" d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z" clipRule="evenodd" />
                </svg>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="hidden md:block flex-shrink-0">
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span>TypeScript</span>
                    </span>
                    <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span>JavaScript</span>
                    </span>
                    <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span>Solidity</span>
                    </span>
                    <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span>HTML</span>
                    </span>
                    <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span>CSS</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Frameworks / Libraries */}
            <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-600 relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-blue-600">
                  <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                </svg>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="hidden md:block flex-shrink-0">
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3">Frameworks / Libraries</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">React.js</span>
                    <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">Next.js</span>
                    <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">Redux</span>
                    <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">Node.js</span>
                    <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">Express.js</span>
                    <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                    <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">Socket.io</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Blockchain / Web3 */}
            <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-600 relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-blue-600">
                  <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875z" />
                  <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 001.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 001.897 1.384C6.809 12.164 9.315 12.75 12 12.75z" />
                  <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 15.914 9.315 16.5 12 16.5z" />
                  <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 19.664 9.315 20.25 12 20.25z" />
                </svg>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="hidden md:block flex-shrink-0">
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3">Blockchain / Web3</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">Ethers.js</span>
                    <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">Hardhat</span>
                    <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">WalletConnect</span>
                    <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">XMTP</span>
                    <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">Scaffold-ETH 2</span>
                    <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">Flow Blockchain</span>
                    <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">Polygon</span>
                    <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">RequestNetwork</span>
                    <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">ENS</span>
                    <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">Tableland</span>
                    <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">1inch Fusion+</span>
                    <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">Collab.Land</span>
                    <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">GAIA Network</span>
                    <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">wagmi</span>
                    <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">MongoDB</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Tools / DevOps */}
            <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-600 relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-blue-600">
                  <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clipRule="evenodd" />
                </svg>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="hidden md:block flex-shrink-0">
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3">Tools / DevOps</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">Git/GitHub</span>
                    <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">Docker</span>
                    <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">Postman</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Security / Auditing */}
            <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-600 relative overflow-hidden col-span-1 md:col-span-2">
              {/* Background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-blue-600">
                  <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="hidden md:block flex-shrink-0">
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3">Security / Auditing</h3>
                  <p className="text-gray-700 mb-3">Completed CTFs including Ethernaut (OpenZeppelin), conducted smart contract audits; wrote unit and integration tests.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span>Smart Contract Auditing</span>
                    </span>
                    <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span>Ethernaut CTF</span>
                    </span>
                    <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span>Unit & Integration Testing</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

           {/* Extracurricular Section */}
           <section className="py-16 px-8 md:px-16 bg-gray-50">
        <h2 className="text-3xl font-bold mb-10 text-center">Extracurricular</h2>
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-600 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-blue-600">
                <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
              </svg>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="hidden md:block flex-shrink-0">
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">Campus Involvement & Activities</h3>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Social Welfare</h4>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-700">
                      Active member of CWPH (Club for Welfare of Public Health), organizing community service events and health awareness campaigns across campus and local communities.
                    </p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Sports</h4>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-700">
                        Cricket team member representing LNMIIT in intercollegiate tournaments, contributing to team's quarterfinal finish in regional championship.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-700">
                        Football team player, participating in intramural competitions and fostering team-building skills through regular practice and tournaments.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Technical Community</h4>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-700">
                      Organized blockchain workshops and hackathon preparation sessions for junior students, mentoring 15+ students in Web3 development fundamentals.
                    </p>
                  </div>
                </div>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Leadership</span>
                  </span>
                  <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Teamwork</span>
                  </span>
                  <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Community Service</span>
                  </span>
                  <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Mentoring</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


           {/* Contact Section */}
           <section id="contact" className="py-16 px-8 md:px-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Contact</h2>
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-600 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-blue-600">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
            </div>
            
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Get In Touch</h3>
                </div>
                
                <p className="text-gray-700 mb-6">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the following channels.
                </p>
                
                <div className="space-y-4">
                  <a href="tel:+919409664725" className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                    <div className="bg-blue-100 p-2 rounded-full group-hover:bg-blue-200 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Phone</div>
                      <div className="text-gray-700 group-hover:text-blue-600 transition-colors">+91 9409664725</div>
                    </div>
                  </a>
                  
                  <a href="mailto:yagneshpatel931@gmail.com" className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                    <div className="bg-blue-100 p-2 rounded-full group-hover:bg-blue-200 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Email</div>
                      <div className="text-gray-700 group-hover:text-blue-600 transition-colors">yagneshpatel931@gmail.com</div>
                    </div>
                  </a>
                  
                  <a href="https://www.linkedin.com/in/yagnesh-markana-72aa10204/" target="_blank" className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                    <div className="bg-blue-100 p-2 rounded-full group-hover:bg-blue-200 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">LinkedIn</div>
                      <div className="text-gray-700 group-hover:text-blue-600 transition-colors">Yagnesh Markana</div>
                    </div>
                  </a>
                  
                  <a href="https://github.com/juSt-jeLLy" target="_blank" className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                    <div className="bg-blue-100 p-2 rounded-full group-hover:bg-blue-200 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">GitHub</div>
                      <div className="text-gray-700 group-hover:text-blue-600 transition-colors">juSt-jeLLy</div>
                    </div>
                  </a>
                </div>
              </div>
              
              <div className="md:w-1/2 mt-8 md:mt-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Availability</h3>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                <div className="mb-4">
  <h4 className="font-semibold text-blue-700 mb-2">Current Status</h4>
  <div className="flex items-center gap-2 mb-1">
    <span className="inline-flex h-3 w-3 bg-green-500 rounded-full"></span>
    <span className="text-gray-700">Available for full-time jobs</span>
  </div>
  <div className="flex items-center gap-2 mb-1">
    <span className="inline-flex h-3 w-3 bg-green-500 rounded-full"></span>
    <span className="text-gray-700">Open to internship opportunities</span>
  </div>
  <div className="flex items-center gap-2">
    <span className="inline-flex h-3 w-3 bg-green-500 rounded-full"></span>
    <span className="text-gray-700">Available for freelance & contract work</span>
  </div>
</div>

        
                  
                  <div>
                    <h4 className="font-semibold text-blue-700 mb-2">Preferred Projects</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center text-blue-600 bg-white px-3 py-1 rounded-full text-sm border border-blue-100">
                        Blockchain Development
                      </span>
                      <span className="inline-flex items-center text-blue-600 bg-white px-3 py-1 rounded-full text-sm border border-blue-100">
                        Smart Contracts
                      </span>
                      <span className="inline-flex items-center text-blue-600 bg-white px-3 py-1 rounded-full text-sm border border-blue-100">
                        Web3 Integration
                      </span>
                      <span className="inline-flex items-center text-blue-600 bg-white px-3 py-1 rounded-full text-sm border border-blue-100">
                        DeFi Applications
                      </span>
                      <span className="inline-flex items-center text-blue-600 bg-white px-3 py-1 rounded-full text-sm border border-blue-100">
                        AI-Blockchain
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <a 
                    href="mailto:yagneshpatel931@gmail.com" 
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Send a Message
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 md:px-16 border-t text-center text-gray-600">
        <p>© {new Date().getFullYear()} Yagnesh Patel. All rights reserved.</p>
      </footer>
    </div>
  );
}
