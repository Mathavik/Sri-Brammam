import React, { useEffect, useState, useRef } from "react";
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
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
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

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeftArrow(scrollLeft > 8);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 8);
  };

  useEffect(() => {
    const node = scrollRef.current;
    if (!node) return;
    node.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => node.removeEventListener("scroll", handleScroll);
  }, [categories]);

  if (categories.length === 0) {
    return null;
  }
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

      <div className="relative">
        {showLeftArrow && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 z-20 -translate-y-1/2 bg-white/90 backdrop-blur-md shadow-lg w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold text-gray-700 hover:bg-white transition"
          >
            &#8249;
          </button>
        )}

        {showRightArrow && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 z-20 -translate-y-1/2 bg-white/90 backdrop-blur-md shadow-lg w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold text-gray-700 hover:bg-white transition"
          >
            &#8250;
          </button>
        )}

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto overflow-y-hidden scrollbar-hide pb-4 px-8 scroll-smooth"
        >
          {categories.map((cat, index) => (
            <div
              key={index}
              onClick={() => navigate(`/category-posts/${cat.id}`)}
              className="relative min-w-[240px] sm:min-w-[260px] md:min-w-[280px] h-[260px] rounded-2xl overflow-hidden group cursor-pointer shadow-sm flex-shrink-0"
            >
              <img
                src={cat.bgImage}
                alt="bg"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/30"></div>

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
      </div>
    </div>
  );
};

export default FeaturedCategories;