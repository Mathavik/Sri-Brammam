import React from "react";

type Category = {
  title: string;
  image: string;
};

const categories: Category[] = [
  { title: "லைஃப்ஸ்டைல்", image: "/impages/img1.png" },
  { title: "சுற்றுலா", image: "/images/group.jpg" },
  { title: "அரசியல்", image: "/images/parliament.jpg" },
  { title: "ஹெல்த்கேர்", image: "/images/yoga.jpg" },
  { title: "பூத்", image: "/images/friends.jpg" },
];

const FeaturedCategories: React.FC = () => {
  return (
    <div className="w-full px-6 md:px-12 py-8 bg-white">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          Featured Catagories
        </h2>
        <span className="text-orange-500 text-sm md:text-base cursor-pointer">
          See All →
        </span>
      </div>

      {/* Cards */}
      <div className="flex gap-4 md:gap-6 overflow-x-auto">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="relative min-w-[160px] md:min-w-[220px] h-[200px] md:h-[260px] rounded-2xl overflow-hidden flex-shrink-0 group cursor-pointer"
          >
            {/* IMAGE ONLY */}
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />

            {/* TEXT (no overlay) */}
            <div className="absolute bottom-3 left-3 text-white text-sm md:text-lg font-semibold drop-shadow-lg">
              {cat.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;