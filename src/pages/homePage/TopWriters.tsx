import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api"; // <-- unga api.tsx path-ku correct aa change pannunga

type Writer = {
  id: number;
  name: string;
  role: string;
  image: string;
};

const TopWriters: React.FC = () => {
  const [writers, setWriters] = useState<Writer[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const navigate = useNavigate();

  // API Fetch
  useEffect(() => {
    const fetchTopWriters = async () => {
      try {
        const response = await api.get("/top-writers");

        const formattedData = response.data.data.map((item: any) => ({
          id: item.id,
          name: item.name,
          role: item.bio,
          image: item.profile_image,
        }));

        setWriters(formattedData);

      } catch (err) {
        console.error("API Error:", err);
      }
    };

    fetchTopWriters();
  }, []);

  // Scroll functions
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  // Handle scroll to show/hide arrows
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      // Initial check
      handleScroll();
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, [writers]);

if (writers.length === 0) {
  return null;
}

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
          onClick={() =>
            navigate("/reporters", {
              state: { activeTab: "writer" },
            })
          }
          className="font-['Arima'] text-[18px] md:text-[26px] leading-[28px] md:leading-[38px] cursor-pointer hover:underline flex items-center gap-2 justify-center"
          style={{ color: "#B22C23", fontWeight: 600 }}
        >
          See All &rarr;
        </span>

      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold hover:bg-gray-100 transition"
          >
            &#8249;
          </button>
        )}

        {/* Right Arrow */}
        {showRightArrow && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold hover:bg-gray-100 transition"
          >
            &#8250;
          </button>
        )}

        {/* Writers Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto overflow-y-hidden scrollbar-hide pb-4 px-12 scroll-smooth"
        >
          {writers.map((writer) => (
            <div
              key={writer.id}
              onClick={() => navigate(`/writer/${writer.id}`)}
              className="flex items-center gap-4 min-w-[280px] cursor-pointer flex-shrink-0"
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
      </div>





    </div>
  );
};

export default TopWriters;