import React from "react";

const MainSection: React.FC = () => {
  return (
    <div className="w-full h-[600px] relative overflow-hidden">
      
      {/* Background Image */}
      <img
        src="images/herosection/background.png" 
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Thin Orange Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-900/60 to-transparent"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center justify-between px-10">
        
        {/* LEFT TEXT */}
        <div className="text-white">
          {/* ஸ்ரீ பிரம்மம் Style */}
          <h1 
            className="drop-shadow-2xl mb-2"
            style={{ 
              fontFamily: "'TAU-Paalai', sans-serif", // உங்கள் சிஸ்டமில் உள்ள TAU-Paalai Bold
              fontWeight: 700,
              fontSize: "58px",
              lineHeight: "48px",
              letterSpacing: "0%",
              textTransform: "capitalize"
            }}
          >
            ஸ்ரீ பிரம்மம்
          </h1>

          {/* ஆன்மீகம்... Style */}
          <p 
            className="opacity-100"
            style={{
              fontFamily: "'Arima', serif",
              fontWeight: 700,
              fontSize: "24px",
              lineHeight: "48px",
              letterSpacing: "0%",
              textTransform: "capitalize"
            }}
          >
            “ஆன்மீகம் • அறம் • அறிவு — உங்கள் வழிகாட்டி”
          </p>
        </div>

        {/* RIGHT IMAGE CARD */}
        <div className="relative">
          <div className="bg-white p-4 pt-12 pb-5 rounded-[45px] shadow-2xl">
            <div className="rounded-[35px] overflow-hidden">
              <img
                src="images/herosection/right.png" 
                alt="side"
                className="w-[440px] h-[300px] object-cover"
              />
            </div>
          </div>
          {/* Divine Glow */}
          <div className="absolute -inset-4 bg-orange-500/20 blur-3xl -z-10 rounded-full"></div>
        </div>

      </div>
    </div>
  );
};

export default MainSection;