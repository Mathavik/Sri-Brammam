import React from "react";

const SponsorsBar: React.FC = () => {
  return (
    <div className="w-full bg-white py-12 px-8 md:px-20 flex justify-center items-center">
      {/* Container: இடது மற்றும் வலது பக்கங்களில் கூடுதல் padding-உடன், 
        குறிப்பிட்ட அகலம் மற்றும் சாம்பல் நிற (F9F9F9) பேக்கிரவுண்டுடன் அமைக்கப்பட்டுள்ளது 
      */}
      <div className="max-w-7xl w-full mx-auto bg-[#F9F9F9] rounded-2xl py-10 px-12 md:px-20 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
        
        {/* Logo 1 - one.png */}
        <div className="flex justify-center items-center h-24 w-40">
          <img
            src="images/sponser/one.png" 
            alt="Logo 1"
            className="max-h-full max-w-full object-contain transition-transform hover:scale-105"
          />
        </div>

        {/* Logo 2 - two.png */}
        <div className="flex justify-center items-center h-24 w-40">
          <img
            src="images/sponser/two.png" 
            alt="Logo 2"
            className="max-h-full max-w-full object-contain transition-transform hover:scale-105"
          />
        </div>

        {/* Logo 3 - three.png */}
        <div className="flex justify-center items-center h-24 w-52">
          <img
            src="images/sponser/three.png" 
            alt="Logo 3"
            className="max-h-full max-w-full object-contain transition-transform hover:scale-105"
          />
        </div>

        {/* Logo 4 - four.png */}
        <div className="flex justify-center items-center h-34 w-44">
          <img
            src="images/sponser/four.png" 
            alt="Logo 4"
            className="max-h-full max-w-full object-contain transition-transform hover:scale-105"
          />
        </div>

      </div>
    </div>
  );
};

export default SponsorsBar;