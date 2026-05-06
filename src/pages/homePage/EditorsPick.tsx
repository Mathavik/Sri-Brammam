import React from "react";

const EditorsPick: React.FC = () => {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Top Header */}
        <div className="flex justify-between items-center mb-10 flex-col md:flex-row gap-4 md:gap-0">
          <h2 className="text-3xl font-bold text-gray-800 text-center md:text-left w-full md:w-auto" style={{ fontFamily: "Arima, serif" }}>
            Editor’s Pick
          </h2>
          <span 
  className="font-['Arima'] text-[18px] md:text-[26px] leading-[28px] md:leading-[38px] cursor-pointer hover:underline flex items-center gap-2 justify-center"          
  style={{ color: '#B22C23', fontWeight: 600 }}
>
  See All &rarr;
</span>
        </div>

        {/* Cards Grid: Mobile - 1 column, Tablet & Desktop - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* CARD 1 */}
          <div className="flex flex-col">
            <div className="h-[280px] rounded-2xl overflow-hidden mb-4 shadow-sm">
              <img src="/images/subs/subs1.png" alt="card1" className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center gap-2 mb-3">
              <img src="/images/subs/per1.png" className="w-6 h-6 rounded-full" alt="author" />
              <span className="text-sm font-bold text-gray-700">S.தண்டபாணி</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-3">
              அறிந்திடுவோம்! <br /> ஸ்ரீ வாசவி வாசஸ்தலம்
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
              <span className="text-red-600">ஆன்மீகம்</span>
              <span>|</span>
              <span>10 Mins Read</span>
            </div>
          </div>

          {/* CARD 2 (CENTER RED STYLE) */}
          <div className="relative h-[380px] md:h-[480px] rounded-2xl overflow-hidden shadow-xl text-white flex flex-col justify-end p-6 group">
            <img 
              src="/images/subs/subs2.png" 
              alt="card2" 
              className="absolute inset-0 w-full h-full object-cover z-0" 
            />
            {/* Red Overlay Effect as per reference */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#B12A1C] via-[#B12A1C]/80 to-transparent z-10"></div>
            
            <div className="relative z-20">
              <div className="flex items-center gap-2 mb-4">
                <img src="/images/subs/per2.png" className="w-6 h-6 rounded-full border border-white" alt="author" />
                <span className="text-sm font-bold">S.வைஷ்ணவி சுதர்சன்</span>
              </div>
              <h3 className="text-3xl font-bold leading-tight mb-4">
                விடுதலைப் போராட்ட வீரர்கள்
              </h3>
              <div className="flex items-center gap-2 text-sm opacity-90 font-medium border-t border-white/20 pt-4">
                <span>சமூகம்</span>
                <span>|</span>
                <span>10 Mins Read</span>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="flex flex-col">
            <div className="h-[280px] rounded-2xl overflow-hidden mb-4 shadow-sm border border-gray-100">
              <img src="/images/subs/subs3.png" alt="card3" className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm font-bold text-gray-700">S.நிர்மலா குப்தா</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-3">
              மருந்தென வேண்டாவாம் யாக்கைக்கு
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
              <span className="text-red-600">லைஃப்ஸ்டைல்</span>
              <span>|</span>
              <span>10 Mins Read</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EditorsPick;