import React, { useState, useRef, useEffect } from 'react';
import api from "../../api";

interface Magazine {
  id: number;
  title: string;
  image_url: string;
  pdf_url: string;
  created_at: string;
  status: string;
}

export const MagazineGallery: React.FC = () => {
  const [magazines, setMagazines] = useState<Magazine[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedMonth, setSelectedMonth] = useState('All');
  const [isYearOpen, setIsYearOpen] = useState(false);
  const [isMonthOpen, setIsMonthOpen] = useState(false);

  // Modal states
  const [showPdfModal, setShowPdfModal] = useState<boolean>(false);
  const [currentPdfUrl, setCurrentPdfUrl] = useState<string>("");

  const yearRef = useRef<HTMLDivElement>(null);
  const monthRef = useRef<HTMLDivElement>(null);

  const getTamilMonthYear = (dateString: string) => {
    const date = new Date(dateString);
    const tamilMonths = ['ஜனவரி', 'பிப்ரவரி', 'மார்ச்', 'ஏப்ரல்', 'மே', 'ஜூன்', 'ஜூலை', 'ஆகஸ்ட்', 'செப்டம்பர்', 'அக்டோபர்', 'நவம்பர்', 'டிசம்பர்'];
    return `${tamilMonths[date.getMonth()]} - ${date.getFullYear()}`;
  };

  useEffect(() => {
    const fetchMagazines = async () => {
      try {
        setLoading(true);
        const response = await api.get("/latest-releases");
        if (response.data.success) {
          const sortedData = response.data.data.sort((a: Magazine, b: Magazine) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          );
          setMagazines(sortedData);
        }
      } catch (error) {
        console.error("Error fetching magazines:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMagazines();
  }, []);

  const openPdf = (url: string) => {
    setCurrentPdfUrl(url);
    setShowPdfModal(true);
  };
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (yearRef.current && !yearRef.current.contains(event.target as Node)) setIsYearOpen(false);
      if (monthRef.current && !monthRef.current.contains(event.target as Node)) setIsMonthOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  const filteredMagazines = magazines.filter((mag) => {
    const date = new Date(mag.created_at);
    const magYear = date.getFullYear().toString();
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const magMonthName = monthNames[date.getMonth()];
    return (magYear === selectedYear) && (selectedMonth === 'All' || magMonthName === selectedMonth);
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
    <div className="min-h-screen bg-white p-6 antialiased" style={{ fontFamily: "'Noto Sans Tamil', sans-serif" }}>

      {/* Filters Section (Preserved) */}
      <div className="flex flex-wrap items-center gap-6 mb-12 max-w-[1100px] mx-auto">
        <div className="flex flex-col gap-1" ref={yearRef}>
          <label className="text-[11px] font-bold text-gray-500 tracking-wider">NAME</label>
          <div className="relative">
            <button onClick={() => setIsYearOpen(!isYearOpen)} className="bg-[#F3F4F6] text-sm font-medium px-4 py-2.5 rounded-lg flex items-center gap-6">
              {selectedYear}
              <svg className="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
            </button>
            {isYearOpen && (
              <div className="absolute top-full left-0 z-50 mt-1 w-full bg-white border rounded-lg shadow-lg">
                {['2026', '2025'].map(y => <div key={y} onClick={() => { setSelectedYear(y); setIsYearOpen(false); }} className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm font-medium">{y}</div>)}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1" ref={monthRef}>
          <label className="text-[11px] font-bold text-gray-500 tracking-wider">MONTH</label>
          <div className="relative">
            <button onClick={() => setIsMonthOpen(!isMonthOpen)} className="bg-[#F3F4F6] text-sm font-medium px-4 py-2.5 rounded-lg flex items-center justify-between min-w-[140px]">
              {selectedMonth}
              <svg className="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
            </button>
            {isMonthOpen && (
              <div className="absolute top-full left-0 z-50 mt-1 w-56 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {months.map(m => <div key={m.value} onClick={() => { setSelectedMonth(m.value); setIsMonthOpen(false); }} className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm font-medium">{m.label}</div>)}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Grid Section */}
      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-6 max-w-[1100px] mx-auto w-full">
        {loading ? (
          <p className="col-span-full text-center py-10 text-gray-400">Loading...</p>
        ) : filteredMagazines.length > 0 ? (
          filteredMagazines.map((mag) => {
            const isLatest = mag.id === magazines[0]?.id;
            return (
              <div key={mag.id} className="flex flex-col w-full max-w-[240px] mx-auto">
                <div
                  onClick={() => openPdf(mag.pdf_url)}
                  className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer"
                >
                  <img src={mag.image_url} alt={mag.title} className="w-full h-full object-cover" />
                  {isLatest && (
                    <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
                      <div className="bg-[#E93E45] text-white text-[9px] font-bold py-1 w-24 text-center -rotate-45 -translate-x-7 translate-y-3 shadow-md uppercase">New</div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/90 text-[#B12A1C] px-4 py-2 rounded-full text-xs font-bold shadow-lg">இதழை வாசிக்க</span>
                  </div>
                </div>
                <h3 className="mt-4 text-[16px] font-bold text-gray-800">{getTamilMonthYear(mag.created_at)}</h3>
              </div>
            );
          })
        ) : (
          /* Empty State Message */
          <div className="col-span-full flex flex-col items-center justify-center text-center">
            <div className="bg-gray-50 p-6 rounded-full mb-4">
              <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-600">தகவல்கள் எதுவும் இல்லை</h3>
            <p className="text-gray-400 text-sm mt-1">தேர்ந்தெடுக்கப்பட்ட மாதம் மற்றும் வருடத்தில் இதழ்கள் எதுவும் வெளியிடப்படவில்லை.</p>
            <button
              onClick={() => { setSelectedYear('2026'); setSelectedMonth('All'); }}
              className="mt-6 text-red-600 font-medium hover:underline text-sm"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* --- Book Style PDF Modal --- */}
      {showPdfModal && currentPdfUrl && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-2 md:p-10 backdrop-blur-md">

          {/* Close Button */}
          <button
            onClick={() => setShowPdfModal(false)}
            className="absolute top-4 right-6 z-[110] bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-all"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          {/* Book Container */}
          <div className="relative w-full max-w-[1200px] h-full flex items-center justify-center">

            {/* Book "Center Spine" Design */}
            <div className="absolute inset-y-0 left-1/2 w-[2px] bg-black/20 z-10 hidden md:block shadow-[0_0_10px_rgba(0,0,0,0.5)]"></div>

            {/* The PDF Frame */}
            <div className="relative w-full h-full bg-[#333] rounded-lg overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] border-[8px] border-[#222]">

              <iframe
                src={`${currentPdfUrl}#view=FitH&pagemode=thumbs&page=1`}
                title="Book Preview"
                className="w-full h-full bg-white"
                frameBorder="0"
              />
            </div>

            {/* Realistic Book Edges (Shadows) */}
            <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/40 to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-black/40 to-transparent pointer-events-none"></div>
          </div>

          {/* Bottom Hint */}
          <p className="absolute bottom-4 text-white/50 text-xs font-light">
            Use PDF controls to toggle double-page view
          </p>
        </div>
      )}
    </div>
  );
};