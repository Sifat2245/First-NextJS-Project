"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { BASE_API_URL } from "@/utils/constants";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${BASE_API_URL}/api/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center mt-24">Loading...</p>;
  if (!product) return <p className="text-center mt-24">Product not found</p>;

  return (
    <div className="max-w-6xl mx-auto my-24 px-6">
      <div className="">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Product Image */}
          <div className="overflow-hidden rounded-xl border">
            <img
              src={product.image || "https://via.placeholder.com/600"}
              alt={product.name}
              className="w-full h-96 object-contain p-4 transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                {product.name}
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                {product.category} • {product.brand}
              </p>

              <p className="text-gray-600 mt-4">
                {product.short_description}
              </p>

              <p className="text-blue-700 font-bold text-3xl mt-6">
                ৳ {product.price}
              </p>

              {/* Specs */}
              <div className="mt-6 space-y-2 text-gray-700">
                <p>
                  <span className="font-semibold">Brand:</span> {product.brand}
                </p>
                <p>
                  <span className="font-semibold">Color:</span> {product.color}
                </p>
                <p>
                  <span className="font-semibold">Connectivity:</span>{" "}
                  {product.connectivity}
                </p>
              </div>
            </div>

            <button className="mt-8 bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-blue-900 hover:shadow-lg hover:-translate-y-1">
              Buy Now
            </button>
          </div>
        </div>

        {/* Long Description */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Product Description
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {product.long_description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
