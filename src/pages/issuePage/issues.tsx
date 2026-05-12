// MOBILE PDF VIEW + RESPONSIVE FIXES ADDED

import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
} from "react";

import api from "../../api";

interface Magazine {
  id: number;
  title: string;
  image_url: string;
  pdf_url: string;
  created_at: string;
  status: string;
}

const MagazineGallery: React.FC = () => {

  const [magazines, setMagazines] =
    useState<Magazine[]>([]);

  const [loading, setLoading] =
    useState<boolean>(true);

  // =========================
  // CURRENT YEAR AUTO SELECT
  // =========================
  const currentYear =
    new Date()
      .getFullYear()
      .toString();

  const [selectedYear, setSelectedYear] =
    useState(currentYear);

  const [selectedMonth, setSelectedMonth] =
    useState("All");

  const [isYearOpen, setIsYearOpen] =
    useState(false);

  const [isMonthOpen, setIsMonthOpen] =
    useState(false);

  // MODAL STATES
  const [showPdfModal, setShowPdfModal] =
    useState<boolean>(false);

  const [currentPdfUrl, setCurrentPdfUrl] =
    useState<string>("");

  const [currentTitle, setCurrentTitle] =
    useState<string>("");

  const yearRef =
    useRef<HTMLDivElement>(null);

  const monthRef =
    useRef<HTMLDivElement>(null);

  // =========================
  // MOBILE DETECT
  // =========================
  const isMobile = useMemo(() => {

    return /iPhone|iPad|iPod|Android/i.test(
      navigator.userAgent
    );

  }, []);

  // =========================
  // TAMIL MONTH FORMAT
  // =========================
  const getTamilMonthYear = (
    dateString: string
  ) => {

    const date = new Date(dateString);

    const tamilMonths = [
      "ஜனவரி",
      "பிப்ரவரி",
      "மார்ச்",
      "ஏப்ரல்",
      "மே",
      "ஜூன்",
      "ஜூலை",
      "ஆகஸ்ட்",
      "செப்டம்பர்",
      "அக்டோபர்",
      "நவம்பர்",
      "டிசம்பர்",
    ];

    return `${
      tamilMonths[date.getMonth()]
    } - ${date.getFullYear()}`;
  };

  // =========================
  // FETCH API
  // =========================
  useEffect(() => {

    const fetchMagazines =
      async () => {

        try {

          setLoading(true);

          const response =
            await api.get(
              "/latest-releases"
            );

          if (
            response.data.success
          ) {

            const sortedData =
              response.data.data.sort(
                (
                  a: Magazine,
                  b: Magazine
                ) =>
                  new Date(
                    b.created_at
                  ).getTime() -
                  new Date(
                    a.created_at
                  ).getTime()
              );

            setMagazines(
              sortedData
            );
          }

        } catch (error) {

          console.error(
            "Error fetching magazines:",
            error
          );

        } finally {

          setLoading(false);
        }
      };

    fetchMagazines();

  }, []);

  // =========================
  // OPEN PDF
  // =========================
  const openPdf = (
    url: string,
    title: string
  ) => {

    setCurrentPdfUrl(url);

    setCurrentTitle(title);

    setShowPdfModal(true);
  };

  // =========================
  // RESPONSIVE PDF VIEWER
  // =========================
  const getPdfSrc = (
    url: string
  ) => {

    if (!url) return "";

    // MOBILE
    if (isMobile) {

      return `https://docs.google.com/viewer?url=${encodeURIComponent(
        url
      )}&embedded=true`;
    }

    // DESKTOP
    return `${url}#toolbar=1&navpanes=1&scrollbar=1`;
  };

  // =========================
  // CLOSE DROPDOWN OUTSIDE
  // =========================
  useEffect(() => {

    function handleClickOutside(
      event: MouseEvent
    ) {

      if (
        yearRef.current &&
        !yearRef.current.contains(
          event.target as Node
        )
      ) {

        setIsYearOpen(false);
      }

      if (
        monthRef.current &&
        !monthRef.current.contains(
          event.target as Node
        )
      ) {

        setIsMonthOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

  }, []);

  // =========================
  // FILTER MAGAZINES
  // =========================
  const filteredMagazines =
    magazines.filter((mag) => {

      const date = new Date(
        mag.created_at
      );

      const magYear =
        date
          .getFullYear()
          .toString();

      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const magMonthName =
        monthNames[
          date.getMonth()
        ];

      return (
        magYear ===
          selectedYear &&
        (selectedMonth ===
          "All" ||
          magMonthName ===
            selectedMonth)
      );
    });

  // =========================
  // MONTHS
  // =========================
  const months = [
    {
      value: "All",
      label: "All",
    },
    {
      value: "January",
      label:
        "ஜனவரி (January)",
    },
    {
      value: "February",
      label:
        "பிப்ரவரி (February)",
    },
    {
      value: "March",
      label:
        "மார்ச் (March)",
    },
    {
      value: "April",
      label:
        "ஏப்ரல் (April)",
    },
    {
      value: "May",
      label: "மே (May)",
    },
    {
      value: "June",
      label:
        "ஜூன் (June)",
    },
    {
      value: "July",
      label:
        "ஜூலை (July)",
    },
    {
      value: "August",
      label:
        "ஆகஸ்ட் (August)",
    },
    {
      value: "September",
      label:
        "செப்டம்பர் (September)",
    },
    {
      value: "October",
      label:
        "அக்டோபர் (October)",
    },
    {
      value: "November",
      label:
        "நவம்பர் (November)",
    },
    {
      value: "December",
      label:
        "டிசம்பர் (December)",
    },
  ];

 // =========================
// DYNAMIC YEARS
// =========================

// =========================
// DYNAMIC YEARS


const startYear = 2024;

const endYear =
  new Date().getFullYear();

const years = Array.from(
  {
    length:
      endYear - startYear + 1,
  },
  (_, index) =>
    (
      endYear - index
    ).toString()
);

  return (
    <div
      className="min-h-screen bg-white p-6 antialiased"
      style={{
        fontFamily:
          "'Noto Sans Tamil', sans-serif",
      }}
    >

      {/* FILTERS */}
      <div className="flex flex-wrap items-center gap-6 mb-12 max-w-[1100px] mx-auto">

        {/* YEAR */}
        <div
          className="flex flex-col gap-1"
          ref={yearRef}
        >

          <label className="text-[11px] font-bold text-gray-500 tracking-wider">
            YEAR
          </label>

          <div className="relative">

            <button
              onClick={() =>
                setIsYearOpen(
                  !isYearOpen
                )
              }
              className="bg-[#F3F4F6] text-sm font-medium px-4 py-2.5 rounded-lg flex items-center gap-6"
            >

              {selectedYear}

              <svg
                className="w-3 h-3 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>

            </button>

            {isYearOpen && (

              <div className="absolute top-full left-0 z-10 mt-1 w-full bg-white border rounded-lg shadow-lg">

                {years.map(
                  (y) => (

                    <div
                      key={y}
                      onClick={() => {

                        setSelectedYear(
                          y
                        );

                        setIsYearOpen(
                          false
                        );
                      }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm font-medium"
                    >
                      {y}
                    </div>
                  )
                )}

              </div>
            )}
          </div>
        </div>

        {/* MONTH */}
        <div
          className="flex flex-col gap-1"
          ref={monthRef}
        >

          <label className="text-[11px] font-bold text-gray-500 tracking-wider">
            MONTH
          </label>

          <div className="relative">

            <button
              onClick={() =>
                setIsMonthOpen(
                  !isMonthOpen
                )
              }
              className="bg-[#F3F4F6] text-sm font-medium px-4 py-2.5 rounded-lg flex items-center justify-between min-w-[140px]"
            >

              {selectedMonth}

              <svg
                className="w-3 h-3 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>

            </button>

            {isMonthOpen && (

              <div className="absolute top-full left-0 z-10 mt-1 w-56 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">

                {months.map(
                  (m) => (

                    <div
                      key={m.value}
                      onClick={() => {

                        setSelectedMonth(
                          m.value
                        );

                        setIsMonthOpen(
                          false
                        );
                      }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm font-medium"
                    >
                      {m.label}
                    </div>
                  )
                )}

              </div>
            )}
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-6 max-w-[1100px] mx-auto w-full">

        {loading ? (

          <p className="col-span-full text-center py-10 text-gray-400">
            Loading...
          </p>

        ) : filteredMagazines.length > 0 ? (

          filteredMagazines.map(
            (mag) => {

              const isLatest =
                mag.id ===
                magazines[0]?.id;

              return (

                <div
                  key={mag.id}
                  className="flex flex-col w-full max-w-[240px] mx-auto"
                >

                  <div
                    onClick={() =>
                      openPdf(
                        mag.pdf_url,
                        getTamilMonthYear(
                          mag.created_at
                        )
                      )
                    }
                    className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer"
                  >

                    <img
                      src={
                        mag.image_url
                      }
                      alt={
                        mag.title
                      }
                      className="w-full h-full object-cover"
                    />

                    {isLatest && (

                      <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">

                        <div className="bg-[#E93E45] text-white text-[9px] font-bold py-1 w-24 text-center -rotate-45 -translate-x-7 translate-y-3 shadow-md uppercase">

                          New

                        </div>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">

                      <span className="bg-white/90 text-[#B12A1C] px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                        இதழை வாசிக்க
                      </span>

                    </div>
                  </div>

                  <h3 className="mt-4 text-[16px] font-bold text-gray-800">

                    {getTamilMonthYear(
                      mag.created_at
                    )}

                  </h3>
                </div>
              );
            }
          )

        ) : (

          <div className="col-span-full text-center py-20 italic text-gray-500">

            தகவல்கள் எதுவும் இல்லை.

          </div>
        )}
      </div>

      {/* PDF MODAL */}
      {showPdfModal &&
        currentPdfUrl && (

          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-0 md:p-4 backdrop-blur-sm">

            <div className="relative w-full h-full md:w-[95vw] md:h-[95vh] bg-[#323639] md:rounded-xl overflow-hidden flex flex-col shadow-2xl">

              {/* TOP BAR */}
              <div className="w-full bg-[#202124] md:bg-[#323639] text-white p-3 flex justify-between items-center px-4 md:px-6 border-b border-white/10">

                <span className="text-sm md:text-base font-medium truncate pr-4">

                  {currentTitle ||
                    "இதழ் பார்வை"}

                </span>

                <button
                  onClick={() =>
                    setShowPdfModal(
                      false
                    )
                  }
                  className="bg-[#E93E45] hover:bg-red-700 text-white px-4 py-1.5 rounded-md text-xs md:text-sm font-bold transition-all shadow-lg active:scale-95"
                >
                  Close
                </button>

              </div>

              {/* IFRAME */}
              <div className="flex-grow w-full h-full bg-white relative">

                <iframe
                  src={getPdfSrc(
                    currentPdfUrl
                  )}
                  title="Magazine Preview"
                  className="w-full h-full border-none"
                  loading="lazy"
                />

              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export default MagazineGallery;