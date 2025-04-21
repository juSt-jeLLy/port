import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Navigation */}
      <nav className="flex justify-between items-center py-6 px-8 md:px-16 border-b">
        <div className="text-xl font-bold">Yagnesh Patel</div>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link href="https://github.com/juSt-jeLLy" target="_blank" className="hover:text-blue-600 transition-colors">GitHub</Link>
          <Link href="https://www.linkedin.com/in/yagnesh-markana-72aa10204/" target="_blank" className="hover:text-blue-600 transition-colors">LinkedIn</Link>
          <Link href="/resume.pdf" target="_blank" className="hover:text-blue-600 transition-colors">Resume</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Yagnesh Patel</h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">Blockchain Developer</h2>
          <p className="mb-6 text-gray-700">
            Blockchain developer with experience in building decentralized applications (dApps), AI-driven solutions, and smart contracts. 
            Proficient in React, Next.js, Solidity, and integrating blockchain technologies like Ethers.js and WalletConnect. 
            Actively participated in hackathons, focusing on Web3, DeFi, and AI innovations.
          </p>
          <div className="flex gap-4">
            <Link 
              href="/resume.pdf" 
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              View Resume
            </Link>
            <Link 
              href="#projects" 
              className="border border-gray-300 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              Explore Work
            </Link>
          </div>
        </div>
        <div className="md:w-1/3 mt-10 md:mt-0">
          {/* Replacing the profile image with a skills highlight card */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-md border border-blue-100">
            <h3 className="text-xl font-bold mb-3 text-blue-700">Core Expertise</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Smart Contract Development</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Web3 Integration</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>DeFi Applications</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>AI-Blockchain Integration</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Modern Frontend Development</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

           {/* Accomplishments Section */}
           <section className="py-16 px-8 md:px-16 bg-gray-50">
        <h2 className="text-3xl font-bold mb-10 text-center">Accomplishments</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
            <h3 className="text-xl font-bold mb-2">Winner – ETHGlobal's Agentic Ethereum</h3>
            <p className="text-gray-600 mb-2">1710 hackers, 518 projects, 10 finalists, 94 countries</p>
            <p className="text-gray-700 mb-3">Clash of Clout: AI-Powered Meme and Engagement Platform — Gaia/Collab.land Track and Flow Track ($3,500 Prize)</p>
            <a 
              href="https://ethglobal.com/showcase/clash-of-clout-qedfz" 
              target="_blank" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span>View Project Showcase</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
            <h3 className="text-xl font-bold mb-2">1st Place – ETHGlobal's ETH Taipei 2025</h3>
            <p className="text-gray-600 mb-2">530 hackers, 226 projects, 8 finalists, 43 countries</p>
            <p className="text-gray-700 mb-3">AgentActs.eth: Decentralized AI Agents Builder — 1inch Fusion+ Integration Track (Prize won $4,000)</p>
            <a 
              href="https://ethglobal.com/showcase/agentacts-eth-89iga" 
              target="_blank" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span>View Project Showcase</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
            <h3 className="text-xl font-bold mb-2">Request Network End of Year Hackathon</h3>
            <p className="text-gray-600 mb-2">120+ participants, 40+ projects, 5 finalists</p>
            <p className="text-gray-700 mb-3">HireFree: Decentralized Freelance Collaboration Platform — Streamlining milestone-based payments for freelancers</p>
            <a 
              href="https://dorahacks.io/buidl/20606" 
              target="_blank" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span>View Project Showcase</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>


            {/* Projects Section */}
            <section id="projects" className="py-16 px-8 md:px-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Project 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
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
                href="https://ethglobal.com/showcase/agentacts-eth-89iga" 
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
                href="https://github.com/juSt-jeLLy/ETH-Taipei" 
                target="_blank" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors bg-blue-50 px-3 py-1 rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>Source Code</span>
              </a>
              <a 
                href="https://dynamic-ai-atelier-5nby.vercel.app/" 
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

          {/* Project 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
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
                href="https://ethglobal.com/showcase/clash-of-clout-qedfz" 
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
                href="https://github.com/juSt-jeLLy/Clash-of-Clout" 
                target="_blank" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors bg-blue-50 px-3 py-1 rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>Source Code</span>
              </a>
              <a 
                href="https://clash-of-clout-azure.vercel.app/" 
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

          {/* Project 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
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
                href="https://dorahacks.io/buidl/20606" 
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
                               href="https://hirefree.vercel.app/" 
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
                     </section>
               


      {/* Education Section */}
      <section className="py-16 px-8 md:px-16 bg-gray-50">
        <h2 className="text-3xl font-bold mb-10 text-center">Education</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">The LNM Institute of Information Technology</h3>
            <p className="text-gray-600 mb-2">Bachelor of Engineering (B.E.) in Electronics and Communication Engineering | 2021 - 2025</p>
            <p className="text-gray-700">Jaipur, Rajasthan</p>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-16 px-8 md:px-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Technical Skills</h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">Languages</h3>
              <p className="text-gray-700">TypeScript, JavaScript, Solidity, HTML, CSS</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">Frameworks / Libraries</h3>
              <p className="text-gray-700">React.js, Next.js, Redux, Node.js, Express.js, Tailwind CSS, Socket.io</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">Blockchain / Web3</h3>
              <p className="text-gray-700">Ethers.js, Hardhat, WalletConnect, XMTP, Scaffold-ETH 2, Flow Blockchain, Polygon, RequestNetwork, ENS, Tableland, 1inch Fusion+, Collab.Land, GAIA Network, wagmi, MongoDB</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">Tools / DevOps</h3>
              <p className="text-gray-700">Git/GitHub, Docker, Postman</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md col-span-1 md:col-span-2">
              <h3 className="text-lg font-semibold mb-3">Security / Auditing</h3>
              <p className="text-gray-700">Completed CTFs including Ethernaut (OpenZeppelin), conducted smart contract audits; wrote unit and integration tests.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Extracurricular Section */}
      <section className="py-16 px-8 md:px-16 bg-gray-50">
        <h2 className="text-3xl font-bold mb-10 text-center">Extracurricular</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Engaged with CWPH, the social welfare club at LNMIIT.</li>
              <li>Played cricket and football for the college team in intercollegiate tournaments.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-8 md:px-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Contact</h2>
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="flex flex-col space-y-4">
            <a href="tel:+919409664725" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 9409664725
            </a>
            <a href="mailto:yagneshpatel931@gmail.com" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              yagneshpatel931@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/yagnesh-markana-72aa10204/" target="_blank" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
            <a href="https://github.com/juSt-jeLLy" target="_blank" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
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
