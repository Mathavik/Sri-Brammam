import React, { useEffect, useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../api";

const WriterPosts = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState<any[]>([]);

  // Modal state-gal
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get(`/posts?creator_id=${id}`);
        setPosts(response.data.data || []);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, [id]);

  // PDF URL-ai format seiya
  const getPdfSrc = () => {
    if (!selectedPdf) return "";
    return `${selectedPdf}#toolbar=1&navpanes=1&scrollbar=1`;
  };

  return (
    <>
      <div className="p-6 mt-32 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-10 text-center font-['Arima']">
          Writer Posts
        </h1>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Arima'] text-center">
            Writer Posts
          </h1>

          <Link
            to="/"
            className="bg-[#B22C23] text-white px-6 py-2 rounded-full font-semibold hover:bg-red-800 transition duration-300 shadow-md text-sm sm:text-base"
          >
            Go to Writer
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              onClick={() => {
                if (post.pdf) {
                  setSelectedPdf(post.pdf);
                  setSelectedTitle(post.title);
                } else {
                  alert("PDF not uploaded");
                }
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer border border-gray-100"
            >
              {/* Post Image */}
              <div className="h-[240px] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h2 className="text-xl font-bold text-gray-900 leading-snug mb-2 font-['Arima']">
                  {post.title}
                </h2>

                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                  {post.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-[#B22C23] font-semibold text-sm">
                    {post.creator?.name}
                  </span>
                  <span className="text-xs text-gray-400">
                    {post.read_time} Mins Read
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PDF MODAL (Same as AllPosts) */}
      {selectedPdf && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-0 md:p-4">
          <div className="relative w-full h-full md:w-[95vw] md:h-[95vh] bg-[#323639] md:rounded-lg overflow-hidden flex flex-col">

            {/* TOP BAR */}
            <div className="w-full bg-[#323639] text-white p-3 flex justify-between items-center px-6">
              <span className="text-sm md:text-base font-medium truncate">
                {selectedTitle}
              </span>
              <button
                onClick={() => {
                  setSelectedPdf(null);
                  setSelectedTitle("");
                }}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-md text-sm font-bold transition-colors"
              >
                Close
              </button>
            </div>

            {/* PDF VIEWER */}
            <div className="flex-grow w-full h-full bg-white">
              <iframe
                src={getPdfSrc()}
                title="PDF Viewer"
                className="w-full h-full border-none"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WriterPosts;