import Link from "next/link";

export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

const Posts = async () => {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        📌 Latest Posts
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-5 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {post.body}
              </p>
            </div>
            <Link
              href={`/posts/${post.id}`}
              className="inline-block text-center bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
