import React from "react";

const SubscribeSection: React.FC = () => {
  return (
    <div className="w-full bg-[#E6DDC9] py-8 md:py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-10 gap-8 md:gap-4">
        
        {/* LEFT TEXT */}
        <div className="flex-1 text-center md:text-left w-full">
          {/* GET FIRST UPDATE Style */}
          <p 
            className="text-[#B12A1C] uppercase mb-1 text-sm md:text-lg"
            style={{
              fontFamily: "Arima",
              fontWeight: 600,
              letterSpacing: "0.1em",
            }}
          >
            Get First update
          </p>

          {/* Main Heading Style */}
          <h2 
            className="text-black text-2xl md:text-[28px] lg:text-[38px] leading-[1.2] md:leading-[36px] lg:leading-[50px]"
            style={{
              fontFamily: "Arima",
              fontWeight: 600,
            }}
          >
            Get the news in front line <br className="hidden md:block" />
            by subscribe our latest updates
          </h2>
        </div>

        {/* RIGHT INPUT + BUTTON */}
        <div className="flex flex-row items-center shadow-sm w-full md:w-auto gap-0 mt-4 md:mt-0">
          <input
            type="email"
            placeholder="Your email"
            className="w-full md:w-[300px] lg:w-[400px] h-[50px] md:h-[60px] px-6 bg-[#F3F4F6] outline-none text-gray-700 placeholder:text-gray-400 border-none rounded-l-md"
          />

          <button className="h-[50px] md:h-[60px] px-6 md:px-8 bg-[#B12A1C] text-white text-sm md:text-lg font-bold hover:bg-[#8e2217] transition-colors rounded-r-md whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;