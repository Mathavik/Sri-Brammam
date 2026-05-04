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
    <div className="w-full bg-white px-6 md:px-12 py-12 md:py-16 my-8 md:my-12 rounded-2xl max-w-7xl mx-auto shadow-sm">
      
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
      <div className="hidden md:flex items-center justify-between gap-6 overflow-x-auto">
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

      {/* Mobile Slider */}
      <div className="md:hidden flex flex-col items-center">
        <div className="flex items-center gap-4">
          <img
            src={writers[current].image}
            alt={writers[current].name}
            className="w-16 h-16 rounded-full object-cover border border-gray-100 shadow-sm"
          />
          <div>
            <h3 className="text-base font-semibold text-gray-900">
              {writers[current].name}
            </h3>
            <p className="text-sm text-gray-500">
              {writers[current].role}
            </p>
          </div>
        </div>

        {/* Carousel Navigation Arrows */}
        <div className="flex justify-center items-center gap-6 mt-8">
          <button
            onClick={prev}
            className="p-3 bg-orange-50 hover:bg-orange-100 text-[#d8421c] rounded-full transition shadow-sm border border-orange-200 focus:outline-none"
            aria-label="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={next}
            className="p-3 bg-orange-50 hover:bg-orange-100 text-[#d8421c] rounded-full transition shadow-sm border border-orange-200 focus:outline-none"
            aria-label="Next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopWriters;