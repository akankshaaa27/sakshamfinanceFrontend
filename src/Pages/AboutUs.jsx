import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHandHoldingUsd, FaChartLine, FaUsers, FaShieldAlt, FaLightbulb, FaHandshake, FaAward, FaRocket } from 'react-icons/fa';
import { GiCash } from 'react-icons/gi';
import { RiCustomerService2Fill } from 'react-icons/ri';
import lokeshImg from "../assets/LokeshSir.jpg";


const AboutUs = () => {
  const [loaded, setLoaded] = useState(false);
  

  useEffect(() => {
    setLoaded(true);
  }, []);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const stats = [
    { value: "10,000+", label: "Happy Customers", icon: <FaUsers className="text-3xl" /> },
    { value: "₹500Cr+", label: "Loans Disbursed", icon: <GiCash className="text-3xl" /> },
    { value: "15+", label: "Years of Experience", icon: <FaChartLine className="text-3xl" /> },
    { value: "98%", label: "Customer Satisfaction", icon: <RiCustomerService2Fill className="text-3xl" /> }
  ];

  const features = [
    {
      icon: <FaHandHoldingUsd className="text-4xl mb-4" />,
      title: "Quick Loan Approval",
      description: "Get approved for loans in as little as 24 hours with our streamlined process."
    },
    {
      icon: <FaShieldAlt className="text-4xl mb-4" />,
      title: "Secure & Safe",
      description: "Your data is protected with bank-level security measures."
    },
    {
      icon: <FaLightbulb className="text-4xl mb-4" />,
      title: "Transparent Process",
      description: "No hidden charges or surprises - we believe in complete transparency."
    },
    {
      icon: <FaHandshake className="text-4xl mb-4" />,
      title: "Flexible Repayment",
      description: "Customizable repayment options to suit your financial situation."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-20"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center relative z-10"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-4"
          >
            <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-full p-3">
              <FaAward className="text-3xl text-yellow-300 mx-auto" />
            </div>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Saksham Finance</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Empowering your financial dreams with trusted loan solutions since 2008.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="w-24 h-1 bg-yellow-400 rounded-full"></div>
          </motion.div>
        </motion.div>
        
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-10 left-10 w-20 h-20 rounded-full bg-blue-500 opacity-10"
          animate={{ 
            scale: [1, 1.5, 1],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-blue-400 opacity-10"
          animate={{ 
            scale: [1, 1.8, 1],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Our Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={loaded ? "show" : "hidden"}
          variants={container}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={item} className="relative">
            <div className="bg-white p-2 rounded-2xl shadow-xl transform rotate-1">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Our Team" 
                className="rounded-xl w-full h-auto"
              />
            </div>
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-yellow-400 p-2 rounded-2xl shadow-lg hidden md:block transform -rotate-6"
              whileHover={{ scale: 1.05, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Happy Customer" 
                className="rounded-xl w-48 h-32 object-cover"
              />
              <div className="absolute inset-0 bg-yellow-400 opacity-20 rounded-xl"></div>
            </motion.div>
            
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full opacity-50 z-0"></div>
          </motion.div>
          
          <motion.div variants={item}>
            <div className="flex items-center mb-4">
              <div className="w-10 h-1 bg-blue-600 mr-3"></div>
              <span className="text-blue-600 font-semibold">OUR JOURNEY</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2008, Saksham Finance began with a simple mission: to provide accessible financial solutions to individuals and businesses when traditional banks couldn't.
            </p>
            <p className="text-gray-600 mb-4">
              What started as a small lending operation in Mumbai has grown into one of India's most trusted non-banking financial companies, serving customers across 15 states.
            </p>
            <p className="text-gray-600 mb-8">
              Today, we continue to innovate while staying true to our core values of transparency, integrity, and customer-first service.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center"
            >
              Read More
              <FaRocket className="ml-2" />
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate={loaded ? "show" : "hidden"}
            variants={container}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                variants={item}
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="p-6 bg-blue-800 rounded-xl shadow-lg relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex justify-center mb-3">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-blue-200 group-hover:text-blue-100 transition-colors duration-300">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-gray-800 mb-4"
          >
            Our Mission & Values
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We're committed to financial inclusion and helping our customers achieve their dreams.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          animate={loaded ? "show" : "hidden"}
          variants={container}
          className="grid md:grid-cols-2 gap-12"
        >
          <motion.div variants={item} className="bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              To provide simple, fast, and fair financial solutions that empower individuals and businesses to grow and thrive.
            </p>
            <div className="overflow-hidden rounded-xl">
              <motion.img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Mission" 
                className="rounded-xl w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          <motion.div variants={item} className="bg-white p-8 rounded-2xl shadow-lg relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500"></div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h3>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-start p-4 rounded-lg bg-blue-50"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="bg-blue-100 text-blue-600 rounded-full p-2 mr-4 flex-shrink-0">
                  <FaHandshake className="text-lg" />
                </span>
                <span className="text-gray-600">Integrity in all our dealings</span>
              </motion.li>
              <motion.li 
                className="flex items-start p-4 rounded-lg bg-blue-50"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
              >
                <span className="bg-blue-100 text-blue-600 rounded-full p-2 mr-4 flex-shrink-0">
                  <FaUsers className="text-lg" />
                </span>
                <span className="text-gray-600">Customer-centric approach</span>
              </motion.li>
              <motion.li 
                className="flex items-start p-4 rounded-lg bg-blue-50"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
              >
                <span className="bg-blue-100 text-blue-600 rounded-full p-2 mr-4 flex-shrink-0">
                  <FaLightbulb className="text-lg" />
                </span>
                <span className="text-gray-600">Innovation in financial solutions</span>
              </motion.li>
              <motion.li 
                className="flex items-start p-4 rounded-lg bg-blue-50"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
              >
                <span className="bg-blue-100 text-blue-600 rounded-full p-2 mr-4 flex-shrink-0">
                  <FaShieldAlt className="text-lg" />
                </span>
                <span className="text-gray-600">Responsible lending practices</span>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200 rounded-full -translate-y-1/2 translate-x-1/2 opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-300 rounded-full translate-y-1/2 -translate-x-1/2 opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Saksham Finance?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make the loan process simple, transparent, and customer-friendly.
            </p>
          </div>

          <motion.div
            initial="hidden"
            animate={loaded ? "show" : "hidden"}
            variants={container}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-blue-600 flex justify-center group-hover:text-blue-700 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section - Only Lokesh Ajalkar */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Leadership</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experienced professional guiding Saksham Finance towards excellence.
          </p>
        </div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ 
              scale: 1.03,
              transition: { type: "spring", stiffness: 300 }
            }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden group max-w-md w-full"
          >
            <div className="overflow-hidden bg-gray-100 flex items-center justify-center">
              <img 
                src={lokeshImg} 
                alt="Lokesh Ajalkar" 
                className="object-contain h-64 w-full"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800">Lokesh Ajalkar</h3>
              <p className="text-blue-600 font-medium mb-2">Founder & CEO</p>
              <p className="text-gray-600">25+ years in financial services</p>
              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-center space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaUsers className="text-blue-600 text-sm" />
                </div>
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaHandshake className="text-blue-600 text-sm" />
                </div>
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaLightbulb className="text-blue-600 text-sm" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to achieve your financial goals?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            Let Saksham Finance be your trusted partner in your financial journey.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <motion.button 
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg flex items-center mx-auto"
            >
              Apply for a Loan Today
              <FaRocket className="ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;