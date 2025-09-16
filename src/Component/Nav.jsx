import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from'../../public/sflogo.png';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const [showCalcDropdown, setShowCalcDropdown] = useState(false);
  const [showMobileCalcDropdown, setShowMobileCalcDropdown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`bg-gray-800 fixed w-full z-50 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold text-xl flex items-center">
              <img
                src={logo} // Replace with your logo path
                // alt="Saksham Finance Logo" 
                className="h-8 w-auto mr-2"
              />
              
            </Link>
          </div>

          {/* Navigation options on the right */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Home
              </Link>

              {/* Desktop Loans Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <div className="flex items-center">
                  <Link
                    to="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowDropdown(!showDropdown);
                    }}
                  >
                    Loans
                  </Link>
                  <svg
                    className={`ml-1 h-4 w-4 text-gray-300 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-[700px] bg-white text-black rounded-lg shadow-2xl z-50 p-3 border border-gray-200 animate-fadeIn">
                    <div className="grid grid-cols-4 gap-2">
                      <Link
                        to="/Personalloan"
                        className="block p-2 hover:bg-gray-50 rounded-md border border-gray-100 transition-all duration-200 hover:shadow-sm hover:scale-[1.01]"
                      >
                        <div className="font-semibold text-sm">Personal Loan</div>
                        <div className="text-xs text-gray-500 mt-1">Up to ₹10L in 10 mins</div>
                      </Link>
                      <Link
                        to="/homeloan"
                        className="block p-2 hover:bg-gray-50 rounded-md border border-gray-100 transition-all duration-200 hover:shadow-sm hover:scale-[1.01]"
                      >
                        <div className="font-semibold text-sm">Home Loan</div>
                        <div className="text-xs text-gray-500 mt-1">From 7.75%* p.a.</div>
                      </Link>
                      <Link
                        to="/businessloan"
                        className="block p-2 hover:bg-gray-50 rounded-md border border-gray-100 transition-all duration-200 hover:shadow-sm hover:scale-[1.01]"
                      >
                        <div className="font-semibold text-sm">Business Loan</div>
                        <div className="text-xs text-gray-500 mt-1">Up to ₹5L</div>
                      </Link>
                      <Link
                        to="/educationloan"
                        className="block p-2 hover:bg-gray-50 rounded-md border border-gray-100 transition-all duration-200 hover:shadow-sm hover:scale-[1.01]"
                      >
                        <div className="font-semibold text-sm">Education Loan</div>
                        <div className="text-xs text-gray-500 mt-1">Study abroad</div>
                      </Link>
                      <Link
                        to="/vehicalloan"
                        className="block p-2 hover:bg-gray-50 rounded-md border border-gray-100 transition-all duration-200 hover:shadow-sm hover:scale-[1.01]"
                      >
                        <div className="font-semibold text-sm">Vehicle Loan</div>
                        <div className="text-xs text-gray-500 mt-1">100% financing</div>
                      </Link>
                      <Link
                        to="/agriculturepage"
                        className="block p-2 hover:bg-gray-50 rounded-md border border-gray-100 transition-all duration-200 hover:shadow-sm hover:scale-[1.01]"
                      >
                        <div className="font-semibold text-sm">Agriculture Loan</div>
                        <div className="text-xs text-gray-500 mt-1">Farmers schemes</div>
                      </Link>
                      <Link
                        to="/loanagainstpropartyloan"
                        className="block p-2 hover:bg-gray-50 rounded-md border border-gray-100 transition-all duration-200 hover:shadow-sm hover:scale-[1.01]"
                      >
                        <div className="font-semibold text-sm">Loan Against Property</div>
                        <div className="text-xs text-gray-500 mt-1">All loan types</div>
                      </Link>
                      <Link
                        to="/furnitureloanpage"
                        className="block p-2 hover:bg-gray-50 rounded-md border border-gray-100 transition-all duration-200 hover:shadow-sm hover:scale-[1.01]"
                      >
                        <div className="font-semibold text-sm">Furniture Loan</div>
                        <div className="text-xs text-gray-500 mt-1">Farmers schemes</div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Desktop Calculators Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setShowCalcDropdown(true)}
                onMouseLeave={() => setShowCalcDropdown(false)}
              >
                <div className="flex items-center">
                  <Link
                    to="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowCalcDropdown(!showCalcDropdown);
                    }}
                  >
                    Calculators
                  </Link>
                  <svg
                    className={`ml-1 h-4 w-4 text-gray-300 transition-transform duration-200 ${showCalcDropdown ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {showCalcDropdown && (
                  <div className="absolute right-0 mt-2 w-[700px] bg-white text-black rounded-lg shadow-2xl z-50 p-3 border border-gray-200 animate-fadeIn">
                    <div className="grid grid-cols-4 gap-2">
                      <Link
                        to="/persnolcal"
                        className="block p-2 hover:bg-gray-50 rounded-md border border-gray-100 transition-all duration-200 hover:shadow-sm hover:scale-[1.01]"
                      >
                        <div className="font-semibold text-sm">Personal Loan</div>
                        <div className="text-xs text-gray-500 mt-1">EMI calculator</div>
                      </Link>
                      <Link
                        to="/homecal"
                        className="block p-2 hover:bg-gray-50 rounded-md border border-gray-100 transition-all duration-200 hover:shadow-sm hover:scale-[1.01]"
                      >
                        <div className="font-semibold text-sm">Home Loan</div>
                        <div className="text-xs text-gray-500 mt-1">EMI breakdown</div>
                      </Link>
                      <Link
                        to="/businesscal"
                        className="block p-2 hover:bg-gray-50 rounded-md border border-gray-100 transition-all duration-200 hover:shadow-sm hover:scale-[1.01]"
                      >
                        <div className="font-semibold text-sm">Business Loan</div>
                        <div className="text-xs text-gray-500 mt-1">EMI estimates</div>
                      </Link>
                      <Link
                        to="/educationcal"
                        className="block p-2 hover:bg-gray-50 rounded-md border border-gray-100 transition-all duration-200 hover:shadow-sm hover:scale-[1.01]"
                      >
                        <div className="font-semibold text-sm">Education Loan</div>
                        <div className="text-xs text-gray-500 mt-1">Financing plan</div>
                      </Link>
                      <Link
                        to="/vehiclecal"
                        className="block p-2 hover:bg-gray-50 rounded-md border border-gray-100 transition-all duration-200 hover:shadow-sm hover:scale-[1.01]"
                      >
                        <div className="font-semibold text-sm">Vehicle Loan</div>
                        <div className="text-xs text-gray-500 mt-1">Auto loan EMIs</div>
                      </Link>
                      <Link
                        to="/agriculturecal"
                        className="block p-2 hover:bg-gray-50 rounded-md border border-gray-100 transition-all duration-200 hover:shadow-sm hover:scale-[1.01]"
                      >
                        <div className="font-semibold text-sm">Agriculture Loan</div>
                        <div className="text-xs text-gray-500 mt-1">Farm loan estimates</div>
                      </Link>
                      <Link
                        to="/emical"
                        className="block p-2 hover:bg-gray-50 rounded-md border border-gray-100 transition-all duration-200 hover:shadow-sm hover:scale-[1.01]"
                      >
                        <div className="font-semibold text-sm">Loan Against Property</div>
                        <div className="text-xs text-gray-500 mt-1">All loan types</div>
                      </Link>

                      <Link
                        to="/furniturecal"
                        className="block p-2 hover:bg-gray-50 rounded-md border border-gray-100 transition-all duration-200 hover:shadow-sm hover:scale-[1.01]"
                      >
                        <div className="font-semibold text-sm">furniture loan</div>
                        <div className="text-xs text-gray-500 mt-1">All loan types</div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <Link
                to="/realestate"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Real Estate
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none flex items-center px-3 py-2 rounded-md text-base font-medium"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          {/* Mobile Loans Dropdown */}
          <div className="relative">
            <button
              className="w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center justify-between transition-colors duration-200"
              onClick={() => setShowMobileDropdown(!showMobileDropdown)}
            >
              Loans
              <svg
                className={`h-4 w-4 text-gray-300 transition-transform duration-200 ${showMobileDropdown ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div className={`ml-4 mt-1 transition-all duration-300 overflow-hidden ${showMobileDropdown ? 'max-h-96' : 'max-h-0'}`}>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  to="/Personalloan"
                  className="block px-2 py-2 hover:bg-gray-600 rounded-md text-sm text-gray-300 transition-colors duration-200"
                  onClick={() => {
                    setIsOpen(false);
                    setShowMobileDropdown(false);
                  }}
                >
                  <div className="font-medium text-sm">Personal Loan</div>
                  <div className="text-xs text-gray-300 mt-1">Up to ₹10L</div>
                </Link>
                <Link
                  to="/homeloan"
                  className="block px-2 py-2 hover:bg-gray-600 rounded-md text-sm text-gray-300 transition-colors duration-200"
                  onClick={() => {
                    setIsOpen(false);
                    setShowMobileDropdown(false);
                  }}
                >
                  <div className="font-medium text-sm">Home Loan</div>
                  <div className="text-xs text-gray-300 mt-1">From 7.75%*</div>
                </Link>
                <Link
                  to="/businessloan"
                  className="block px-2 py-2 hover:bg-gray-600 rounded-md text-sm text-gray-300 transition-colors duration-200"
                  onClick={() => {
                    setIsOpen(false);
                    setShowMobileDropdown(false);
                  }}
                >
                  <div className="font-medium text-sm">Business Loan</div>
                  <div className="text-xs text-gray-300 mt-1">Up to ₹5L</div>
                </Link>
                <Link
                  to="/educationloan"
                  className="block px-2 py-2 hover:bg-gray-600 rounded-md text-sm text-gray-300 transition-colors duration-200"
                  onClick={() => {
                    setIsOpen(false);
                    setShowMobileDropdown(false);
                  }}
                >
                  <div className="font-medium text-sm">Education Loan</div>
                  <div className="text-xs text-gray-300 mt-1">Study abroad</div>
                </Link>
                <Link
                  to="/vehicloan"
                  className="block px-2 py-2 hover:bg-gray-600 rounded-md text-sm text-gray-300 transition-colors duration-200"
                  onClick={() => {
                    setIsOpen(false);
                    setShowMobileDropdown(false);
                  }}
                >
                  <div className="font-medium text-sm">Vehicle Loan</div>
                  <div className="text-xs text-gray-300 mt-1">100% finance</div>
                </Link>
                <Link
                  to="/agricultureloan"
                  className="block px-2 py-2 hover:bg-gray-600 rounded-md text-sm text-gray-300 transition-colors duration-200"
                  onClick={() => {
                    setIsOpen(false);
                    setShowMobileDropdown(false);
                  }}
                >
                  <div className="font-medium text-sm">Agriculture Loan</div>
                  <div className="text-xs text-gray-300 mt-1">Farm schemes</div>
                </Link>
                <Link
                  to="/emical"
                  className="block px-2 py-2 hover:bg-gray-600 rounded-md text-sm text-gray-300 transition-colors duration-200"
                  onClick={() => {
                    setIsOpen(false);
                    setShowMobileDropdown(false);
                  }}
                >
                  <div className="font-medium text-sm">Loan Against Property</div>
                  <div className="text-xs text-gray-300 mt-1">All loans</div>
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Calculators Dropdown */}
          <div className="relative">
            <button
              className="w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center justify-between transition-colors duration-200"
              onClick={() => setShowMobileCalcDropdown(!showMobileCalcDropdown)}
            >
              Calculators
              <svg
                className={`h-4 w-4 text-gray-300 transition-transform duration-200 ${showMobileCalcDropdown ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div className={`ml-4 mt-1 transition-all duration-300 overflow-hidden ${showMobileCalcDropdown ? 'max-h-96' : 'max-h-0'}`}>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  to="/persnolcal"
                  className="block px-2 py-2 hover:bg-gray-600 rounded-md text-sm text-gray-300 transition-colors duration-200"
                  onClick={() => {
                    setIsOpen(false);
                    setShowMobileCalcDropdown(false);
                  }}
                >
                  <div className="font-medium text-sm">Personal Loan</div>
                  <div className="text-xs text-gray-300 mt-1">EMI calculator</div>
                </Link>
                <Link
                  to="/homecal"
                  className="block px-2 py-2 hover:bg-gray-600 rounded-md text-sm text-gray-300 transition-colors duration-200"
                  onClick={() => {
                    setIsOpen(false);
                    setShowMobileCalcDropdown(false);
                  }}
                >
                  <div className="font-medium text-sm">Home Loan</div>
                  <div className="text-xs text-gray-300 mt-1">EMI breakdown</div>
                </Link>
                <Link
                  to="/businesscal"
                  className="block px-2 py-2 hover:bg-gray-600 rounded-md text-sm text-gray-300 transition-colors duration-200"
                  onClick={() => {
                    setIsOpen(false);
                    setShowMobileCalcDropdown(false);
                  }}
                >
                  <div className="font-medium text-sm">Business Loan</div>
                  <div className="text-xs text-gray-300 mt-1">EMI estimates</div>
                </Link>
                <Link
                  to="/educationcal"
                  className="block px-2 py-2 hover:bg-gray-600 rounded-md text-sm text-gray-300 transition-colors duration-200"
                  onClick={() => {
                    setIsOpen(false);
                    setShowMobileCalcDropdown(false);
                  }}
                >
                  <div className="font-medium text-sm">Education Loan</div>
                  <div className="text-xs text-gray-300 mt-1">Financing plan</div>
                </Link>
                <Link
                  to="/vehiclecal"
                  className="block px-2 py-2 hover:bg-gray-600 rounded-md text-sm text-gray-300 transition-colors duration-200"
                  onClick={() => {
                    setIsOpen(false);
                    setShowMobileCalcDropdown(false);
                  }}
                >
                  <div className="font-medium text-sm">Vehicle Loan</div>
                  <div className="text-xs text-gray-300 mt-1">Auto loan EMIs</div>
                </Link>
                <Link
                  to="/agriculturecal"
                  className="block px-2 py-2 hover:bg-gray-600 rounded-md text-sm text-gray-300 transition-colors duration-200"
                  onClick={() => {
                    setIsOpen(false);
                    setShowMobileCalcDropdown(false);
                  }}
                >
                  <div className="font-medium text-sm">Agriculture Loan</div>
                  <div className="text-xs text-gray-300 mt-1">Farm estimates</div>
                </Link>
                <Link
                  to="/emical"
                  className="block px-2 py-2 hover:bg-gray-600 rounded-md text-sm text-gray-300 transition-colors duration-200"
                  onClick={() => {
                    setIsOpen(false);
                    setShowMobileCalcDropdown(false);
                  }}
                >
                  <div className="font-medium text-sm">Loan Against Property</div>
                  <div className="text-xs text-gray-300 mt-1">All loan types</div>
                </Link>
              </div>
            </div>
          </div>

          <Link
            to="/realestate"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Real Estate
          </Link>

          {/* About Page Link - Mobile */}
          <Link
            to="/about"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>

          <Link
            to="/contact"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;