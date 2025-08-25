
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';
import { MessageCircle, ArrowRight, Users, Github, MessageSquare, Calendar } from 'lucide-react';

const Community = () => {
  const platforms = [
    {
      icon: MessageSquare,
      title: 'Discord Community',
      description: 'Join our active Discord community for real-time discussions and support.',
      members: '5,000+',
      activity: 'Very Active'
    },
    {
      icon: Github,
      title: 'GitHub Discussions',
      description: 'Contribute to open-source projects and share code with fellow developers.',
      members: '2,500+',
      activity: 'Active'
    },
    {
      icon: Calendar,
      title: 'Monthly Meetups',
      description: 'Join virtual and in-person meetups to learn and network with the community.',
      members: '1,200+',
      activity: 'Monthly'
    },
    {
      icon: Users,
      title: 'Expert Forum',
      description: 'Get help from AI experts and experienced community members.',
      members: '800+',
      activity: 'Daily'
    }
  ];

  const benefits = [
    'Get help from experienced developers and AI experts',
    'Share your projects and get feedback from the community',
    'Stay updated with the latest features and announcements',
    'Participate in beta testing and early access programs',
    'Connect with like-minded developers and business leaders',
    'Access exclusive resources and tutorials'
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <PageLayout
      title="Community"
      subtitle="Join the Elam AI Community"
      description="Connect with developers, AI enthusiasts, and business leaders using Elam AI. Share knowledge, get support, and stay updated with the latest developments."
      badge="Resources"
    >
      {/* Community Stats */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        variants={itemVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        {[
          { number: '10,000+', label: 'Community Members' },
          { number: '500+', label: 'Daily Messages' },
          { number: '50+', label: 'Countries' }
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center"
            variants={itemVariants}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-3xl font-light text-white mb-2">{stat.number}</h3>
            <p className="text-white/70 font-light">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Community Platforms */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {platforms.map((platform, index) => {
          const IconComponent = platform.icon;
          return (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
              variants={itemVariants}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white">{platform.title}</h3>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-sm text-white/60">{platform.members} members</span>
                    <span className="text-sm text-green-400">{platform.activity}</span>
                  </div>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed font-light">{platform.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Community Benefits */}
      <motion.div
        className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 mb-16"
        variants={itemVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl lg:text-3xl font-light text-white mb-8 text-center">
          Why Join Our Community?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-3"
              variants={itemVariants}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0" />
              <span className="text-white/80 font-light">{benefit}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Community Guidelines */}
      <motion.div
        className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-16"
        variants={itemVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-medium text-white mb-4">Community Guidelines</h3>
        <p className="text-white/70 font-light leading-relaxed mb-4">
          Our community is built on respect, collaboration, and learning. We welcome developers 
          of all skill levels and encourage constructive discussions.
        </p>
        <ul className="text-white/60 font-light space-y-2 text-sm">
          <li>• Be respectful and professional in all interactions</li>
          <li>• Help others and share your knowledge</li>
          <li>• Stay on-topic and keep discussions relevant</li>
          <li>• No spam, self-promotion, or off-topic content</li>
        </ul>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="text-center"
        variants={itemVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl lg:text-3xl font-light text-white mb-6">
          Ready to Join the Community?
        </h3>
        <p className="text-white/70 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
          Connect with thousands of developers and AI enthusiasts. 
          Share knowledge, get support, and grow together.
        </p>
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            className="bg-white text-gray-900 px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-gray-100"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Join Discord
          </motion.button>
          <motion.button
            className="border border-white/20 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-white/10"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            View Guidelines
            <ArrowRight className="w-4 h-4 ml-2 inline" />
          </motion.button>
        </motion.div>
      </motion.div>
    </PageLayout>
  );
};

export default Community;
