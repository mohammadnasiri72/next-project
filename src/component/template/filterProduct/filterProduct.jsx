"use client";
import React, { useState } from "react";
import RangeSlider from "../inputRange/inputRange";

export default function FilterProduct({
  product,
  setCheckBaking,
  checkBaking,
  setCheckFruit,
  checkFruit,
  checkOrganic,
  setCheckOrganic,
  checkPackage,
  setCheckPackage,
  checkVegetable,
  setCheckVegetable,
  max,
  setValueFilter,
  value,
  setValue,
}) {
  return (
    <>
      <input
        className="outline-none px-4 py-2 border mt-10 w-full "
        type="text"
        placeholder="search..."
      />
      <button className="w-full px-4 py-2 bg-[#679509] text-white mt-3 font-semibold duration-300 hover:bg-slate-700">
        Go!
      </button>
      <hr className="mt-10" />
      <div className="mt-10">
        <h4 className="font-[Pacifico] text-2xl font-semibold text-slate-700">
          Filter
        </h4>
        <div>
          <input
            onChange={() => setCheckBaking(!checkBaking)}
            className="cursor-pointer"
            id="Baking"
            type="checkbox"
          />
          <label
            className="cursor-pointer px-2 text-[#679509]"
            htmlFor="Baking"
          >
            Baking
          </label>
        </div>
        <div>
          <input
            onChange={() => setCheckFruit(!checkFruit)}
            className="cursor-pointer"
            id="Fruit"
            type="checkbox"
          />
          <label className="cursor-pointer px-2 text-[#679509]" htmlFor="Fruit">
            Fruit
          </label>
        </div>
        <div>
          <input
            onChange={() => setCheckOrganic(!checkOrganic)}
            className="cursor-pointer"
            id="Organic"
            type="checkbox"
          />
          <label
            className="cursor-pointer px-2 text-[#679509]"
            htmlFor="Organic"
          >
            Organic
          </label>
        </div>
        <div>
          <input
            onChange={() => setCheckPackage(!checkPackage)}
            className="cursor-pointer"
            id="Meals"
            type="checkbox"
          />
          <label className="cursor-pointer px-2 text-[#679509]" htmlFor="Meals">
            Packaged Meals
          </label>
        </div>
        <div>
          <input
            onChange={() => setCheckVegetable(!checkVegetable)}
            className="cursor-pointer"
            id="Vegetable"
            type="checkbox"
          />
          <label
            className="cursor-pointer px-2 text-[#679509]"
            htmlFor="Vegetable"
          >
            Vegetable
          </label>
        </div>
      </div>
      <hr className="mt-10" />
      <div className="mt-10">
        <h4 className="font-[Pacifico] text-2xl font-semibold text-slate-700">
          Filter
        </h4>
        <div className="flex">
          <span>${value[0]}</span>
          ___
          <span>${value[1]}</span>
        </div>
        <div className="w-1/2">
          <RangeSlider
            max={max}
            value={value}
            setValue={setValue}
          />
        </div>
        <button onClick={()=> setValueFilter(value)} className="bg-[#679509] px-5 py-2 duration-300 text-white hover:bg-slate-700 rounded-lg">filter</button>
      </div>
    </>
  );
}
