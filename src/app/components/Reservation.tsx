import React from "react";

const ReservationSection = () => {
  return (
    <section className="bg-gradient-to-r from-black to-slate-900 py-10">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-extrabold mb-6 text-white">
          Make a Reservation
        </h2>
        <form className="max-w-lg mx-auto space-y-6">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border border-gray-300 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="date"
              className="w-full p-4 border border-gray-300 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="time"
              className="w-full p-4 border border-gray-300 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              required
            />
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105"
            >
              Reserve Table Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ReservationSection;
