import React, { useEffect, useState } from "react";
import api from "../../api";
import { Link } from "react-router-dom";
type Category = {
  id: number;
  name: string;
  image: string;
};

const AllCategories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    api
      .get("/categories")
      .then((res: any) => {
        setCategories(res.data.data);
      })
      .catch((err: any) => console.error("API Error:", err));
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-48 md:mt-56 pb-12">      {/* Heading */}
      {/* Updated Heading with Navigation Button */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Arima'] text-center">
          All Categories
        </h1>

        <Link
          to="/"
          className="bg-[#B22C23] text-white px-6 py-2 rounded-full font-semibold hover:bg-red-800 transition duration-300 shadow-md text-sm sm:text-base"
        >
          Go to Categories
        </Link>
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