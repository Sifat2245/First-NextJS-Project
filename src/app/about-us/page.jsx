
import React from "react";

const AboutUsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Us
          </h1>
          <p className="text-lg md:text-xl">
            Learn more about our mission, values, and the team behind our amazing products.
          </p>
        </div>
      </section>

      {/* Mission / Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:flex md:items-center md:space-x-12">
          <div className="md:flex-1">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              Our mission is to deliver high-quality products that make life easier and more enjoyable for everyone. We are committed to innovation, customer satisfaction, and sustainability.
            </p>
            <p className="text-gray-700">
              We started with a vision to provide accessible products without compromising on quality. Every product we create is designed with care and attention to detail.
            </p>
          </div>
          <div className="md:flex-1 mt-8 md:mt-0">
            <img
              src="/images/about-us.jpg" // put your image in public/images
              alt="About Us"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">
                We ensure top-notch quality in every product we deliver.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Constantly improving and innovating to meet customer needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">
                Making eco-friendly choices in every step of our production.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
