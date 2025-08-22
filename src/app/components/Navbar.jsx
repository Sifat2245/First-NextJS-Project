import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white px-6 py-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">MySite</div>

        {/* Links */}
        <ul className="flex space-x-6">
          <Link href={"/"}>
            <li className="hover:text-gray-200 cursor-pointer">Home</li>
          </Link>
          <Link href={"/about-us"}>
            <li className="hover:text-gray-200 cursor-pointer">About</li>
          </Link>
          <Link href={'/services'}>
            <li className="hover:text-gray-200 cursor-pointer">Services</li>
          </Link>
          <li className="hover:text-gray-200 cursor-pointer">Login</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
