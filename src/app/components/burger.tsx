import React from "react";

const products = [
  {
    id: 1,
    title: "Spicy Mexican Delight",
    category: "Classic",
    price: "$15.99",
    imageUrl: "p6.png",
    bgColor: "bg-red-600",
  },
  {
    id: 2,
    title: "Authentic Italian Supreme",
    category: "Classic",
    price: "$17.49",
    imageUrl: "itp7.jpg",
    bgColor: "bg-orange-500",
  },
  {
    id: 3,
    title: "Fajita Feast",
    category: "Delights",
    price: "$16.99",
    imageUrl: "p8.png",
    bgColor: "bg-red-500",
  },
  {
    id: 4,
    title: "BBQ Chicken Explosion",
    category: "Specialty",
    price: "$18.49",
    imageUrl: "bbq_chicken.png",
    bgColor: "bg-yellow-500",
  },
  {
    id: 5,
    title: "Cheese Lovers Paradise",
    category: "Classic",
    price: "$14.99",
    imageUrl: "cheese_lovers.png",
    bgColor: "bg-blue-500",
  },
  {
    id: 6,
    title: "Veggie Supreme",
    category: "Vegetarian",
    price: "$16.49",
    imageUrl: "veggie_supreme.png",
    bgColor: "bg-green-500",
  },
  {
    id: 7,
    title: "Malai Boti Pizza",
    category: "Classic",
    price: "$16.99",
    imageUrl: "https://static.tossdown.com/images/c2e28279044113e0b5853ae9bcb44aa9.jpeg",
    bgColor: "bg-teal-500",
  },
  {
    id: 8,
    title: "Chicken Pizza",
    category: "Specialty",
    price: "$18.99",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaYQcd2g1_nn-qq_zHlBDfbJkORjqnQCzf0w&s",
    bgColor: "bg-purple-500",
  },
];

export default function ProductList() {
  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <h2 className="text-white text-4xl font-bold text-center mb-12">
        Explore Our Delicious Pizzas
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className={`relative bg-white shadow-lg rounded-lg overflow-hidden group transform hover:scale-105 transition-all duration-300 ease-in-out`}
          >
            {/* Product Image */}
            <div className="relative">
              <img
                className="w-full h-48 sm:h-56 md:h-64 object-cover transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
                src={product.imageUrl}
                alt={product.title}
              />
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>
            </div>

            {/* Product Details */}
            <div className="relative px-4 py-4 sm:px-6 sm:py-6 z-10">
              <span className="block text-sm text-gray-400">{product.category}</span>
              <h3 className="font-semibold text-xl text-gray-800 mt-2">{product.title}</h3>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold text-gray-900">{product.price}</span>
                <button className="bg-red-600 text-white rounded-full px-4 py-2 text-sm font-semibold hover:bg-red-700 transition-all duration-200">
                  Menu
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
