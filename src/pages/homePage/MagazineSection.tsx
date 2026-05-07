import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
      console.log("MagazineSection: fetchLatestRelease started");
      try {
        const response = await fetch("https://pcstech.in/pcs_api/brammam/public/api/latest-releases", {
          method: "GET",
          mode: "cors",
          headers: {
            Accept: "application/json",
          },
        });

        console.log("MagazineSection: fetch status", response.status, response.statusText);

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const json = await response.json();
        console.log("MagazineSection: API response json", json);

        if (json.success !== true) {
          console.error("MagazineSection: API returned success=false", json);
        } else if (!Array.isArray(json.data) || json.data.length === 0) {
          console.error("MagazineSection: API returned empty data array", json);
        } else {
          setReleaseData(json.data[0]);
        }
      } catch (error) {
        console.error("MagazineSection: Error fetching latest releases:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestRelease();
  }, []);

  return (
    // இடது மற்றும் வலது பக்க இடைவெளி குறைக்கப்பட்டு, விளிம்புகளுக்கு அருகில் இருக்குமாறு மாற்றப்பட்டுள்ளது
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
            {releaseData?.title || "சமீபத்திய வெளியீடு"}
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
            {releaseData?.description || "இதில் பக்தி கதைகள், ஆன்மிக கட்டுரைகள், தியான முறைகள் மற்றும் வாழ்க்கை முன்னேற்றத்திற்கான வழிகாட்டுதல்கள் இடம்பெறும்."}
          </p>

          {/* Categories */}
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
              type="button"
              onClick={() => setShowPdfModal(true)}
              className="bg-white text-[#B12A1C] flex items-center justify-center rounded-full hover:bg-gray-100 transition-all w-[200px] md:w-[180px] h-[48px]"
              style={{
                fontFamily: "'Arima', serif",
                fontWeight: 700,
                fontSize: "15px",
              }}
            >
              <img src="/images/magazine/bookIcon.png" alt="book" className="w-5 h-5 mr-2" />
              Read Article
            </button>
            <button
              onClick={() => navigate("/issues")}
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
            <p className="text-white text-sm animate-pulse">பதிவிறக்கம் செய்யப்படுகிறது...</p>
          ) : releaseData && releaseData.image_url ? (
            <button
              type="button"
              onClick={() => setShowPdfModal(true)}
              className="group relative w-full h-full rounded-xl overflow-hidden border border-white/20"
              style={{ backgroundColor: "transparent" }}
            >
              <img
                src={releaseData.image_url}
                alt={releaseData.title}
                className="object-cover rounded-xl shadow-2xl w-full h-full transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="pointer-events-none absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#B12A1C] opacity-0 group-hover:opacity-100 transition-opacity">
                Read PDF
              </span>
            </button>
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

      {/* Modal */}
      {showPdfModal && releaseData?.pdf_url && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="relative w-full max-w-[1100px] h-[90vh] rounded-[32px] shadow-2xl overflow-hidden bg-[#111]">
            <button
              type="button"
              onClick={() => setShowPdfModal(false)}
              className="absolute top-4 right-4 z-20 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#111] shadow-lg hover:bg-white"
            >
              Close
            </button>
            <div className="relative w-full h-full bg-white rounded-[32px] overflow-hidden">
              <iframe
                src={releaseData.pdf_url}
                title="Magazine PDF Preview"
                className="w-full h-full bg-white"
                frameBorder="0"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MagazineSection;