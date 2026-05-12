import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const descriptionText = `"ஸ்ரீ ப்ரம்மம் மாத இதழ்" என்பது ஆன்மிகம், சமயம், தத்துவம் மற்றும் மனித வாழ்க்கையின் உயர்ந்த அர்த்தங்களை எடுத்துரைக்கும் ஒரு சிறப்பு மாத இதழாகும். இந்த இதழ், வேதங்கள், உபநிஷத்துகள், புராணங்கள் மற்றும் சித்தர்கள் அருளிய ஞானங்களை எளிய தமிழில் வழங்குகிறது.`;

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 md:bg-white">
      <div className="flex flex-col lg:flex-row w-full">
        
        {/* LEFT SECTION - Logo & Description */}
        <div className="w-full lg:w-[35%] bg-gray-100 p-8 flex flex-col items-center lg:items-start justify-center">
          <div className="mb-6">
            <img
              src="/images/logo.png" 
              alt="logo"
              className="h-16 md:h-20 object-contain"
            />
          </div>

          <p
            className="font-bold text-black leading-relaxed mb-6 text-center lg:text-left max-w-md"
            style={{ 
              fontSize: '13px',
              fontFamily: "'Noto Sans Tamil', sans-serif"
            }}
          >
            {descriptionText}
          </p>

          <div className="flex gap-5 items-center justify-center lg:justify-start w-full mb-6 lg:mb-0">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src="/images/facebook.png" alt="FB" className="w-8 h-8 hover:opacity-80 transition-opacity" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <img src="/images/youtube.png" alt="YT" className="w-8 h-8 hover:opacity-80 transition-opacity" />
            </a>
          </div>
        </div>

        {/* RIGHT SECTION - Navigation & Contacts */}
        <div className="w-full lg:w-[65%] bg-red-700 text-white px-6 md:px-12 pt-10 pb-6 flex flex-col justify-between">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
            
            {/* Explore Section - Desktop-ல் மட்டும் சற்று தள்ளி (Margin Left) இருக்கும் */}
            <div className="flex flex-col items-center lg:items-start lg:ml-20">
              <h2
                className="font-semibold mb-4 text-2xl"
                style={{ fontFamily: "'Mukta Malar', sans-serif" }}
              >
                Explore
              </h2>
              <nav 
                className="flex flex-col space-y-3 items-center lg:items-start" 
                style={{ 
                  fontFamily: "'Noto Sans Tamil', sans-serif",
                  fontWeight: 600,
                  fontSize: "16px"
                }}
              >
                <Link to="/about" className="hover:underline">About</Link>
                <Link to="/issues" className="hover:underline">Issues</Link>
                <Link to="/writers" className="hover:underline">Writers</Link>
                <Link to="/reporters" className="hover:underline">Reporters</Link>
              </nav>
            </div>

            {/* Contacts Section */}
            <div className="flex flex-col items-center lg:items-start">
              <h2
                className="font-semibold mb-4 text-2xl"
                style={{ fontFamily: "'Mukta Malar', sans-serif" }}
              >
                Contacts
              </h2>
              <ul 
                className="space-y-4 flex flex-col items-center lg:items-start w-full text-center lg:text-left"
                style={{ 
                  fontFamily: "'Noto Sans Tamil', sans-serif",
                  fontWeight: 600,
                  fontSize: "15px"
                }}
              >
                {/* Email */}
                <li className="flex items-center gap-3">
                  <Mail size={18} className="flex-shrink-0" />
                  <span className="break-all">sribrahmamcbe@gmail.com</span>
                </li>

                {/* Updated Address */}
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-1 flex-shrink-0" />
                  <span className="leading-snug">
                    Sri Brahmam Monthly Magazine,<br />
                    Shop No. 4, Vasavi Towers,<br />
                    22/715, Raja Street,<br />
                    Coimbatore - 641 001
                  </span>
                </li>

                {/* Updated Phone */}
                <li className="flex items-center gap-3">
                  <Phone size={18} className="flex-shrink-0" />
                  <span>8825868187</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Section */}
<div 
  className="w-full border-t border-red-400/50 pt-6 mt-10 text-center lg:text-left"
>
  <p 
    className="text-[12px] sm:text-[14px] md:text-[16px] whitespace-nowrap overflow-hidden text-ellipsis"
    style={{ 
      fontFamily: "'Noto Sans Tamil', sans-serif",
      fontWeight: 600
    }}
  >
    © {new Date().getFullYear()} Sri Brammam. All Rights Reserved
  </p>
</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;