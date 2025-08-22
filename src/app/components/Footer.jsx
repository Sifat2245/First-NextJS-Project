import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About / Logo */}
        <div>
          <h2 className="text-xl font-bold mb-4">MyShop</h2>
          <p className="text-gray-400">
            Bringing you the best products at unbeatable prices. Quality and
            customer satisfaction guaranteed.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Products</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400">Email: support@myshop.com</p>
          <p className="text-gray-400">Phone: +880 1234 567890</p>
          <div className="flex space-x-4 mt-4">
            <span className="hover:text-blue-500 cursor-pointer">Facebook</span>
            <span className="hover:text-blue-400 cursor-pointer">Twitter</span>
            <span className="hover:text-pink-500 cursor-pointer">Instagram</span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500">
        &copy; {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
