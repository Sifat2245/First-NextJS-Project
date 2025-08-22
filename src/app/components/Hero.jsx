import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto gap-4 flex flex-col md:flex-row items-center px-6">
        {/* Left content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Our Amazing Products
          </h1>
          <p className="text-gray-600 mb-6">
            High quality, affordable, and built to make your life easier.
            Browse our collection and find the perfect fit for your needs.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition">
              Shop Now
            </button>
            <button className="border border-blue-800 text-blue-800 px-6 py-3 rounded-lg hover:bg-gray-200 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right image */}
        <div className="flex-1 mt-10 md:mt-0">
          <img
            src='/images/rptgtpxd-1396254731.jpg'
            alt="Product showcase"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
