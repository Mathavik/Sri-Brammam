import React from "react";

const MagazineSection: React.FC = () => {
  return (
    /* pb-0 ensures no gap at the bottom */
    <div className="w-full flex justify-center items-center pt-20 pb-0 bg-white">
      
      {/* MAIN WRAPPER */}
      <div 
        className="relative overflow-hidden flex items-center justify-between px-20 shadow-2xl rounded-sm"
        style={{ 
          width: "1286px", 
          height: "524px",
          backgroundImage: "url('/images/magazine/mag.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* LEFT CONTENT AREA */}
        <div className="relative z-10 text-white flex flex-col justify-center h-full">
          <h2 
            className="mb-4"
            style={{ 
              fontFamily: "'TAU-Paalai', sans-serif", 
              fontWeight: 700,
              fontSize: "46px",
              lineHeight: "1.2",
              textTransform: "capitalize"
            }}
          >
            சமீபத்திய வெளியீடு
          </h2>

          <p 
            className="mb-8"
            style={{
              maxWidth: "650px",
              fontFamily: "'Mukta Malar', sans-serif",
              fontSize: "18px",
              lineHeight: "28px",
            }}
          >
            இதில் பக்தி கதைகள், ஆன்மிக கட்டுரைகள், தியான முறைகள், வாழ்க்கை முன்னேற்றத்திற்கான வழிகாட்டுதல்கள் மற்றும் நல்லெண்ணப் பதிவுகள் இடம்பெறும்.
          </p>

          <div className="mb-10" style={{ fontFamily: "'Mukta Malar', sans-serif", fontSize: "24px" }}>
            <ul className="space-y-2">
              <li className="flex items-center gap-3 italic">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span> சமூகம்
              </li>
              <li className="flex items-center gap-3 italic">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span> ஆன்மிகம்
              </li>
              <li className="flex items-center gap-3 italic">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span> வழிகாட்டுதல்
              </li>
            </ul>
          </div>

          <div className="flex gap-6 items-center">
            <button className="bg-white text-[#B12A1C] w-[180px] h-[48px] rounded-full font-bold">📖 Read Article</button>
            <button className="border border-white text-white w-[180px] h-[48px] rounded-full font-bold">View all Issues →</button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative z-10">
          <img
            src="/images/magazine/mag1.png"
            alt="magazine cover"
            className="object-cover rounded-xl shadow-2xl w-[360px] h-[460px]"
          />
        </div>
      </div>
    </div>
  );
};

export default MagazineSection;