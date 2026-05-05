import React from "react";

const SubscribeSection: React.FC = () => {
  return (
    <div className="w-full bg-[#E6DDC9] py-12 md:py-16">
      {/* மொபைலில் Column ஆகவும், md (Tablet/Desktop) திரையில் Row ஆகவும் மாறும் */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-10 gap-8 md:gap-4">
        
        {/* LEFT TEXT */}
        <div className="flex-1 text-center md:text-left w-full">
          {/* GET FIRST UPDATE Style */}
          <p 
            className="text-[#B12A1C] uppercase mb-2 text-sm md:text-lg"
            style={{
              fontFamily: "'Noto Sans Tamil', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.1em",
            }}
          >
            Get First update
          </p>

          {/* Main Heading Style */}
          <h2 
            className="text-black text-2xl md:text-[32px] lg:text-[38px] leading-snug md:leading-[42px] lg:leading-[50px]"
            style={{
              fontFamily: "'Arima', serif",
              fontWeight: 600,
            }}
          >
            Get the news in front line <br className="hidden md:block" />
            by subscribe our latest updates
          </h2>
        </div>

        {/* RIGHT INPUT + BUTTON */}
        <div className="flex flex-col sm:flex-row items-center shadow-sm w-full md:w-auto gap-3 sm:gap-0">
          <input
            type="email"
            placeholder="Your email"
            className="w-full sm:w-[320px] md:w-[360px] lg:w-[400px] h-[50px] md:h-[60px] px-6 bg-[#F3F4F6] outline-none text-gray-700 placeholder:text-gray-400 border-none rounded-md sm:rounded-r-none"
          />

          <button className="w-full sm:w-auto h-[50px] md:h-[60px] px-8 bg-[#B12A1C] text-white text-base md:text-lg font-bold hover:bg-[#8e2217] transition-colors rounded-md sm:rounded-l-none">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;