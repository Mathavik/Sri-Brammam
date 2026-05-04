import React from "react";

// ✅ Import images properly

type Category = {
  title: string;
  image: string;   // main image
  bgImage: string; // extra background image
};

const categories: Category[] = [
  { title: "லைஃப்ஸ்டைல்", image: "/images/img1.png", bgImage: "/images/bg1.png" },
  { title: "சமூகம்", image: "/images/img2.png", bgImage: "/images/bg2.png" },
  { title: "அரசியல்", image: "/images/img3.png", bgImage: "/images/bg3.png" },
  { title: "ஹெல்த்கேர்", image: "/images/img4.png", bgImage: "/images/bg4.png" },
  { title: "யூத்", image: "/images/img5.png", bgImage: "/images/bg5.png" },
];

const FeaturedCategories: React.FC = () => {
  return (
    <div className="w-full px-6 md:px-12 py-8 bg-white">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
<h2 className="font-tau text-[24px] leading-[38px] font-bold text-gray-800">          Featured Categories
        </h2>
        <span className="text-orange-500 text-sm md:text-base cursor-pointer">
          See All →
        </span>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
  {categories.map((cat, index) => (
    <div
      key={index}
      className="relative w-full h-[200px] md:h-[260px] rounded-2xl overflow-hidden group cursor-pointer"
    >
      <img
        src={cat.bgImage}
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30"></div>

      <img
        src={cat.image}
        alt={cat.title}
        className="relative w-full h-full object-cover group-hover:scale-105 transition duration-300"
      />

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