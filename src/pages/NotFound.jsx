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