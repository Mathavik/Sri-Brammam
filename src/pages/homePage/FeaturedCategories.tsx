import React, { useState } from "react";

type Category = {
  title: string;
  image: string;   // main image
  bgImage: string; // extra background image
};

const categories: Category[] = [
  { title: "லைஃப்ஸ்டைல்", image: "/images/img1.png", bgImage: "/images/bg1.png" },
  { title: "சமூகம்", image: "/images/img2.png", bgImage: "/images/bg2.png" },
  { title: "அரசியல்", image: "/images/img3.png", bgImage: "/images/bg3.png" },
  { title: "ஹெல்த்கேர்", image: "/images/img4.png", bgImage: "/images/bg4.png" },
  { title: "யூத்", image: "/images/img5.png", bgImage: "/images/bg5.png" },
];

const FeaturedCategories: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full px-6 md:px-12 py-8 bg-white max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 
          className="font-['Arima'] text-[28px] leading-[38px] text-[#000000] tracking-[0%] capitalize"
          style={{ fontWeight: 600 }}
        >
          Featured Categories
        </h2>
        <span 
className="font-['Arima'] text-[26px] leading-[38px] cursor-pointer hover:underline flex items-center gap-2"         
          style={{ color: '#B22C23', fontWeight: 600 }} // Custom color and font-weight 600
        >
          See All &rarr;
        </span>
      </div>

      {/* Desktop / Laptop View - Grid Layout (No scroll, auto scales to screen size) */}
      <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="relative h-[220px] md:h-[240px] lg:h-[260px] rounded-2xl overflow-hidden group cursor-pointer shadow-sm"
          >
            {/* Background Image */}
            <img
              src={cat.bgImage}
              alt="bg"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark Overlay for readability */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Main Image */}
            <img
              src={cat.image}
              alt={cat.title}
              className="relative w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />

            {/* Title */}
            <div className="absolute bottom-4 left-4 text-white text-base md:text-lg font-semibold drop-shadow-lg font-['Arima']">
              {cat.title}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View - Carousel Layout with Navigation Arrows */}
      <div className="md:hidden flex flex-col items-center">
        <div className="relative w-full max-w-[280px] h-[300px] rounded-2xl overflow-hidden shadow-md">
          {/* Background Image */}
          <img
            src={categories[currentIndex].bgImage}
            alt="bg"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Main Image */}
          <img
            src={categories[currentIndex].image}
            alt={categories[currentIndex].title}
            className="relative w-full h-full object-cover"
          />

          {/* Title */}
          <div className="absolute bottom-4 left-4 text-white text-lg font-semibold drop-shadow-lg font-['Arima']">
            {categories[currentIndex].title}
          </div>
        </div>

        {/* Carousel Navigation Arrows */}
        <div className="flex justify-center items-center gap-6 mt-6">
          <button
            onClick={handlePrev}
            className="p-3 bg-orange-50 hover:bg-orange-100 text-[#a22b10] rounded-full transition shadow-sm border border-orange-200 focus:outline-none"
            aria-label="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="p-3 bg-orange-50 hover:bg-orange-100 text-[#a22b10] rounded-full transition shadow-sm border border-orange-200 focus:outline-none"
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

export default FeaturedCategories;