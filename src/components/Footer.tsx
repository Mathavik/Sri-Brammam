import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full">
      <div className="flex w-full">
        
        {/* LEFT SECTION (White) */}
        <div className="w-[30%] bg-gray-100 px-6 py-8">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/logo.png" // 🔁 replace with your logo
              alt="logo"
              className="h-14"
            />
            <div>
              <h1 className="text-red-700 font-bold text-lg leading-none">
                ஸ்ரீ பிரம்மம்
              </h1>
              <p className="text-xs text-gray-600">மக இதழ்</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs text-gray-700 leading-relaxed mb-4">
            "ஸ்ரீ பிரம்மம் மக இதழ்" என்பது ஆன்மிகம், சமயம், சமூக மற்றும்
            மனிதநேயம் சார்ந்த தகவல்களை வழங்கும் ஒரு இதழாகும். இதில் பக்தி,
            வேதம், தத்துவம் மற்றும் வாழ்க்கை முறைகள் பற்றிய கட்டுரைகள்
            வெளியாகின்றன.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 text-red-600">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>

        {/* RIGHT SECTION (Red) */}
        <div className="w-[70%] bg-red-700 text-white px-10 py-8">
          <div className="grid grid-cols-3 gap-10">
            
            {/* Explore */}
            <div>
              <h2 className="font-semibold text-lg mb-4">Explore</h2>
              <ul className="space-y-2 text-sm">
                <li>About</li>
                <li>Issues</li>
                <li>Community</li>
                <li>Writers</li>
                <li>Reporters</li>
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h2 className="font-semibold text-lg mb-4">Useful Link</h2>
              <ul className="space-y-2 text-sm">
                <li>Blog</li>
                <li>Print Media</li>
                <li>FAQ</li>
                <li>Carrer</li>
              </ul>
            </div>

            {/* Contacts */}
            <div>
              <h2 className="font-semibold text-lg mb-4">Contacts</h2>
              <ul className="space-y-3 text-sm">
                
                <li className="flex items-start gap-2">
                  <Mail size={16} className="mt-1" />
                  <span>sribrahmmam@gmail.com</span>
                </li>

                <li className="flex items-start gap-2">
                  <MapPin size={16} className="mt-1" />
                  <span>
                    62 Avinashi Road Neelambur, Village,
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

          {/* Divider */}
          <div className="border-t border-red-400 mt-8 pt-4 text-sm">
            © 2026 Sri Brammam. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;