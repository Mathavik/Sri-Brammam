import React from "react";

const SubscribeSection: React.FC = () => {
  return (
    <div className="w-full bg-[#E6DDC9] py-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-10">
        
        {/* LEFT TEXT */}
        <div className="flex-1">
          {/* GET FIRST UPDATE Style */}
          <p 
            className="text-[#B12A1C] uppercase mb-2"
            style={{
              fontFamily: "'Noto Sans Tamil', sans-serif",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "38px",
              letterSpacing: "10%",
            }}
          >
            Get First update
          </p>

          {/* Main Heading Style */}
          <h2 
            className="text-black"
            style={{
              fontFamily: "'Arima', serif",
              fontWeight: 600,
              fontSize: "38px",
              lineHeight: "50px",
              letterSpacing: "0%",
            }}
          >
            Get the news in front line <br />
            by subscribe our latest updates
          </h2>
        </div>

        {/* RIGHT INPUT + BUTTON */}
        <div className="flex items-center shadow-sm">
          <input
            type="email"
            placeholder="Your email"
            className="w-[400px] h-[60px] px-6 bg-[#F3F4F6] outline-none text-gray-700 placeholder:text-gray-400 border-none rounded-l-md"
          />

          <button className="h-[60px] px-10 bg-[#B12A1C] text-white text-lg font-bold hover:bg-[#8e2217] transition-colors rounded-r-md">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;