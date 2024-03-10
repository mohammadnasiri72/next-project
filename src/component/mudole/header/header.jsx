"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { SlBasket } from "react-icons/sl";

export default function Header() {
  const [dropDownMenuItem, setDropDownMenuItem] = useState(false);
  return (
    <>
      <div className="w-full h-16 bg-[#679509] flex justify-between items-center px-10 text-white">
        <div>
          <p>
            Last sale up to <span className="font-bold">20%</span> OFF. Use code
            “<span className="font-bold">SALE70</span>”.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Link className="hover:text-slate-300 duration-300 mx-1 px-3 border-r" href={"./"}>Compare</Link>
          <Link className="hover:text-slate-300 duration-300 mx-1 px-3 border-r" href={"./"}>Wishlist</Link>
          <Link className="hover:text-slate-300 duration-300 mx-1 px-3 border-r" href={"./"}>Login</Link>
          <Link className="hover:text-slate-300 duration-300 flex justify-center items-center mx-1 px-3" href={"./"}>
            <SlBasket className="mx-1" />
            <span className="mx-1">Cart</span>
            <span className="mx-1">0</span>
          </Link>
        </div>
      </div>
      <div className="w-full h-24 bg-white flex justify-between items-center px-20 border">
        <div>
          <img src="./images/logo.webp" alt="logo" />
        </div>
        <div className="flex justify-center items-center h-full">
          <Link
            className="mx-3 text-slate-500 font-semibold hover:text-[#679509] duration-300"
            href={"./"}
          >
            HOME
          </Link>
          <Link
            className="mx-3 text-slate-500 font-semibold hover:text-[#679509] duration-300"
            href={"./"}
          >
            ABOUT
          </Link>
          <Link
            className="mx-3 text-slate-500 font-semibold hover:text-[#679509] duration-300"
            href={"./"}
          >
            TEAM
          </Link>
          <Link
            className="mx-3 text-slate-500 font-semibold hover:text-[#679509] duration-300"
            href={"./"}
          >
            BLOG
          </Link>
          <div
            onMouseEnter={() => setDropDownMenuItem(true)}
            onMouseLeave={() => setDropDownMenuItem(false)}
            className="mx-3 text-slate-500 font-semibold hover:text-[#679509] duration-300 relative h-full flex items-center cursor-pointer"
          >
            <span className="flex justify-center items-center">
              SHOP
              <FaAngleDown />
            </span>
            <div
              style={{
                opacity: dropDownMenuItem ? "1" : "0",
                visibility: dropDownMenuItem ? "visible" : "hidden",
                top: dropDownMenuItem ? "4.5rem" : "4rem",
              }}
              className="bg-white shadow-xl w-48 h-52 absolute right-0 translate-x-1/2 duration-300 flex items-center flex-col"
            >
              <Link
                className="text-slate-500 p-1 m-1 hover:text-[#679509] duration-300"
                href={"./"}
              >
                Baking
              </Link>
              <Link
                className="text-slate-500 p-1 m-1 hover:text-[#679509] duration-300"
                href={"./"}
              >
                Fruit
              </Link>
              <Link
                className="text-slate-500 p-1 m-1 hover:text-[#679509] duration-300"
                href={"./"}
              >
                Organic
              </Link>
              <Link
                className="text-slate-500 p-1 m-1 hover:text-[#679509] duration-300"
                href={"./"}
              >
                Packaged Meals
              </Link>
              <Link
                className="text-slate-500 p-1 m-1 hover:text-[#679509] duration-300"
                href={"./"}
              >
                Vegetable
              </Link>
            </div>
          </div>
          <Link
            className="mx-3 text-slate-500 font-semibold hover:text-[#679509] duration-300"
            href={"./"}
          >
            CONTACTS
          </Link>
        </div>
      </div>
    </>
  );
}
