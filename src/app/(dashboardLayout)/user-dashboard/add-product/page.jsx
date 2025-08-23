"use client";
import { BASE_API_URL } from "@/utils/constants";
import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

const AddProductPage = () => {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    connectivity: "",
    brand: "",
    color: "",
    short_description: "",
    long_description: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(`${BASE_API_URL}/api/products`, product);
      Swal.fire("Success!", "Product added successfully!", "success");
      setProduct({
        name: "",
        category: "",
        price: "",
        connectivity: "",
        brand: "",
        color: "",
        short_description: "",
        long_description: "",
      });
    } catch (err) {
      Swal.fire(
        "Error!",
        err.response?.data?.error || "Failed to add product",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto my-24 p-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Add Product</h1>

      {message && (
        <p
          className={`mb-4 text-center ${
            message.includes("success") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block font-medium mb-1">Product Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium mb-1">Category</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block font-medium mb-1">Price ($)</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            step="0.01"
            className="w-full border border-gray-300 rounded-lg p-2"
            required
          />
        </div>

        {/* Connectivity */}
        <div>
          <label className="block font-medium mb-1">Connectivity</label>
          <input
            type="text"
            name="connectivity"
            value={product.connectivity}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>

        {/* Brand */}
        <div>
          <label className="block font-medium mb-1">Brand</label>
          <input
            type="text"
            name="brand"
            value={product.brand}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>

        {/* Color */}
        <div>
          <label className="block font-medium mb-1">Color</label>
          <input
            type="text"
            name="color"
            value={product.color}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>

        {/* Short Description */}
        <div>
          <label className="block font-medium mb-1">Short Description</label>
          <textarea
            name="short_description"
            value={product.short_description}
            onChange={handleChange}
            rows="2"
            className="w-full border border-gray-300 rounded-lg p-2"
            required
          />
        </div>

        {/* Long Description */}
        <div>
          <label className="block font-medium mb-1">Long Description</label>
          <textarea
            name="long_description"
            value={product.long_description}
            onChange={handleChange}
            rows="5"
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-700 text-white py-3 rounded-xl font-medium hover:bg-blue-900 transition-all duration-300 disabled:opacity-50"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
