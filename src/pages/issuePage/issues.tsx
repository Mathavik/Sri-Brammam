import React, { useState, useRef, useEffect } from 'react';

const magazines = [
  {
    id: 1,
    title: 'ஏப்ரல் - 2026',
    month: 'April',
    year: '2026',
    isNew: true,
    image: '/images/issue/mag.jpg',
    altText: 'April 2026 Magazine Cover',
    titleText: 'ஸ்ரீ ப்ரஹ்மம்',
    subtitleText: 'SRI BRAHMAM'
  },
  {
    id: 2,
    title: 'மார்ச் - 2026',
    month: 'March',
    year: '2026',
    isNew: false,
    image: '/images/issue/mag2.webp',
    altText: 'March 2026 Magazine Cover',
    titleText: 'ஸ்ரீ ப்ரஹ்மம்',
    subtitleText: 'SRI BRAHMAM'
  },
  {
    id: 3,
    title: 'பிப்ரவரி - 2026',
    month: 'February',
    year: '2026',
    isNew: false,
    image: '/images/issue/mag3.jpg',
    altText: 'February 2026 Magazine Cover',
    titleText: 'ஸ்ரீ ப்ரஹ்மம்',
    subtitleText: 'SRI BRAHMAM'
  },
  {
    id: 4,
    title: 'ஜனவரி - 2026',
    month: 'January',
    year: '2026',
    isNew: false,
    image: '/images/issue/mag4.webp',
    altText: 'January 2026 Magazine Cover',
    titleText: 'ஸ்ரீ ப்ரஹ்மம்',
    subtitleText: 'SRI BRAHMAM'
  }
];

export const MagazineGallery: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedMonth, setSelectedMonth] = useState('All');
  const [isYearOpen, setIsYearOpen] = useState(false);
  const [isMonthOpen, setIsMonthOpen] = useState(false);

  const yearRef = useRef<HTMLDivElement>(null);
  const monthRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (yearRef.current && !yearRef.current.contains(event.target as Node)) {
        setIsYearOpen(false);
      }
      if (monthRef.current && !monthRef.current.contains(event.target as Node)) {
        setIsMonthOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Filter magazines based on selected year & month
  const filteredMagazines = magazines.filter((mag) => {
    const matchesYear = mag.year === selectedYear;
    const matchesMonth = selectedMonth === 'All' || mag.month === selectedMonth;
    return matchesYear && matchesMonth;
  });

  const months = [
    { value: 'All', label: 'All' },
    { value: 'January', label: 'ஜனவரி (January)' },
    { value: 'February', label: 'பிப்ரவரி (February)' },
    { value: 'March', label: 'மார்ச் (March)' },
    { value: 'April', label: 'ஏப்ரல் (April)' },
    { value: 'May', label: 'மே (May)' },
    { value: 'June', label: 'ஜூன் (June)' },
    { value: 'July', label: 'ஜூலை (July)' },
    { value: 'August', label: 'ஆகஸ்ட் (August)' },
    { value: 'September', label: 'செப்டம்பர் (September)' },
    { value: 'October', label: 'அக்டோபர் (October)' },
    { value: 'November', label: 'நவம்பர் (November)' },
    { value: 'December', label: 'டிசம்பர் (December)' },
  ];

  return (
    <div className="min-h-screen bg-white p-8 md:p-0 pb-40 font-sans antialiased">
      {/* Header & Filters Section */}
      <div className="flex flex-wrap items-center gap-6 mt-8 mb-12 max-w-[1200px] mx-auto">
        
        {/* Name / Year Dropdown */}
        <div className="flex flex-col gap-1.5 min-w-[160px]" ref={yearRef}>
          <label className="text-xs font-semibold text-gray-900 tracking-wider">
            NAME
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setIsYearOpen(!isYearOpen);
                setIsMonthOpen(false);
              }}
              className="w-full bg-[#F3F4F6] text-sm text-gray-900 px-4 py-3 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-gray-300 flex items-center justify-between cursor-pointer pr-10"
            >
              <span>{selectedYear}</span>
              <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isYearOpen && (
              <div className="absolute top-full left-0 z-40 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                <div
                  onClick={() => {
                    setSelectedYear('2026');
                    setIsYearOpen(false);
                  }}
                  className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-sm text-gray-900"
                >
                  2026
                </div>
                <div
                  onClick={() => {
                    setSelectedYear('2025');
                    setIsYearOpen(false);
                  }}
                  className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-sm text-gray-900"
                >
                  2025
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Month Dropdown */}
        <div className="flex flex-col gap-1.5 min-w-[160px]" ref={monthRef}>
          <label className="text-xs font-semibold text-gray-900 tracking-wider">
            MONTH
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setIsMonthOpen(!isMonthOpen);
                setIsYearOpen(false);
              }}
              className="w-full bg-[#F3F4F6] text-sm text-gray-900 px-4 py-3 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-gray-300 flex items-center justify-between cursor-pointer pr-10"
            >
              <span>
                {months.find((m) => m.value === selectedMonth)?.label || 'All'}
              </span>
              <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isMonthOpen && (
              <div className="absolute top-full left-0 z-40 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-y-auto"> 
                {months.map((m) => (
                  <div
                    key={m.value}
                    onClick={() => {
                      setSelectedMonth(m.value);
                      setIsMonthOpen(false);
                    }}
                    className={`px-4 py-3 hover:bg-gray-100 cursor-pointer text-sm text-gray-900 ${
                      selectedMonth === m.value ? 'bg-gray-50 font-medium' : ''
                    }`}
                  >
                    {m.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Magazine Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1200px] mx-auto justify-items-center lg:justify-items-start">
        {filteredMagazines.length > 0 ? (
          filteredMagazines.map((mag) => (
            <div key={mag.id} className="flex flex-col items-center lg:items-start w-64">
              <div className="relative w-64 h-96 bg-gray-100 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                {/* Card Header Tag */}
                {mag.isNew && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm z-10 uppercase tracking-widest">
                    New
                  </span>
                )}

                {/* Magazine Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${mag.image})` }}
                ></div>
              </div>

              {/* Tamil Description Label below */}
              <p className="mt-4 text-sm font-bold text-gray-900 tracking-wide text-center lg:text-left">
                {mag.title}
              </p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No magazines found for the selected criteria.
          </p>
        )}
      </div>
    </div>
  );
};