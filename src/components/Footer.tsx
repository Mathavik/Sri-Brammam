import React from "react";
import { Mail, MapPin, Phone, Facebook, Youtube } from "lucide-react";

// குறிப்பு படத்தில் உள்ள சரியான தமிழ் உரை
const descriptionText = `"ஸ்ரீ பிரம்மம் மாத இதழ்" என்பது ஆன்மிகம், சமயம், தத்துவம் மற்றும் மனித வாழ்க்கையின் உயர்ந்த அர்த்தங்களை எடுத்துரைக்கும் ஒரு சிறப்பு மாத இதழாகும். இந்த இதழ், வேதங்கள், உபநிஷத்துகள், புராணங்கள் மற்றும் சித்தர்கள் அருளிய ஞானங்களை எளிய தமிழில் வழங்குகிறது.`;

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 md:bg-white">
      {/* மொபைல் மற்றும் டெஸ்க்டாப் இரண்டிலும் இடதுபுறமாக அமையுமாறு அமைக்கப்பட்டுள்ளது */}
      <div className="flex flex-col md:flex-row w-full">
        
        {/* LEFT SECTION */}
        <div className="w-full md:w-[35%] bg-gray-100 p-6 md:p-8 flex flex-col items-start justify-center">
          {/* Logo */}
          <div className="mb-6 w-full flex justify-start">
            <img
              src="/images/logo.png" // உங்கள் லோகோ பாத்
              alt="logo"
              className="h-16 md:h-20 object-contain"
            />
          </div>

          {/* Description */}
          <p
            className="font-bold text-black leading-normal mb-6 text-left px-0"
            style={{ 
              fontSize: '13px',
              fontFamily: "'Noto Sans Tamil', sans-serif"
            }}
          >
            {descriptionText}
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 text-red-700 text-xl justify-start w-full mb-6 md:mb-0 pl-0">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cursor-pointer hover:opacity-80"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cursor-pointer hover:opacity-80"
            >
              <Youtube size={24} />
            </a>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full md:w-[65%] bg-red-700 text-white px-6 md:px-10 pt-8 pb-6 flex flex-col justify-between">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-x-10 mb-8 md:mb-0">
            
            {/* Explore */}
            <div className="flex flex-col items-start">
              <h2
                className="font-semibold mb-3 border-b border-red-400/30 pb-2 md:border-none md:pb-0 text-left w-full md:w-auto"
                style={{
                  fontFamily: "'Mukta Malar', sans-serif",
                  fontWeight: 600,
                  fontSize: "24px",
                  lineHeight: "38px",
                  letterSpacing: "0%",
                }}
              >
                Explore
              </h2>
              <ul 
                className="space-y-2 text-left" 
                style={{ 
                  fontFamily: "'Noto Sans Tamil', sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "28px",
                  letterSpacing: "0%"
                }}
              >
                <li className="cursor-pointer hover:underline">About</li>
                <li className="cursor-pointer hover:underline">Issues</li>
                <li className="cursor-pointer hover:underline">Community</li>
                <li className="cursor-pointer hover:underline">Writers</li>
                <li className="cursor-pointer hover:underline">Reporters</li>
              </ul>
            </div>

            {/* Useful Links */}
            <div className="flex flex-col items-start">
              <h2
                className="font-semibold mb-3 border-b border-red-400/30 pb-2 md:border-none md:pb-0 text-left w-full md:w-auto"
                style={{
                  fontFamily: "'Mukta Malar', sans-serif",
                  fontWeight: 600,
                  fontSize: "24px",
                  lineHeight: "38px",
                  letterSpacing: "0%",
                }}
              >
                Useful Link
              </h2>
              <ul 
                className="space-y-2 text-left"
                style={{ 
                  fontFamily: "'Noto Sans Tamil', sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "28px",
                  letterSpacing: "0%"
                }}
              >
                <li className="cursor-pointer hover:underline">Blog</li>
                <li className="cursor-pointer hover:underline">Print Media</li>
                <li className="cursor-pointer hover:underline">FAQ</li>
                <li className="cursor-pointer hover:underline">Carrer</li>
              </ul>
            </div>

            {/* Contacts */}
            <div>
              <h2
                className="font-semibold text-lg mb-3 border-b border-red-400/30 pb-2 md:border-none md:pb-0 text-left"
                style={{
                  fontFamily: "'Mukta Malar', sans-serif",
                  fontWeight: 600,
                  fontSize: "24px",
                  lineHeight: "38px",
                  letterSpacing: "0%",
                }}
              >
                Contacts
              </h2>
              <ul 
                className="space-y-3 text-sm flex flex-col items-start w-full"
                style={{ 
                  fontFamily: "'Noto Sans Tamil', sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "28px",
                  letterSpacing: "0%"
                }}
              >
                <li className="flex items-center justify-start gap-2 text-left w-full">
                  <Mail size={16} className="mt-1 flex-shrink-0" />
                  <span className="break-all">sribrahmmam@gmail.com</span>
                </li>

                <li className="flex items-start justify-start gap-2 text-left w-full">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                  <span className="leading-tight">
                    62 Avinashi Road Neelambur, Village,
                    <br />
                    Coimbatore, Tamil Nadu 641062, India
                  </span>
                </li>

                <li className="flex items-center justify-start gap-2 text-left w-full">
                  <Phone size={16} className="mt-1 flex-shrink-0" />
                  <span className="break-all">044 2446 3550, +91 86558 85568</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider and Copyright */}
          <div 
            className="border-t border-red-400 pt-6 text-xs md:text-sm text-left mt-4"
            style={{ 
              fontFamily: "'Noto Sans Tamil', sans-serif",
              fontSize: "18px",
              fontWeight: 600
            }}
          >
            © 2026 Sri Brammam. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;