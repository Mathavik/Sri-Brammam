import React, { useState } from "react";

type Writer = {
  id: number;
  name: string;
  role: string;
  image: string;
};

const writers: Writer[] = [
  {
    id: 1,
    name: "நிர்மலா குப்தா",
    role: "Top Writers",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "வைஷ்ணவி",
    role: "Top Writers",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "சுதர்சன்",
    role: "Top Writers",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "தண்டபாணி",
    role: "Top Writers",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

const TopWriters: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? writers.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === writers.length - 1 ? 0 : prev + 1));
  };

  return (
    // Reduced margin and padding to decrease the space
    <div className="w-full bg-white px-6 md:px-12 py-8 md:py-10 my-4 md:my-6 rounded-2xl max-w-7xl mx-auto shadow-sm">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-8 md:mb-10">
        <h2 
          className="font-['Arima'] text-[28px] leading-[38px] text-[#000000] tracking-[0%] capitalize"
          style={{ fontWeight: 600 }}
        >
          Top Writers
        </h2>

        <span 
          className="font-['Arima'] text-[26px] leading-[38px] cursor-pointer hover:underline flex items-center gap-2" 
          style={{ color: '#B22C23', fontWeight: 600 }}
        >
          See All &rarr;
        </span>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex items-center justify-between gap-6 overflow-x-auto">
        {writers.map((writer) => (
          <div key={writer.id} className="flex items-center gap-4 min-w-[220px]">
            <img
              src={writer.image}
              alt={writer.name}
              className="w-16 h-16 rounded-full object-cover border border-gray-100 shadow-sm"
            />
            <div>
              <h3 className="text-base font-semibold text-gray-900">
                {writer.name}
              </h3>
              <p className="text-sm text-gray-500">{writer.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Slider (Below 768px screens) - Shows 1 Item */}
      <div className="md:hidden flex items-center justify-between px-1 w-full">
        <button
          onClick={prev}
          className="p-2 -ml-1 text-gray-600 hover:text-gray-900 transition focus:outline-none shrink-0"
          aria-label="Previous"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
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
          aria-label="Next"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

      {/* Tablet Slider (Between 768px and 1024px) - Shows 2 Items */}
      <div className="hidden md:flex lg:hidden items-center justify-between px-6 w-full">
        <button
          onClick={prev}
          className="p-2 text-gray-600 hover:text-gray-900 transition focus:outline-none shrink-0"
          aria-label="Previous"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>

        <div className="flex items-center justify-around gap-12 w-full px-4 overflow-hidden">
          {/* Item 1 */}
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

          {/* Item 2 */}
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
          aria-label="Next"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

    </div>
  );
};

export default TopWriters;