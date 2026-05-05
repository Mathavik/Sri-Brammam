import React from "react";

const StatsSection: React.FC = () => {
  return (
    // max-w-8xl மற்றும் தேவையான இடைவெளிகள் அப்படியே வைக்கப்பட்டுள்ளன
<div className="w-full max-w-8xl mx-auto px-4 md:px-8 lg:px-12 -mt-16 md:-mt-20 relative z-10">      
      {/* உள் பகுதி: rounded-2xl நீக்கப்பட்டு சதுர வடிவமாக்கப்பட்டுள்ளது */}
      <div className="w-full bg-[#FFF9F6] py-6 md:py-8 px-6 md:px-10 border border-[#B12A1C]/20 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
        
        {/* Item 1 - ஆண்டுகள் */}
        <div className="flex items-center gap-6 w-full md:w-auto justify-start md:justify-center">
          <img 
            src="/images/state/state1.png" 
            alt="years"
            className="w-16 h-16 md:w-20 md:h-20 object-contain flex-shrink-0"
          />
          <div className="text-left min-w-[100px]">
            <h2 className="text-[#B12A1C] text-3xl md:text-4xl font-bold leading-none">27+</h2>
            <p className="text-black text-lg font-bold mt-1">ஆண்டுகள்</p>
          </div>
        </div>

        {/* Item 2 - வெளியீடுகள் */}
        <div className="flex items-center gap-6 w-full md:w-auto justify-start md:justify-center">
          <img 
            src="/images/state/state2.png" 
            alt="publications"
            className="w-16 h-16 md:w-20 md:h-20 object-contain flex-shrink-0"
          />
          <div className="text-left min-w-[100px]">
            <h2 className="text-[#B12A1C] text-3xl md:text-4xl font-bold leading-none">150+</h2>
            <p className="text-black text-lg font-bold mt-1">வெளியீடுகள்</p>
          </div>
        </div>

        {/* Item 3 - வாசகர்கள் */}
        <div className="flex items-center gap-6 w-full md:w-auto justify-start md:justify-center">
          <img 
            src="/images/state/state3.png" 
            alt="readers"
            className="w-16 h-16 md:w-20 md:h-20 object-contain flex-shrink-0"
          />
          <div className="text-left min-w-[100px]">
            <h2 className="text-[#B12A1C] text-3xl md:text-4xl font-bold leading-none">5000+</h2>
            <p className="text-black text-lg font-bold mt-1">வாசகர்கள்</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StatsSection;