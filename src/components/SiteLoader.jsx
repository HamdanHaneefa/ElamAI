import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ isLoading = true, onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(timer);
            setTimeout(() => onComplete && onComplete(), 500);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 200);

      return () => clearInterval(timer);
    }
  }, [isLoading, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 font-sans"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Background Elements - Cleaner */}
          <div className="absolute inset-0">
            <motion.div 
              className="absolute w-96 h-96 bg-blue-500/8 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.08, 0.12, 0.08],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                left: '20%',
                top: '20%',
              }}
            />
            <motion.div 
              className="absolute w-80 h-80 bg-purple-500/6 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.06, 0.1, 0.06],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                right: '15%',
                bottom: '30%',
              }}
            />
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo - Matching your site's style */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div 
                className="text-white font-light text-3xl sm:text-4xl lg:text-5xl tracking-tight"
                animate={{ opacity: [1, 0.8, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                Beam AI
              </motion.div>
            </motion.div>

            {/* Simplified Loading Animation */}
            <motion.div
              className="relative mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Single Clean Ring */}
              <div className="relative w-12 h-12 sm:w-16 sm:h-16">
                <motion.div
                  className="w-full h-full rounded-full border border-white/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-full h-full rounded-full border-2 border-transparent border-t-white/60" />
                </motion.div>
                
                {/* Center dot */}
                <motion.div
                  className="absolute inset-1/2 w-1.5 h-1.5 bg-white/80 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                  animate={{ 
                    opacity: [0.8, 0.4, 0.8]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>

            {/* Clean Progress Bar */}
            <motion.div
              className="w-64 sm:w-80 h-0.5 bg-white/10 rounded-full overflow-hidden mb-6"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                className="h-full bg-white/60 rounded-full origin-left"
                style={{ 
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.8) 100%)'
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </motion.div>

            {/* Minimal Loading Text - Matching your site's typography */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.p 
                className="text-white/70 text-base sm:text-lg font-light mb-2 tracking-wide"
                animate={{ opacity: [1, 0.6, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                Building Your Workforce
              </motion.p>
              <motion.p 
                className="text-white/50 text-sm font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {Math.round(progress)}%
              </motion.p>
            </motion.div>

            {/* Minimal floating elements */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                animate={{
                  y: [-20, -60, -20],
                  opacity: [0, 0.6, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 1.5,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${48 + i * 2}%`,
                  top: '60%',
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;