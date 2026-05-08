import React, { useEffect, useState } from "react";
import api from "../../api";

const HeroBanner = () => {

  const [aboutUs, setAboutUs] = useState("");

  // API Integration
  useEffect(() => {

    const fetchGlobalConfig = async () => {

      try {

        const response = await api.get("/global-config");

        setAboutUs(response.data.data.about_us || "");

      } catch (error) {

        console.error("API Error:", error);

      }
    };

    fetchGlobalConfig();

  }, []);

  return (
    <div className="w-full">

      {/* Left Floating Text */}
      <div
        className="ml-4 sm:ml-6 md:ml-8 lg:ml-4 mb-8 text-black 
                   max-w-[85%] sm:max-w-md md:max-w-lg"
      >
        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
          ஸ்ரீ பிரம்மம்
        </h2>

        <p className="text-xs sm:text-xs md:text-sm lg:text-base font-medium">
          “ஆன்மீகம் · அறம் · அறிவு – உங்கள் வழிகாட்டி”
        </p>
      </div>

      {/* Main Banner Container */}
      <div className="relative w-full h-[320px] sm:h-[350px] md:h-[400px] lg:h-[450px] mt-16 sm:mt-0">

        {/* Banner Image & Overlay Gradient */}
        <div className="absolute inset-0">
          <img
            src="/images/herosection/background.png"
            alt="background"
            className="absolute inset-0 w-full h-full object-cover"
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

          {/* About Us Content from API */}
          <p className="text-[10px] sm:text-xs md:text-xs lg:text-base leading-relaxed text-left">
            {aboutUs}
          </p>

        </div>

      </div>
    </div>
  );
};

export default HeroBanner;