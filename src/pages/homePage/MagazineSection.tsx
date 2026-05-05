import React, { useEffect, useState } from "react";

// API-லிருந்து வரும் Data-வின் கட்டமைப்பை வரையறுக்கிறோம்
interface LatestReleaseData {
  title: string;
  coverImage: string; // உங்கள் API-யில் உள்ள key-க்கு ஏற்ப இதை மாற்றிக்கொள்ளலாம்
  link: string;
}

const MagazineSection: React.FC = () => {
  const [releaseData, setReleaseData] = useState<LatestReleaseData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchLatestRelease = async () => {
      try {
        const response = await fetch("https://pcstech.in/pcs_api/brammam/public/api/latest-releases");
        const data = await response.json();
        
        // உங்கள் API-யின் கட்டமைப்பிற்கு ஏற்ப டேட்டாவை செட் செய்கிறோம்.
        // உதாரணத்திற்கு முதல் பொருளை எடுக்கிறோம்.
        if (Array.isArray(data) && data.length > 0) {
          setReleaseData(data[0]);
        } else if (data) {
          setReleaseData(data);
        }
      } catch (error) {
        console.error("Error fetching latest releases:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestRelease();
  }, []);

  return (
    <div className="w-full flex justify-center items-center bg-white">
      {/* MAIN WRAPPER 
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
          
          <h2 
            className="mb-4"
            style={{ 
              fontFamily: "'TAU-Paalai', sans-serif", 
              fontWeight: 700,
              fontSize: "46px",
              lineHeight: "1.2", 
              letterSpacing: "0%",
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
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "28px",
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

        {/* RIGHT SIDE DYNAMIC IMAGE / CARD */}
        <div className="relative z-10 flex items-center justify-center w-[360px] h-[460px] bg-white/10 backdrop-blur-sm rounded-xl">
          {loading ? (
            <p className="text-white text-sm">தரவு (Data) லோட் ஆகிறது...</p>
          ) : releaseData && releaseData.coverImage ? (
            <img
              src={releaseData.coverImage}
              alt={releaseData.title || "சமீபத்திய வெளியீடு"}
              className="object-cover rounded-xl shadow-2xl w-full h-full"
              style={{ 
                width: "360px", 
                height: "460px" 
              }}
            />
          ) : (
            <div className="text-center p-5 text-white">
              <p className="font-semibold text-lg mb-2">
                {releaseData?.title || "புதிய இதழ்"}
              </p>
              <p className="text-xs opacity-80">படங்கள் கிடைக்கவில்லை</p>
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default MagazineSection;