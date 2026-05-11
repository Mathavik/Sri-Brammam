import React, {
  useEffect,
  useState,
} from "react";

import api from "../../api";

interface GlobalConfig {
  id: number;
  year: string;
  issue: string;
  reader: string;
  created_at: string | null;
  updated_at: string | null;
}

const StatsSection: React.FC = () => {

  const [config, setConfig] =
    useState<GlobalConfig | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  // =========================
  // Fetch API + Cache
  // =========================
  useEffect(() => {
    let isMounted = true;

    const fetchConfig = async () => {
      try {

        // Cached Data
        const cachedConfig =
          localStorage.getItem(
            "globalConfig"
          );

        if (cachedConfig) {

          setConfig(
            JSON.parse(cachedConfig)
          );

          setLoading(false);
        }

        console.time("Global Config API");

        const result: any =
          await api.get(
            "/global-config"
          );

        console.timeEnd(
          "Global Config API"
        );

        const data: GlobalConfig =
          result.data.data;

        if (isMounted && data) {

          setConfig(data);

          // Save Cache
          localStorage.setItem(
            "globalConfig",
            JSON.stringify(data)
          );
        }

      } catch (err: any) {

        console.error(
          "Error fetching global config:",
          err
        );

        setError(
          "Unable to load statistics."
        );

      } finally {

        setLoading(false);
      }
    };

    fetchConfig();

    return () => {
      isMounted = false;
    };
  }, []);

  // =========================
  // Values
  // =========================
  const yearValue = config?.year
    ? `${config.year}+`
    : "--";

  const issueValue = config?.issue
    ? `${config.issue}+`
    : "--";

  const readerValue = config?.reader
    ? `${config.reader}+`
    : "--";

  return (
    <div className="w-full max-w-8xl mx-auto px-4 md:px-8 lg:px-12 -mt-16 md:-mt-20 relative z-10">

      <div className="w-full bg-[#FFF9F6] py-6 md:py-8 px-6 md:px-10 border border-[#B12A1C]/20 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">

        {/* Loading Skeleton */}
        {loading ? (

          <>
            {[1, 2, 3].map((item) => (

              <div
                key={item}
                className="flex items-center gap-6 w-full md:w-auto"
              >

                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-200 animate-pulse"></div>

                <div className="space-y-3">

                  <div className="w-20 h-8 bg-gray-200 rounded animate-pulse"></div>

                  <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>

                </div>
              </div>
            ))}
          </>

        ) : error ? (

          <div className="w-full text-center text-[#B12A1C] font-semibold">
            {error}
          </div>

        ) : (

          <>
            {/* Years */}
            <div className="flex items-center gap-6 w-full md:w-auto justify-start md:justify-center">

              <img
                src="/images/state/state1.png"
                alt="years"
                loading="lazy"
                decoding="async"
                className="w-16 h-16 md:w-20 md:h-20 object-contain flex-shrink-0"
              />

              <div className="text-left min-w-[100px]">

                <h2 className="text-[#B12A1C] text-3xl md:text-4xl font-bold leading-none">
                  {yearValue}
                </h2>

                <p className="text-black text-lg font-bold mt-1">
                  ஆண்டுகள்
                </p>
              </div>
            </div>

            {/* Issues */}
            <div className="flex items-center gap-6 w-full md:w-auto justify-start md:justify-center">

              <img
                src="/images/state/state2.png"
                alt="publications"
                loading="lazy"
                decoding="async"
                className="w-16 h-16 md:w-20 md:h-20 object-contain flex-shrink-0"
              />

              <div className="text-left min-w-[100px]">

                <h2 className="text-[#B12A1C] text-3xl md:text-4xl font-bold leading-none">
                  {issueValue}
                </h2>

                <p className="text-black text-lg font-bold mt-1">
                  வெளியீடுகள்
                </p>
              </div>
            </div>

            {/* Readers */}
            <div className="flex items-center gap-6 w-full md:w-auto justify-start md:justify-center">

              <img
                src="/images/state/state3.png"
                alt="readers"
                loading="lazy"
                decoding="async"
                className="w-16 h-16 md:w-20 md:h-20 object-contain flex-shrink-0"
              />

              <div className="text-left min-w-[100px]">

                <h2 className="text-[#B12A1C] text-3xl md:text-4xl font-bold leading-none">
                  {readerValue}
                </h2>

                <p className="text-black text-lg font-bold mt-1">
                  வாசகர்கள்
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default React.memo(StatsSection);