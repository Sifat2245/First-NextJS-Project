"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="my-24 px-6 md:px-16 lg:px-32">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our <span className="text-blue-900">Products</span>
        </h1>
        <p className="text-gray-500 mt-2">
          Explore our latest collection of items with great deals.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-lg rounded-2xl p-5 flex flex-col justify-between transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div>
              <div className="overflow-hidden rounded-xl">
                <img
                  src={product.image || "https://via.placeholder.com/300"}
                  alt={product.name}
                  className="w-full h-52 object-cover rounded-xl transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
              <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                {product.description}
              </p>
              <p className="text-blue-700 font-bold text-lg mt-3">
                ৳ {product.price}
              </p>
            </div>

            <Link href={`/products/${product._id}`}>
              <button className="mt-5 bg-blue-800 text-white px-5 py-2 rounded-xl font-medium transition-all duration-300 hover:bg-blue-900 hover:shadow-lg hover:-translate-y-1">
                Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
