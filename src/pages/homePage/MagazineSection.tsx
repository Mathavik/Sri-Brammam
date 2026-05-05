import React, { useEffect, useState } from "react";

interface LatestReleaseData {
  title: string;
  coverImage: string;
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
    /* வெளிப்புறத்தில் இருந்த bg-[#B12A1C] நீக்கப்பட்டது */
<div className="w-full flex justify-center items-center py-10 md:py-20 px-4 md:px-0 -mt-10 md:-mt-16">      
      {/* 
        MAIN WRAPPER: 
        - இங்குதான் உங்கள் 'mag.png' படம் பின்னணியாக உள்ளது.
        - 'bg-no-repeat' மற்றும் 'bg-cover' சேர்ப்பதன் மூலம் படம் கச்சிதமாகப் பொருந்தும்.
      */}
      <div 
        className="relative overflow-hidden flex flex-col md:flex-row items-center justify-between px-6 py-10 md:px-20 shadow-2xl rounded-xl md:rounded-sm w-full max-w-[1286px] min-h-[524px]"
        style={{ 
          backgroundImage: "url('/images/magazine/mag.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* LEFT CONTENT AREA */}
        <div className="relative z-10 text-white flex flex-col justify-center text-center md:text-left mb-10 md:mb-0">
          
          <h2 
            className="mb-4 text-[32px] md:text-[46px]"
            style={{ 
              fontFamily: "'TAU-Paalai', sans-serif", 
              fontWeight: 700,
              lineHeight: "1.2", 
              textTransform: "capitalize"
            }}
          >
            சமீபத்திய வெளியீடு
          </h2>

          <p 
            className="mb-8 text-[16px] md:text-[18px] opacity-90"
            style={{
              maxWidth: "650px",
              fontFamily: "'Mukta Malar', sans-serif",
              fontWeight: 400,
              lineHeight: "28px",
            }}
          >
            இதில் பக்தி கதைகள், ஆன்மிக கட்டுரைகள், தியான முறைகள், வாழ்க்கை முன்னேற்றத்திற்கான வழிகாட்டுதல்கள் மற்றும் நல்லெண்ணப் பதிவுகள் இடம்பெறும். வாசகர்களின் மன அமைதியை வளர்க்கவும், உள்ளார்ந்த ஞானத்தைத் தூண்டவும் இந்த இதழ் உதவுகிறது.
          </p>

          {/* வகைகள் (Categories) */}
          <div 
            className="mb-10 text-[18px] md:text-[24px]"
            style={{
              fontFamily: "'Mukta Malar', sans-serif",
              fontWeight: 400,
              lineHeight: "1.5",
            }}
          >
            <ul className="space-y-3 flex flex-col items-center md:items-start">
              <li className="flex items-center gap-3 italic">
                <span className="w-2 h-2 bg-white rounded-full"></span> சமூகம்
              </li>
              <li className="flex items-center gap-3 italic">
                <span className="w-2 h-2 bg-white rounded-full"></span> ஆன்மிகம்
              </li>
              <li className="flex items-center gap-3 italic">
                <span className="w-2 h-2 bg-white rounded-full"></span> வழிகாட்டுதல்
              </li>
            </ul>
          </div>

          {/* BUTTONS AREA */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center justify-center md:justify-start">
            <button 
              className="bg-white text-[#B12A1C] flex items-center justify-center rounded-full hover:bg-gray-100 transition-all w-[200px] md:w-[180px] h-[48px]"
              style={{
                fontFamily: "'Arima', serif",
                fontWeight: 700,
                fontSize: "15px",
              }}
            >
              📖 Read Article
            </button>

            <button 
              className="border border-white text-white flex items-center justify-center rounded-full hover:bg-white/10 transition-all w-[200px] md:w-[180px] h-[48px]"
              style={{
                fontFamily: "'Arima', serif",
                fontWeight: 700,
                fontSize: "15px",
              }}
            >
              View all Issues →
            </button>
          </div>
        </div>

        {/* RIGHT SIDE DYNAMIC IMAGE */}
        <div className="relative z-10 flex items-center justify-center w-full max-w-[320px] md:max-w-[360px] aspect-[3/4] bg-white/10 backdrop-blur-sm rounded-xl p-2">
          {loading ? (
            <p className="text-white text-sm">தரவு (Data) லோட் ஆகிறது...</p>
          ) : releaseData && releaseData.coverImage ? (
            <img
              src={releaseData.coverImage}
              alt={releaseData.title || "சமீபத்திய வெளியீடு"}
              className="object-cover rounded-xl shadow-2xl w-full h-full border border-white/20"
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