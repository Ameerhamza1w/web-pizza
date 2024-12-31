import React from "react";
import { FaPizzaSlice } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaBolt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";



export default function Navbar() {
  return (
    <div className="p-5 bg-black">
      <div className="max-w-screen-xl mx-auto py-3 px-4 rounded-xl border w-full flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
        <FaPizzaSlice className="w-8 h-8 text-yellow-400 hover:text-red-300" />
          
          {/* Search Input */}
          <div className="relative hidden lg:block">
            <input
              className="rounded-3xl py-3 px-4 outline-none text-sm w-[350px] bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500"
              placeholder="Search for your menu"
            />
            <FaSearch className="w-5 h-5 text-yellow-300 absolute right-4 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>

        {/* Order Now Section */}
        <div className="flex items-center gap-4">
        <FaBolt className="w-5 h-5 text-amber-400 hidden lg:block" />
          <p className="text-sm text-white hidden lg:block">
            Order now and get it in <span className="text-amber-400">15 minutes</span>
          </p>
          
          {/* Cart Icon */}
          <div className="relative">
            <FaCartShopping className="w-8 h-8 text-cyan-400 hover:ring-2 hover:ring-amber-500 rounded-full p-2 transition-all duration-300" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
