import React from "react";

export default function Progressor() {
  return (
    <div className="mt-10">
      <div className="flex flex-col lg:flex-row max-w-screen-lg w-full mx-auto">

        {/* Step 1 */}
        <div className="flex items-start mb-6 lg:mb-0 w-full lg:w-1/3">
          <div className="w-8 h-8 shrink-0 mx-[-1px] bg-amber-400 p-2 flex items-center justify-center rounded-full">
            <span className="text-base text-black font-bold">1</span>
          </div>
          <div className="w-full h-1 mx-4 rounded-lg bg-cyan-500"></div>
          <div className="mt-2">
            <h6 className="text-base font-bold text-amber-400">Step: 1 Choose your Dish</h6>
            <p className="text-xs text-white">Explore our Delicious Menu and select your favorite meal</p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-start mb-6 lg:mb-0 w-full lg:w-1/3">
          <div className="w-8 h-8 shrink-0 mx-[-1px] bg-amber-400 p-2 flex items-center justify-center rounded-full">
            <span className="text-base text-black font-bold">2</span>
          </div>
          <div className="w-full h-1 mx-4 rounded-lg bg-cyan-500"></div>
          <div className="mt-2">
            <h6 className="text-base font-bold text-amber-400">Step: 2 Customize your Order</h6>
            <p className="text-xs text-white">Tailor your meal to your taste</p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-start w-full lg:w-1/3">
          <div className="w-8 h-8 shrink-0 mx-[-1px] bg-amber-400 p-2 flex items-center justify-center rounded-full">
            <span className="text-base text-black font-bold">3</span>
          </div>
          <div className="w-full h-1 mx-4 rounded-lg bg-cyan-500"></div>
          <div className="mt-2">
            <h6 className="text-base font-bold text-amber-400">Step: 3 Place your Order</h6>
            <p className="text-xs text-white">Ready to eat? Proceed to checkout and complete your order</p>
          </div>
        </div>

      </div>
    </div>
  );
}
