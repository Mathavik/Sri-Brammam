import React from "react";

export default function HeroSectionAbout() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Hero Section */}
      <div className="w-full max-w-6xl mt-6 bg-white rounded-2xl overflow-hidden shadow-lg">
        <div className="relative h-[350px]">
          <img
            src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220"
            alt="temple"
            className="w-full h-full object-cover"
          />

          {/* Orange overlay */}
          <div className="absolute inset-0 bg-orange-500/70"></div>

          {/* Text */}
          <div className="absolute top-10 left-10 text-white max-w-lg">
            <h2 className="text-3xl font-bold mb-2">ஸ்ரீ பரமம்</h2>
            <p className="text-lg">“அறம் - அருள் - உங்கள் வழிகாட்டி”</p>
          </div>

          {/* Right Card */}
          <div className="absolute right-10 top-16 bg-red-700 text-white p-6 rounded-2xl w-72 shadow-lg">
            <p className="text-sm leading-relaxed">
              இந்த தளம் பக்தர்கள் மற்றும் சமூகத்திற்கான தகவல்களை வழங்கும் ஒரு தளம்.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 text-center py-6 border-t">
          <div>
            <p className="text-2xl font-bold text-red-600">27+</p>
            <p className="text-gray-600">ஆண்டுகள்</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-red-600">150+</p>
            <p className="text-gray-600">சேவைகள்</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-red-600">5000+</p>
            <p className="text-gray-600">வாசகர்கள்</p>
          </div>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="w-full max-w-6xl mt-8 bg-yellow-100 rounded-xl p-8 flex justify-between items-center">
        <div>
          <p className="text-sm text-red-500 uppercase">Get First Update</p>
          <h3 className="text-xl font-semibold">Get the news in front line by subscribe our latest updates</h3>
        </div>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-2 rounded-lg border w-64"
          />
          <button className="bg-red-600 text-white px-5 py-2 rounded-lg">Subscribe</button>
        </div>
      </div>
    </div>
  );
}
