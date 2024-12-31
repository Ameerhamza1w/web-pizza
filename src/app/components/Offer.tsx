"use client";

import React from "react";

type Offer = {
  title: string;
  description: string;
};

const SpecialOffer: React.FC = () => {
  const offers: Offer[] = [
    {
      title: "Happy Hour",
      description: "Enjoy 50% off on all menu items. Limited time only!",
    },
    {
      title: "Family Meal Deal",
      description: "Order two deals and receive a special family coupon for your next purchase.",
    },
    {
      title: "Weekly Brunch",
      description: "Get a free complimentary drink with every brunch order. Perfect for the weekend!",
    },
  ];

  const handleOfferClick = (description: string) => {
    alert(description); // You can replace this with a modal or redirect in production
  };

  return (
    <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-600 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Special Offers</h2>
        <p className="text-lg mb-10">
          Don’t miss out on these limited-time offers! Grab them before they're gone.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <button
              key={index}
              onClick={() => handleOfferClick(offer.description)}
              className="bg-white text-gray-800 shadow-lg rounded-lg p-6 hover:bg-gray-100 transition-transform duration-300 transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold mb-4">{offer.title}</h3>
              <p className="text-gray-700">{offer.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
