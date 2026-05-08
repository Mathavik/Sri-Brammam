import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";

interface LatestReleaseData {
  title: string;
  image_url: string;
  pdf_url: string;
  description: string;
}

const MagazineSection: React.FC = () => {
  const navigate = useNavigate();
  const [releaseData, setReleaseData] = useState<LatestReleaseData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [showPdfModal, setShowPdfModal] = useState<boolean>(false);

  useEffect(() => {
    const fetchLatestRelease = async () => {
      setLoading(true);
      try {
        const res: any = await api.get("/latest-releases");
        if (res.data.success === true && Array.isArray(res.data.data) && res.data.data.length > 0) {
          setReleaseData(res.data.data[0]);
        }
      } catch (error: any) {
        console.error("MagazineSection API Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLatestRelease();
  }, []);

  // மொபைல் போனா இல்லையா என்று கண்டறியும் Logic
  const isMobile = useMemo(() => {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  }, []);

  const handleOpenPdf = () => {
    if (!releaseData?.pdf_url) return;
    setShowPdfModal(true);
  };

  // PDF URL-ஐ வேகப்படுத்தவும், வியூவரைத் தீர்மானிக்கவும்
  const getPdfSrc = () => {
    if (!releaseData?.pdf_url) return "";
    
    // மொபைல் என்றால் Google Viewer (பாப்-அப்பில் தெரிய)
    if (isMobile) {
      return `https://docs.google.com/viewer?url=${encodeURIComponent(releaseData.pdf_url)}&embedded=true`;
    }
    
    // லேப்டாப் என்றால் நேரடி PDF URL (நீங்கள் கேட்ட அதே டிசைன் வர)
    // #toolbar=1 என்பது மேலே உள்ள டூல்பார்க்களைக் காட்டும்
    return `${releaseData.pdf_url}#toolbar=1&navpanes=1&scrollbar=1`;
  };

  return (
    <div className="w-full flex justify-center items-center pt-2 pb-10 md:py-20 px-4 md:px-8 lg:px-12 mt-8 md:-mt-16">
      <div
        className="relative overflow-hidden flex flex-col md:flex-row items-center justify-between px-6 py-10 md:px-20 shadow-2xl rounded-xl md:rounded-sm w-full max-w-[1286px] min-h-[524px]"
        style={{
          backgroundImage: "url('/images/magazine/mag.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* LEFT CONTENT */}
        <div className="relative z-10 text-white flex flex-col justify-center text-center md:text-left mb-10 md:mb-0">
          <h2 className="mb-4 text-[32px] md:text-[46px]" style={{ fontFamily: "'TAU-Paalai', sans-serif", fontWeight: 700, lineHeight: "1.2", textTransform: "capitalize" }}>
            {releaseData?.title || "சமீபத்திய வெளியீடு"}
          </h2>
          <p className="mb-8 text-[16px] md:text-[18px] opacity-90" style={{ maxWidth: "650px", fontFamily: "'Mukta Malar', sans-serif", fontWeight: 400, lineHeight: "28px" }}>
            {releaseData?.description || "இதில் பக்தி கதைகள், ஆன்மிக கட்டுரைகள், தியான முறைகள் மற்றும் வாழ்க்கை முன்னேற்றத்திற்கான வழிகாட்டுதல்கள் இடம்பெறும்."}
          </p>

          <div className="mb-10 text-[18px] md:text-[24px]" style={{ fontFamily: "'Mukta Malar', sans-serif", fontWeight: 400, lineHeight: "1.5" }}>
            <ul className="space-y-3 flex flex-col items-center md:items-start">
              <li className="flex items-center gap-3 italic"><span className="w-2 h-2 bg-white rounded-full"></span> சமூகம்</li>
              <li className="flex items-center gap-3 italic"><span className="w-2 h-2 bg-white rounded-full"></span> ஆன்மிகம்</li>
              <li className="flex items-center gap-3 italic"><span className="w-2 h-2 bg-white rounded-full"></span> வழிகாட்டுதல்</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center justify-center md:justify-start">
            <button onClick={handleOpenPdf} className="bg-white text-[#B12A1C] flex items-center justify-center rounded-full hover:bg-gray-100 transition-all w-[200px] md:w-[180px] h-[48px]" style={{ fontFamily: "'Arima', serif", fontWeight: 700, fontSize: "15px" }}>
              <img src="/images/magazine/bookIcon.png" alt="book" className="w-5 h-5 mr-2" />
              Read Article
            </button>
            <button onClick={() => navigate("/issues")} className="border border-white text-white flex items-center justify-center rounded-full hover:bg-white/10 transition-all w-[200px] md:w-[180px] h-[48px]" style={{ fontFamily: "'Arima', serif", fontWeight: 700, fontSize: "15px" }}>
              View all Issues →
            </button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative z-10 flex items-center justify-center w-full max-w-[320px] md:max-w-[360px] aspect-[3/4] bg-white/10 backdrop-blur-sm rounded-xl p-2">
          {loading ? (
            <p className="text-white text-sm animate-pulse">பதிவிறக்கம் செய்யப்படுகிறது...</p>
          ) : (
            <button onClick={handleOpenPdf} className="group relative w-full h-full rounded-xl overflow-hidden border border-white/20 bg-transparent">
              <img src={releaseData?.image_url} alt={releaseData?.title} className="object-cover rounded-xl shadow-2xl w-full h-full transition-transform duration-300 group-hover:scale-[1.02]" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#B12A1C] opacity-0 group-hover:opacity-100 transition-opacity">இதழை வாசிக்க</span>
            </button>
          )}
        </div>
      </div>

      {/* MODAL AREA */}
      {showPdfModal && releaseData?.pdf_url && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-0 md:p-4">
          <div className="relative w-full h-full md:w-[95vw] md:h-[95vh] bg-[#323639] md:rounded-lg overflow-hidden flex flex-col">
            
            {/* Close Bar - Mobile-ல் மட்டும் கூடுதல் முக்கியத்துவம் */}
            <div className="w-full bg-[#323639] text-white p-3 flex justify-between items-center px-6">
              <span className="text-sm md:text-base font-medium truncate">{releaseData.title}</span>
              <button 
                onClick={() => setShowPdfModal(false)}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-md text-sm font-bold transition-colors"
              >
                Close
              </button>
            </div>

            <div className="flex-grow w-full h-full bg-white">
              <iframe
                src={getPdfSrc()}
                title="Magazine PDF"
                className="w-full h-full border-none"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MagazineSection;