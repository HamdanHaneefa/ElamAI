import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp, 
  Menu, 
  X, 
  Workflow,
  Bot,
  Database,
  Brain,
  Shield,
  Plug,
  FileText,
  Users,
  Building,
  BookOpen,
  MessageCircle,
  Zap
} from 'lucide-react';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      name: 'Platform',
      items: [
        { name: 'Agentic Workflows', icon: Workflow },
        { name: 'AI Agent Platform', icon: Bot },
        { name: 'Integrations', icon: Plug },
        { name: 'Database, Memory & RAG', icon: Database },
        { name: 'Security & Deployment', icon: Shield }
      ]
    },
    {
      name: 'AI Agents',
      items: [
        { name: 'Customer Support Agent', icon: MessageCircle },
        { name: 'Sales Agent', icon: Users },
        { name: 'Marketing Agent', icon: Zap },
        { name: 'Data Analysis Agent', icon: FileText }
      ]
    },
    {
      name: 'Solutions',
      items: [
        { name: 'Enterprise', icon: Building },
        { name: 'Small Business', icon: Users },
        { name: 'Developer Tools', icon: FileText },
        { name: 'Custom Solutions', icon: Zap }
      ]
    },
    {
      name: 'Resources',
      items: [
        { name: 'Documentation', icon: BookOpen },
        { name: 'API Reference', icon: FileText },
        { name: 'Tutorials', icon: BookOpen },
        { name: 'Community', icon: MessageCircle }
      ]
    },
    {
      name: 'About',
      items: [
        { name: 'Company', icon: Building },
        { name: 'Team', icon: Users },
        { name: 'Careers', icon: Zap },
        { name: 'Contact', icon: MessageCircle }
      ]
    }
  ];

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Main Navbar */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
          scrolled ? 'bg-black/85 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Updated to match your site */}
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-white font-light text-xl tracking-tight">
                Elam AI
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div 
              className="hidden md:flex items-center space-x-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {navItems.map((item, index) => (
                <div key={item.name} className="relative group">
                  <motion.button
                    onClick={() => handleDropdownToggle(index)}
                    onMouseEnter={() => setActiveDropdown(index)}
                    className="flex items-center px-4 py-2 text-sm text-white/70 hover:text-white transition-all duration-200 rounded-lg hover:bg-white/10 group font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="font-medium tracking-wide">{item.name}</span>
                    <motion.div
                      animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </motion.div>
                  </motion.button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl"
                        onMouseLeave={() => setActiveDropdown(null)}
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-2">
                          {item.items.map((subItem, subIndex) => {
                            const IconComponent = subItem.icon;
                            return (
                              <motion.button
                                key={subItem.name}
                                className="w-full flex items-center px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 group font-light"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.1, delay: subIndex * 0.05 }}
                                whileHover={{ x: 4 }}
                              >
                                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 mr-3 group-hover:bg-white/20 transition-colors duration-200">
                                  <IconComponent className="h-4 w-4" />
                                </div>
                                <span className="font-light leading-relaxed">{subItem.name}</span>
                              </motion.button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>

            {/* Desktop CTA Button - Updated styling */}
            <motion.div 
              className="hidden md:flex items-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.button 
                className="bg-white text-gray-900 px-6 py-2.5 rounded-xl text-sm font-light transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-gray-100"
                whileHover={{ 
                  scale: 1.02,
                  y: -1,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                Speak to us
              </motion.button>
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                onClick={handleMobileMenuToggle}
                className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleMobileMenuToggle} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-b border-white/10 md:hidden font-sans"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-6 pt-20">
              {/* Logo in mobile menu */}
              <motion.div 
                className="flex items-center justify-between mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="text-white font-light text-xl tracking-tight">
                  Elam AI
                </div>
                <motion.button
                  onClick={handleMobileMenuToggle}
                  className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="h-6 w-6" />
                </motion.button>
              </motion.div>

              {/* Mobile Navigation Items */}
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                {navItems.map((item, index) => (
                  <div key={item.name}>
                    <motion.button
                      onClick={() => handleDropdownToggle(index)}
                      className="w-full flex items-center justify-between px-4 py-3 text-base text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 font-medium"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="font-medium tracking-wide">{item.name}</span>
                      <motion.div
                        animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </motion.div>
                    </motion.button>

                    {/* Mobile Dropdown Content */}
                    <AnimatePresence>
                      {activeDropdown === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 space-y-1 mt-2">
                            {item.items.map((subItem, subIndex) => {
                              const IconComponent = subItem.icon;
                              return (
                                <motion.button
                                  key={subItem.name}
                                  className="w-full flex items-center px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 font-light"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.2, delay: subIndex * 0.05 }}
                                  whileHover={{ x: 4 }}
                                >
                                  <IconComponent className="h-4 w-4 mr-3 opacity-60" />
                                  <span className="font-light leading-relaxed">{subItem.name}</span>
                                </motion.button>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>

              {/* Mobile CTA Button - Updated styling */}
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <motion.button 
                  className="w-full bg-white text-gray-900 px-6 py-3 rounded-xl text-base font-light transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-gray-100"
                  whileHover={{ 
                    scale: 1.01,
                    y: -1
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Speak to us
                </motion.button>
              </motion.div>

              {/* Mobile Additional Info - Updated typography */}
              <motion.div 
                className="mt-8 pt-6 border-t border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <p className="text-white/70 text-base leading-relaxed font-light">
                  With Elam AI, build an AI workforce that automates tasks efficiently. Deploy 
                  intelligent agents to streamline operations and improve performance across 
                  your business today!
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;