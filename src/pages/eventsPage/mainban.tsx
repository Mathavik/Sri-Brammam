import React from "react";
import EventsPage from "./EventsPage";

export default function MainBan() {
  return (
    // overflow-x-hidden சேர்ப்பதன் மூலம் வலது பக்கத்தில் உள்ள தேவையற்ற கேப் நீக்கப்படும்
    <div className="w-full min-h-screen mt-20 md:mt-60 overflow-x-hidden">

      {/* Banner */}
      <div className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
        
        <img
          src="/images/herosection/background.png"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 to-transparent"></div>

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 sm:px-10 lg:px-16 text-white">
       

          <h1 className="max-w-2xl text-2xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            தமிழ் விழாக்கள் மற்றும் ஆன்மீக நிகழ்ச்சிகள்
          </h1>

          <p className="mt-4 max-w-xl text-xs leading-6 text-white/80 sm:text-base md:text-lg">
            உங்கள் நிகழ்ச்சிகளை இந்தப் பக்கத்தில் சிறப்பாக அறிமுகப்படுத்துகிறோம்.
          </p>

        </div>
      </div>

      {/* Events */}
      <div className="mt-14">
        <EventsPage />
      </div>

    </div>
  );
}