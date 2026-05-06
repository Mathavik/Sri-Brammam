import React from "react";
import EventsPage from "./EventsPage";

export default function MainBan() {
  return (
    // pt-24 kku bathila pt-16 use panniruken, ithu gap-ah kuraikum
    <div className="w-full pt-6"> 

      {/* Banner */}
      <div className="relative w-full h-[320px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
        
        <img
          src="/images/herosection/background.png"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 to-transparent"></div>

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 sm:px-10 lg:px-16 text-white">
          
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#F4D2BF]">
            Events
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
            தமிழ் விழாக்கள் மற்றும் ஆன்மீக நிகழ்ச்சிகள்
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
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