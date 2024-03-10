import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";

export default function Welcome() {
  return (
    <>
      <div className="flex justify-center items-center mt-10">
        <p className="text-[#679509] font-[Pacifico] text-5xl font-semibold">
          Welcome to our healthy farm!
        </p>
      </div>
      <div className="flex justify-center items-center px-10">
        <div className="flex items-center flex-col w-1/3 mx-5">
          <img src="./images/1.webp" alt="" />
          <p className="font-[Pacifico] text-2xl font-semibold text-slate-600 mt-5">
            Best Quality Products
          </p>
          <p className="text-slate-600 text-justify text-last-center mt-5">
            We stand for providing the most fresh organic products which will
            serve your health and be a source of vitamins and minerals for our
            clients.
          </p>
        </div>
        <div className="flex items-center flex-col w-1/3 mx-5">
          <img src="./images/2.webp" alt="" />
          <p className="font-[Pacifico] text-2xl font-semibold text-slate-600 mt-5">
            Farmer Products
          </p>
          <p className="text-slate-600 text-justify text-last-center mt-5">
            We work with many farms to provide you with natural products grown
            with love and care with no GMO or pesticides.
          </p>
        </div>
        <div className="flex items-center flex-col w-1/3 mx-5">
          <img src="./images/3.webp" alt="" />
          <p className="font-[Pacifico] text-2xl font-semibold text-slate-600 mt-5">
            Fast Delivery
          </p>
          <p className="text-slate-600 text-justify text-last-center mt-5">
            We want our client to receive their fresh products as soon as
            possible, so we process and ship the order at once.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center px-20 mt-20">
        <Link
          href={"./"}
          className="box-img2-welcome h-[50vh] w-1/2 mx-5 bg-cover bg-blend-multiply bg-[#0005] duration-500 hover:bg-[#000c] text-white flex justify-center flex-col px-20"
        >
          <p className="font-semibold text-5xl">
            <span className="text-8xl">20</span>% OFF
          </p>
          <p className="text-6xl font-semibold">FARMER</p>
          <p className="text-6xl font-semibold">PRODUCTS</p>
        </Link>
        <Link
          className="box-img1-welcome h-[50vh] w-1/2 mx-5 bg-cover bg-blend-multiply bg-[#0005] duration-500 hover:bg-[#000c] text-white flex justify-center flex-col px-20"
          href={"./"}
        >
          <p className="font-semibold text-xl">ENJOY SEASONAL DEALS</p>
          <p className="text-6xl font-semibold">NEW</p>
          <p className="text-6xl font-semibold">ESSENTIALS</p>
          <p className="flex items-center mt-3">
            <span className="underline">SEE ALL PRODUCTS</span>
            <FaAngleRight />
          </p>
        </Link>
      </div>
    </>
  );
}
