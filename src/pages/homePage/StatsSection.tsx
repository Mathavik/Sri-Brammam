import React from "react";

import useGlobalConfig from "../../hooks/useGlobalConfig";

const StatsSection: React.FC = () => {

  const {
    config,
    loading,
    error,
  } = useGlobalConfig();

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

        {/* Loading */}
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
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />

              <div>

                <h2 className="text-[#B12A1C] text-3xl md:text-4xl font-bold">
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
                alt="issues"
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />

              <div>

                <h2 className="text-[#B12A1C] text-3xl md:text-4xl font-bold">
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
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />

              <div>

                <h2 className="text-[#B12A1C] text-3xl md:text-4xl font-bold">
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