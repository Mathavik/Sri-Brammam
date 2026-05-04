import React from "react";

const StatsSection: React.FC = () => {
  return (
    <div className="w-full bg-[#FFF9F6] py-12 border-y border-[#B12A1C]/20">
      {/* 
          max-w-7xl: இது கன்டெய்னரை இன்னும் அகலமாக்கும்.
          px-4: ஓரங்களில் உள்ள இடைவெளியைக் குறைப்பதால் இமேஜ்கள் இன்னும் ஓரத்திற்குச் செல்லும்.
      */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6">
        
        {/* Item 1 - Extreme Left */}
        <div className="flex items-center gap-4">
          <img 
            src="/images/state/state1.png" 
            alt="years"
            className="w-20 h-20 object-contain"
          />
          <div className="text-left">
            <h2 className="text-[#B12A1C] text-4xl font-bold leading-none">27+</h2>
            <p className="text-black text-lg font-bold mt-1">ஆண்டுகள்</p>
          </div>
        </div>

        {/* Item 2 - Center */}
        <div className="flex items-center gap-4">
          <img 
            src="/images/state/state2.png" 
            alt="publications"
            className="w-20 h-20 object-contain"
          />
          <div className="text-left">
            <h2 className="text-[#B12A1C] text-4xl font-bold leading-none">150+</h2>
            <p className="text-black text-lg font-bold mt-1">வெளியீடுகள்</p>
          </div>
        </div>

        {/* Item 3 - Extreme Right */}
        <div className="flex items-center gap-4">
          <img 
            src="/images/state/state3.png" 
            alt="readers"
            className="w-20 h-20 object-contain"
          />
          <div className="text-left">
            <h2 className="text-[#B12A1C] text-4xl font-bold leading-none">5000+</h2>
            <p className="text-black text-lg font-bold mt-1">வாசகர்கள்</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StatsSection;