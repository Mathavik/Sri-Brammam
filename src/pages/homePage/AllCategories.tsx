import React, { useEffect, useState } from "react";

type Category = {
  id: number;
  name: string;
  image: string;
};

const AllCategories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("https://pcstech.in/pcs_api/brammam/public/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.data);
      })
      .catch((err) => console.error("API Error:", err));
  }, []);

  return (
<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-48 md:mt-56 pb-12">      {/* Heading */}
      <div className="flex justify-center mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Arima'] text-center">
          All Categories
        </h1>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

        {categories.map((cat) => (
          <div
            key={cat.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >

            {/* Image */}
            <div className="w-full h-[220px] sm:h-[240px] md:h-[250px] overflow-hidden">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>

            {/* Title */}
            <div className="p-4">
              <h2 className="text-center text-lg sm:text-xl font-semibold font-['Arima']">
                {cat.name}
              </h2>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default AllCategories;