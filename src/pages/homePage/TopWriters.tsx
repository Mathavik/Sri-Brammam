import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";

import { useNavigate } from "react-router-dom";

import api from "../../api";

type Writer = {
  id: number;
  name: string;
  role: string;
  image: string;
};

const TopWriters: React.FC = () => {

  const [writers, setWriters] =
    useState<Writer[]>([]);

  const [loading, setLoading] =
    useState(true);

  const scrollRef =
    useRef<HTMLDivElement>(null);

  const [showLeftArrow, setShowLeftArrow] =
    useState(false);

  const [showRightArrow, setShowRightArrow] =
    useState(true);

  const navigate = useNavigate();

  // =========================
  // Fetch API + Cache
  // =========================
  useEffect(() => {

    let isMounted = true;

    const fetchTopWriters =
      async () => {

        try {

          // CACHE
          const cachedData =
            localStorage.getItem(
              "topWriters"
            );

          if (cachedData) {

            setWriters(
              JSON.parse(cachedData)
            );

            setLoading(false);
          }

          const response =
            await api.get(
              "/top-writers"
            );

          const formattedData =
            response.data.data.map(
              (item: any) => ({
                id: item.id,
                name: item.name,
                role: item.bio,
                image:
                  item.profile_image,
              })
            );

          if (isMounted) {

            setWriters(
              formattedData
            );

            localStorage.setItem(
              "topWriters",
              JSON.stringify(
                formattedData
              )
            );

            setLoading(false);
          }

        } catch (err) {

          console.error(
            "API Error:",
            err
          );

          setLoading(false);
        }
      };

    fetchTopWriters();

    return () => {
      isMounted = false;
    };

  }, []);

  // =========================
  // SCROLL LEFT
  // =========================
  const scrollLeft = () => {

    if (scrollRef.current) {

      scrollRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  // =========================
  // SCROLL RIGHT
  // =========================
  const scrollRight = () => {

    if (scrollRef.current) {

      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  // =========================
  // HANDLE SCROLL
  // =========================
  const handleScroll =
    useCallback(() => {

      if (scrollRef.current) {

        const {
          scrollLeft,
          scrollWidth,
          clientWidth,
        } = scrollRef.current;

        setShowLeftArrow(
          scrollLeft > 0
        );

        setShowRightArrow(
          scrollLeft <
            scrollWidth -
              clientWidth -
              1
        );
      }
    }, []);

  useEffect(() => {

    const scrollElement =
      scrollRef.current;

    if (scrollElement) {

      scrollElement.addEventListener(
        "scroll",
        handleScroll
      );

      handleScroll();

      return () =>
        scrollElement.removeEventListener(
          "scroll",
          handleScroll
        );
    }

  }, [writers, handleScroll]);

  // =========================
  // LOADING
  // =========================
  if (loading) {

    return (
      <div className="w-full bg-white px-6 md:px-12 py-8 md:py-10 my-4 md:my-6 rounded-2xl max-w-7xl mx-auto shadow-sm">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">

          <div className="w-40 h-8 bg-gray-200 rounded animate-pulse"></div>

          <div className="w-24 h-6 bg-gray-200 rounded animate-pulse"></div>

        </div>

        {/* SKELETON */}
        <div className="flex gap-6 overflow-hidden">

          {[1, 2, 3, 4].map(
            (item) => (

              <div
                key={item}
                className="flex items-center gap-4 min-w-[280px]"
              >

                <div className="w-16 h-16 rounded-full bg-gray-200 animate-pulse"></div>

                <div className="flex flex-col gap-2">

                  <div className="w-28 h-4 bg-gray-200 rounded animate-pulse"></div>

                  <div className="w-20 h-3 bg-gray-100 rounded animate-pulse"></div>

                </div>
              </div>
            )
          )}
        </div>
      </div>
    );
  }

  // =========================
  // NO DATA
  // =========================
  if (writers.length === 0) {

    return null;
  }

  return (
    <div className="w-full bg-white px-6 md:px-12 py-8 md:py-10 my-4 md:my-6 rounded-2xl max-w-7xl mx-auto shadow-sm">

      {/* HEADER */}
      {/* <div className="flex flex-col items-start justify-center mb-6 md:flex-row md:justify-between w-full">

        <h2
          className="font-['Arima'] text-[28px] leading-[38px] text-[#000000] tracking-[0%] capitalize text-left mb-2 md:mb-0"
          style={{
            fontWeight: 600,
          }}
        >
          Top Writers
        </h2>

        <span
          onClick={() =>
            navigate(
              "/reporters",
              {
                state: {
                  activeTab:
                    "writer",
                },
              }
            )
          }
          className="font-['Arima'] text-[18px] md:text-[26px] leading-[28px] md:leading-[38px] cursor-pointer hover:underline flex items-center gap-2"
          style={{
            color: "#B22C23",
            fontWeight: 600,
          }}
        >
          See All &rarr;
        </span>
      </div> */}

   {/* HEADER */}
          <div className="flex justify-between items-center mb-10 flex-col md:flex-row gap-4 md:gap-0 px-6 md:px-10">

            <h2
              className="text-3xl font-bold text-gray-800 text-center md:text-left w-full md:w-auto"
              style={{
                fontFamily:
                  "Arima, serif",
              }}
            >
              Top Writers
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
      {/* WRITERS */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto overflow-y-hidden scrollbar-hide pb-2 px-2 md:px-12 scroll-smooth"
      >

        {writers.map((writer) => (

          <div
            key={writer.id}
            onClick={() =>
              navigate(
                `/writer/${writer.id}`
              )
            }
            className="flex items-center gap-4 min-w-[280px] cursor-pointer flex-shrink-0 group"
          >

            {/* IMAGE */}
            <img
              src={writer.image}
              alt={writer.name}
              decoding="async"
              className="w-16 h-16 rounded-full object-cover border border-gray-100 shadow-sm transition-transform duration-300 group-hover:scale-105"
            />

            {/* CONTENT */}
            <div className="text-left">

              <h3 className="text-base font-semibold text-gray-900 line-clamp-1">
                {writer.name}
              </h3>

              <p className="text-sm text-gray-500 line-clamp-1">
                {writer.role}
              </p>

            </div>
          </div>
        ))}
      </div>

      {/* ARROWS */}
     {/* ARROWS */}
<div className="flex justify-center gap-5 mt-6">

  {/* LEFT */}
  <button
    onClick={scrollLeft}
    disabled={!showLeftArrow}
    className={`
      w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-300

      ${
        showLeftArrow
          ? "bg-[#F04E23] text-white shadow-lg"
          : "bg-gray-100 text-gray-400 cursor-not-allowed"
      }
    `}
  >
    &#8249;
  </button>

  {/* RIGHT */}
  <button
    onClick={scrollRight}
    disabled={!showRightArrow}
    className={`
      w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-300

      ${
        showRightArrow
          ? "bg-[#F04E23] text-white shadow-lg"
          : "bg-gray-100 text-gray-400 cursor-not-allowed"
      }
    `}
  >
    &#8250;
  </button>

</div>
    </div>
  );
};

export default React.memo(
  TopWriters
);