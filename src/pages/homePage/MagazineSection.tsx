import React, {
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";

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

  const [releaseData, setReleaseData] =
    useState<LatestReleaseData | null>(null);

  const [loading, setLoading] =
    useState<boolean>(true);

  const [showPdfModal, setShowPdfModal] =
    useState<boolean>(false);

  // =========================
  // Fetch API + Cache
  // =========================
  useEffect(() => {
    let isMounted = true;

    const fetchLatestRelease = async () => {
      try {

        // Cached Data
        const cachedData =
          localStorage.getItem("latestRelease");

        if (cachedData) {
          setReleaseData(JSON.parse(cachedData));
          setLoading(false);
        }

        console.time("Latest Release API");

        const res: any = await api.get(
          "/latest-releases"
        );

        console.timeEnd("Latest Release API");

        if (
          isMounted &&
          res.data.success === true &&
          Array.isArray(res.data.data) &&
          res.data.data.length > 0
        ) {
          const latestData = res.data.data[0];

          setReleaseData(latestData);

          // Save Cache
          localStorage.setItem(
            "latestRelease",
            JSON.stringify(latestData)
          );

          setLoading(false);
        }

      } catch (error: any) {
        console.error(
          "MagazineSection API Error:",
          error
        );

        setLoading(false);
      }
    };

    fetchLatestRelease();

    return () => {
      isMounted = false;
    };
  }, []);

  // =========================
  // Mobile Detect
  // =========================
  const isMobile = useMemo(() => {
    return /iPhone|iPad|iPod|Android/i.test(
      navigator.userAgent
    );
  }, []);

  // =========================
  // Open PDF
  // =========================
  const handleOpenPdf = () => {
    if (!releaseData?.pdf_url) return;

    setShowPdfModal(true);
  };

  // =========================
  // PDF SRC
  // =========================
  const getPdfSrc = useCallback(() => {
    if (!releaseData?.pdf_url) return "";

    if (isMobile) {
      return `https://docs.google.com/viewer?url=${encodeURIComponent(
        releaseData.pdf_url
      )}&embedded=true`;
    }

    return `${releaseData.pdf_url}#toolbar=1&navpanes=1&scrollbar=1`;

  }, [releaseData, isMobile]);

  // =========================
  // Loading Skeleton
  // =========================
  if (loading) {
    return (
      <div className="w-full flex justify-center items-center pt-2 pb-10 md:py-20 px-4 md:px-8 lg:px-12 mt-8 md:-mt-16">

        <div className="relative overflow-hidden flex flex-col md:flex-row items-center justify-between px-6 py-10 md:px-20 rounded-xl md:rounded-sm w-full max-w-[1286px] min-h-[524px] bg-gray-200 animate-pulse">

          {/* LEFT */}
          <div className="w-full md:w-1/2">

            <div className="w-72 h-12 bg-gray-300 rounded mb-6"></div>

            <div className="w-full h-5 bg-gray-300 rounded mb-3"></div>

            <div className="w-5/6 h-5 bg-gray-300 rounded mb-8"></div>

            <div className="space-y-4 mb-10">

              <div className="w-32 h-5 bg-gray-300 rounded"></div>

              <div className="w-32 h-5 bg-gray-300 rounded"></div>

              <div className="w-32 h-5 bg-gray-300 rounded"></div>
            </div>

            <div className="flex gap-4">

              <div className="w-44 h-12 bg-gray-300 rounded-full"></div>

              <div className="w-44 h-12 bg-gray-300 rounded-full"></div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full max-w-[320px] md:max-w-[360px] aspect-[3/4] bg-gray-300 rounded-xl mt-10 md:mt-0"></div>
        </div>
      </div>
    );
  }

  // =========================
  // No Data
  // =========================
  if (!releaseData) {
    return null;
  }

  return (
    <>
      <div className="w-full flex justify-center items-center pt-2 pb-10 md:py-20 px-4 md:px-8 lg:px-12 mt-8 md:-mt-16">

        <div
          className="relative overflow-hidden flex flex-col md:flex-row items-center justify-between px-6 py-10 md:px-20 shadow-2xl rounded-xl md:rounded-sm w-full max-w-[1286px] min-h-[524px]"
          style={{
            backgroundImage:
              "url('/images/magazine/mag.png')",

            backgroundSize: "cover",

            backgroundPosition: "center",

            backgroundRepeat: "no-repeat",
          }}
        >

          {/* LEFT CONTENT */}
          <div className="relative z-10 text-white flex flex-col justify-center text-center md:text-left mb-10 md:mb-0">

            <h2
              className="mb-4 text-[32px] md:text-[46px]"
              style={{
                fontFamily:
                  "'TAU-Paalai', sans-serif",

                fontWeight: 700,

                lineHeight: "1.2",

                textTransform: "capitalize",
              }}
            >
              {releaseData.title}
            </h2>

            <p
              className="mb-8 text-[16px] md:text-[18px] opacity-90"
              style={{
                maxWidth: "650px",

                fontFamily:
                  "'Mukta Malar', sans-serif",

                fontWeight: 400,

                lineHeight: "28px",
              }}
            >
              {releaseData.description}
            </p>

            {/* Points */}
            <div
              className="mb-10 text-[18px] md:text-[24px]"
              style={{
                fontFamily:
                  "'Mukta Malar', sans-serif",

                fontWeight: 400,

                lineHeight: "1.5",
              }}
            >

              <ul className="space-y-3 flex flex-col items-center md:items-start">

                <li className="flex items-center gap-3 italic">

                  <span className="w-2 h-2 bg-white rounded-full"></span>

                  சமூகம்
                </li>

                <li className="flex items-center gap-3 italic">

                  <span className="w-2 h-2 bg-white rounded-full"></span>

                  ஆன்மிகம்
                </li>

                <li className="flex items-center gap-3 italic">

                  <span className="w-2 h-2 bg-white rounded-full"></span>

                  வழிகாட்டுதல்
                </li>
              </ul>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center justify-center md:justify-start">

              <button
                onClick={handleOpenPdf}
                className="bg-white text-[#B12A1C] flex items-center justify-center rounded-full hover:bg-gray-100 transition-all w-[200px] md:w-[180px] h-[48px]"
                style={{
                  fontFamily: "'Arima', serif",

                  fontWeight: 700,

                  fontSize: "15px",
                }}
              >

                <img
                  src="/images/magazine/bookIcon.png"
                  alt="book"
                  className="w-5 h-5 mr-2"
                />

                Read Article
              </button>

              <button
                onClick={() =>
                  navigate("/issues")
                }
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

          {/* RIGHT IMAGE */}
          <div className="relative z-10 flex items-center justify-center w-full max-w-[320px] md:max-w-[360px] aspect-[3/4] bg-white/10 backdrop-blur-sm rounded-xl p-2">

            <button
              onClick={handleOpenPdf}
              className="group relative w-full h-full rounded-xl overflow-hidden border border-white/20 bg-transparent"
            >

              <img
                src={releaseData.image_url}
                alt={releaseData.title}
                decoding="async"
                className="object-cover rounded-xl shadow-2xl w-full h-full transition-transform duration-300 group-hover:scale-[1.02]"
              />

              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#B12A1C] opacity-0 group-hover:opacity-100 transition-opacity">
                இதழை வாசிக்க
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* PDF MODAL */}
      {showPdfModal &&
        releaseData?.pdf_url && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-0 md:p-4">

            <div className="relative w-full h-full md:w-[95vw] md:h-[95vh] bg-[#323639] md:rounded-lg overflow-hidden flex flex-col">

              {/* TOP BAR */}
              <div className="w-full bg-[#323639] text-white p-3 flex justify-between items-center px-6">

                <span className="text-sm md:text-base font-medium truncate">
                  {releaseData.title}
                </span>

                <button
                  onClick={() =>
                    setShowPdfModal(false)
                  }
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-md text-sm font-bold transition-colors"
                >
                  Close
                </button>
              </div>

              {/* PDF */}
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
    </>
  );
};

export default React.memo(MagazineSection);