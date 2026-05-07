import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
type Category = {
  id: number;
  title: string;
  image: string;
  bgImage: string;
};

const staticImages = [
  "/images/img1.png",
  "/images/img2.png",
  "/images/img3.png",
  "/images/img4.png",
  "/images/img5.png",
];

const FeaturedCategories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
const navigate = useNavigate();
  // API Fetch
 useEffect(() => {
  api
    .get("/featured-categories")
    .then((res: any) => {

      const formattedData = res.data.data.map(
        (item: any, index: number) => ({
          id: item.id,
          title: item.name,
          bgImage: item.image,
          image: staticImages[index] || "/images/default.png",
        })
      );

      setCategories(formattedData);

    })
    .catch((err: any) =>
      console.error("API Error:", err)
    );
}, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? categories.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === categories.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="w-full px-6 md:px-12 py-8 bg-white max-w-7xl mx-auto">

      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-6 md:flex-row md:justify-between w-full">
        <h2
          className="font-['Arima'] text-[28px] leading-[38px] text-[#000000] tracking-[0%] capitalize text-center mb-2 md:mb-0"
          style={{ fontWeight: 600 }}
        >
          Featured Categories
        </h2>

       <span
  onClick={() => navigate("/all-categories")}
  className="font-['Arima'] text-[18px] md:text-[26px] leading-[28px] md:leading-[38px] cursor-pointer hover:underline flex items-center gap-2 justify-center"
  style={{ color: "#B22C23", fontWeight: 600 }}
>
  See All &rarr;
</span>
      </div>

      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
        {categories.map((cat, index) => (
        <div
  key={index}
  onClick={() => navigate(`/category-posts/${cat.id}`)}
  className="relative h-[220px] md:h-[240px] lg:h-[260px] rounded-2xl overflow-hidden group cursor-pointer shadow-sm"
>
            {/* Background Image from API */}
            <img
              src={cat.bgImage}
              alt="bg"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30"></div>

            {/* Static Public Image */}
            <img
              src={cat.image}
              alt={cat.title}
              className="relative w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />

            <div className="absolute bottom-4 left-4 text-white text-base md:text-lg font-semibold drop-shadow-lg font-['Arima']">
              {cat.title}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      {categories.length > 0 && (
        <div className="md:hidden flex flex-col items-center">
<div
  onClick={() =>
    navigate(`/category-posts/${categories[currentIndex].id}`)
  }
  className="relative w-full max-w-[280px] h-[300px] rounded-2xl overflow-hidden shadow-md cursor-pointer"
>
            {/* API Background */}
            <img
              src={categories[currentIndex].bgImage}
              alt="bg"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30"></div>

            {/* Static Image */}
            <img
              src={categories[currentIndex].image}
              alt={categories[currentIndex].title}
              className="relative w-full h-full object-cover"
            />

            <div className="absolute bottom-4 left-4 text-white text-lg font-semibold drop-shadow-lg font-['Arima']">
              {categories[currentIndex].title}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-6">
            <button
              onClick={handlePrev}
              className="p-3 bg-orange-50 hover:bg-orange-100 text-[#a22b10] rounded-full transition shadow-sm border border-orange-200 focus:outline-none"
            >
              ←
            </button>

            <button
              onClick={handleNext}
              className="p-3 bg-orange-50 hover:bg-orange-100 text-[#a22b10] rounded-full transition shadow-sm border border-orange-200 focus:outline-none"
            >
              →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedCategories;