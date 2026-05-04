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
    <div className="bg-gray-100 p-6 rounded-xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Top Writers
        </h2>
        <button className="text-red-500 font-medium hover:underline flex items-center gap-1">
          See All <span>→</span>
        </button>
      </div>

      {/* Writers List */}
      <div className="flex items-center gap-10">
        {writers.map((writer) => (
          <div key={writer.id} className="flex items-center gap-4">
            {/* Avatar */}
            <img
              src={writer.image}
              alt={writer.name}
              className="w-14 h-14 rounded-full object-cover"
            />

            {/* Info */}
            <div>
              <h3 className="text-gray-900 font-semibold text-sm">
                {writer.name}
              </h3>
              <p className="text-gray-500 text-sm">{writer.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopWriters;