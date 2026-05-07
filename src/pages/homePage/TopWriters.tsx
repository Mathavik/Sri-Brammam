import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
type Writer = {
  id: number;
  name: string;
  role: string;
  image: string;
};

const TopWriters: React.FC = () => {
  const [writers, setWriters] = useState<Writer[]>([]);
  const [current, setCurrent] = useState(0);
const navigate = useNavigate();
  // API Fetch
  useEffect(() => {
    fetch("https://pcstech.in/pcs_api/brammam/public/api/top-writers")
      .then((res) => res.json())
      .then((data) => {

        const formattedData = data.data.map((item: any) => ({
          id: item.id,
          name: item.name,
          role: item.bio,
          image: item.profile_image,
        }));

        setWriters(formattedData);
      })
      .catch((err) => console.error("API Error:", err));
  }, []);

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? writers.length - 1 : prev - 1
    );
  };

  const next = () => {
    setCurrent((prev) =>
      prev === writers.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="w-full bg-white px-6 md:px-12 py-8 md:py-10 my-4 md:my-6 rounded-2xl max-w-7xl mx-auto shadow-sm">

      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-6 md:flex-row md:justify-between w-full">
        <h2
          className="font-['Arima'] text-[28px] leading-[38px] text-[#000000] tracking-[0%] capitalize text-center mb-2 md:mb-0"
          style={{ fontWeight: 600 }}
        >
          Top Writers
        </h2>

        <span
  onClick={() => navigate("/all-creators")}
  className="font-['Arima'] text-[18px] md:text-[26px] leading-[28px] md:leading-[38px] cursor-pointer hover:underline flex items-center gap-2 justify-center"
  style={{ color: "#B22C23", fontWeight: 600 }}
>
  See All &rarr;
</span>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex items-center justify-between gap-6 overflow-x-auto">

        {writers.map((writer) => (
          <div
            key={writer.id}
            className="flex items-center gap-4 min-w-[220px]"
          >

            <img
              src={writer.image}
              alt={writer.name}
              className="w-16 h-16 rounded-full object-cover border border-gray-100 shadow-sm"
            />

            <div>
              <h3 className="text-base font-semibold text-gray-900">
                {writer.name}
              </h3>

              <p className="text-sm text-gray-500">
                {writer.role}
              </p>
            </div>

          </div>
        ))}

      </div>

      {/* Mobile View */}
      {writers.length > 0 && (
        <div className="md:hidden flex items-center justify-between px-1 w-full">

          <button
            onClick={prev}
            className="p-2 -ml-1 text-gray-600 hover:text-gray-900 transition focus:outline-none shrink-0"
          >
            ←
          </button>

          <div className="flex items-center gap-3 px-1 overflow-hidden max-w-[75%]">

            <img
              src={writers[current].image}
              alt={writers[current].name}
              className="w-12 h-12 rounded-full object-cover border border-gray-100 shadow-sm shrink-0"
            />

            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-gray-900 truncate">
                {writers[current].name}
              </h3>

              <p className="text-xs text-gray-500 truncate">
                {writers[current].role}
              </p>
            </div>

          </div>

          <button
            onClick={next}
            className="p-2 -mr-1 text-gray-600 hover:text-gray-900 transition focus:outline-none shrink-0"
          >
            →
          </button>

        </div>
      )}

      {/* Tablet View */}
      {writers.length > 0 && (
        <div className="hidden md:flex lg:hidden items-center justify-between px-6 w-full">

          <button
            onClick={prev}
            className="p-2 text-gray-600 hover:text-gray-900 transition focus:outline-none shrink-0"
          >
            ←
          </button>

          <div className="flex items-center justify-around gap-12 w-full px-4 overflow-hidden">

            {/* Writer 1 */}
            <div className="flex items-center gap-4 min-w-[200px] max-w-[260px]">

              <img
                src={writers[current].image}
                alt={writers[current].name}
                className="w-16 h-16 rounded-full object-cover border border-gray-100 shadow-sm shrink-0"
              />

              <div className="min-w-0">
                <h3 className="text-base font-semibold text-gray-900 truncate">
                  {writers[current].name}
                </h3>

                <p className="text-sm text-gray-500 truncate">
                  {writers[current].role}
                </p>
              </div>

            </div>

            {/* Writer 2 */}
            <div className="flex items-center gap-4 min-w-[200px] max-w-[260px]">

              <img
                src={writers[(current + 1) % writers.length].image}
                alt={writers[(current + 1) % writers.length].name}
                className="w-16 h-16 rounded-full object-cover border border-gray-100 shadow-sm shrink-0"
              />

              <div className="min-w-0">
                <h3 className="text-base font-semibold text-gray-900 truncate">
                  {writers[(current + 1) % writers.length].name}
                </h3>

                <p className="text-sm text-gray-500 truncate">
                  {writers[(current + 1) % writers.length].role}
                </p>
              </div>

            </div>

          </div>

          <button
            onClick={next}
            className="p-2 text-gray-600 hover:text-gray-900 transition focus:outline-none shrink-0"
          >
            →
          </button>

        </div>
      )}

    </div>
  );
};

export default TopWriters;