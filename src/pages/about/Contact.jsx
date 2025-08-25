
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';
import { Mail, Phone, MapPin, ArrowRight, Send, Clock, Globe } from 'lucide-react';

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
      contact: "hello@elamai.com",
      action: "Send Email"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our AI automation specialists.",
      contact: "+1 (555) 123-4567",
      action: "Call Now"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Come visit our headquarters for in-person consultations.",
      contact: "San Francisco, CA",
      action: "Get Directions"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      country: "United States",
      address: "123 AI Innovation Drive, San Francisco, CA 94105",
      timezone: "PST (UTC-8)",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM"
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "456 Tech Hub Lane, London, EC2A 4DP",
      timezone: "GMT (UTC+0)",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM"
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "789 Innovation Center, Singapore 018956",
      timezone: "SGT (UTC+8)",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM"
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
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
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
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 text-center"
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">{method.title}</h3>
              <p className="text-white/70 leading-relaxed font-light mb-6">{method.description}</p>
              <div className="text-white font-medium mb-6">{method.contact}</div>
              <motion.button
                className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl transition-all duration-300 text-white font-medium"
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
        className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-16"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            Send Us a Message
          </h2>
          <p className="text-white/70 text-lg font-light max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <form className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">
                First Name *
              </label>
              <input
                type="text"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">
                Last Name *
              </label>
              <input
                type="text"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
                placeholder="Doe"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">
                Email Address *
              </label>
              <input
                type="email"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
                placeholder="john@company.com"
                required
              />
            </div>
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">
                Company
              </label>
              <input
                type="text"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
                placeholder="Your Company"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-white/70 text-sm font-medium mb-2">
              Subject *
            </label>
            <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors" required>
              <option value="">Select a topic</option>
              <option value="general">General Inquiry</option>
              <option value="demo">Request Demo</option>
              <option value="partnership">Partnership</option>
              <option value="support">Technical Support</option>
              <option value="pricing">Pricing Information</option>
            </select>
          </div>

          <div className="mb-8">
            <label className="block text-white/70 text-sm font-medium mb-2">
              Message *
            </label>
            <textarea
              rows="6"
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors resize-none"
              placeholder="Tell us about your project and how we can help..."
              required
            ></textarea>
          </div>

          <div className="text-center">
            <motion.button
              type="submit"
              className="inline-flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-xl font-medium hover:bg-white/90 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </motion.button>
          </div>
        </form>
      </motion.div>

      {/* Global Offices */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            Global Offices
          </h2>
          <p className="text-white/70 text-lg font-light max-w-2xl mx-auto">
            Find us around the world. Our international presence ensures 24/7 support for your AI automation needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center mb-4">
                <Globe className="w-5 h-5 text-white mr-3" />
                <h3 className="text-xl font-medium text-white">{office.city}</h3>
              </div>
              <div className="text-white/50 text-sm mb-2">{office.country}</div>
              <div className="text-white/70 text-sm mb-4">{office.address}</div>
              <div className="flex items-center text-white/60 text-sm mb-2">
                <Clock className="w-4 h-4 mr-2" />
                {office.hours}
              </div>
              <div className="text-white/60 text-sm">{office.timezone}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 text-center mt-16"
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
