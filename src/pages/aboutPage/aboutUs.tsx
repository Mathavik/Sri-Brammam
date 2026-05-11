import React, { useState, useEffect } from "react";
import api from "../../api";

const AboutUs = () => {
  const [aboutText, setAboutText] = useState("");
  const [loading, setLoading] = useState(true);

  // ⚡ CACHE KEY
  const CACHE_KEY = "about_us_long_text";

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        // ⚡ FIRST CACHE CHECK
        const cachedData = localStorage.getItem(CACHE_KEY);

        if (cachedData) {
          setAboutText(cachedData);
          setLoading(false);
        }

        // ⚡ API FETCH
        const response = await api.get("/global-config");

        if (response.data.success) {
          const longAbout =
            response.data.data.long_about_us || "";

          setAboutText(longAbout);

          // ⚡ SAVE CACHE
          localStorage.setItem(
            CACHE_KEY,
            longAbout
          );
        }
      } catch (error) {
        console.error(
          "Error fetching about data:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  return (
    <div className="bg-white text-gray-800">
      <section className="py-12 flex flex-col md:flex-row items-center gap-10 max-w-8xl mx-auto px-6 md:px-12">

        {/* Content Area */}
        <div className="md:w-full w-full leading-relaxed">
          <div className="bg-white p-10 md:p-12 rounded-xl shadow-sm border-l-8 border-red-700">

            {/* ⚡ LOADING SKELETON */}
            {loading && !aboutText ? (
              <div className="space-y-4 animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            ) : (
              <p className="text-lg md:text-xl text-gray-700 whitespace-pre-line">
                {aboutText ||
                  "தகவல்கள் விரைவில் பதிவேற்றப்படும்."}
              </p>
            )}

          </div>
        </div>

      </section>
    </div>
  );
};

export default React.memo(AboutUs);