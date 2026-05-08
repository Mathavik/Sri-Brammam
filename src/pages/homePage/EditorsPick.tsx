import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
type EditorPick = {
  id: number;
  title: string;
  image: string;
  read_time: string;
  category: {
    name: string;
  };
  creator: {
    name: string;
    profile_image: string;
  };
};

const EditorsPick: React.FC = () => {
  const [editorsPicks, setEditorsPicks] = useState<EditorPick[]>([]);
const navigate = useNavigate();
  // API Fetch
useEffect(() => {
  api
    .get("/editors-picks")
    .then((res: any) => {
      setEditorsPicks(res.data.data);
    })
    .catch((err: any) =>
      console.error("API Error:", err)
    );
}, []);

if (editorsPicks.length === 0) {
  return null;
}

return (

  
<div className="w-full bg-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex justify-between items-center mb-10 flex-col md:flex-row gap-4 md:gap-0">

          <h2
            className="text-3xl font-bold text-gray-800 text-center md:text-left w-full md:w-auto"
            style={{ fontFamily: "Arima, serif" }}
          >
            Editor’s Pick
          </h2>

          <span
  onClick={() => navigate("/all-posts")}
  className="font-['Arima'] text-[18px] md:text-[26px] leading-[28px] md:leading-[38px] cursor-pointer hover:underline flex items-center gap-2 justify-center"
  style={{ color: "#B22C23", fontWeight: 600 }}
>
  See All &rarr;
</span>

        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

          {editorsPicks.map((item, index) => {

            // Center card special design
            const isCenter = index === 1;

            return (
              <div key={item.id}>

                {/* CENTER CARD */}
                {isCenter ? (
                  <div className="relative h-[380px] md:h-[480px] rounded-2xl overflow-hidden shadow-xl text-white flex flex-col justify-end p-6 group">

                    {/* Background Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover z-0"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#B12A1C] via-[#B12A1C]/80 to-transparent z-10"></div>

                    <div className="relative z-20">

                      {/* Creator */}
                      <div className="flex items-center gap-2 mb-4">

                        <img
                          src={item.creator.profile_image}
                          className="w-6 h-6 rounded-full border border-white"
                          alt={item.creator.name}
                        />

                        <span className="text-sm font-bold">
                          {item.creator.name}
                        </span>

                      </div>

                      {/* Title */}
                      <h3 className="text-3xl font-bold leading-tight mb-4">
                        {item.title}
                      </h3>

                      {/* Footer */}
                      <div className="flex items-center gap-2 text-sm opacity-90 font-medium border-t border-white/20 pt-4">

                        <span>{item.category.name}</span>

                        <span>|</span>

                        <span>{item.read_time} Mins Read</span>

                      </div>

                    </div>
                  </div>
                ) : (
                  /* SIDE CARDS */
                  <div className="flex flex-col">

                    {/* Image */}
                    <div className="h-[280px] rounded-2xl overflow-hidden mb-4 shadow-sm border border-gray-100">

                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />

                    </div>

                    {/* Creator */}
                    <div className="flex items-center gap-2 mb-3">

                      <img
                        src={item.creator.profile_image}
                        className="w-6 h-6 rounded-full"
                        alt={item.creator.name}
                      />

                      <span className="text-sm font-bold text-gray-700">
                        {item.creator.name}
                      </span>

                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-3">
                      {item.title}
                    </h3>

                    {/* Footer */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">

                      <span className="text-red-600">
                        {item.category.name}
                      </span>

                      <span>|</span>

                      <span>{item.read_time} Mins Read</span>

                    </div>

                  </div>
                )}

              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default EditorsPick;