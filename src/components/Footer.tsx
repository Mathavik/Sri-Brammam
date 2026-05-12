import React from "react";
import { Link } from "react-router-dom";

import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import useGlobalConfig from "../hooks/useGlobalConfig";

const descriptionText = `"ஸ்ரீ ப்ரம்மம் மாத இதழ்" என்பது ஆன்மிகம், சமயம், தத்துவம் மற்றும் மனித வாழ்க்கையின் உயர்ந்த அர்த்தங்களை எடுத்துரைக்கும் ஒரு சிறப்பு மாத இதழாகும்.`;

const Footer: React.FC = () => {

  const { config } =
    useGlobalConfig();

  return (
    <footer className="w-full bg-gray-100 md:bg-white">

      <div className="flex flex-col lg:flex-row w-full">

        {/* LEFT */}
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
              fontSize: "13px",
              fontFamily:
                "'Noto Sans Tamil', sans-serif",
            }}
          >
            {descriptionText}
          </p>

          {/* SOCIAL */}
          <div className="flex gap-5 items-center">

            <a
              href={
                config?.facebook_url ||
                "#"
              }
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/facebook.png"
                alt="facebook"
                className="w-8 h-8"
              />
            </a>

            <a
              href={
                config?.youtube_url ||
                "#"
              }
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/youtube.png"
                alt="youtube"
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-[65%] bg-red-700 text-white px-6 md:px-12 pt-10 pb-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Explore */}
            <div className="flex flex-col items-center lg:items-start lg:ml-20">

              <h2 className="font-semibold mb-4 text-2xl">
                Explore
              </h2>

              <nav className="flex flex-col space-y-3">

                <Link to="/about">
                  About
                </Link>

                <Link to="/issues">
                  Issues
                </Link>

                <Link to="/reporters">
                  Reporters
                </Link>

              </nav>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center lg:items-start">

              <h2 className="font-semibold mb-4 text-2xl">
                Contacts
              </h2>

              <ul className="space-y-4">

                <li className="flex items-center gap-3">
                  <Mail size={18} />
                  <span>
                    sribrahmamcbe@gmail.com
                  </span>
                </li>

                <li className="flex items-start gap-3">

                  <MapPin size={18} />

                  <span>
                    Sri Brahmam Monthly Magazine,
                    <br />
                    Coimbatore - 641001
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <Phone size={18} />
                  <span>
                    8825868187
                  </span>
                </li>

              </ul>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="border-t border-red-400/50 pt-6 mt-10">

            <p className="text-sm">
              © {new Date().getFullYear()} Sri Brahmam. All Rights Reserved
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;