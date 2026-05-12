import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";

import api from "../../api";

import { useNavigate } from "react-router-dom";

type EditorPick = {
  id: number;
  title: string;
  image: string;
  pdf: string | null;
  read_time: string;

  category: {
    name: string;
  };

  creator: {
    name: string;
    profile_image: string;
  };
};

const EditorsPick: React.FC = () => {

  const [editorsPicks, setEditorsPicks] =
    useState<EditorPick[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [selectedPdf, setSelectedPdf] =
    useState<string | null>(null);

  const [selectedTitle, setSelectedTitle] =
    useState<string>("");

  // ARROWS
  const [showLeftArrow, setShowLeftArrow] =
    useState(false);

  const [showRightArrow, setShowRightArrow] =
    useState(false);

  const navigate = useNavigate();

  const scrollRef =
    useRef<HTMLDivElement>(null);

  // =========================
  // Fetch API + Cache
  // =========================
  useEffect(() => {

    let isMounted = true;

    const fetchEditorsPicks =
      async () => {

        try {

          // CACHE
          const cachedData =
            localStorage.getItem(
              "editorsPicks"
            );

          if (cachedData) {

            setEditorsPicks(
              JSON.parse(cachedData)
            );

            setLoading(false);
          }

          // API
          const res = await api.get(
            "/editors-picks"
          );

          if (isMounted) {

            setEditorsPicks(
              res.data.data
            );

            localStorage.setItem(
              "editorsPicks",
              JSON.stringify(
                res.data.data
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

    fetchEditorsPicks();

    return () => {
      isMounted = false;
    };

  }, []);

  // =========================
  // PDF SRC
  // =========================
  const getPdfSrc = useCallback(() => {

    if (!selectedPdf) return "";

    return `${selectedPdf}#toolbar=1&navpanes=1&scrollbar=1`;

  }, [selectedPdf]);

  // =========================
  // CHECK ARROWS
  // =========================
  const checkArrows = () => {

    if (!scrollRef.current) return;

    const {
      scrollLeft,
      scrollWidth,
      clientWidth,
    } = scrollRef.current;

    // SHOW LEFT
    setShowLeftArrow(
      scrollLeft > 10
    );

    // SHOW RIGHT
    setShowRightArrow(
      scrollLeft + clientWidth <
        scrollWidth - 10
    );
  };

  // =========================
  // SCROLL LEFT
  // =========================
  const scrollLeft = () => {

    if (scrollRef.current) {

      scrollRef.current.scrollBy({
        left:
          -scrollRef.current.offsetWidth,
        behavior: "smooth",
      });

      setTimeout(
        checkArrows,
        400
      );
    }
  };

  // =========================
  // SCROLL RIGHT
  // =========================
  const scrollRight = () => {

    if (scrollRef.current) {

      scrollRef.current.scrollBy({
        left:
          scrollRef.current.offsetWidth,
        behavior: "smooth",
      });

      setTimeout(
        checkArrows,
        400
      );
    }
  };

  // =========================
  // INIT ARROWS
  // =========================
  useEffect(() => {

    checkArrows();

    window.addEventListener(
      "resize",
      checkArrows
    );

    return () => {

      window.removeEventListener(
        "resize",
        checkArrows
      );
    };

  }, [editorsPicks]);

  // =========================
  // Loading Skeleton
  // =========================
  if (loading) {

    return (
      <div className="w-full bg-white pt-16 pb-2">

        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex justify-between items-center mb-10 px-6 md:px-10">

            <div className="w-48 h-8 bg-gray-200 rounded animate-pulse"></div>

            <div className="w-24 h-6 bg-gray-200 rounded animate-pulse"></div>

          </div>

          {/* Skeleton Cards */}
          <div className="px-6 md:px-24 flex gap-6 overflow-hidden">

            {[1, 2, 3].map((item) => (

              <div
                key={item}
                className="w-full md:w-[calc((100%-3rem)/3)] rounded-3xl overflow-hidden border shadow-sm"
              >

                <div className="h-[250px] md:h-[300px] bg-gray-200 animate-pulse"></div>

                <div className="p-5">

                  <div className="flex items-center gap-3 mb-4">

                    <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>

                    <div className="w-24 h-4 rounded bg-gray-200 animate-pulse"></div>

                  </div>

                  <div className="w-full h-5 rounded bg-gray-200 animate-pulse mb-3"></div>

                  <div className="w-3/4 h-5 rounded bg-gray-100 animate-pulse mb-4"></div>

                  <div className="w-32 h-4 rounded bg-gray-200 animate-pulse"></div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // =========================
  // NO DATA
  // =========================
  if (editorsPicks.length === 0)
    return null;

  return (
    <>
      <div className="w-full bg-white pt-16 pb-2">

        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="flex justify-between items-center mb-10 flex-col md:flex-row gap-4 md:gap-0 px-6 md:px-10">

            <h2
              className="text-3xl font-bold text-gray-800 text-center md:text-left w-full md:w-auto"
              style={{
                fontFamily:
                  "Arima, serif",
              }}
            >
              Editor’s Pick
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

          {/* WRAPPER */}
          <div className="relative px-6 md:px-24">

            {/* LEFT ARROW */}
            {showLeftArrow && (
              <button
                onClick={scrollLeft}
                className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl w-14 h-14 rounded-full items-center justify-center text-3xl font-bold hover:bg-gray-100 transition active:scale-95"
              >
                &#8249;
              </button>
            )}

            {/* RIGHT ARROW */}
            {showRightArrow && (
              <button
                onClick={scrollRight}
                className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl w-14 h-14 rounded-full items-center justify-center text-3xl font-bold hover:bg-gray-100 transition active:scale-95"
              >
                &#8250;
              </button>
            )}

            {/* SCROLL CONTAINER */}
            <div
              ref={scrollRef}
              onScroll={checkArrows}
              className="flex flex-col md:flex-row gap-6 md:overflow-hidden scrollbar-hide pb-2 snap-x snap-mandatory scroll-smooth"
            >

              {editorsPicks.map(
                (item) => (

                  <div
                    key={item.id}
                    onClick={() => {

                      if (item.pdf) {

                        setSelectedPdf(
                          item.pdf
                        );

                        setSelectedTitle(
                          item.title
                        );

                      } else {

                        alert(
                          "PDF not uploaded"
                        );
                      }
                    }}
                    className="w-full md:w-[calc((100%-3rem)/3)] flex-shrink-0 bg-white rounded-3xl overflow-hidden border shadow-sm cursor-pointer hover:shadow-2xl transition duration-300 snap-start mb-4 md:mb-2"
                  >

                    {/* IMAGE */}
                    <div className="h-[250px] md:h-[300px] overflow-hidden">

                      <img
                        src={item.image}
                        alt={item.title}
                        decoding="async"
                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                      />

                    </div>

                    {/* CONTENT */}
                    <div className="p-5">

                      <div className="flex items-center gap-3 mb-4">

                        <img
                          src={
                            item.creator
                              .profile_image
                          }
                          alt={
                            item.creator.name
                          }
                          decoding="async"
                          className="w-10 h-10 rounded-full object-cover"
                        />

                        <span className="text-sm font-semibold text-gray-700">
                          {
                            item.creator
                              .name
                          }
                        </span>

                      </div>

                      <h2 className="text-xl font-bold text-gray-900 leading-snug mb-4 font-['Arima']">

                        {item.title}

                      </h2>

                      <div className="flex items-center gap-2 text-sm text-gray-500">

                        <span className="text-[#B22C23] font-medium">
                          {
                            item.category
                              .name
                          }
                        </span>

                        <span>|</span>

                        <span>
                          {item.read_time}{" "}
                          Mins Read
                        </span>

                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* PDF MODAL */}
      {selectedPdf && (

        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-0 md:p-4">

          <div className="relative w-full h-full md:w-[95vw] md:h-[95vh] bg-[#323639] md:rounded-lg overflow-hidden flex flex-col">

            {/* HEADER */}
            <div className="w-full bg-[#323639] text-white p-3 flex justify-between items-center px-6">

              <span className="text-sm md:text-base font-medium truncate">

                {selectedTitle}

              </span>

              <button
                onClick={() => {

                  setSelectedPdf(null);

                  setSelectedTitle("");

                }}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-md text-sm font-bold transition-colors"
              >
                Close
              </button>

            </div>

            {/* PDF */}
            <div className="flex-grow w-full h-full bg-white">

              <iframe
                src={getPdfSrc()}
                title="PDF Viewer"
                className="w-full h-full border-none"
                loading="lazy"
              />

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(
  EditorsPick
);