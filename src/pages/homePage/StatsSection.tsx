import React, { useEffect, useState } from "react";
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
  const [config, setConfig] = useState<GlobalConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const result = await api.get("/global-config");

        const data: GlobalConfig = result.data;
        setConfig(data);
      } catch (err) {
        console.error("Error fetching global config:", err);
        setError("Unable to load statistics.");
      } finally {
        setLoading(false);
      }
    };

    fetchConfig();
  }, []);

  const yearValue = config?.year ? `${config.year}+` : "--";
  const issueValue = config?.issue ? `${config.issue}+` : "--";
  const readerValue = config?.reader ? `${config.reader}+` : "--";

  return (
    <div className="w-full max-w-8xl mx-auto px-4 md:px-8 lg:px-12 -mt-16 md:-mt-20 relative z-10">
      <div className="w-full bg-[#FFF9F6] py-6 md:py-8 px-6 md:px-10 border border-[#B12A1C]/20 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
        {loading ? (
          <div className="w-full text-center text-[#B12A1C] font-semibold">Loading statistics...</div>
        ) : error ? (
          <div className="w-full text-center text-[#B12A1C] font-semibold">{error}</div>
        ) : (
          <> 
            <div className="flex items-center gap-6 w-full md:w-auto justify-start md:justify-center">
              <img
                src="/images/state/state1.png"
                alt="years"
                className="w-16 h-16 md:w-20 md:h-20 object-contain flex-shrink-0"
              />
              <div className="text-left min-w-[100px]">
                <h2 className="text-[#B12A1C] text-3xl md:text-4xl font-bold leading-none">{yearValue}</h2>
                <p className="text-black text-lg font-bold mt-1">ஆண்டுகள்</p>
              </div>
            </div>

            <div className="flex items-center gap-6 w-full md:w-auto justify-start md:justify-center">
              <img
                src="/images/state/state2.png"
                alt="publications"
                className="w-16 h-16 md:w-20 md:h-20 object-contain flex-shrink-0"
              />
              <div className="text-left min-w-[100px]">
                <h2 className="text-[#B12A1C] text-3xl md:text-4xl font-bold leading-none">{issueValue}</h2>
                <p className="text-black text-lg font-bold mt-1">வெளியீடுகள்</p>
              </div>
            </div>

            <div className="flex items-center gap-6 w-full md:w-auto justify-start md:justify-center">
              <img
                src="/images/state/state3.png"
                alt="readers"
                className="w-16 h-16 md:w-20 md:h-20 object-contain flex-shrink-0"
              />
              <div className="text-left min-w-[100px]">
                <h2 className="text-[#B12A1C] text-3xl md:text-4xl font-bold leading-none">{readerValue}</h2>
                <p className="text-black text-lg font-bold mt-1">வாசகர்கள்</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default StatsSection;