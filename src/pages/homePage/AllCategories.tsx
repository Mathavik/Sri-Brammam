import React, { useEffect, useState } from "react";
import api from "../../api";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate

type Category = {
  id: number;
  name: string;
  image: string;
};

const AllCategories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  
  const navigate = useNavigate(); // Initialize navigate

  // =========================
  // Fetch Categories + Cache
  // =========================
  useEffect(() => {
    let isMounted = true;

    const fetchCategories = async () => {
      try {
        // Cached Data
        const cachedData = localStorage.getItem("allCategories");

        if (cachedData) {
          setCategories(JSON.parse(cachedData));
          setLoading(false);
        }

        const res = await api.get("/categories");

        if (isMounted) {
          setCategories(res.data.data);

          // Save Cache
          localStorage.setItem(
            "allCategories",
            JSON.stringify(res.data.data)
          );

          setLoading(false);
        }
      } catch (err) {
        console.error("API Error:", err);
        setLoading(false);
      }
    };

    fetchCategories();

    return () => {
      isMounted = false;
    };
  }, []);

  // =========================
  // Loading Skeleton
  // =========================
  if (loading) {
    return (
<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2 md:mt-56 pb-12">          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
          <div className="w-52 h-10 rounded bg-gray-200 animate-pulse"></div>
          <div className="w-36 h-10 rounded-full bg-gray-200 animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl overflow-hidden shadow-md"
            >
              <div className="w-full h-[220px] sm:h-[240px] md:h-[250px] bg-gray-200 animate-pulse"></div>
              <div className="p-4 flex justify-center">
                <div className="w-28 h-5 rounded bg-gray-200 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (categories.length === 0) return null;

  return (
<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-28 md:mt-56 pb-12">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Arima'] text-center">
          All Categories
        </h1>

        <Link
          to="/"
          className="bg-[#B22C23] text-white px-6 py-2 rounded-full font-semibold hover:bg-red-800 transition duration-300 shadow-md text-sm sm:text-base"
        >
          Go Back Home
        </Link>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            // Added navigate on click
            onClick={() => navigate(`/category-posts/${cat.id}`)}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group cursor-pointer"
          >
            {/* Image */}
            <div className="w-full h-[220px] sm:h-[240px] md:h-[250px] overflow-hidden">
              <img
                src={cat.image}
                alt={cat.name}
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Title */}
            <div className="p-4">
              <h2 className="text-center text-lg sm:text-xl font-semibold font-['Arima'] line-clamp-1 mt-10">
                {cat.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(AllCategories);