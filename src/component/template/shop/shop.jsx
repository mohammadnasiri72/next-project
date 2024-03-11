import React from "react";

export default function Shop() {
  return (
    <>
      <div className="shop lg:h-screen h-full bg-cover bg-no-repeat bg-center flex items-center flex-col pb-36">
        <h1 className="text-6xl font-semibold text-slate-700 mt-36 text-center">
          Fruits and Vegetables
        </h1>
        <p className="font-[Pacifico] mt-4 text-slate-700 text-3xl font-semibold text-center">
          Fresh and Delicious All Year Round!
        </p>
        <button className="bg-[#679509] text-white px-8 py-4 font-semibold mt-8 duration-300 hover:bg-slate-700">
          SHOP NOW!
        </button>
      </div>
      <div className="flex flex-wrap px-10">
        <div className="lg:w-2/3 w-full">
          <img src="/images/blabla.webp" alt="" />
        </div>
        <div className="lg:w-1/3 w-full flex flex-col justify-between py-10">
          <div>
            <h4 className="font-[Pacifico] text-2xl font-semibold text-slate-700 lg:mt-0 mt-10">
              A Source of Vitamins
            </h4>
            <p className="mt-2 text-slate-700 font-semibold">
              Vegetables can be eaten either raw or cooked and play an important
              role in human nutrition, being mostly low in fat and
              carbohydrates, but high in vitamins, minerals and dietary fiber.
            </p>
          </div>
          <div>
            <h4 className="font-[Pacifico] text-2xl font-semibold text-slate-700 lg:mt-0 mt-10">
              Best Quality Products
            </h4>
            <p className="mt-2 text-slate-700 font-semibold">
              “We eliminated any possible pollution in our soils in order to
              deliver the purest organic produce to our customers’ tables.“
            </p>
          </div>
          <div>
            <h4 className="font-[Pacifico] text-2xl font-semibold text-slate-700 lg:mt-0 mt-10">
              Best Quality Products
            </h4>
            <p className="mt-2 text-slate-700 font-semibold">
              “We eliminated any possible pollution in our soils in order to
              deliver the purest organic produce to our customers’ tables.“
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
