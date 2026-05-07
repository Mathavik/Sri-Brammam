import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm md:shadow-none fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 md:py-6 px-4 md:px-10">

        {/* Left Section: Menu button (Mobile only) */}
        <div className="w-1/3 md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-[#333] hover:bg-gray-100 rounded-full transition focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Left Section: Spacer for Desktop/Tablet */}
        <div className="hidden md:flex w-1/3 justify-start"></div>

        {/* Center: Logo */}
       <div className="w-1/2 flex justify-center">
  <a href="/">
    <img
      src="/images/logo.png"
      alt="logo"
      className="h-15 md:h-20 object-contain cursor-pointer hover:opacity-80 transition-opacity"
    />
  </a>
</div>

        {/* Right Section: Login Button */}
        <div className="w-1/3 flex justify-end">
          <button className="bg-[#B22222] text-white px-5 md:px-8 py-2 rounded-full font-semibold text-xs md:text-sm transition hover:bg-red-800 shadow-md">
            Login
          </button>
        </div>

      </div>

      {/* Desktop Navigation Section */}
 <div className="hidden md:block border-t border-b border-gray-200">
  <nav
    className="max-w-6xl mx-auto flex justify-center items-center gap-64 py-5 text-[#333] font-medium text-[18px]"
    style={{ fontFamily: "Arima, serif" }}
  >
    <a href="/about" className="hover:text-red-600 transition px-6">
      About
    </a>

    <a href="/issues" className="hover:text-red-600 transition px-6">
      Issues
    </a>

    <a href="/reporters" className="hover:text-red-600 transition px-6">
      Reporters
    </a>
  </nav>
</div>

      {/* Mobile Navigation Menu as an overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full border-t border-gray-200 bg-white py-4 px-6 flex flex-col space-y-4 font-medium text-[16px] shadow-lg transition-all duration-300 ease-in-out z-40">
          <a href="/about" className="hover:text-red-600 transition py-2 border-b border-gray-50">About</a>
          <a href="/issues" className="hover:text-red-600 transition py-2 border-b border-gray-50">Issues</a>
          {/* <a href="#" className="hover:text-red-600 transition py-2 border-b border-gray-50">Community</a> */}
          <a href="/reporters" className="hover:text-red-600 transition py-2 border-b border-gray-50">Reporters</a>
          {/* <a href="/events" className="hover:text-red-600 transition py-2 border-b border-gray-50">Events</a> */}
        </div>
      )}

    </header>
  );
};

export default Header;