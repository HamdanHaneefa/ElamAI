import React from 'react';
import HeroSection from '../components/HeroSection';
import AIAgentsSection from '../components/AgentSection';
import SolutionsSection from '../components/SolutionSection';

const Homepage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AIAgentsSection />
      <SolutionsSection />
      {/* Add more sections here as needed */}
    </div>
  );
};

export default Homepage;