"use client";
import React, { useState } from "react";
import { SlBasket } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa6";
import { RiScalesFill } from "react-icons/ri";
import Link from "next/link";

export default function MainProductDetails({ product , cart}) {
  const [numberProduct, setNumberProduct] = useState(1);
  const [alert, setAlert] = useState(false);
  const [eqProduct , setEqProduct] = useState(false)
  const addProductHandler = (e) => {
    setNumberProduct(e);
    if (e < 1) {
      setNumberProduct(1);
    }
  };
  const ShowAlertHandler = ()=>{
    setAlert(true)
    document.body.style.overflowY = 'hidden'
  }
  const closeAlertHandler = ()=>{
    setAlert(false)
    document.body.style.overflowY = 'auto'
  }
  product.number = numberProduct
  const addToCart = async ()=>{
    ShowAlertHandler()
    cart.map((e)=>{
      if (product._id === e._id) {
        setEqProduct(false)
        console.log("mojode");
      }else{
        setEqProduct(true)
      }
    })
   if (eqProduct) {
    const response = await fetch("/api/cart" , {
      method:"POST",
      headers:{
          "content-type" : "application/json"
      },
      body: JSON.stringify({ product })
  })
  if (response.status===201) {
      console.log('successfully add to cart');
  }
   }
}

  return (
    <>
      <div className="mt-10 lg:px-20 px-5 flex flex-wrap h-screen">
        <div className="lg:w-1/2 w-full">
          <img className="border lg:h-[80vh]" src={product.img} alt="" />
        </div>
        <div className="lg:w-1/2 w-full">
          <h2 className="text-3xl font-[Pacifico] text-slate-700 font-semibold">
            {product.title}
          </h2>
          <p className="text-[#679509] mt-6 text-4xl font-semibold">
            ${product.price}
          </p>
          <hr className="mt-5" />
          <p className="text-[#0008] mt-4 font-semibold">{product.desc}</p>
          <div className="flex mt-5">
            <input
              onChange={(e) => addProductHandler(e.target.value)}
              className="w-16 outline-none border p-1"
              type="number"
              value={numberProduct}
            />
            <button onClick={addToCart} className="mx-2 bg-[#679509] text-white p-3 text-xs font-bold duration-300 hover:bg-slate-700 flex">
              <SlBasket className="" />
              <span className="px-4">ADD TO CART</span>
            </button>
          </div>
          <hr className="mt-5" />
          <div className="flex mt-5">
            <RiScalesFill className="text-xl cursor-pointer hover:text-[#679509] mx-2" />
            <FaRegHeart className="text-xl cursor-pointer hover:text-[#679509] mx-2" />
          </div>
          <hr className="mt-5" />
        </div>
      </div>
      <div style={{transform: alert?'scale(1)':'scale(0)'}} className="w-1/2 bg-slate-100 fixed top-10 left-1/4 duration-300 z-20">
          <div className="px-5 h-32 flex flex-col justify-around">
          <h3 className="text-center text-2xl">product {product.title} added {numberProduct} number to cart</h3>
          <div className="flex justify-around">
            <button onClick={closeAlertHandler} className="bg-blue-600 text-white px-5 py-2 rounded-lg">continue buy</button>
            <Link onClick={closeAlertHandler} href={'/cart'}><button className="bg-[#679509] text-white px-5 py-2 rounded-lg">go to the cart</button></Link>
          </div>
          </div>
      </div>
     <div onClick={closeAlertHandler} style={{display: alert?'block':'none'}} className="fixed top-0 left-0 bottom-0 right-0 bg-[#0009]"></div>
    </>
  );
}
