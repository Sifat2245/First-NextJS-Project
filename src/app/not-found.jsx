"use client";
import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
      {/* Error Code */}
      <h1 className="text-9xl font-extrabold text-blue-800">404</h1>

      {/* Message */}
      <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800">
        Page Not Found
      </h2>
      <p className="mt-2 text-gray-600 text-center max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Back Button */}
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 bg-blue-900 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition"
      >
        <Home className="w-5 h-5" />
        Back to Home
      </Link>
    </div>
  );
}
