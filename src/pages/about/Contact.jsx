import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';
import { Mail, Phone, ArrowRight, Send } from 'lucide-react';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch with our team for any inquiries or support.",
      contact: "contact@elamai.in",
      action: "Send Email"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our AI automation specialists.",
      contact: "+91 97474 19297",
      action: "Call Now"
    }
  ];

  return (
    <PageLayout
      title="Contact Us"
      subtitle="Get in Touch"
      description="Ready to transform your business with AI automation? Contact our team of experts to discuss your unique requirements and discover how Elam AI can revolutionize your operations."
      badge="About"
    >
      {/* Contact Methods */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {contactMethods.map((method, index) => {
          const IconComponent = method.icon;
          return (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 text-center"
              variants={itemVariants}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <IconComponent className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">{method.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-3">{method.description}</p>
              <div className="text-white font-medium mb-4">{method.contact}</div>
              <motion.button
                className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-lg transition-all duration-300 text-white text-sm font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{method.action}</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Contact Form */}
      <motion.div
        className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-8"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-light text-white mb-2">
            Send Us a Message
          </h2>
          <p className="text-white/70 text-sm font-light max-w-xl mx-auto">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <form className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-white/70 text-xs font-medium mb-1">
                First Name *
              </label>
              <input
                type="text"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label className="block text-white/70 text-xs font-medium mb-1">
                Last Name *
              </label>
              <input
                type="text"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
                placeholder="Doe"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-white/70 text-xs font-medium mb-1">
                Email Address *
              </label>
              <input
                type="email"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
                placeholder="john@company.com"
                required
              />
            </div>
            <div>
              <label className="block text-white/70 text-xs font-medium mb-1">
                Company
              </label>
              <input
                type="text"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
                placeholder="Your Company"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-white/70 text-xs font-medium mb-1">
              Subject *
            </label>
            <select 
              className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-white/40 transition-colors appearance-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                backgroundPosition: 'right 0.5rem center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '1.2em 1.2em'
              }}
              required
            >
              <option value="" style={{backgroundColor: '#1a1a1a', color: '#ffffff'}}>Select a topic</option>
              <option value="general" style={{backgroundColor: '#1a1a1a', color: '#ffffff'}}>General Inquiry</option>
              <option value="demo" style={{backgroundColor: '#1a1a1a', color: '#ffffff'}}>Request Demo</option>
              <option value="partnership" style={{backgroundColor: '#1a1a1a', color: '#ffffff'}}>Partnership</option>
              <option value="support" style={{backgroundColor: '#1a1a1a', color: '#ffffff'}}>Technical Support</option>
              <option value="pricing" style={{backgroundColor: '#1a1a1a', color: '#ffffff'}}>Pricing Information</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-white/70 text-xs font-medium mb-1">
              Message *
            </label>
            <textarea
              rows="3"
              className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors resize-none"
              placeholder="Tell us about your project and how we can help..."
              required
            ></textarea>
          </div>

          <div className="text-center">
            <motion.button
              type="submit"
              className="inline-flex items-center space-x-2 bg-white text-black px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-white/90 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </motion.button>
          </div>
        </form>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 text-center"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-white/70 text-lg font-light mb-8 max-w-2xl mx-auto">
          Join thousands of businesses already transforming their operations with AI automation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/platform/ai-agent-platform">
            <motion.button
              className="inline-flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-xl font-medium hover:bg-white/90 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Explore Platform</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
          <Link to="/solutions/enterprise">
            <motion.button
              className="inline-flex items-center space-x-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-medium border border-white/20 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>View Solutions</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default Contact;