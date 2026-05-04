import React from "react";

const MagazineSection: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center py-20">
      
      {/* CONTAINER */}
      <div 
        className="relative overflow-hidden flex items-center justify-between px-16 shadow-2xl"
        style={{ 
          width: "1286px", 
          height: "524px",
          
        }}
      >

        {/* ✅ BACKGROUND IMAGE ONLY */}
        <img
          src="/images/magazine/mag.png"
          alt="bg"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* LEFT CONTENT */}
        <div className="relative z-10 text-white max-w-2xl">
          <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: "Arima, serif" }}>
            சமீபத்திய வெளியீடு
          </h2>

          <p className="text-lg leading-relaxed mb-8 opacity-95 text-justify">
            இதில் பக்தி கதைகள், ஆன்மிக கட்டுரைகள், தியான முறைகள், வாழ்க்கை 
            முன்னேற்றத்திற்கான வழிகாட்டுதல்கள் மற்றும் நல்லெண்ணப் பதிவுகள் 
            இடம்பெறும்.
          </p>

          <ul className="space-y-4 mb-10 text-xl font-medium">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-white rounded-full"></span> சமூகம்
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-white rounded-full"></span> ஆன்மிகம்
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-white rounded-full"></span> வழிகாட்டுதல்
            </li>
          </ul>

          <div className="flex gap-6">
            <button className="bg-white text-[#B12A1C] px-8 py-3 rounded-full text-lg font-bold">
              📖 Read Article
            </button>

            <button className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-bold">
              View all Issues →
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative z-10">
          <img
            src="/images/magazine/mag1.png"
            alt="magazine cover"
            style={{ width: "340px", height: "426px" }}
            className="object-cover rounded-xl shadow-2xl"
          />
        </div>

      </div>
    </div>
  );
};

export default MagazineSection;