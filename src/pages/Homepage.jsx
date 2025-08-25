import React from 'react';
import HeroSection from '../components/HeroSection';
import AIAgentsSection from '../components/AgentSection';
import SolutionsSection from '../components/SolutionSection';
import MultiAgentSection from '../components/MultiAgentSection';

const Homepage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AIAgentsSection />
      <SolutionsSection />
      <MultiAgentSection/>
      {/* Add more sections here as needed */}
    </div>
  );
};

export default Homepage;