export default function Ban() {
  return (
    <div className="w-full min-h-screen mt-28 md:mt-60 bg-[#FFF9F6]">



      {/* Main Banner Container */}
      <div className="relative w-full h-[320px] sm:h-[350px] md:h-[400px] lg:h-[450px] mt-16 sm:mt-0">

        {/* Banner Image & Overlay Gradient */}
        <div className="absolute inset-0">
          <img
            src="/images/herosection/background.png"
            alt="background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/70 to-transparent"></div>
        </div>

       

      </div>
      
    </div>
    
  );
}