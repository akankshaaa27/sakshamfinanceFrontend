
import React, { useState } from 'react';

function Contactus() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: '',
    loans: [], // Added loans array to hold selected loan types
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Handle input changes (text, email, message, etc.)
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle checkbox changes
  const handleLoanChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        loans: [...prev.loans, value],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        loans: prev.loans.filter((loan) => loan !== value),
      }));
    }
  };

  // Validation function
  const validate = () => {
    const tempErrors = {};

    if (!formData.name.trim()) {
      tempErrors.name = 'Full Name is required';
    }

    if (!formData.contact.trim()) {
      tempErrors.contact = 'Contact number is required';
    } else if (!/^\d{10}$/.test(formData.contact)) {
      tempErrors.contact = 'Enter a valid 10-digit contact number';
    }

    if (formData.loans.length === 0) {
      tempErrors.loans = 'Please select at least one loan type';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle form submit and send data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setSuccessMessage('');

    try {
      const response = await fetch('http://localhost:8080/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const data = await response.json();
      console.log('Form submitted successfully:', data);
      setSuccessMessage('Your message has been sent successfully!');

      // Reset form
      setFormData({
        name: '',
        email: '',
        contact: '',
        message: '',
        loans: [],
      });
      setErrors({});
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong! Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-12 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Have questions or want to discuss a project? We'd love to hear from you.
        </p>
      </div>

      {/* Success Message */}
      {successMessage && (
        <div className="mb-6 p-4 text-green-700 bg-green-100 border border-green-300 rounded-lg">
          {successMessage}
        </div>
      )}

      {/* Contact Information Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Address Card */}
        <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100 transform hover:-translate-y-2">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800">Our Location</h3>
          </div>
          <a
            href="https://www.google.com/maps?q=Sr+No.+19/1,+Hingne+Home+Colony,+Karve+Nagar,+Pune-411052"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 pl-14 hover:text-blue-600 transition-colors duration-200 underline"
          >
            Sr No. 19/1, Hingne Home Colony, Karve Nagar, Pune-411052
          </a>
        </div>

        {/* Contact Card */}
        <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100 transform hover:-translate-y-2">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800">Phone Number</h3>
          </div>
          <a
            href="tel:+917276240084"
            className="text-gray-600 pl-14 hover:text-blue-600 transition-colors duration-200 underline"
          >
            +91 7276240084
          </a>
        </div>

        {/* Email Card */}
        <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100 transform hover:-translate-y-2">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800">Email Address</h3>
          </div>
          <a
            href="mailto:sakshamfinance@gmail.com"
            className="text-gray-600 pl-14 hover:text-blue-600 transition-colors duration-200 underline"
          >
            sakshamfinance@gmail.com
          </a>
        </div>
      </div>

      {/* Form Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Google Map */}
        <div className="h-full rounded-2xl overflow-hidden shadow-xl border border-gray-200">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.888144677903!2d73.81075417426985!3d18.48872517014805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf0054aa893b%3A0xd717ce15265054cf!2sSaksham%20softech!5e0!3m2!1sen!2sin!4v1742295671442!5m2!1sen!2sin"
            className="w-full h-full min-h-[400px]"
            allowFullScreen
            loading="lazy"
          />
        </div>

        {/* Contact Form */}
        <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl border border-blue-100">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Send Us a Message</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-5 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Contact */}
            <div>
              <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">
                Contact <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="contact"
                value={formData.contact}
                onChange={handleChange}
                className={`w-full px-5 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                  errors.contact ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your contact number"
              />
              {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Enter your email"
              />
            </div>

            {/* Loan Type Checkboxes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select Loan Type <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Personal Loan',
                  'Business Loan',
                  'Home Loan',
                  'Car Loan',
                  'Education Loan',
                  'Furniture Loan',
                  'Agriculture Loan',
                  'Loan Against Property',
                ].map((loan) => (
                  <label key={loan} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={loan}
                      checked={formData.loans.includes(loan)}
                      onChange={handleLoanChange}
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-gray-700">{loan}</span>
                  </label>
                ))}
              </div>
              {errors.loans && <p className="text-red-500 text-sm mt-1">{errors.loans}</p>}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Type your message here..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 px-6 rounded-xl font-medium hover:from-blue-700 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactus;