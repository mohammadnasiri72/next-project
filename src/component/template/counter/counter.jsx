"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Counter() {
  const [numBrand, setNumBrand] = useState(0);
  const [numStore, setNumStore] = useState(0);
  const [numHappyClient, setNumHappyClient] = useState(0);

  // useEffect(() => {
  //   let interValBrand = setInterval(() => {
  //     if (numBrand<=220) {
  //       setNumBrand(numBrand + 8);
  //     }
  //     if (numBrand > 220) {
  //       clearInterval(interValBrand);
  //     }
  //   }, 50);
  // }, [numBrand]);
  // useEffect(() => {
  //   let interValStore = setInterval(() => {
  //     if (numStore <= 13) {
  //       setNumStore(numStore+1);
  //     }
  //     if (numStore > 13) {
  //       clearInterval(interValStore);
  //     }
  //   }, 50);
  // }, [numStore]);
  // useEffect(() => {
  //   let interValHappyClient = setInterval(() => {
  //     if (numHappyClient<=631) {
  //       setNumHappyClient(numHappyClient + 18);
  //     }
  //     if (numHappyClient > 631) {
        
  //       clearInterval(interValHappyClient);
        
  //     }
  //   }, 50);
  // }, [numHappyClient]);
  
  
  return (
    <>
      <div className="w-full bg-[#679509dd] py-10 mt-10 flex flex-wrap justify-center items-center md:px-60">
        <div className="text-white flex flex-col justify-center items-center md:w-1/3 w-full">
          <p className="text-5xl font-semibold">{numBrand}</p>
          <p className="text-xs mt-3">Brands</p>
        </div>
        <div className="text-white flex flex-col justify-center items-center md:w-1/3 w-full">
          <p className="text-5xl font-semibold">{numStore}</p>
          <p className="text-xs mt-3">Stores</p>
        </div>
        <div className="text-white flex flex-col justify-center items-center md:w-1/3 w-full">
          <p className="text-5xl font-semibold">{numHappyClient}</p>
          <p className="text-xs mt-3">Happy Clients</p>
        </div>
      </div>
    </>
  );
}
