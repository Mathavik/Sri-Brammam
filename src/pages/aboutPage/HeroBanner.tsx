export default function HeroBanner() { 
  return (
    <div className="w-full">
      
      {/* Left Floating Text */}
      <div className="ml-4 sm:ml-6 md:ml-8 lg:ml-12 mb-8 text-black 
                      max-w-[85%] sm:max-w-md md:max-w-lg">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
          ஸ்ரீ பிரம்மம்
        </h2>

        <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium">
          “ஆன்மீகம் · அறம் · அறிவு – உங்கள் வழிகாட்டி”
        </p>
      </div>

      {/* Main Banner Container */}
      <div className="relative w-full h-[320px] sm:h-[350px] md:h-[400px] lg:h-[420px] mt-16 sm:mt-0">
        
        {/* Banner Image & Overlay Gradient */}
        <div className="absolute inset-0">
          <img
            src="/images/about/aboutbanner.png"
            alt="Temple"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Right Card */}
        <div className="
          absolute 
          right-4 sm:right-6 md:right-8 lg:right-10
          -top-12 sm:-top-16 md:-top-20 lg:-top-24
          bg-[#B22C23] text-white 
          p-4 sm:p-6 md:p-8 lg:p-10 
          rounded-tl-[60px] sm:rounded-tl-[100px] md:rounded-tl-[160px]
          rounded-[12px] md:rounded-[20px]
          /* Mobile-ல் அகலத்தையும் உயரத்தையும் குறைத்துள்ளேன் */
          w-[65%] sm:w-[55%] md:w-[45%] lg:w-[30%]
          h-[280px] sm:h-[380px] md:h-[420px] lg:h-[440px]
          /* items-end கொடுத்ததால் content கீழே நகர்ந்துவிடும் */
          flex items-end shadow-2xl
        ">
          {/* Internal text content aligned to the bottom */}
          <p className="text-[10px] sm:text-xs md:text-sm lg:text-base leading-relaxed text-left">
            “ஸ்ரீ பிரம்மம் மாத இதழ்” என்பது ஆன்மீகம், சமயம், தத்துவம் மற்றும் மனித வாழ்க்கையின் உயர்ந்த அர்த்தங்களை எடுத்துரைக்கும் ஒரு சிறப்பு மாத இதழாகும். இந்த இதழ், வேதங்கள், உபநிஷத்துகள், புராணங்கள் மற்றும் சித்தர்கள் அருளிய ஞானங்களை எளிய தமிழில் வழங்குகிறது.
          </p>
        </div>

      </div>
    </div>
  );
}