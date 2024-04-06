"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { SlBasket } from "react-icons/sl";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import Image from "next/image";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOverMenu, setShowOverMenu] = useState(false);
  const [dropDownMenuItem, setDropDownMenuItem] = useState(false);
  const showMenuHandler = () => {
    setShowMenu(true);
    document.body.style.overflowY = "hidden";
  };
  const closeMenuHandler = () => {
    setShowMenu(false);
    setShowOverMenu(false);
    document.body.style.overflowY = "auto";
  };
  const showOverMenuHandler = () => {
    setShowOverMenu(!showOverMenu);
  };

  return (
    <>
      <div className="w-full h-16 bg-[#679509] flex md:justify-between justify-center items-center px-10 text-white">
        <div>
          <p className="text-center">
            Last sale up to <span className="font-bold">20%</span> OFF. Use code
            “<span className="font-bold">SALE70</span>”.
          </p>
        </div>
        <div className="justify-center items-center md:flex hidden">
          <Link
            className="hover:text-slate-300 duration-300  px-3 border-r"
            href={"./"}
          >
            Compare
          </Link>
          <Link
            className="hover:text-slate-300 duration-300 px-3 border-r"
            href={"./"}
          >
            Wishlist
          </Link>
          <Link
            className="hover:text-slate-300 duration-300 px-3 border-r"
            href={"./"}
          >
            Login
          </Link>
          <Link
            className="hover:text-slate-300 duration-300 flex justify-center items-center px-3"
            href={"./"}
          >
            <SlBasket className="" />
            <span className="px-1">Cart</span>
            <span className="px-1">0</span>
          </Link>
        </div>
      </div>
      <div className="w-full h-24 bg-white flex justify-between items-center lg:px-20 sm:px-8 px-4 border">
        <div>
          {/* <img src="./images/logo.webp" alt="logo" /> */}
          <Image alt="logo" src={"/images/logo.webp"} width={150} height={100}/>
        </div>
        <div className="justify-center items-center h-full md:flex hidden">
          <Link
            className="px-3 text-slate-500 font-semibold hover:text-[#679509] duration-300"
            href={"/"}
          >
            HOME
          </Link>
          <Link
            className="px-3 text-slate-500 font-semibold hover:text-[#679509] duration-300"
            href={"./about"}
          >
            ABOUT
          </Link>
          <Link
            className="px-3 text-slate-500 font-semibold hover:text-[#679509] duration-300"
            href={"./team"}
          >
            TEAM
          </Link>
          <Link
            className="px-3 text-slate-500 font-semibold hover:text-[#679509] duration-300"
            href={"./blog"}
          >
            BLOG
          </Link>
          <div
            onMouseEnter={() => setDropDownMenuItem(true)}
            onMouseLeave={() => setDropDownMenuItem(false)}
            className="px-3 text-slate-500 font-semibold hover:text-[#679509] duration-300 relative h-full flex items-center cursor-pointer"
          >
            <Link href={'/products'} className="flex justify-center items-center">
              SHOP
              <FaAngleDown />
            </Link>
            <div
              style={{
                opacity: dropDownMenuItem ? "1" : "0",
                visibility: dropDownMenuItem ? "visible" : "hidden",
                top: dropDownMenuItem ? "4.5rem" : "4rem",
              }}
              className="bg-white shadow-xl w-48 h-52 absolute right-0 translate-x-1/3 duration-300 flex items-center flex-col"
            >
              <Link
                className="text-slate-500 p-1 m-1 hover:text-[#679509] duration-300"
                href={"/products"}
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
            className="px-3 text-slate-500 font-semibold hover:text-[#679509] duration-300"
            href={"./contact"}
          >
            CONTACTS
          </Link>
        </div>
        <div className="md:hidden block z-50">
          <IoMenuOutline
            style={{ display: showMenu ? "none" : "inline" }}
            onClick={showMenuHandler}
            className="text-3xl cursor-pointer text-[#679509]"
          />
        </div>
        <div
          style={{
            transform: showMenu ? "translateX(0)" : "translateX(-110%)",
          }}
          className="md:hidden block shadow-2xl bg-white w-1/2 h-screen fixed left-0 top-0 duration-300 z-50"
        >
          <div className="flex flex-col items-center relative">
            <IoMdClose
              className="absolute right-4 top-3 cursor-pointer text-3xl hover:text-[#679509] duration-300"
              onClick={closeMenuHandler}
            />
            <Link
              onClick={closeMenuHandler}
              className="my-2 hover:text-[#679509] duration-300 text-xl text-slate-700 font-semibold mt-10"
              href={"./"}
            >
              HOME
            </Link>
            <Link
              onClick={closeMenuHandler}
              className="my-2 hover:text-[#679509] duration-300 text-xl text-slate-700 font-semibold"
              href={"./about"}
            >
              ABOUT
            </Link>
            <Link
              onClick={closeMenuHandler}
              className="my-2 hover:text-[#679509] duration-300 text-xl text-slate-700 font-semibold"
              href={"./team"}
            >
              TEAM
            </Link>
            <Link
              onClick={closeMenuHandler}
              className="my-2 hover:text-[#679509] duration-300 text-xl text-slate-700 font-semibold"
              href={"./blog"}
            >
              BLOG
            </Link>
            <div
              className="my-2 hover:text-[#679509] duration-300 text-xl text-slate-700 font-semibold flex justify-center items-center cursor-pointer"
              onClick={showOverMenuHandler}
            >
              SHOP
              <FaAngleRight />
            </div>
            <Link
              onClick={closeMenuHandler}
              className="my-2 hover:text-[#679509] duration-300 text-xl text-slate-700 font-semibold"
              href={"./contact"}
            >
              CONTACTS
            </Link>
          </div>
        </div>
        <div
          style={{
            transform: showOverMenu ? "translateX(0)" : "translateX(-110%)",
          }}
          className="md:hidden block shadow-2xl bg-white w-1/2 h-screen fixed left-0 top-0 duration-300 z-50"
        >
          <div className="flex flex-col items-center relative">
            <FaArrowLeftLong
              className="absolute right-4 top-3 cursor-pointer text-3xl hover:text-[#679509] duration-300"
              onClick={showOverMenuHandler}
            />
            <Link
              onClick={closeMenuHandler}
              className="my-2 hover:text-[#679509] duration-300 text-xl text-slate-700 font-semibold mt-10"
              href={"./"}
            >
              Baking
            </Link>
            <Link
              onClick={closeMenuHandler}
              className="my-2 hover:text-[#679509] duration-300 text-xl text-slate-700 font-semibold"
              href={"./"}
            >
              Fruit
            </Link>
            <Link
              onClick={closeMenuHandler}
              className="my-2 hover:text-[#679509] duration-300 text-xl text-slate-700 font-semibold"
              href={"./"}
            >
              Organic
            </Link>
            <Link
              onClick={closeMenuHandler}
              className="my-2 hover:text-[#679509] duration-300 text-xl text-slate-700 font-semibold"
              href={"./"}
            >
              Packaged Meals
            </Link>
            <Link
              onClick={closeMenuHandler}
              className="my-2 hover:text-[#679509] duration-300 text-xl text-slate-700 font-semibold"
              href={"./"}
            >
              Vegetable
            </Link>
          </div>
        </div>
        <div
          style={{ display: showMenu ? "block" : "none" }}
          className="md:hidden block fixed top-0 left-0 bottom-0 right-0 bg-[#0008]"
          onClick={closeMenuHandler}
        ></div>
      </div>
    </>
  );
}
