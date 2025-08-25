import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4">
      <div className="text-center">
        {/* 404 Number */}
        <h1 className="text-8xl md:text-9xl font-bold text-white/20 mb-4">
          404
        </h1>
        
        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          Page Not Found
        </h2>
        
        <p className="text-white/70 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => window.location.href = '/'}
            className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
          >
            <Home className="w-4 h-4 mr-2" />
            Go Home
          </button>
          
          <button 
            onClick={() => window.history.back()}
            className="flex items-center justify-center px-6 py-3 border border-white/20 text-white hover:bg-white/10 rounded-lg font-medium transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 px-4">
      <div className="text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-8xl md:text-9xl font-light text-white/20 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Page Not Found
          </h2>
          <p className="text-white/70 text-lg font-light mb-8 leading-relaxed">
            Sorry, the page you're looking for doesn't exist. It might have been moved, 
            deleted, or you entered the wrong URL.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <motion.button
                className="inline-flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-xl font-medium hover:bg-white/90 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Home className="w-5 h-5" />
                <span>Go Home</span>
              </motion.button>
            </Link>
            
            <motion.button
              onClick={() => window.history.back()}
              className="inline-flex items-center space-x-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-medium border border-white/20 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
