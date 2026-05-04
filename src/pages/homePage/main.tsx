import React from "react";

const MainSection: React.FC = () => {
  return (
    <div className="w-full h-[500px] relative overflow-hidden">
      
      {/* Background Image */}
      <img
        src="images/herosection/background.png" 
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Thin Orange Gradient Overlay - படத்தின் பின்னணி தெளிவாகத் தெரிய மெல்லிய லேயர் */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-950/50 to-orange-700/30"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center justify-between px-10">
        
        {/* LEFT TEXT */}
        <div className="text-white max-w-xl">
          <h1 className="text-7xl font-bold mb-6 drop-shadow-2xl" style={{ fontFamily: "Arima, serif" }}>
            ஸ்ரீ பிரம்மம்
          </h1>
          <p className="text-2xl font-medium opacity-95 tracking-wide leading-relaxed">
            "ஆன்மிகம் · அறம் · அறிவு – உங்கள் வழிகாட்டி"
          </p>
        </div>

        {/* RIGHT IMAGE CARD - Polaroid Style (Reference Image-ல் உள்ளது போல) */}
        <div className="relative">
          
          {/* White Card Frame */}
          <div className="bg-white p-4 pt-16 pb-6 rounded-[45px] shadow-2xl transform rotate-1">
            
            {/* Inner Image Container */}
            <div className="rounded-[30px] overflow-hidden border-2 border-gray-50 shadow-inner">
              <img
                src="images/herosection/right.png" 
                alt="side"
                className="w-[420px] h-[320px] object-cover"
              />
            </div>

          </div>

          {/* Optional: Add a subtle glow behind the card to match the divine theme */}
          <div className="absolute -inset-4 bg-orange-400/20 blur-3xl -z-10 rounded-full"></div>
        </div>

      </div>
    </div>
  );
};

export default MainSection;