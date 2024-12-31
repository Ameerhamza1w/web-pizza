import React from "react";

const products = [
  {
    id: 1,
    title: "Mexican Pizza",
    category: "Classic",
    price: "350.00",
    imageUrl: "p6.png",
    bgColor: "bg-gray-600", // Neutral dark gray for professionalism
  },
  {
    id: 2,
    title: "Italian Pizza",
    category: "Classic",
    price: "350.00",
    imageUrl: "itp7.jpg",
    bgColor: "bg-gray-400", // Consistent background color
  },
  {
    id: 3,
    title: "Fajita Pizza",
    category: "Delights",
    price: "350.00",
    imageUrl: "p8.png",
    bgColor: "bg-gray-600", // Consistent background color
  },
  {
    id: 4,
    title: "BBQ Chicken Pizza",
    category: "Specialty",
    price: "400.00",
    imageUrl: "bbq_chicken.png",
    bgColor: "bg-gray-400", // Neutral background for all cards
  },
  {
    id: 5,
    title: "Veggie Supreme",
    category: "Classic",
    price: "320.00",
    imageUrl: "veggie_supreme.png",
    bgColor: "bg-gray-600", // Neutral background
  },
  {
    id: 6,
    title: "Cheese Lover's Pizza",
    category: "Classic",
    price: "380.00",
    imageUrl: "cheese_lovers.png",
    bgColor: "bg-gray-600", // Consistent background color
  },
  // Added two more products
  {
    id: 7,
    title: "Malai Boti Pizza",
    category: "Classic",
    price: "$16.99",
    imageUrl: "https://static.tossdown.com/images/c2e28279044113e0b5853ae9bcb44aa9.jpeg",
    bgColor: "bg-gray-600",
  },
  {
    id: 8,
    title: "Chicken Pizza",
    category: "Specialty",
    price: "$18.99",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaYQcd2g1_nn-qq_zHlBDfbJkORjqnQCzf0w&s",
    bgColor: "bg-gray-500",
  },
];

export default function ProductList() {
  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <h2 className="text-white text-4xl font-bold text-center mb-12">
        Explore Our Delicious Pizzas
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6">
        {products.map((product) => (
          <div
            key={product.id}
            className={`relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${product.bgColor}`}
          >
            {/* Product Image */}
            <div className="w-full h-48 bg-black flex justify-center items-center">
              <img
                className="w-full h-full object-cover mb-4"
                src={product.imageUrl}
                alt={product.title}
              />
            </div>
            <div className="p-6 text-center">
              {/* Product Title */}
              <h3 className="text-white text-xl font-semibold mb-2">{product.title}</h3>
              {/* Product Category */}
              <p className="text-gray-300 text-sm mb-4">{product.category}</p>
              {/* Price Tag */}
              <span className="block mt-4 text-white bg-amber-500 px-6 py-2 rounded-lg font-bold text-lg">
                Rs. {product.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
