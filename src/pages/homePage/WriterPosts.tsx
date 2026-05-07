import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const WriterPosts = () => {
  const { id } = useParams();

  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetch(
      `https://pcstech.in/pcs_api/brammam/public/api/posts?creator_id=${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
   <div className="p-6 mt-32">
      <h1 className="text-2xl font-bold mb-6">
        Writer Posts
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="border rounded-xl overflow-hidden shadow"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-4">
              <h2 className="font-bold text-lg">
                {post.title}
              </h2>

              <p className="text-gray-500 text-sm mt-2">
                {post.description}
              </p>

              <div className="mt-3 text-sm text-red-600">
                {post.creator.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WriterPosts;