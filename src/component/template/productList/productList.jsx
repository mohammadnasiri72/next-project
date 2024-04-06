"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaEye } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { RiScalesFill } from "react-icons/ri";
import { SlBasket } from "react-icons/sl";

export default function ProductList({ product }) {
  const [sort, setSort] = useState("");
  const [numPage, setNumPage] = useState(1);
  let products = [...product];

  useEffect(() => {
    setNumPage(1);
  }, [product]);

  switch (sort) {
    case "default": {
      products = [...product];
      break;
    }
    case "price-lth": {
      products.sort((a, b) => a.price - b.price);
      break;
    }
    case "price-htl": {
      products.sort((a, b) => b.price - a.price);
      break;
    }
    case "average": {
      products.sort((a, b) => b.score - a.score);
      break;
    }

    default:
      break;
  }

  const addnumberPageHandler = () => {
    window.scrollTo(0, 150);
    if (numPage > 1) {
      setNumPage(numPage - 1);
    } else {
      setNumPage(1);
    }
  };
  const minusNumberPageHandler = () => {
    window.scrollTo(0, 150);
    if (numPage < Math.ceil(products.length / 9)) {
      setNumPage(numPage + 1);
    } else {
      setNumPage(Math.ceil(products.length / 9));
    }
  };
  const numberPageHandler = (i) => {
    setNumPage(i + 1);
    window.scrollTo(0, 150);
  };
  return (
    <>
      <div className="mt-10">
        <h2 className="text-3xl font-[Pacifico] text-slate-700 font-semibold">
          Shop
        </h2>
        <select
          onChange={(e) => setSort(e.target.value)}
          className="px-5 py-3 mt-5 sm:w-64 bg-transparent border rounded-md"
          name="sorting"
          id=""
        >
          <option value="default">default sort</option>
          <option value="price-lth">sort by price : low to high</option>
          <option value="price-htl">sort by price : high to low</option>
          <option value="average">sort by average rating</option>
        </select>
        <div className="flex flex-wrap mt-5">
          {products.slice((numPage - 1) * 9, numPage * 9).map((e) => (
            <Link className="lg:w-1/3 sm:w-1/2 w-full p-4 card-product relative cursor-pointer" key={e._id} href={`/products/${e._id}`}>
              <div
              
              
            >
              <img className="border z-20" src={e.img} alt="" />
              <div className="text-center pb-10 pt-2 relative overflow-hidden">
                <h3 className="whitespace-nowrap duration-100 box-title text-[#679509]">
                  {e.title}
                </h3>
                <p className="duration-500 box-price font-semibold text-2xl">
                  ${e.price}
                </p>
                <div className="absolute w-full top-full duration-300 opacity-0 invisible box-add-to-cart">
                  <button className="text-white bg-[#679509] w-full py-3 flex justify-center items-center text-xl font-semibold duration-300 hover:bg-slate-700">
                    <SlBasket className="mx-2 text-2xl" />
                    add to cart
                  </button>
                  <div className="flex justify-around mt-2">
                    <FaEye className="text-xl cursor-pointer hover:text-[#679509]" />
                    <FaRegHeart className="text-xl cursor-pointer hover:text-[#679509]" />
                    <RiScalesFill className="text-xl cursor-pointer hover:text-[#679509]" />
                  </div>
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center items-center mt-5">
          <FaAngleDoubleLeft
            className="duration-300 hover:text-[#679509] cursor-pointer text-2xl"
            onClick={addnumberPageHandler}
          />
          {new Array(Math.ceil(products.length / 9)).fill().map((e, i) => {
            return (
              <span
                key={i}
                style={{
                  backgroundColor:
                    numPage === i + 1 ? "#679509" : "transparent",
                  color: numPage === i + 1 ? "white" : "black",
                }}
                onClick={() => numberPageHandler(i)}
                className="px-4 py-3 border border-[#679509] mx-2 duration-300 cursor-pointer number-page"
              >
                {i + 1}
              </span>
            );
          })}
          <FaAngleDoubleRight
            className="duration-300 hover:text-[#679509] cursor-pointer text-2xl"
            onClick={minusNumberPageHandler}
          />
        </div>
      </div>
    </>
  );
}
