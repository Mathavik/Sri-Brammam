import React from "react";

type Writer = {
  id: number;
  name: string;
  role: string;
  image: string;
};

const writers: Writer[] = [
  {
    id: 1,
    name: "நிர்மலா குப்தா",
    role: "Top Writers",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "வைஷ்ணவி",
    role: "Top Writers",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "சுதர்சன்",
    role: "Top Writers",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "தண்டபாணி",
    role: "Top Writers",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

const TopWriters: React.FC = () => {
  return (
    <div className="w-full bg-white px-10 py-8 rounded-2xl ">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          Top Writers
        </h2>

        <button className="text-red-500 font-medium flex items-center gap-2">
          See All <span className="text-lg">→</span>
        </button>
      </div>

      {/* Writers */}
      <div className="flex items-center justify-between">
        {writers.map((writer) => (
          <div
            key={writer.id}
            className="flex items-center gap-4 min-w-[220px]"
          >
            {/* Avatar */}
            <img
              src={writer.image}
              alt={writer.name}
              className="w-16 h-16 rounded-full object-cover"
            />

            {/* Text */}
            <div>
              <h3 className="text-base font-semibold text-gray-900">
                {writer.name}
              </h3>
              <p className="text-sm text-gray-500">
                {writer.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopWriters;