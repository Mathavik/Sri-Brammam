import React from "react";

const SponsorsBar: React.FC = () => {
  return (
    <div className="w-full bg-[#F9F9F9] py-16 border-t border-gray-100 flex justify-center items-center">
      {/* 
          Container: உங்கள் லோகோக்களின் அகலத்திற்கு ஏற்ப (max-w-7xl) 
          மற்றும் சீரான இடைவெளிக்கு (justify-between) அமைக்கப்பட்டுள்ளது 
      */}
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between px-10">
        
        {/* Logo 1 - one.png */}
        <img
          src="images/sponser/one.png" 
          alt="Logo 1"
          style={{ width: "133px", height: "134px" }}
          className="object-contain transition-transform hover:scale-105"
        />

        {/* Logo 2 - two.png */}
        <img
          src="images/sponser/two.png" 
          alt="Logo 2"
          style={{ width: "167px", height: "111px" }}
          className="object-contain transition-transform hover:scale-105"
        />

        {/* Logo 3 - three.png */}
        <img
          src="images/sponser/three.png" 
          alt="Logo 3"
          style={{ width: "371px", height: "122px" }}
          className="object-contain transition-transform hover:scale-105"
        />

        {/* Logo 4 - four.png */}
        <img
          src="images/sponser/four.png" 
          alt="Logo 4"
          style={{ width: "216px", height: "216px" }}
          className="object-contain transition-transform hover:scale-105"
        />

      </div>
    </div>
  );
};

export default SponsorsBar;