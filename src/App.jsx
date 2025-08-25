import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import NotFound from './pages/NotFound';
import Loader from './components/SiteLoader';
import TitleUpdater from './components/TitleUpdater';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time - you can customize this based on your needs
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 3 seconds loading time

    // Optional: Add real loading logic here
    // For example, wait for critical resources to load:
    // - API calls
    // - Font loading
    // - Image preloading
    // - Authentication check

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* Loader - shows first */}
      <Loader isLoading={isLoading} onComplete={handleLoadingComplete} />
      
      {/* Main App - shows after loading */}
      {!isLoading && (
        <div className="App">
          {/* Component to handle dynamic title updates */}
          <TitleUpdater />
          
          {/* Navbar will be visible on all pages */}
          <Navbar />
          
          {/* Routes Configuration */}
          <Routes>
            {/* Home Route */}
            <Route path="/" element={<Homepage />} />
            
            {/* 404 Route - Must be last */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;