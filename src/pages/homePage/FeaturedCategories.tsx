import React, { useEffect, useState, useRef, useCallback } from "react";
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
  const [loading, setLoading] = useState(true);

  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scrollRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  // =========================
  // Fetch Categories
  // =========================
  useEffect(() => {
    let isMounted = true;

    const fetchCategories = async () => {
      try {

        // 1. First cached data show pannum
        const cachedData = localStorage.getItem("featuredCategories");

        if (cachedData) {
          setCategories(JSON.parse(cachedData));
          setLoading(false);
        }

        // 2. New API fetch pannum
        const res = await api.get("/featured-categories");

        const formattedData = res.data.data.map(
          (item: any, index: number) => ({
            id: item.id,
            title: item.name,
            bgImage: item.image,
            image:
              staticImages[index % staticImages.length] ||
              "/images/default.png",
          })
        );

        if (isMounted) {

          // UI update
          setCategories(formattedData);

          // Cache save
          localStorage.setItem(
            "featuredCategories",
            JSON.stringify(formattedData)
          );

          setLoading(false);
        }

      } catch (err) {
        console.error("API Error:", err);
        setLoading(false);
      }
    };

    fetchCategories();

    return () => {
      isMounted = false;
    };
  }, []);
  // =========================
  // Handle Scroll
  // =========================
  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } =
      scrollRef.current;

    setShowLeftArrow(scrollLeft > 10);

    setShowRightArrow(
      scrollLeft < scrollWidth - clientWidth - 10
    );
  }, []);

  useEffect(() => {
    const node = scrollRef.current;

    if (node) {
      node.addEventListener("scroll", handleScroll);

      // Initial Arrow Check
      setTimeout(handleScroll, 100);

      return () => {
        node.removeEventListener("scroll", handleScroll);
      };
    }
  }, [categories, handleScroll]);

  // =========================
  // Scroll Function
  // =========================
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;

      scrollRef.current.scrollBy({
        left:
          direction === "left"
            ? -scrollAmount
            : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // =========================
  // Loading Skeleton
  // =========================
  if (loading) {
    return (
      <section
        id="categories-section"
        className="scroll-mt-32"
      >
        <div className="w-full px-6 md:px-12 py-8 bg-white max-w-7xl mx-auto">

          {/* Header Skeleton */}
          <div className="flex items-center justify-between mb-6">
            <div className="w-56 h-8 bg-gray-200 rounded animate-pulse"></div>

            <div className="w-24 h-6 bg-gray-200 rounded animate-pulse"></div>
          </div>

          {/* Card Skeleton */}
          <div className="flex gap-4 overflow-hidden">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="relative flex-shrink-0 rounded-2xl overflow-hidden bg-gray-200 animate-pulse
                basis-[calc(50%-12px)] 
                sm:basis-[calc(33.33%-12px)] 
                md:basis-[calc(25%-12px)] 
                lg:basis-[calc(20%-13px)] 
                aspect-[4/5]"
              ></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // =========================
  // No Data
  // =========================
  if (categories.length === 0) return null;

  return (
    <section
      id="categories-section"
      className="scroll-mt-32"
    >
      <div className="w-full px-6 md:px-12 py-8 bg-white max-w-7xl mx-auto">

        {/* Header */}
        {/* <div className="flex items-center justify-between w-full mb-6">

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
        </div> */}
          <div className="flex justify-between items-center mb-10 flex-col md:flex-row gap-4 md:gap-0 px-6 md:px-10">

            <h2
className="text-[32px] md:text-3xl font-bold text-gray-800 text-center md:text-left whitespace-nowrap"              style={{
                fontFamily:
                  "Arima, serif",
              }}
            >
              Featured Categories
            </h2>

            <span
              onClick={() =>
                navigate("/all-posts")
              }
              className="font-['Arima'] text-[18px] md:text-[26px] leading-[28px] md:leading-[38px] cursor-pointer hover:underline flex items-center gap-2 justify-center"
              style={{
                color: "#B22C23",
                fontWeight: 600,
              }}
            >
              See All &rarr;
            </span>
          </div>

        {/* Slider */}
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
            {categories.map((cat) => (
              <div
                key={cat.id}
                onClick={() =>
                  navigate(`/category-posts/${cat.id}`)
                }
                className="relative flex-shrink-0 cursor-pointer rounded-2xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-[1.02]
                basis-[calc(50%-12px)] 
                sm:basis-[calc(33.33%-12px)] 
                md:basis-[calc(25%-12px)] 
                lg:basis-[calc(20%-13px)] 
                aspect-[4/5]"
              >

                {/* Background Image */}
                <img
                  src={cat.bgImage}
                  alt={cat.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Foreground Image */}
                <img
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                  decoding="async"
                  className="relative w-full h-full object-cover"
                />

                {/* Title */}
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

export default React.memo(FeaturedCategories);