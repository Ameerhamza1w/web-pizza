import React from "react";

const FloatingImageContentBlock = () => {
  return (
    <section className="container mx-auto py-10 px-4 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 md:pr-10 mb-6 md:mb-0">
        <h2 className="text-3xl font-bold mb-4 text-white">Delicious Pizzas</h2>
        <p className="text-white mb-4">
          Experience the finest pizzas in town, made with fresh ingredients and grilled to perfection.
        </p>
        <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-200">
          Order Now
        </button>

        <h3 className="text-2xl font-semibold mt-6 mb-2 text-center text-white">
          Coming Soon: Our New Pizza Launches
        </h3>
        <ul className="space-y-4">
          <li className="text-white">
            <strong>BBQ Chicken Pizza:</strong> A mouthwatering blend of tender BBQ chicken, cheddar cheese, and tangy BBQ sauce.
          </li>

          <li className="text-white">
            <strong>Mushroom Supreme Pizza:</strong> Juicy mushrooms, extra cheese, and a rich, savory base for the perfect flavor.
          </li>

          <li className="text-white">
            <strong>Spicy Tikka Pizza:</strong> A flavorful blend of spicy tikka marinated chicken, topped with zesty spices and creamy cheese.
          </li>

          <li className="text-white">
            <strong>Smoked BBQ Delight Pizza:</strong> A rich smoky BBQ flavor combined with succulent grilled chicken and cheddar cheese.
          </li>
        </ul>
      </div>

      <div className="md:w-1/2 mt-6 md:mt-0">
        <img
          src="77.png"
          alt="Delicious Pizza"
          className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mx-auto"
        />
      </div>
    </section>
  );
};

export default FloatingImageContentBlock;
