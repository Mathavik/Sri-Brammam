import React from "react";

const SponsorsBar: React.FC = () => {
  return (
    <div className="w-full bg-white py-12 px-4 md:px-8 flex justify-center items-center -mt-16">
      
      {/* 1. max-w-6xl சேர்த்து அகலத்தைக் கட்டுப்படுத்தியுள்ளோம்.
          2. rounded-2xl சேர்த்து ஓரங்களை வளைத்து பெட்டி போல உருவாக்கியுள்ளோம்.
          3. justify-between கொடுத்து லோகோக்களைச் சீராகப் பிரித்துள்ளோம்.
      */}
      <div className="w-full max-w-6xl bg-[#F9F9F9] py-10 px-6 md:px-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
        
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
        <div className="flex justify-center items-center h-24 w-44">
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