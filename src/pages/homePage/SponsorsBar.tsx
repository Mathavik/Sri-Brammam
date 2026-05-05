import React from "react";

const SponsorsBar: React.FC = () => {
  return (
    // வெளிப்புற Padding-ஐ (px-8, md:px-20) நீக்கியுள்ளேன்
    <div className="w-full bg-white py-12 flex justify-center items-center -mt-16">
      
      {/* 
          1. max-w-7xl-ஐ நீக்கிவிட்டு w-full கொடுத்துள்ளேன்.
          2. rounded-2xl-ஐ நீக்கியுள்ளேன் (ஏனெனில் முழு அகலத்திற்கு வரும்போது வளைவுகள் தேவையில்லை).
          3. Padding-ஐ சரி செய்துள்ளேன்.
      */}
      <div className="w-full bg-[#F9F9F9] py-10 px-4 md:px-10 flex flex-col md:flex-row items-center justify-around gap-8">
        
        {/* Logo 1 - one.png */}
        <div className="flex justify-center items-center h-24 w-40">
          <img
            src="images/sponser/one.png" 
            alt="Logo 1"
            className="max-h-full max-w-full object-contain transition-transform hover:scale-105"
          />
        </div>

        {/* Logo 2 - two.png */}
        <div className="flex justify-center items-center h-24 w-40">
          <img
            src="images/sponser/two.png" 
            alt="Logo 2"
            className="max-h-full max-w-full object-contain transition-transform hover:scale-105"
          />
        </div>

        {/* Logo 3 - three.png */}
        <div className="flex justify-center items-center h-24 w-52">
          <img
            src="images/sponser/three.png" 
            alt="Logo 3"
            className="max-h-full max-w-full object-contain transition-transform hover:scale-105"
          />
        </div>

        {/* Logo 4 - four.png */}
        <div className="flex justify-center items-center h-34 w-44">
          <img
            src="images/sponser/four.png" 
            alt="Logo 4"
            className="max-h-full max-w-full object-contain transition-transform hover:scale-105"
          />
        </div>

      </div>
    </div>
  );
};

export default SponsorsBar;