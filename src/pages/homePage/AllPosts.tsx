import React, { useEffect, useState } from "react";
import api from "../../api";

type Post = {
  id: number;
  title: string;
  image: string;
  pdf: string | null;
  read_time: string;
  category: {
    name: string;
  };
  creator: {
    name: string;
    profile_image: string;
  };
};

const AllPosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  useEffect(() => {
    api
      .get("/posts")
      .then((res: any) => {
        console.log(res.data.data);
        setPosts(res.data.data);
      })
      .catch((err: any) =>
        console.error("API Error:", err)
      );
  }, []);

  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-48 md:mt-56 pb-16">

        {/* Heading */}
        <div className="flex justify-center mb-12">

          <h1 className="text-3xl md:text-4xl font-bold font-['Arima'] text-center">
            All Posts
          </h1>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {posts.map((post) => (
            <div
              key={post.id}
              onClick={() => {
                if (post.pdf) {
                  setSelectedPdf(post.pdf);
                } else {
                  alert("PDF not uploaded");
                }
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
            >

              {/* Post Image */}
              <div className="h-[260px] overflow-hidden">

                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />

              </div>

              {/* Content */}
              <div className="p-5">

                {/* Creator */}
                <div className="flex items-center gap-3 mb-4">

                  <img
                    src={post.creator.profile_image}
                    alt={post.creator.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />

                  <span className="text-sm font-semibold text-gray-700">
                    {post.creator.name}
                  </span>

                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-gray-900 leading-snug mb-4 font-['Arima']">

                  {post.title}

                </h2>

                {/* Footer */}
                <div className="flex items-center gap-2 text-sm text-gray-500">

                  <span className="text-[#B22C23] font-medium">
                    {post.category.name}
                  </span>

                  <span>|</span>

                  <span>{post.read_time} Mins Read</span>

                </div>

              </div>

            </div>
          ))}

        </div>
      </div>

      {/* PDF POPUP */}
      {selectedPdf && (
        <div className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center p-4">

          <div className="relative w-full max-w-6xl h-[90vh] bg-white rounded-2xl overflow-hidden">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedPdf(null)}
              className="absolute top-4 right-4 z-50 bg-red-600 hover:bg-red-700 text-white w-10 h-10 rounded-full"
            >
              ✕
            </button>

            {/* PDF VIEWER */}
            <iframe
              src={selectedPdf}
              title="PDF Viewer"
              className="w-full h-full"
            />

          </div>

        </div>
      )}
    </>
  );
};

export default AllPosts;