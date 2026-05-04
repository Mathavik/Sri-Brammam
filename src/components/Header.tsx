import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white">
      
      {/* Top Section: Logo and Login */}
      <div className="max-w-7xl mx-auto flex items-center justify-between py-6 px-10">
        
        {/* Left Spacer (Balancing) */}
        <div className="w-1/3"></div>

        {/* Center: Logo */}
        <div className="w-1/3 flex justify-center">
          <img
            src="/images/logo.png"
            alt="logo"
            className="h-20 object-contain"
          />
        </div>

        {/* Right: Login Button */}
        <div className="w-1/3 flex justify-end">
          <button className="bg-[#B22222] text-white px-8 py-2 rounded-full font-semibold text-sm transition hover:bg-red-800 shadow-md">
            Login
          </button>
        </div>
      </div>

      {/* Navigation Section with Top and Bottom Borders */}
      {/* முதல் படத்தில் உள்ளது போன்ற கோடுகள் (Borders) இங்கே கொடுக்கப்பட்டுள்ளன */}
      <div className="border-t border-b border-gray-200">
        <nav
          className="max-w-6xl mx-auto flex justify-between items-center py-4 text-[#333] font-medium text-[18px]"
          style={{ fontFamily: "Arima, serif" }}
        >
          <a href="about" className="hover:text-red-600 transition px-6">About</a>
          <a href="#" className="hover:text-red-600 transition px-6">Issues</a>
          <a href="#" className="hover:text-red-600 transition px-6">Community</a>
          <a href="#" className="hover:text-red-600 transition px-6">Reporters</a>
          <a href="#" className="hover:text-red-600 transition px-6">Events</a>
        </nav>
      </div>

    </header>
  );
};

export default Header;