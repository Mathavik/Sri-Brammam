import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        
        <div className="w-1/3"></div>

        <div className="w-1/3 flex justify-center">
          <img
            src="/images/logo.png"
            alt="logo"
            className="h-14 object-contain"
          />
        </div>

        <div className="w-1/3 flex justify-end">
          <button className="bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600 transition">
            Login
          </button>
        </div>
      </div>

      <div className="border-t border-gray-200"></div>

      {/* Navigation */}
      <nav
        className="max-w-5xl mx-auto flex justify-between py-3 text-gray-700 font-medium text-[20px] leading-[100%]"
        style={{ fontFamily: "Arima" }}
      >
        <a href="#" className="hover:text-red-500 transition">About</a>
        <a href="#" className="hover:text-red-500 transition">Issues</a>
        <a href="#" className="hover:text-red-500 transition">Community</a>
        <a href="#" className="hover:text-red-500 transition">Reporters</a>
        <a href="#" className="hover:text-red-500 transition">Events</a>
      </nav>

    </header>
  );
};

export default Header;