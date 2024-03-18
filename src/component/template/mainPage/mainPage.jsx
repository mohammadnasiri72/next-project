import React from "react";

export default function MainPage() {
  return (
    <>
      <div className="homePage lg:h-screen bg-cover py-20 lg:px-20 sm:px-8 px-4 min-h-96">
        <div>
          <p className="md:text-7xl sm:text-5xl text-2xl whitespace-nowrap font-semibold text-slate-600">Green Leaves</p>
          <p className="md:text-7xl sm:text-5xl text-2xl whitespace-nowrap font-semibold text-slate-600">
            Up To <span className="text-[#679509]">20% Off</span>
          </p>
          <p className="md:text-3xl sm:text-2xl text-xl font-semibold text-slate-600 mt-3 font-[Pacifico]">
            Always Fresh, Crispy and Full of Vitamins
          </p>
          <button className="text-white bg-[#679509] px-6 py-4 mt-10 font-semibold text-lg duration-300 hover:bg-slate-600">
            ADD TO CART
          </button>
        </div>
      </div>
    </>
  );
}
