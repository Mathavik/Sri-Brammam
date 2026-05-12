import React, { useEffect, useState } from "react";
import api from "../../api";

const HeroBanner = () => {
  const [aboutUs, setAboutUs] = useState("");
  const [loading, setLoading] = useState(true);

  // ⚡ CACHE KEY
  const CACHE_KEY = "hero_banner_about_us";

  useEffect(() => {
    const fetchGlobalConfig = async () => {
      try {
        // ⚡ FIRST CACHE CHECK
        const cachedData = localStorage.getItem(CACHE_KEY);

        if (cachedData) {
          setAboutUs(cachedData);
          setLoading(false);
        }

        // ⚡ API FETCH
        const response = await api.get("/global-config");

        const aboutText =
          response.data.data.short_about_us || "";

        setAboutUs(aboutText);

        // ⚡ SAVE CACHE
        localStorage.setItem(CACHE_KEY, aboutText);

      } catch (error) {
        console.error("API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGlobalConfig();
  }, []);

  return (
    <div className="w-full">

      {/* Left Floating Text */}
      <div
        className="ml-4 sm:ml-6 md:ml-8 lg:ml-16 mb-8 text-black 
                   max-w-[85%] sm:max-w-md md:max-w-lg"
      >
        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
          ஸ்ரீ ப்ரம்மம்
        </h2>

        <p className="text-xs sm:text-xs md:text-sm lg:text-base font-medium">
          “ஆன்மீகம் · அறம் · அறிவு – உங்கள் வழிகாட்டி”
        </p>
      </div>

      {/* Main Banner Container */}
      <div className="relative w-full h-[320px] sm:h-[350px] md:h-[400px] lg:h-[450px] mt-16 sm:mt-0">

        {/* Banner Image */}
        <div className="absolute inset-0">
          <img
            src="/images/herosection/background.png"
            alt="background"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/70 to-transparent"></div>
        </div>

        {/* Right Card */}
        <div
          className="
            absolute 
            right-4 sm:right-6 md:right-8 lg:right-20
            -top-12 sm:-top-16 md:-top-20 lg:-top-24
            bg-[#B22C23] text-white 
            p-4 sm:p-6 md:p-6 lg:p-10 
            rounded-tl-[60px] sm:rounded-tl-[100px] md:rounded-tl-[120px] lg:rounded-tl-[160px]
            rounded-[12px] md:rounded-[16px] lg:rounded-[20px]
            w-[65%] sm:w-[55%] md:w-[38%] lg:w-[30%]
            h-[280px] sm:h-[380px] md:h-[350px] lg:h-[440px]
            flex items-end shadow-2xl
          "
        >

          {/* ⚡ SKELETON */}
          {loading && !aboutUs ? (
            <div className="w-full space-y-2 animate-pulse">
              <div className="h-3 bg-white/30 rounded w-full"></div>
              <div className="h-3 bg-white/30 rounded w-5/6"></div>
              <div className="h-3 bg-white/30 rounded w-4/6"></div>
              <div className="h-3 bg-white/30 rounded w-full"></div>
            </div>
          ) : (
            <p className="text-[10px] sm:text-xs md:text-xs lg:text-base leading-relaxed text-left">
              {aboutUs}
            </p>
          )}

        </div>
      </div>
    </div>
  );
};

export default React.memo(HeroBanner);