import React from "react";

const StatsSection: React.FC = () => {
  return (
    <div className="w-full bg-[#FFF9F6] py-12 border-y border-[#B12A1C]/20">
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8">
        
        {/* Item 1 */}
        <div className="flex items-center justify-center gap-4">
          <img 
            src="/images/state/state1.png" // உங்கள் icon image path-ஐ இங்கு மாற்றவும்
            alt="years"
            className="w-20 h-20 object-contain"
          />
          <div className="text-left">
            <h2 className="text-[#B12A1C] text-4xl font-bold leading-none">27+</h2>
            <p className="text-black text-lg font-bold mt-1">ஆண்டுகள்</p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex items-center justify-center gap-4">
          <img 
            src="/images/state/state2.png" // உங்கள் icon image path-ஐ இங்கு மாற்றவும்
            alt="publications"
            className="w-20 h-20 object-contain"
          />
          <div className="text-left">
            <h2 className="text-[#B12A1C] text-4xl font-bold leading-none">150+</h2>
            <p className="text-black text-lg font-bold mt-1">வெளியீடுகள்</p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex items-center justify-center gap-4">
          <img 
            src="/images/state/state3.png" // உங்கள் icon image path-ஐ இங்கு மாற்றவும்
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