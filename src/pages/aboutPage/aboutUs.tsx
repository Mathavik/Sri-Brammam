import React from "react";

import useGlobalConfig from "../../hooks/useGlobalConfig";

const AboutUs = () => {

  const {
    config,
    loading,
  } = useGlobalConfig();

  return (
    <div className="bg-white text-gray-800">

      <section className="py-12 flex flex-col md:flex-row items-center gap-10 max-w-8xl mx-auto px-6 md:px-12">

        <div className="md:w-full w-full leading-relaxed">

          <div className="bg-white p-10 md:p-12 rounded-xl shadow-sm border-l-8 border-red-700">

            {loading ? (

              <div className="space-y-4 animate-pulse">

                <div className="h-4 bg-gray-200 rounded w-full"></div>

                <div className="h-4 bg-gray-200 rounded w-5/6"></div>

                <div className="h-4 bg-gray-200 rounded w-4/6"></div>

              </div>

            ) : (

              <p className="text-lg md:text-xl text-gray-700 whitespace-pre-line">

                {
                  config?.long_about_us ||
                  "தகவல்கள் விரைவில் பதிவேற்றப்படும்."
                }

              </p>
            )}

          </div>
        </div>
      </section>
    </div>
  );
};

export default React.memo(AboutUs);