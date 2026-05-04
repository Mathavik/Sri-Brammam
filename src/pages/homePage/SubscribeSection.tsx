import React from "react";

const SubscribeSection: React.FC = () => {
  return (
    <div className="w-full bg-[#E6DDC9] py-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-10">
        
        {/* LEFT TEXT */}
        <div>
          <p className="text-red-600 text-xs tracking-widest mb-3">
            GET FIRST UPDATE
          </p>

          <h2 className="text-3xl font-semibold text-black leading-snug">
            Get the news in front line <br />
            by subscribe our latest updates
          </h2>
        </div>

        {/* RIGHT INPUT + BUTTON */}
        <div className="flex items-center">
          
          <input
            type="email"
            placeholder="Your email"
            className="w-[320px] h-[50px] px-4 bg-gray-200 outline-none text-sm"
          />

          <button className="h-[50px] px-6 bg-[#B12A1C] text-white text-sm font-medium">
            Subscribe
          </button>

        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;