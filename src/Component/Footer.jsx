import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <div>
            <h3
              className="text-2xl font-bold mb-6 text-yellow-400 cursor-pointer"
              onClick={() => navigate('/')}
            >
              Saksham Finance
            </h3>
            <p className="mb-4 text-gray-300">
              Empowering your financial journey with trusted loan solutions and personalized services.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-yellow-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-yellow-400 transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Loan Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Loan Products</h4>
            <ul className="space-y-3">
              <li><Link to="/Personalloan" className="text-gray-300 hover:text-yellow-400 transition-colors">Personal Loan</Link></li>
              <li><Link to="/businessloan" className="text-gray-300 hover:text-yellow-400 transition-colors">Business Loan</Link></li>
              <li><Link to="/homeloan" className="text-gray-300 hover:text-yellow-400 transition-colors">Home Loan</Link></li>
              <li><Link to="/vehicalloan" className="text-gray-300 hover:text-yellow-400 transition-colors">Car Loan</Link></li>
              <li><Link to="/educationloan" className="text-gray-300 hover:text-yellow-400 transition-colors">Education Loan</Link></li>
               <li><Link to="/furnitureloanpage" className="text-gray-300 hover:text-yellow-400 transition-colors">Furniture Loan</Link></li>
              
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-yellow-400" />
                <span className="text-gray-300">Sr No. 19/1, Hingne Home Colony, Karve Nagar, Pune-411052</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-yellow-400" />
                <a href="tel:+9118001234567" className="text-gray-300 hover:text-yellow-400 transition-colors">
                 7276240084
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-yellow-400" />
                <a href="mailto:info@sakshamfinance.com" className="text-gray-300 hover:text-yellow-400 transition-colors">
                 sakshamfinance@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Saksham Finance. All Rights Reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms_conditions" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Terms & Conditions</Link>
              <Link to="/disclaimer" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
