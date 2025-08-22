"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const ProductDetailsPage = () => {
  const params = useParams(); // get route params
  const { id } = params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
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
    <div className="max-w-4xl mx-auto my-24 px-6">
      <div className="bg-white shadow-lg rounded-2xl p-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="overflow-hidden rounded-xl">
            <img
              src={product.image || "https://via.placeholder.com/600"}
              alt={product.name}
              className="w-full h-96 object-cover rounded-xl transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-gray-600 mt-4">{product.description}</p>

            <p className="text-blue-700 font-bold text-2xl mt-6">
              ৳ {product.price}
            </p>

            <button className="mt-8 bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-blue-900 hover:shadow-lg hover:-translate-y-1">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
