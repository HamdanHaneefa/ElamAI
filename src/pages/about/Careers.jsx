
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock, DollarSign, Users, Briefcase, Heart } from 'lucide-react';
import PageLayout from '../../components/PageLayout';

const Careers = () => {
  const jobOpenings = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      salary: '$150k - $200k',
      description: 'Build and optimize AI agent systems that power next-generation business automation.'
    },
    {
      title: 'Product Manager - AI Platform',
      department: 'Product',
      location: 'Remote / New York',
      type: 'Full-time',
      salary: '$130k - $170k',
      description: 'Drive product strategy and roadmap for our AI agent platform and developer tools.'
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$120k - $160k',
      description: 'Scale and secure our infrastructure to support millions of AI agent interactions.'
    },
    {
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Remote / Austin',
      type: 'Full-time',
      salary: '$90k - $120k',
      description: 'Help enterprise customers succeed with AI agent implementations and drive growth.'
    },
    {
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$100k - $140k',
      description: 'Create beautiful and intuitive interfaces for our AI agent management platform.'
    },
    {
      title: 'Data Scientist',
      department: 'AI Research',
      location: 'Remote / Boston',
      type: 'Full-time',
      salary: '$140k - $180k',
      description: 'Improve AI agent performance through advanced analytics and machine learning.'
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance plus wellness programs.'
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Work when you\'re most productive with flexible hours and unlimited PTO.'
    },
    {
      icon: Users,
      title: 'Remote-First',
      description: 'Work from anywhere with quarterly team meetups and annual company retreats.'
    },
    {
      icon: Briefcase,
      title: 'Growth & Learning',
      description: 'Professional development budget and opportunities to learn cutting-edge AI.'
    },
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Market-leading salaries plus equity in a fast-growing AI company.'
    },
    {
      icon: MapPin,
      title: 'Office Access',
      description: 'Access to co-working spaces worldwide and beautiful offices in major cities.'
    }
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
      title="Join Our Team"
      subtitle="Build the Future of AI Agents"
      description="Join a team of passionate innovators working to democratize AI and transform how businesses operate. We're looking for talented individuals who want to make a meaningful impact."
      badge="Careers"
    >
      {/* Why Join Us Section */}
      <motion.div
        className="mb-16"
        variants={itemVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl lg:text-3xl font-light text-white mb-8 text-center">
          Why Choose Elam AI?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                variants={itemVariants}
                whileInView="visible"
                initial="hidden"
                viewport={{ once: true }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-medium text-white mb-2">{benefit.title}</h4>
                <p className="text-white/70 font-light leading-relaxed">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Job Openings Section */}
      <motion.div
        className="mb-16"
        variants={itemVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl lg:text-3xl font-light text-white mb-8 text-center">
          Open Positions
        </h3>
        <div className="space-y-6">
          {jobOpenings.map((job, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              variants={itemVariants}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <h4 className="text-xl font-medium text-white">{job.title}</h4>
                    <span className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-sm">
                      {job.department}
                    </span>
                  </div>
                  <p className="text-white/70 mb-4 font-light leading-relaxed">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {job.type}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {job.salary}
                    </div>
                  </div>
                </div>
                <div className="mt-4 lg:mt-0 lg:ml-6">
                  <motion.button
                    className="bg-white text-gray-900 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-gray-100 w-full lg:w-auto"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Apply Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Culture Section */}
      <motion.div
        className="mb-16 text-center"
        variants={itemVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl lg:text-3xl font-light text-white mb-6">
          Our Culture
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h4 className="text-lg font-medium text-white mb-3">Innovation First</h4>
            <p className="text-white/70 font-light leading-relaxed">
              We encourage bold ideas and give everyone the freedom to experiment and push boundaries.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h4 className="text-lg font-medium text-white mb-3">Collaboration</h4>
            <p className="text-white/70 font-light leading-relaxed">
              We believe diverse perspectives create better solutions and foster an inclusive environment.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h4 className="text-lg font-medium text-white mb-3">Impact Focus</h4>
            <p className="text-white/70 font-light leading-relaxed">
              Every role contributes meaningfully to our mission of democratizing AI for businesses.
            </p>
          </div>
        </div>
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
          Ready to Join Us?
        </h3>
        <p className="text-white/70 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
          Don't see a perfect fit? We're always interested in hearing from talented individuals 
          who are passionate about AI and want to make a difference.
        </p>
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            className="bg-white text-gray-900 px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-gray-100"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Submit General Application
          </motion.button>
          <Link to="/about/contact">
            <motion.button
              className="border border-white/20 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-white/10"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact HR
              <ArrowRight className="w-4 h-4 ml-2 inline" />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </PageLayout>
  );
};

export default Careers;
