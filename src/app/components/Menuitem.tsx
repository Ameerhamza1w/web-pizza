"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ProductCard from "./ProductCard";
import { Product } from "@/pages/types";

const Menuitem = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const [error, setError] = useState<string | null>(null); // Error state
  const router = useRouter();

  useEffect(() => {
    // Fetch products from API
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");


        if (!response.ok) {
          throw new Error(`Failed to fetch products: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error: any) {
        console.error("Error fetching products:", error);
        setError(error.message); // Set error message
      }
    };

    fetchProducts();

    // Retrieve cart from localStorage if exists
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Add product to cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Toggle cart visibility
  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  // Trigger checkout process
  const goToCheck = () => {
    setIsCheckout(true);
  };

  // Clear cart and localStorage
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <div className="relative min-h-screen py-8">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 animate-background"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/hand-drawn-pizza-pattern-background_23-2150905263.jpg?semt=ais_hybrid')",
        }}
      ></div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-4">Delicious Pizza In Our Menu</h1>
          <p className="text-xl text-white">Explore our selection of delicious pizza to order now</p>
        </div>

        {/* Error Handling */}
        {error && (
          <div className="text-red-600 text-center bg-white p-6 rounded-xl shadow-lg mb-8">
            <p>Error fetching products: {error}</p>
          </div>
        )}

        {/* Product Section */}
        <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="transform transition-all duration-300 ease-in-out hover:scale-105"
            >
              <ProductCard {...product} onAddToCart={addToCart} />
            </div>
          ))}
        </div>

        {/* Cart Section */}
        <div className="max-w-6xl mx-auto mt-10">
          <button
            onClick={toggleCart}
            className="bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-800 transition duration-300 ease-in-out transform hover:scale-105"
          >
            {showCart ? "Hide Cart" : "View Cart"} ({cart.length} items)
          </button>

          {showCart && (
            <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-3xl font-semibold text-blue-600 mb-6">Your Cart</h2>
              {cart.length > 0 ? (
                <div>
                  <ul>
                    {cart.map((product, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between mb-6 p-4 rounded-lg bg-gray-100 shadow-md"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-20 h-20 sm:w-24 inline-block rounded-lg"
                        />
                        <span className="ml-4 text-lg font-medium text-gray-600">
                          {product.name} - ${product.price}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-between items-center mt-6">
                    <span className="font-semibold text-xl text-black">
                      Total: ${cart.reduce((total, product) => total + product.price, 0)}
                    </span>

                    <div>
                      <button
                        onClick={goToCheck}
                        className="bg-green-600 py-3 px-8 rounded-lg text-lg shadow-lg hover:bg-green-700 transition duration-300 ease-in-out text-white"
                      >
                        Proceed To Checkout
                      </button>

                      <button
                        onClick={clearCart}
                        className="ml-4 bg-red-600 py-3 px-8 rounded-lg text-lg shadow-lg hover:bg-red-700 transition duration-300 ease-in-out text-white"
                      >
                        Clear Cart
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-lg text-gray-600">Your Cart is empty</p>
              )}
            </div>
          )}
        </div>

        {/* Checkout Section */}
        {isCheckout && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 text-black">
            <div className="bg-white p-8 rounded-xl shadow-xl w-full sm:w-96">
              <h2 className="text-4xl font-semibold text-blue-600 mb-4">Checkout</h2>
              <p className="text-lg text-red-600">Please confirm your order before proceeding</p>
              <div className="mt-4">
                <ul>
                  {cart.map((product, index) => (
                    <li key={index} className="flex justify-between mb-4 p-2 bg-gray-100 rounded-lg">
                      <span>{product.name}</span>
                      <span>${product.price}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between mt-4">
                  <span className="font-semibold text-xl">Total:</span>
                  <span className="font-semibold text-xl">
                    ${cart.reduce((total, product) => total + product.price, 0)}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setIsCheckout(false)}
                  className="bg-slate-600 text-white py-2 px-6 rounded-lg text-lg shadow-lg hover:bg-slate-700 transition duration-300"
                >
                  Close
                </button>

                <button
                  onClick={() =>
                    alert(
                      "Order confirmed. It will be delivered to your doorstep in 2 days."
                    )
                  }
                  className="bg-green-600 text-white py-2 px-6 rounded-lg text-lg shadow-lg hover:bg-green-700 transition duration-300"
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menuitem;
