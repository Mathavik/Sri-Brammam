export default function HeroBanner() { 
  return (
    <div className="w-full">
      
      {/* 1. Left Floating Text - Now placed OUTSIDE of the banner, 
          so it aligns relative to the top of the white page. */}
      <div className="ml-2 sm:ml-4 md:ml-6 lg:ml-2 mb-8 text-black 
                      max-w-[90%] sm:max-w-md md:max-w-lg">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
          ஸ்ரீ பிரம்மம்
        </h2>

        <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium">
          “ஆன்மீகம் · அறம் · அறிவு – உங்கள் வழிகாட்டி”
        </p>
      </div>

      {/* Main Banner Container - Re-adjusted spacing and position */}
      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[420px]">
        
        {/* Banner Image & Overlay Gradient */}
        <div className="absolute inset-0">
          <img
            src="/images/about/aboutbanner.png"
            alt="Temple"
            className="w-full h-full object-cover"
          />
          <div className="absolute"></div>
        </div>

        {/* 2. Right Card - (Unchanged, already positioned correctly) */}
        <div className="
          absolute 
          right-4 sm:right-6 md:right-8 lg:right-10
          -top-12 sm:-top-16 md:-top-20 lg:-top-24
          bg-[#B22C23] text-white 
          p-6 sm:p-8 md:p-10 
          rounded-tl-[100px] md:rounded-tl-[160px]
          rounded-[10px] md:rounded-[20px]
          w-[60%] sm:w-[45%] md:w-[40%] lg:w-[30%]
          h-[320px] sm:h-[380px] md:h-[450px] lg:h-[440px]
          flex items-end shadow-2xl
        ">
          {/* Internal text content aligned to the bottom */}
          <p className="text-xs sm:text-sm md:text-base leading-relaxed pb-0 sm:pb-2 md:pb-3">
            “ஸ்ரீ பிரம்மம் மாத இதழ்” என்பது ஆன்மீகம், சமயம், தத்துவம் மற்றும் மனித வாழ்க்கையின் உயர்ந்த அர்த்தங்களை எடுத்துரைக்கும் ஒரு சிறப்பு மாத இதழாகும். இந்த இதழ், வேதங்கள், உபநிஷத்துகள், புராணங்கள் மற்றும் சித்தர்கள் அருளிய ஞானங்களை எளிய தமிழில் வழங்குகிறது.
          </p>
        </div>

      </div>
    </div>
  );
}