import React from "react";
import { Link } from "react-router-dom"; // Link-ஐ இம்போர்ட் செய்துள்ளோம்
import { Mail, MapPin, Phone } from "lucide-react";

// குறிப்பு படத்தில் உள்ள சரியான தமிழ் உரை
const descriptionText = `"ஸ்ரீ பிரம்மம் மாத இதழ்" என்பது ஆன்மிகம், சமயம், தத்துவம் மற்றும் மனித வாழ்க்கையின் உயர்ந்த அர்த்தங்களை எடுத்துரைக்கும் ஒரு சிறப்பு மாத இதழாகும். இந்த இதழ், வேதங்கள், உபநிஷத்துகள், புராணங்கள் மற்றும் சித்தர்கள் அருளிய ஞானங்களை எளிய தமிழில் வழங்குகிறது.`;

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 md:bg-white">
      {/* மொபைல் மற்றும் டேப்லெட்டில் Column ஆகவும், lg (Desktop) திரையில் மட்டும் Row ஆகவும் மாறும் */}
      <div className="flex flex-col lg:flex-row w-full">
        
        {/* LEFT SECTION */}
        <div className="w-full lg:w-[30%] bg-gray-100 p-6 md:p-8 flex flex-col items-center md:items-start justify-center">
          {/* Logo */}
          <div className="mb-6 w-full flex justify-center md:justify-start">
            <img
              src="/images/logo.png" // உங்கள் லோகோ பாத்
              alt="logo"
              className="h-16 md:h-20 object-contain"
            />
          </div>

          {/* Description */}
          <p
            className="font-bold text-black leading-normal mb-6 text-center md:text-left px-2"
            style={{ 
              fontSize: '13px',
              fontFamily: "'Noto Sans Tamil', sans-serif"
            }}
          >
            {descriptionText}
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 items-center justify-center md:justify-start w-full mb-6 md:mb-0 px-2">
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src="/images/facebook.png" 
                alt="Facebook"
                className="object-contain cursor-pointer hover:opacity-80" 
                style={{ width: "30px", height: "32px" }} 
              />
            </a>
            <a 
              href="https://www.youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src="/images/youtube.png" 
                alt="YouTube"
                className="object-contain cursor-pointer hover:opacity-80" 
                style={{ width: "32px", height: "32px" }} 
              />
            </a>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full lg:w-[70%] bg-red-700 text-white px-6 md:px-10 pt-8 pb-6 flex flex-col justify-between">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-x-4 mb-8 md:mb-0">
            
            {/* Explore */}
            <div className="flex flex-col items-center md:items-start">
              <h2
                className="font-semibold mb-3 border-b border-red-400/30 pb-2 md:border-none md:pb-0 text-center md:text-left w-full md:w-auto"
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
              <nav 
                className="flex flex-col space-y-2 text-center md:text-left" 
                style={{ 
                  fontFamily: "'Noto Sans Tamil', sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "28px",
                  letterSpacing: "0%"
                }}
              >
                <Link to="/about" className="hover:underline cursor-pointer">About</Link>
                <Link to="/issues" className="hover:underline cursor-pointer">Issues</Link>
                <Link to="/community" className="hover:underline cursor-pointer">Community</Link>
                <Link to="/writers" className="hover:underline cursor-pointer">Writers</Link>
                <Link to="/reporters" className="hover:underline cursor-pointer">Reporters</Link>
              </nav>
            </div>

            {/* Useful Links */}
            <div className="flex flex-col items-center md:items-start">
              <h2
                className="font-semibold mb-3 border-b border-red-400/30 pb-2 md:border-none md:pb-0 text-center md:text-left w-full md:w-auto"
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
              <nav 
                className="flex flex-col space-y-2 text-center md:text-left"
                style={{ 
                  fontFamily: "'Noto Sans Tamil', sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "28px",
                  letterSpacing: "0%"
                }}
              >
                <Link to="/blog" className="hover:underline cursor-pointer">Blog</Link>
                <Link to="/print-media" className="hover:underline cursor-pointer">Print Media</Link>
                <Link to="/faq" className="hover:underline cursor-pointer">FAQ</Link>
                <Link to="/career" className="hover:underline cursor-pointer">Carrer</Link>
              </nav>
            </div>

            {/* Contacts */}
            <div className="flex flex-col items-center md:items-start">
              <h2
                className="font-semibold text-lg mb-3 border-b border-red-400/30 pb-2 md:border-none md:pb-0 text-center md:text-left"
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
                className="space-y-3 text-sm flex flex-col items-center md:items-start w-full"
                style={{ 
                  fontFamily: "'Noto Sans Tamil', sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "28px",
                  letterSpacing: "0%"
                }}
              >
                <li className="flex items-center justify-center md:justify-start gap-2 text-center md:text-left w-full">
                  <Mail size={16} className="mt-1 flex-shrink-0" />
                  <span className="break-all">sribrahmmam@gmail.com</span>
                </li>

                {/* முகவரி 2 வரிகளில் சீரமைப்பு */}
                <li className="flex items-start justify-center md:justify-start gap-2 text-center md:text-left w-full">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <span className="leading-tight text-left">
                    62 Avinashi Road Neelambur, Village,
                    <br />
                    Coimbatore, Tamil Nadu 641062, India
                  </span>
                </li>

                {/* மொபைல் எண்கள் 1 வரியில் */}
                <li className="flex items-center justify-center md:justify-start gap-2 text-center md:text-left w-full">
                  <Phone size={16} className="mt-1 flex-shrink-0" />
                  <span className="whitespace-nowrap">044 2446 3550, +91 86558 85568</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider and Copyright */}
   <div 
  className="border-t border-red-400 pt-6 text-[16px] md:text-[18px] text-center md:text-left mt-4 whitespace-nowrap"
  style={{ 
    fontFamily: "'Noto Sans Tamil', sans-serif",
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