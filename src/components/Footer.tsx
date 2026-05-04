import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

// குறிப்பு படத்தில் உள்ள சரியான தமிழ் உரை
  const descriptionText = `"ஸ்ரீ பிரம்மம் மாத இதழ்" என்பது ஆன்மிகம், சமயம், தத்துவம் மற்றும் மனித வாழ்க்கையின் உயர்ந்த அர்த்தங்களை எடுத்துரைக்கும் ஒரு சிறப்பு மாத இதழாகும். இந்த இதழ், வேதங்கள், உபநிஷத்துகள், புராணங்கள் மற்றும் சித்தர்கள் அருளிய ஞானங்களை எளிய தமிழில் வழங்குகிறது.`;

const Footer: React.FC = () => {
  return (
    <footer className="w-full">
      <div className="flex w-full">
        {/* LEFT SECTION (White) */}
        <div className="w-[35%] bg-gray-100 p-8 flex flex-col items-start justify-center">
          {/* Logo */}
          <div className="mb-6 self-center w-full flex justify-center">
            <img
              src="/images/logo.png" // உங்கள் லோகோ பாத்
              alt="logo"
              className="h-20" // லோகோ அளவை சிறிது கூட்டியுள்ளோம்
            />
          </div>

          {/* Description - bold, dark black, left-aligned, and 'snug' leading for tighter alignment */}
          <p
  className="font-bold text-black leading-normal mb-6 pl-4 pr-2"
  style={{ fontSize: '13px' }} // 10px அல்லது உங்களுக்குத் தேவையான அளவுக்கு மாற்றிக்கொள்ளலாம்
>
  {descriptionText}
</p>

          {/* Social Icons - correct alignment with the text */}
          <div className="flex gap-5 text-red-700 text-xl pl-4">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>

        {/* RIGHT SECTION (Red) */}
        <div className="w-[65%] bg-red-700 text-white px-10 pt-6 pb-6">
          <div className="grid grid-cols-3 gap-x-10">
            {/* Explore */}
            <div>
              <h2 className="font-semibold text-lg mb-2">Explore</h2>
              <ul className="space-y-1 text-sm">
                <li>About</li>
                <li>Issues</li>
                <li>Community</li>
                <li>Writers</li>
                <li>Reporters</li>
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h2 className="font-semibold text-lg mb-2">Useful Link</h2>
              <ul className="space-y-1 text-sm">
                <li>Blog</li>
                <li>Print Media</li>
                <li>FAQ</li>
                <li>Carrer</li>
              </ul>
            </div>

            {/* Contacts */}
            <div>
              <h2 className="font-semibold text-lg mb-2">Contacts</h2>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Mail size={16} className="mt-1" />
                  <span>sribrahmmam@gmail.com</span>
                </li>

                {/* முகவரிச் சீரமைப்பு */}
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                  <span className="leading-tight">
                    62 Avinashi Road Neelambur, Village,
                    <br />
                    Coimbatore, Tamil Nadu 641062, India
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <Phone size={16} className="mt-1" />
                  <span>044 2446 3550, +91 86558 85568</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider and Copyright */}
    <div className="border-t border-red-400 mt-6 pt-2 text-sm text-left pl-0">
  © 2026 Sri Brammam. All Rights Reserved
</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;