
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MultiAgentSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('multi-agent-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5
      }
    }
  };

  // Network connection animation
  const connectionVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.3,
      transition: {
        duration: 2,
        ease: "easeInOut",
        delay: 1
      }
    }
  };

  return (
    <motion.section 
      id="multi-agent-section"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden font-sans"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute w-96 h-96 bg-blue-500/6 rounded-full blur-3xl pointer-events-none"
          style={{ left: "15%", top: "15%" }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.06, 0.1, 0.06],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute w-80 h-80 bg-purple-500/6 rounded-full blur-3xl pointer-events-none"
          style={{ right: "10%", bottom: "20%" }}
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.06, 0.1, 0.06],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute w-64 h-64 bg-green-500/4 rounded-full blur-3xl pointer-events-none"
          style={{ left: "60%", top: "40%" }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.04, 0.08, 0.04],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <motion.div 
              className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-light mb-6"
              variants={itemVariants}
            >
              Multi-Agent
            </motion.div>
            
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-6 leading-tight tracking-tight"
              variants={itemVariants}
            >
              Empowering Autonomous<br />
              Agents to Work Together
            </motion.h2>
            
            <motion.p 
              className="text-base sm:text-lg lg:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed font-light"
              variants={itemVariants}
            >
              Why rely on a single agent when you can harness the power of many? Our 
              advanced AI ecosystem integrates multiple specialized agents for comprehensive 
              automation strategy, boosting productivity and efficiency across all levels 
              of your organization through seamless collaboration.
            </motion.p>
          </div>

          {/* Workflow Architecture Visualization */}
          <motion.div 
            className="relative max-w-6xl mx-auto mb-16 sm:mb-20"
            variants={imageVariants}
          >
            {/* Main Workflow Container */}
            <div className="relative min-h-[600px] sm:min-h-[700px] lg:min-h-[800px]">
              
              {/* Top Layer - Input Sources */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
                <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                  
                  {/* Email Source */}
                  <motion.div
                    className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-xl p-4 sm:p-6 text-center group hover:from-green-500/30 hover:to-green-600/30 transition-all duration-300"
                    initial={{ opacity: 0, y: -30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="text-white font-medium text-sm sm:text-base mb-1">Email Automation</h4>
                    <p className="text-white/70 text-xs sm:text-sm">Smart Processing</p>
                  </motion.div>

                  {/* CRM Integration */}
                  <motion.div
                    className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm border border-purple-400/30 rounded-xl p-4 sm:p-6 text-center group hover:from-purple-500/30 hover:to-purple-600/30 transition-all duration-300"
                    initial={{ opacity: 0, y: -30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="text-white font-medium text-sm sm:text-base mb-1">CRM Integration</h4>
                    <p className="text-white/70 text-xs sm:text-sm">Data Sync</p>
                  </motion.div>

                  {/* Analytics Source */}
                  <motion.div
                    className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-xl p-4 sm:p-6 text-center group hover:from-blue-500/30 hover:to-blue-600/30 transition-all duration-300"
                    initial={{ opacity: 0, y: -30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z" />
                      </svg>
                    </div>
                    <h4 className="text-white font-medium text-sm sm:text-base mb-1">Analytics Engine</h4>
                    <p className="text-white/70 text-xs sm:text-sm">Data Insights</p>
                  </motion.div>
                </div>
              </div>

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                <defs>
                  <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.3"/>
                  </linearGradient>
                  <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.3"/>
                  </linearGradient>
                  <linearGradient id="flowGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.3"/>
                  </linearGradient>
                </defs>
                
                <motion.path
                  d="M200,120 Q400,180 400,280"
                  stroke="url(#flowGradient1)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  variants={connectionVariants}
                />
                <motion.path
                  d="M400,120 L400,280"
                  stroke="url(#flowGradient2)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  variants={connectionVariants}
                />
                <motion.path
                  d="M600,120 Q400,180 400,280"
                  stroke="url(#flowGradient3)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  variants={connectionVariants}
                />
                
                <motion.path
                  d="M400,380 L200,480"
                  stroke="url(#flowGradient1)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  variants={connectionVariants}
                />
                <motion.path
                  d="M400,380 L600,480"
                  stroke="url(#flowGradient3)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  variants={connectionVariants}
                />
              </svg>

              {/* Central Processing Hub */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                initial={{ scale: 0, opacity: 0 }}
                animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
              >
                <div className="bg-gradient-to-br from-indigo-500/30 to-purple-600/30 backdrop-blur-sm border border-indigo-400/40 rounded-2xl p-6 sm:p-8 text-center shadow-2xl">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-xl bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center shadow-xl">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-medium text-lg sm:text-xl mb-2">AI Processing Hub</h3>
                  <p className="text-white/70 text-sm sm:text-base">Intelligent Workflow Engine</p>
                  
                  {/* Processing indicators */}
                  <div className="flex justify-center space-x-2 mt-4">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 bg-white/60 rounded-full"
                        animate={{
                          opacity: [0.3, 1, 0.3],
                          scale: [0.8, 1.2, 0.8]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Bottom Layer - Output Actions */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-5xl">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                  
                  {/* Automated Responses */}
                  <motion.div
                    className="bg-gradient-to-br from-orange-500/20 to-red-600/20 backdrop-blur-sm border border-orange-400/30 rounded-xl p-4 text-center group hover:from-orange-500/30 hover:to-red-600/30 transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: 1.8, duration: 0.6 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 rounded-lg bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </div>
                    <h4 className="text-white font-medium text-sm mb-1">Auto Response</h4>
                    <p className="text-white/70 text-xs">Instant Replies</p>
                  </motion.div>

                  {/* Lead Scoring */}
                  <motion.div
                    className="bg-gradient-to-br from-teal-500/20 to-cyan-600/20 backdrop-blur-sm border border-teal-400/30 rounded-xl p-4 text-center group hover:from-teal-500/30 hover:to-cyan-600/30 transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: 2, duration: 0.6 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </div>
                    <h4 className="text-white font-medium text-sm mb-1">Lead Scoring</h4>
                    <p className="text-white/70 text-xs">Smart Rating</p>
                  </motion.div>

                  {/* Task Automation */}
                  <motion.div
                    className="bg-gradient-to-br from-pink-500/20 to-rose-600/20 backdrop-blur-sm border border-pink-400/30 rounded-xl p-4 text-center group hover:from-pink-500/30 hover:to-rose-600/30 transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: 2.2, duration: 0.6 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 rounded-lg bg-gradient-to-br from-pink-400 to-rose-600 flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h4 className="text-white font-medium text-sm mb-1">Task Automation</h4>
                    <p className="text-white/70 text-xs">Smart Workflow</p>
                  </motion.div>

                  {/* Report Generation */}
                  <motion.div
                    className="bg-gradient-to-br from-yellow-500/20 to-amber-600/20 backdrop-blur-sm border border-yellow-400/30 rounded-xl p-4 text-center group hover:from-yellow-500/30 hover:to-amber-600/30 transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: 2.4, duration: 0.6 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h4 className="text-white font-medium text-sm mb-1">Smart Reports</h4>
                    <p className="text-white/70 text-xs">Auto Generated</p>
                  </motion.div>
                </div>
              </div>

              {/* Integration Icons - Bottom Row */}
              <div className="absolute bottom-[-100px] sm:bottom-[-120px] left-1/2 transform -translate-x-1/2 w-full">
                <motion.div
                  className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 2.6, duration: 0.8 }}
                >
                  {/* Integration Platform Icons */}
                  {[
                    { name: "Slack", icon: "💬", color: "from-purple-400/20 to-purple-600/20 border-purple-400/30" },
                    { name: "Gmail", icon: "📧", color: "from-red-400/20 to-red-600/20 border-red-400/30" },
                    { name: "Salesforce", icon: "☁️", color: "from-blue-400/20 to-blue-600/20 border-blue-400/30" },
                    { name: "HubSpot", icon: "🎯", color: "from-orange-400/20 to-orange-600/20 border-orange-400/30" },
                    { name: "Zapier", icon: "⚡", color: "from-yellow-400/20 to-yellow-600/20 border-yellow-400/30" },
                    { name: "Webhooks", icon: "🔗", color: "from-green-400/20 to-green-600/20 border-green-400/30" },
                    { name: "API", icon: "🔌", color: "from-indigo-400/20 to-indigo-600/20 border-indigo-400/30" },
                    { name: "Database", icon: "🗃️", color: "from-gray-400/20 to-gray-600/20 border-gray-400/30" }
                  ].map((integration, index) => (
                    <motion.div
                      key={integration.name}
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br ${integration.color} backdrop-blur-sm border flex items-center justify-center text-lg sm:text-xl group hover:scale-110 transition-all duration-300 shadow-lg`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: 2.8 + (index * 0.1), duration: 0.5 }}
                      whileHover={{
                        y: -3,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                      }}
                      title={integration.name}
                    >
                      <span className="filter grayscale group-hover:grayscale-0 transition-all duration-300">
                        {integration.icon}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.p
                  className="text-center text-white/50 text-xs sm:text-sm mt-4 font-light"
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 3.2, duration: 0.6 }}
                >
                  Seamlessly connects with 500+ business applications
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-16 sm:mt-20"
            variants={itemVariants}
          >
            <motion.button
              className="inline-flex items-center justify-center bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-light transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl hover:bg-gray-100"
              whileHover={{
                scale: 1.02,
                y: -2,
                transition: { duration: 0.2 },
              }}
              whileTap={{
                scale: 0.98,
                transition: { duration: 0.1 },
              }}
            >
              Explore Multi-Agent Solutions
            </motion.button>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default MultiAgentSection;
