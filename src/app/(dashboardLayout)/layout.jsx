import React from "react";
import { LayoutDashboard, Package, Settings, LogOut } from "lucide-react";
import Link from "next/link";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-5 flex flex-col">
        <h2 className="text-2xl font-bold text-blue-600 mb-8">My Dashboard</h2>
        <nav className="flex-1 space-y-4">
          <a
            href="#"
            className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-50 text-gray-700"
          >
            <LayoutDashboard size={20} /> Dashboard
          </a>
          <Link
            href="/user-dashboard/add-product"
            className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-50 text-gray-700"
          >
            <Package size={20} /> Add Product
          </Link>
          <a
            href="#"
            className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-50 text-gray-700"
          >
            <Settings size={20} /> Settings
          </a>
        </nav>

        <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-red-50 text-red-600 mt-6">
          <LogOut size={20} /> Logout
        </button>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top navbar */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
          <div className="flex items-center gap-3">
            <Link href={"/"}>
              <span className="p-3 bg-blue-900 text-white rounded-md">
                Back Home
              </span>
            </Link>
            <span className="text-gray-600">Hello, Saifuddin</span>
            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6 flex-1">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
