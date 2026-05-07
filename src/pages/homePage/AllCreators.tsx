import React, { useEffect, useState } from "react";

type Creator = {
  id: number;
  name: string;
  bio: string;
  profile_image: string;
};

const AllCreators: React.FC = () => {
  const [creators, setCreators] = useState<Creator[]>([]);

  useEffect(() => {
    fetch("https://pcstech.in/pcs_api/brammam/public/api/creators")
      .then((res) => res.json())
      .then((data) => {
        setCreators(data.data);
      })
      .catch((err) => console.error("API Error:", err));
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-48 md:mt-56 pb-12">

      {/* Heading */}
      <div className="flex justify-center mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Arima'] text-center">
          All Creators
        </h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {creators.map((creator) => (
          <div
            key={creator.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >

            {/* Image */}
            <div className="w-full h-[260px] overflow-hidden">
              <img
                src={creator.profile_image}
                alt={creator.name}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-5 text-center">

              <h2 className="text-xl font-semibold font-['Arima'] mb-2">
                {creator.name}
              </h2>

              <p className="text-gray-500 text-sm">
                {creator.bio}
              </p>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default AllCreators;