import React from "react";

const StatsSection: React.FC = () => {
  return (
    <div className="w-full bg-[#FFF9F6] py-6 md:py-8  relative z-10 border-y border-[#B12A1C]/20">
      {/* மொபைல் திரையில் கீழே அடுத்தடுத்து வரவும், டெஸ்க்டாப் திரையில் பக்கவாட்டிலும் அமையச் செய்யும். */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-6 gap-8 md:gap-4">
        
        {/* Item 1 - ஆண்டுகள் */}
        <div className="flex items-center gap-6 w-64 sm:w-72 md:w-auto justify-start md:justify-center">
          <img 
            src="/images/state/state1.png" 
            alt="years"
            className="w-16 h-16 md:w-20 md:h-20 object-contain flex-shrink-0"
          />
          <div className="text-left min-w-[110px]">
            <h2 className="text-[#B12A1C] text-3xl md:text-4xl font-bold leading-none">27+</h2>
            <p className="text-black text-lg font-bold mt-1">ஆண்டுகள்</p>
          </div>
        </div>

        {/* Item 2 - வெளியீடுகள் */}
        <div className="flex items-center gap-6 w-64 sm:w-72 md:w-auto justify-start md:justify-center">
          <img 
            src="/images/state/state2.png" 
            alt="publications"
            className="w-16 h-16 md:w-20 md:h-20 object-contain flex-shrink-0"
          />
          <div className="text-left min-w-[110px]">
            <h2 className="text-[#B12A1C] text-3xl md:text-4xl font-bold leading-none">150+</h2>
            <p className="text-black text-lg font-bold mt-1">வெளியீடுகள்</p>
          </div>
        </div>

        {/* Item 3 - வாசகர்கள் */}
        <div className="flex items-center gap-6 w-64 sm:w-72 md:w-auto justify-start md:justify-center">
          <img 
            src="/images/state/state3.png" 
            alt="readers"
            className="w-16 h-16 md:w-20 md:h-20 object-contain flex-shrink-0"
          />
          <div className="text-left min-w-[110px]">
            <h2 className="text-[#B12A1C] text-3xl md:text-4xl font-bold leading-none">5000+</h2>
            <p className="text-black text-lg font-bold mt-1">வாசகர்கள்</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StatsSection;