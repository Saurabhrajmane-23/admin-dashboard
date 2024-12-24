import React from "react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  CubeIcon,
  UserGroupIcon,
  ClipboardDocumentListIcon,
  PlusCircleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-transparent text-gray-600 shadow-lg border-r border-gray-700">
      {/* Navigation Links */}
      <div className="flex flex-col mt-8">
        <NavLink
          className={({ isActive }) =>
            `flex items-center py-2 px-4 space-x-2 border-b-2 border-gray-200 ${
              isActive ? "bg-orange-600 text-white" : "hover:bg-gray-200"
            }`
          }
          to="/"
        >
          <HomeIcon className="w-5 h-5" />
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `flex items-center py-2 px-4 space-x-2 border-b-2 border-gray-200 ${
              isActive ? "bg-orange-600 text-white" : "hover:bg-gray-200"
            }`
          }
          to="/product"
        >
          <CubeIcon className="w-5 h-5" />
          <span>Product</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `flex items-center py-2 px-4 space-x-2 border-b-2 border-gray-200 ${
              isActive ? "bg-orange-600 text-white" : "hover:bg-gray-200"
            }`
          }
          to="/customers"
        >
          <UserGroupIcon className="w-5 h-5" />
          <span>Customer</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `flex items-center py-2 px-4 space-x-2 border-b-2 border-gray-200 ${
              isActive ? "bg-orange-600 text-white" : "hover:bg-gray-200"
            }`
          }
          to="/orders"
        >
          <ClipboardDocumentListIcon className="w-5 h-5" />
          <span>Orders</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `flex items-center py-2 px-4 space-x-2 border-b-2 border-gray-200 ${
              isActive ? "bg-orange-600 text-white" : "hover:bg-gray-200"
            }`  
          }
          to="/addproduct"
        >
          <PlusCircleIcon className="w-5 h-5" />
          <span>AddProduct</span>
        </NavLink>
      </div>

      {/* Spacer to push Account to the bottom */}
      <div className="flex-grow"></div>

      {/* Account Link */}
      <div className="border-t-2 border-gray-300 mb-6" >
        <NavLink
          className={({ isActive }) =>
            `flex items-center py-2 px-4 space-x-2 hover:bg-gray-200 ${
              isActive ? "bg-orange-600 text-white" : ""
            }`
          }
          to="/account"
        >
          <UserCircleIcon className="w-5 h-5" />
          <span>Account</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
