import React, { useContext, useState } from 'react';
import { AuthContext } from './../../context/AuthContext';
import { Link } from 'react-router-dom';

function Navbar() {
  const { currentUser } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center">
          <img
            src="/saps_banner-removebg-preview.png"
            alt="SAPS Logo"
            className="h-12 mr-4"
          />
          <h1 className="text-2xl font-bold text-yellow-400">
            <Link to="/">SAPS DEPARTMENT</Link>
          </h1>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="text-white focus:outline-none md:hidden"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } md:max-h-full md:opacity-100 overflow-hidden transition-all duration-300 ease-in-out md:block absolute md:relative top-16 md:top-auto left-0 w-full md:w-auto bg-blue-800 md:bg-transparent z-50`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4 text-center md:text-left">
            <li>
              <Link
                to="/"
                className="block py-2 md:py-0 px-4 hover:text-yellow-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 md:py-0 px-4 hover:text-yellow-300"
              >
                Contact Us
              </Link>
            </li>

            {currentUser ? (
              <div className="user block py-2 md:py-0 px-4">
                <span>{currentUser.firstname}</span>
                <Link to="/profile" className="hover:text-yellow-300">
                  <span> - Profile</span>
                </Link>
              </div>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="block py-2 md:py-0 px-4 hover:text-yellow-300"
                >
                  Sign In
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
