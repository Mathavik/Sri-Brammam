import React, { useEffect, useState } from "react";
import api from "../../api";

type StatsData = {
  year: string;
  issue: string;
  reader: string;
};

const StatsSection: React.FC = () => {

  const [stats, setStats] = useState<StatsData>({
    year: "0",
    issue: "0",
    reader: "0",
  });

  const [loading, setLoading] = useState(true);

  // ⚡ CACHE KEY
  const CACHE_KEY = "stats_section_data";

  // API Integration
  useEffect(() => {

    const fetchStats = async () => {

      try {

        // ⚡ FIRST CACHE CHECK
        const cachedData = localStorage.getItem(CACHE_KEY);

        if (cachedData) {

          setStats(JSON.parse(cachedData));

          setLoading(false);
        }

        // ⚡ API CALL
        const response = await api.get("/global-config");

        const data = response.data.data;

        const formattedData = {
          year: data.year || "0",
          issue: data.issue || "0",
          reader: data.reader || "0",
        };

        // ⚡ STATE UPDATE
        setStats(formattedData);

        // ⚡ SAVE CACHE
        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify(formattedData)
        );

      } catch (error) {

        console.error("API Error:", error);

      } finally {

        setLoading(false);

      }
    };

    fetchStats();

  }, []);

  return (
    <div className="w-full bg-[#FFF9F6] py-6 md:py-8 relative z-10 border-y border-[#B12A1C]/20">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-6 gap-8 md:gap-4">

        {/* Item 1 */}
        <div className="flex items-center gap-6 w-64 sm:w-72 md:w-auto justify-start md:justify-center">

          <img
            src="/images/state/state1.png"
            alt="years"
            className="w-16 h-16 md:w-20 md:h-20 object-contain flex-shrink-0"
            loading="lazy"
          />

          <div className="text-left min-w-[110px]">

            {loading ? (
              <div className="animate-pulse">
                <div className="h-8 w-20 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 w-24 bg-gray-200 rounded"></div>
              </div>
            ) : (
              <>
                <h2 className="text-[#B12A1C] text-3xl md:text-4xl font-bold leading-none">
                  {stats.year}+
                </h2>

                <p className="text-black text-lg font-bold mt-1">
                  ஆண்டுகள்
                </p>
              </>
            )}

          </div>
        </div>

        {/* Item 2 */}
        <div className="flex items-center gap-6 w-64 sm:w-72 md:w-auto justify-start md:justify-center">

          <img
            src="/images/state/state2.png"
            alt="publications"
            className="w-16 h-16 md:w-20 md:h-20 object-contain flex-shrink-0"
            loading="lazy"
          />

          <div className="text-left min-w-[110px]">

            {loading ? (
              <div className="animate-pulse">
                <div className="h-8 w-20 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 w-24 bg-gray-200 rounded"></div>
              </div>
            ) : (
              <>
                <h2 className="text-[#B12A1C] text-3xl md:text-4xl font-bold leading-none">
                  {stats.issue}+
                </h2>

                <p className="text-black text-lg font-bold mt-1">
                  வெளியீடுகள்
                </p>
              </>
            )}

          </div>
        </div>

        {/* Item 3 */}
        <div className="flex items-center gap-6 w-64 sm:w-72 md:w-auto justify-start md:justify-center">

          <img
            src="/images/state/state3.png"
            alt="readers"
            className="w-16 h-16 md:w-20 md:h-20 object-contain flex-shrink-0"
            loading="lazy"
          />

          <div className="text-left min-w-[110px]">

            {loading ? (
              <div className="animate-pulse">
                <div className="h-8 w-20 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 w-24 bg-gray-200 rounded"></div>
              </div>
            ) : (
              <>
                <h2 className="text-[#B12A1C] text-3xl md:text-4xl font-bold leading-none">
                  {stats.reader}+
                </h2>

                <p className="text-black text-lg font-bold mt-1">
                  வாசகர்கள்
                </p>
              </>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};

export default React.memo(StatsSection);