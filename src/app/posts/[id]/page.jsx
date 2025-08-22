import Link from "next/link";
import React from "react";

export const getSinglePost = async (post_id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
  const data = await res.json();
  return data;
};

const SinglePage = async ({ params }) => {
  const { id } = params;
  const singlePost = await getSinglePost(id);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <article className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {singlePost.title}
        </h1>
        <p className="text-gray-600 leading-relaxed text-lg">
          {singlePost.body}
        </p>

        <div className="mt-6 flex justify-end">
          <Link
            href="/posts"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            ← Back to Posts
          </Link>
        </div>
      </article>
    </div>
  );
};

export default SinglePage;
