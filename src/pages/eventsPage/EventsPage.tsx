import React from "react";
import EventCard from "./EventCard";

const events = [
  {
    id: 1,
    image: "/images/events/one.png",
    title: "ஸ்ரீ பிரம்மம் மாத இதழ் வெளியீட்டு விழா",
    category: "வெளியீடு",
    description:
      "மாத பத்திரிக்கை வெளியீட்டின் சிறப்பு விழா. புதிய மாத இதழின் தலைப்புகள், கட்டுரைகள் மற்றும் நடிகர் பேச்சுக்கள் குறிப்பிடப்படும்.",
    date: "05 மே 2026",
    location: "பிரம்மம் மண்டல மையம்,சென்னை",
  },
  {
    id: 2,
    image: "/images/events/two.png",
    title: "தமிழ் தத்துவச் சிறப்பு அரங்கம்",
    category: "தத்துவம்",
    description:
      "தமிழ் இலக்கியமும் ஆன்மீகத்தையும் சேர்ந்த சிறப்புப் பேச்சுகள். வாசகர்கள் மற்றும் ஆராய்ச்சியாளர்கள் கலந்து கொள்கிறனர்.",
    date: "18 மே 2026",
    location: "மதுரை கலாச்சார அரங்கம்",
  },
  {
    id: 3,
    image: "/images/events/three.png",
    title: "அழகிய தமிழ் எழுத்து வார விழா",
    category: "பண்பாடு",
    description:
      "தமிழ் எழுத்துகளின் அழகையும் பாரம்பரிய கலைகளையும் கொண்ட திருவிழா. கவிதை வாசிப்பும் பாரதி நினைவூட்டல்களும் இடம்பெறும்.",
    date: "28 மே 2026",
    location: "திருவள்ளூர் கலாச்சார மன்றம்",
  },
];

const EventsPage: React.FC = () => {
  const muktaStyle: React.CSSProperties = {
    fontFamily: "'Mukta Malar', sans-serif",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "24px",
    textTransform: "capitalize",
    letterSpacing: "0%",
  };

  return (
    <div className="pt-0 pb-10 sm:py-10" style={muktaStyle}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Section Grid */}
        <div className="mb-6 sm:mb-10 grid gap-6 p-4 sm:p-6 grid-cols-1 lg:grid-cols-[1.3fr_0.9fr]">
          
          {/* Left Content Area */}
          <div className="space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-3 rounded-full bg-[#ffeadb] px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-[#b33b1f] shadow-sm shadow-[#f8d5c8]/60">
              ஸ்ரீ பிரம்மம் நிகழ்ச்சிகள்
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold leading-snug text-slate-900">
              இந்த மாத நிகழ்ச்சிகள் உங்கள் சமூகத்திற்கும் ஆன்மீகத்திற்கு அர்ப்பணிக்கப்பட்டவை
            </h2>
            <p className="text-base sm:text-lg max-w-3xl text-slate-700">
              இங்கே ஸ்ரீ பிரம்மம் பிரபல நிகழ்ச்சிகளை, தமிழ் எழுத்து, பாரம்பரியம் மற்றும் ஆன்மிக பிரிவுகளைப் பற்றிய உயிர்வாழ்வு நிகழ்ச்சிகளாகக் காணலாம்.
            </p>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-[#ffe1ce] bg-[#fff1e3] p-4 shadow-sm shadow-[#f4c7af]/20">
                <p className="text-xs uppercase tracking-[0.3em] text-[#b5482c]">சமூகம்</p>
                <p className="mt-3 text-slate-700 text-sm sm:text-base">
                  கலாச்சாரம், தமிழ் பாரம்பரியம் மற்றும் சமூக சேவை நிகழ்ச்சிகள் ஒருங்கிணைக்கப்பெறும்.
                </p>
              </div>
              <div className="rounded-[24px] border border-[#d6f3e6] bg-[#ecf8f1] p-4 shadow-sm shadow-[#c4e7d7]/20">
                <p className="text-xs uppercase tracking-[0.3em] text-[#047857]">ஆன்மீகம்</p>
                <p className="mt-3 text-slate-700 text-sm sm:text-base">
                  ஆன்மீக கருத்துகள், தியானம் மற்றும் வாழ்வியல் வழிகாட்டுதல்கள் நோக்கமாகும்.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="relative flex items-center justify-center overflow-hidden p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-slate-100 rounded-[32px] bg-white">
            <div className="relative z-10 flex h-full w-full flex-col justify-between gap-6">
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#B12A1C]">இது ஒரு சிறப்பு விருத்தி</p>
                <h3 className="text-xl sm:text-2xl font-semibold leading-tight text-slate-900">
                  தமிழ் எழுத்து மற்றும் நிகழ்ச்சிகள்
                </h3>
              </div>
              <div className="grid gap-4">
                <div className="rounded-[24px] border border-slate-100 p-4 shadow-sm bg-slate-50">
                  <p className="text-xs uppercase tracking-[0.35em] text-[#B12A1C]">கைமுறை</p>
                  <p className="mt-2 text-slate-700 text-sm sm:text-base">
                    இலக்கியங்கள், கவிதைகள் மற்றும் பாரம்பரிய நிகழ்வுகளால் உங்கள் உள்ளத்தைக் கொண்டு செல்லும்.
                  </p>
                </div>
                <div className="rounded-[24px] border border-slate-100 p-4 shadow-sm bg-slate-50">
                  <p className="text-xs uppercase tracking-[0.35em] text-[#B12A1C]">நிகழ்ச்சிகள்</p>
                  <p className="mt-2 text-slate-700 text-sm sm:text-base">
                    மாத இதழ் வெளியீட்டு விழா, தத்துவ அரங்கம், எழுத்துப் பாரம்பரியம் ஆகியவை இதில் அடங்கும்.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Events Grid Area */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-2 sm:px-0">
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default EventsPage;