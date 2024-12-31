import React from "react";

export default function Banner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-black to-gray-900 font-sans px-6 py-24 mb-10">
      {/* Background Image with Blur and Reduced Opacity */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <img
        src="https://media.istockphoto.com/id/1456350579/photo/neapalitan-pizza-with-tomatoes-on-a-white-background.jpg?s=1024x1024&w=is&k=20&c=bGF8JsYprIxkt0NriQhkYo-I5NKVAlMXn-0LBXLdWMg="
        alt="pizza"
        className="w-full h-full object-cover absolute inset-0 blur-sm opacity-60"
      />

      {/* Banner Content */}
      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center">
        <h2 className="text-white text-4xl sm:text-6xl font-semibold leading-tight mb-6 text-shadow-lg">
          Discover Our Delicious Menu
        </h2>
        <p className="text-white text-lg sm:text-xl mb-8 max-w-3xl px-6 opacity-90">
          Order now and enjoy exclusive discounts on our best pizzas. Hurry, the deals won’t last long!
        </p>
        <button
          type="button"
          className="bg-orange-500 text-white text-lg sm:text-xl font-semibold py-3 sm:py-4 px-8 sm:px-10 rounded-full shadow-xl hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-400 transition duration-300 transform hover:scale-105"
        >
          Exciting Deals Launch at 12 PM
        </button>
      </div>
    </div>
  );
}
