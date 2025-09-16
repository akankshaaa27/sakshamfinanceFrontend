// import { useState } from "react";

// export default function LoanApplicationForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     contact: "",
//     bank: "",
//     loan: "",
//     duration: "",
//   });

//   const banks = [
//     "State Bank of India (SBI)",
//     "Bank of Maharashtra (BoM)",
//     "Bank of Baroda (BoB)",
//     "Punjab National Bank (PNB)",
//     "Canara Bank",
//     "Union Bank of India",
//     "Central Bank of India",
//     "Indian Bank",
//     "Indian Overseas Bank (IOB)",
//     "UCO Bank",
//     "Bank of India (BoI)",
//     "Punjab & Sind Bank",
//     "HDFC Bank",
//     "ICICI Bank",
//     "Axis Bank",
//     "Kotak Mahindra Bank",
//     "IndusInd Bank",
//     "Yes Bank",
//     "IDFC First Bank",
//     "RBL Bank",
//   ];

//   const loans = [
//     "Personal Loan",
//     "Home Loan",
//     "Business Loan",
//     "Education Loan",
//     "Loan Against Property",
//     "Vehicle Loan",
//     "Electronics Loan",
//     "Agriculture Loan",
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data:", formData);
//     alert("Form submitted! Check console for details.");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4 ">
//       <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl mt-20">
//         <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
//           <h2 className="text-2xl font-bold text-center">Loan Application Form</h2>
//           <p className="text-center text-blue-100 mt-1">
//             Fill in your details to get started
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="p-6 space-y-5">
//           {/* Name */}
//           <div className="space-y-1">
//             <label className="block text-sm font-medium text-gray-700">Full Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="John Doe"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//               required
//             />
//           </div>

//           {/* Email */}
//           <div className="space-y-1">
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="john@example.com"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//               required
//             />
//           </div>

//           {/* Contact */}
//           <div className="space-y-1">
//             <label className="block text-sm font-medium text-gray-700">Contact Number</label>
//             <input
//               type="tel"
//               name="contact"
//               placeholder="+91 9876543210"
//               value={formData.contact}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//               required
//             />
//           </div>

//           {/* Bank Dropdown */}
//           <div className="space-y-1">
//             <label className="block text-sm font-medium text-gray-700">Select Bank</label>
//             <select
//               name="bank"
//               value={formData.bank}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none"
//               required
//             >
//               <option value="" disabled>Choose your bank</option>
//               {banks.map((bank, idx) => (
//                 <option key={idx} value={bank}>
//                   {bank}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Loan Dropdown */}
//           <div className="space-y-1">
//             <label className="block text-sm font-medium text-gray-700">Loan Type</label>
//             <select
//               name="loan"
//               value={formData.loan}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none"
//               required
//             >
//               <option value="" disabled>Select loan type</option>
//               {loans.map((loan, idx) => (
//                 <option key={idx} value={loan}>
//                   {loan}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Duration */}
//           <div className="space-y-1">
//             <label className="block text-sm font-medium text-gray-700">Duration (Years)</label>
//             <input
//               type="text"
//               name="duration"
//               placeholder="e.g., 5 Years"
//               value={formData.duration}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all shadow-md hover:shadow-lg"
//           >
//             Apply Now
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";

export default function LoanApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    bank: "",
    loan: "",
    duration: "",
  });

  const banks = [
    "State Bank of India (SBI)",
    "Bank of Maharashtra (BoM)",
    "Bank of Baroda (BoB)",
    "Punjab National Bank (PNB)",
    "Canara Bank",
    "Union Bank of India",
    "Central Bank of India",
    "Indian Bank",
    "Indian Overseas Bank (IOB)",
    "UCO Bank",
    "Bank of India (BoI)",
    "Punjab & Sind Bank",
    "HDFC Bank",
    "ICICI Bank",
    "Axis Bank",
    "Kotak Mahindra Bank",
    "IndusInd Bank",
    "Yes Bank",
    "IDFC First Bank",
    "RBL Bank",
  ];

  const loans = [
    "Personal Loan",
    "Home Loan",
    "Business Loan",
    "Education Loan",
    "Loan Against Property",
    "Vehicle Loan",
    "Electronics Loan",
    "Agriculture Loan",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted! Check console for details.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl mt-20">
        <div className="flex flex-col md:flex-row">
          {/* Left Side - Header */}
          <div className="bg-gradient-to-b from-blue-600 to-indigo-700 p-8 text-white flex flex-col justify-center md:w-1/3">
            <h2 className="text-3xl font-bold">Loan Application</h2>
            <p className="mt-2 text-blue-100">
              Fill in your details to get started with your loan process
            </p>
            <div className="mt-8">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                  <span className="text-white font-bold">1</span>
                </div>
                <span>Basic Information</span>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center mr-3">
                  <span className="text-white font-bold">2</span>
                </div>
                <span>Loan Details</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-300 flex items-center justify-center mr-3">
                  <span className="text-white font-bold">3</span>
                </div>
                <span>Submit Application</span>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-8 md:w-2/3">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Contact */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Contact Number</label>
                <input
                  type="tel"
                  name="contact"
                  placeholder="+91 9876543210"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Bank Dropdown */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Select Bank</label>
                <select
                  name="bank"
                  value={formData.bank}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none"
                  required
                >
                  <option value="" disabled>Choose your bank</option>
                  {banks.map((bank, idx) => (
                    <option key={idx} value={bank}>
                      {bank}
                    </option>
                  ))}
                </select>
              </div>

              {/* Loan Dropdown */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Loan Type</label>
                <select
                  name="loan"
                  value={formData.loan}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none"
                  required
                >
                  <option value="" disabled>Select loan type</option>
                  {loans.map((loan, idx) => (
                    <option key={idx} value={loan}>
                      {loan}
                    </option>
                  ))}
                </select>
              </div>

              {/* Duration */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Duration (Years)</label>
                <input
                  type="text"
                  name="duration"
                  placeholder="e.g., 5 Years"
                  value={formData.duration}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Submit Button - Full width */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all shadow-md hover:shadow-lg"
                >
                  Apply Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}