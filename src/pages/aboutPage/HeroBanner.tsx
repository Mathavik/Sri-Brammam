export default function HeroBanner() {
  return (
    <div className="w-full">
      
      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[420px]">
        
        {/* Image */}
        <img
          src="/images/about/aboutbanner.png"
          alt="Temple"
          className="w-full h-full object-cover"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/90 via-orange-500/70 to-orange-900/80"></div>

        {/* Left Text */}
        <div className="absolute top-6 left-4 sm:top-8 sm:left-8 md:top-12 md:left-16 text-white max-w-[90%] sm:max-w-md md:max-w-lg">
          
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
            ஸ்ரீ பரமம்
          </h2>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg">
            “ஆன்மீகம் · அறம் · அமைதி – உங்கள் வழிகாட்டி”
          </p>
        </div>

        {/* Right Card */}
        <div className="
          absolute 
          right-4 top-20 
          sm:right-8 sm:top-20 
          md:right-16 md:top-24 
          bg-red-700 text-white 
          p-3 sm:p-4 md:p-6 
          rounded-xl md:rounded-2xl 
          w-[75%] sm:w-72 md:w-80
          shadow-lg
        ">
          <p className="text-xs sm:text-sm leading-relaxed">
            ஸ்ரீ பரமம் ஒரு ஆன்மீக தளம். இதில் பக்தர்கள் மற்றும்
            சமூகத்திற்கான தகவல்கள் வழங்கப்படுகின்றன.
          </p>
        </div>

      </div>
    </div>
  );
}