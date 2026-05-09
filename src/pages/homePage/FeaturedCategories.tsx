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

  useEffect(() => {
    api
      .get("/featured-categories")
      .then((res: any) => {
        const formattedData = res.data.data.map((item: any, index: number) => ({
          id: item.id,
          title: item.name,
          bgImage: item.image,
          image: staticImages[index % staticImages.length] || "/images/default.png",
        }));
        setCategories(formattedData);
      })
      .catch((err: any) => console.error("API Error:", err));
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeftArrow(scrollLeft > 10);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const node = scrollRef.current;
    if (node) {
      node.addEventListener("scroll", handleScroll);
      // Initial check
      setTimeout(handleScroll, 100);
      return () => node.removeEventListener("scroll", handleScroll);
    }
  }, [categories]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (categories.length === 0) return null;

  return (
    <section id="categories-section" className="scroll-mt-32">
    <div className="w-full px-6 md:px-12 py-8 bg-white max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between w-full mb-6">
        <h2 className="font-['Arima'] text-[28px] font-semibold text-black capitalize">
          Featured Categories
        </h2>
        <span
          onClick={() => navigate("/all-categories")}
          className="font-['Arima'] text-[22px] font-semibold cursor-pointer hover:underline"
          style={{ color: "#B22C23" }}
        >
          See All &rarr;
        </span>
      </div>

      <div className="relative group">
        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            onClick={() => scroll("left")}
            className="absolute -left-5 top-1/2 z-30 -translate-y-1/2 bg-white shadow-xl w-12 h-12 rounded-full flex items-center justify-center text-2xl hover:bg-gray-100 transition-all border border-gray-200"
          >
            &#8249;
          </button>
        )}

        {/* Right Arrow */}
        {showRightArrow && categories.length > 5 && (
          <button
            onClick={() => scroll("right")}
            className="absolute -right-5 top-1/2 z-30 -translate-y-1/2 bg-white shadow-xl w-12 h-12 rounded-full flex items-center justify-center text-2xl hover:bg-gray-100 transition-all border border-gray-200"
          >
            &#8250;
          </button>
        )}

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
        >
          {categories.map((cat, index) => (
            <div
              key={index}
              onClick={() => navigate(`/category-posts/${cat.id}`)}
              className="relative flex-shrink-0 cursor-pointer rounded-2xl overflow-hidden shadow-md transition-transform hover:scale-[1.02]
                         basis-[calc(50%-12px)] 
                         sm:basis-[calc(33.33%-12px)] 
                         md:basis-[calc(25%-12px)] 
                         lg:basis-[calc(20%-13px)] 
                         aspect-[4/5]"
            >
              <img
                src={cat.bgImage}
                alt="bg"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>

              {/* Foreground Image */}
              <img
                src={cat.image}
                alt={cat.title}
                className="relative w-full h-full object-cover"
              />

              {/* Title Centered at Bottom */}
              <div className="absolute bottom-4 left-0 right-0 text-center text-white text-lg font-bold font-['Arima'] drop-shadow-md px-2">
                {cat.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default FeaturedCategories;