import React from "react";

export default function Carousel() {
  return (
    <div>
      <section className="bg-gradient-to-r from-black to-gray-800">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-12 lg:px-6">
          <div className="flex justify-between gap-4 sm:gap-8">
            {/* Pizza 1 */}
            <div className="flex-shrink-0 w-full sm:w-1/3 lg:w-1/3 bg-gradient-to-r from-black to-gray-800 h-auto rounded-lg overflow-hidden shadow-lg">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg"
              >
                <img
                  src="p1.png"
                  alt="Pizza 1"
                  className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-gray-900/10"></div>
                <h3 className="z-10 text-3xl font-semibold text-white absolute top-0 left-0 p-6 sm:text-2xl">
                  Spicy Pizza
                </h3>
              </a>
            </div>

            {/* Pizza 2 */}
            <div className="flex-shrink-0 w-full sm:w-1/3 lg:w-1/3 bg-gradient-to-r from-black to-gray-800 h-auto rounded-lg overflow-hidden shadow-lg">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg"
              >
                <img
                  src="p2.png"
                  alt="Pizza 2"
                  className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-gray-900/10"></div>
                <h3 className="z-10 text-3xl font-semibold text-white absolute top-0 left-0 p-6 sm:text-2xl">
                  Chicken Fajita Pizza
                </h3>
              </a>
            </div>

            {/* Pizza 3 */}
            <div className="flex-shrink-0 w-full sm:w-1/3 lg:w-1/3 bg-gradient-to-r from-black to-gray-800 h-auto rounded-lg overflow-hidden shadow-lg">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg"
              >
                <img
                  src="p3.jpg"
                  alt="Pizza 3"
                  className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-gray-900/10"></div>
                <h3 className="z-10 text-3xl font-semibold text-white absolute top-0 left-0 p-6 sm:text-2xl">
                  Creamy Pizza
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
