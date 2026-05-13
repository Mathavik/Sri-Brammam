import React, {
  useEffect,
  useState,
  useCallback,
} from "react";

import { Link, useParams } from "react-router-dom";

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

const CategoryPosts: React.FC = () => {
  const { id } = useParams();

  const [posts, setPosts] = useState<Post[]>([]);

  const [loading, setLoading] = useState(true);

  const [selectedPdf, setSelectedPdf] =
    useState<string | null>(null);

  const [selectedTitle, setSelectedTitle] =
    useState<string>("");

  // =========================
  // Fetch Posts + Cache
  // =========================
  useEffect(() => {
    let isMounted = true;

    const cacheKey = `categoryPosts_${id}`;

    const fetchPosts = async () => {
      try {

        // Cached Data
        const cachedData =
          localStorage.getItem(cacheKey);

        if (cachedData) {
          setPosts(JSON.parse(cachedData));
          setLoading(false);
        }

        console.time("Category Posts API");

        const res = await api.get(
          `/posts?category_id=${id}`
        );

        console.timeEnd("Category Posts API");

        if (isMounted) {
          setPosts(res.data.data);

          // Save Cache
          localStorage.setItem(
            cacheKey,
            JSON.stringify(res.data.data)
          );

          setLoading(false);
        }

      } catch (err) {
        console.error("API Error:", err);
        setLoading(false);
      }
    };

    fetchPosts();

    return () => {
      isMounted = false;
    };
  }, [id]);

  // =========================
  // PDF SRC
  // =========================
  const getPdfSrc = useCallback(() => {
    if (!selectedPdf) return "";

    return `${selectedPdf}#toolbar=1&navpanes=1&scrollbar=1`;
  }, [selectedPdf]);

  // =========================
  // Loading Skeleton
  // =========================
  if (loading) {
    return (
<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 md:mt-56 pb-16">
        {/* Header Skeleton */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">

          <div className="w-52 h-10 rounded bg-gray-200 animate-pulse"></div>

          <div className="w-40 h-10 rounded-full bg-gray-200 animate-pulse"></div>
        </div>

        {/* Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl overflow-hidden shadow-md"
            >

              {/* Image Skeleton */}
              <div className="h-[260px] bg-gray-200 animate-pulse"></div>

              {/* Content */}
              <div className="p-5">

                {/* Creator */}
                <div className="flex items-center gap-3 mb-4">

                  <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>

                  <div className="w-24 h-4 rounded bg-gray-200 animate-pulse"></div>
                </div>

                {/* Title */}
                <div className="w-full h-5 rounded bg-gray-200 animate-pulse mb-3"></div>

                <div className="w-3/4 h-5 rounded bg-gray-100 animate-pulse mb-4"></div>

                {/* Footer */}
                <div className="w-32 h-4 rounded bg-gray-200 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-28 md:mt-56 pb-16">
        {/* Heading */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Arima'] text-center">
            Category Posts
          </h1>

          <Link
            to="/"
            className="bg-[#B22C23] text-white px-6 py-2 rounded-full font-semibold hover:bg-red-800 transition duration-300 shadow-md text-sm sm:text-base"
          >
            Go to Categories
          </Link>
        </div>

        {/* No Posts */}
        {posts.length === 0 ? (
          <div className="flex justify-center items-center py-20">

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-500 font-['Arima'] text-center">
              No Posts Available
            </h2>
          </div>
        ) : (

          /* Grid */
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
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer group"
              >

                {/* Image */}
                <div className="h-[260px] overflow-hidden">

                  <img
                    src={post.image}
                    alt={post.title}
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-5">

                  {/* Creator */}
                  <div className="flex items-center gap-3 mb-4">

                    <img
                      src={post.creator.profile_image}
                      alt={post.creator.name}
                      decoding="async"
                      className="w-10 h-10 rounded-full object-cover"
                    />

                    <span className="text-sm font-semibold text-gray-700 line-clamp-1">
                      {post.creator.name}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 leading-snug mb-4 font-['Arima'] line-clamp-2">

                    {post.title}
                  </h2>

                  {/* Footer */}
                  <div className="flex items-center gap-2 text-sm text-gray-500">

                    <span className="text-[#B22C23] font-medium line-clamp-1">
                      {post.category.name}
                    </span>

                    <span>|</span>

                    <span>
                      {post.read_time} Mins Read
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* PDF MODAL */}
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

export default React.memo(CategoryPosts);