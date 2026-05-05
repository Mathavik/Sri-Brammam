import React, { useState } from 'react';
import SubscribeSection from '../homePage/SubscribeSection';

// Ungalathu public folder-il ulla images path-ai ingu kodungal
const magazines = [
  {
    id: 1,
    title: 'ஏப்ரல் - 2026',
    month: 'April',
    year: '2026',
    isNew: true,
    image: '/images/issue/mag.jpg', // Ungalathu image path ingu podungal
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
    image: '/images/issue/mag.jpg', // Ungalathu image path ingu podungal
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
    image: '/images/issue/mag.jpg', // Ungalathu image path ingu podungal
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
    image: '/images/issue/mag.jpg', // Ungalathu image path ingu podungal
    altText: 'January 2026 Magazine Cover',
    titleText: 'ஸ்ரீ ப்ரஹ்மம்',
    subtitleText: 'SRI BRAHMAM'
  }
];

export const MagazineGallery: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedMonth, setSelectedMonth] = useState('All');

  return (
    <div className="min-h-screen bg-white p-8 font-sans antialiased">
      {/* Header & Filters Section */}
      <div className="flex flex-wrap items-center gap-6 mb-12 max-w-6xl mx-auto">
        {/* Name / Year Dropdown */}
        <div className="flex flex-col gap-1.5 min-w-[160px]">
          <label htmlFor="year-select" className="text-xs font-semibold text-gray-900 tracking-wider">
            NAME
          </label>
          <div className="relative">
            <select
              id="year-select"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full bg-[#F3F4F6] text-sm text-gray-900 px-4 py-3 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-gray-300 appearance-none cursor-pointer pr-10"
            >
              <option value="2026">2026</option>
              <option value="2025">2025</option>
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-700">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Month Dropdown */}
        <div className="flex flex-col gap-1.5 min-w-[160px]">
          <label htmlFor="month-select" className="text-xs font-semibold text-gray-900 tracking-wider">
            MONTH
          </label>
          <div className="relative">
            <select
              id="month-select"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="w-full bg-[#F3F4F6] text-sm text-gray-900 px-4 py-3 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-gray-300 appearance-none cursor-pointer pr-10"
            >
              <option value="All">All</option>
              <option value="January">ஜனவரி (January)</option>
              <option value="February">பிப்ரவரி (February)</option>
              <option value="March">மார்ச் (March)</option>
              <option value="April">ஏப்ரல் (April)</option>
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-700">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Magazine Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {magazines.map((mag) => (
          <div key={mag.id} className="flex flex-col items-start">
            <div className="relative w-64 h-96 bg-gray-100 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              {/* Card Header Tag */}
              {mag.isNew && (
                <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm z-10 uppercase tracking-widest">
                  New
                </span>
              )}

              {/* Magazine Background Image & Banner */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${mag.image})` }}
              >

              </div>
            </div>

            {/* Tamil Description Label below */}
            <p className="mt-4 text-sm font-bold text-gray-900 tracking-wide">
              {mag.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};