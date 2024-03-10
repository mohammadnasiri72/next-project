"use client";
import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { RiScalesFill } from "react-icons/ri";
import { SlBasket } from "react-icons/sl";

export default function Product({ product }) {
  const [isActive, setIsActive] = useState([true, false, false, false]);
  const activeHandler = (e) => {
    let newArr = new Array(4).fill(false);
    newArr[e] = true;
    setIsActive(newArr);
  };
  return (
    <>
      <div className="flex justify-center mt-10">
        <h2 className="font-[Pacifico] text-3xl font-semibold text-slate-700">
          Our Products
        </h2>
      </div>
      <div className="flex justify-center mt-5">
        <button
          style={{ color: isActive[0] ? "#679509" : "rgb(71 85 105)" }}
          className="mx-3 px-3 text-slate-600 font-semibold hover:text-[#679509] duration-300 hover:text-lg"
          onClick={() => activeHandler(0)}
        >
          NEW ARRIVALS
        </button>
        <button
          style={{ color: isActive[1] ? "#679509" : "rgb(71 85 105)" }}
          className="mx-3 px-3 text-slate-600 font-semibold hover:text-[#679509] duration-300 hover:text-lg"
          onClick={() => activeHandler(1)}
        >
          ORGANIC & NATURAL
        </button>
        <button
          style={{ color: isActive[2] ? "#679509" : "rgb(71 85 105)" }}
          className="mx-3 px-3 text-slate-600 font-semibold hover:text-[#679509] duration-300 hover:text-lg"
          onClick={() => activeHandler(2)}
        >
          THE FARM STORY
        </button>
        <button
          style={{ color: isActive[3] ? "#679509" : "rgb(71 85 105)" }}
          className="mx-3 px-3 text-slate-600 font-semibold hover:text-[#679509] duration-300 hover:text-lg"
          onClick={() => activeHandler(3)}
        >
          PLUM CAKE
        </button>
      </div>
      <div className="flex justify-center mt-5 flex-wrap">
        {product.slice(0,8).map((e, i) => {
          return (
            <div key={e._id} className="w-1/5 mx-4 test relative cursor-pointer">
              <img className="border z-20" src={e.img} alt="" />
              <div className="text-center pb-10 pt-2 relative overflow-hidden">
                <h3 className="whitespace-nowrap duration-100 box-title text-[#679509]">
                  {e.title}
                </h3>
                <p className="duration-500 box-price font-semibold text-2xl">${e.price}</p>
                <div className="absolute w-full top-full duration-300 opacity-0 invisible box-add-to-cart">
                  <button className="text-white bg-[#679509] w-full py-3 flex justify-center items-center text-xl font-semibold duration-300 hover:bg-slate-700">
                    <SlBasket className="mx-2 text-2xl"/>
                    add to cart
                  </button>
                  <div className="flex justify-around mt-2">
                    <FaEye className="text-xl cursor-pointer hover:text-[#679509]"/>
                    <FaRegHeart className="text-xl cursor-pointer hover:text-[#679509]"/>
                    <RiScalesFill className="text-xl cursor-pointer hover:text-[#679509]"/>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
