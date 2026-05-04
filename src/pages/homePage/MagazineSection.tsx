import React from "react";

const MagazineSection: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center py-20 bg-white">
      
      {/* 
          MAIN WRAPPER 
          Width: 1286px, Height: 524px 
      */}
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
          
          {/* சமீபத்திய வெளியீடு - Fixed height remove panni flex use panniyullen */}
          <h2 
            className="mb-4"
            style={{ 
              fontFamily: "'TAU-Paalai', sans-serif", 
              fontWeight: 700,
              fontSize: "46px",
              lineHeight: "1.2", // Fixed 48px-க்கு பதில் 1.2 spacing normalize seyyum
              letterSpacing: "0%",
              textTransform: "capitalize"
            }}
          >
            சமீபத்திய வெளியீடு
          </h2>

          {/* இதழ் பற்றிய விளக்கம் - Height auto-vaga iruppathu overlap-ai thadukkum */}
          <p 
            className="mb-8"
            style={{
              maxWidth: "650px",
              fontFamily: "'Mukta Malar', sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "28px", // Reference-ku etra vivid-ana spacing
              letterSpacing: "0%",
            }}
          >
            இதில் பக்தி கதைகள், ஆன்மிக கட்டுரைகள், தியான முறைகள், வாழ்க்கை முன்னேற்றத்திற்கான வழிகாட்டுதல்கள் மற்றும் நல்லெண்ணப் பதிவுகள் இடம்பெறும். வாசகர்களின் மன அமைதியை வளர்க்கவும், உள்ளார்ந்த ஞானத்தைத் தூண்டவும் இந்த இதழ் உதவுகிறது.
          </p>

          {/* வகைகள் (Categories) */}
          <div 
            className="mb-10"
            style={{
              fontFamily: "'Mukta Malar', sans-serif",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "42px",
              letterSpacing: "0%",
            }}
          >
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

          {/* BUTTONS AREA */}
          <div className="flex gap-6 items-center">
            {/* Read Article Button */}
            <button 
              className="bg-white text-[#B12A1C] flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              style={{
                width: "180px", 
                height: "48px",
                fontFamily: "'Arima', serif",
                fontWeight: 700,
                fontSize: "15px",
                textAlign: "center"
              }}
            >
              📖 Read Article
            </button>

            {/* View all Issues Button */}
            <button 
              className="border border-white text-white flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
              style={{
                width: "180px",
                height: "48px",
                fontFamily: "'Arima', serif",
                fontWeight: 700,
                fontSize: "15px",
                textAlign: "center"
              }}
            >
              View all Issues →
            </button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative z-10">
          <img
            src="/images/magazine/mag1.png"
            alt="magazine cover"
            className="object-cover rounded-xl shadow-2xl"
            style={{ 
                width: "360px", 
                height: "460px" 
            }}
          />
        </div>

      </div>
    </div>
  );
};

export default MagazineSection;