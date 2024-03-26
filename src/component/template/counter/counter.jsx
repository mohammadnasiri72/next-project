"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";

export default function Counter() {
  const [numBrand, setNumBrand] = useState(0);
  const [numStore, setNumStore] = useState(0);
  const [numHappyClient, setNumHappyClient] = useState(0);
  const refCounter = useRef(null);

  const counterHandler = useCallback(()=>{
    setTimeout(() => {
      if (numBrand <= 220) {
        setNumBrand(numBrand + 8)
      }else if (numBrand > 220) {
        setNumBrand(225);
      }
      if (numStore <= 13){
        setNumStore(numStore + 1);
      }else if (numStore > 13) {
        setNumStore(14)
      }
      if (numHappyClient <= 631){
        setNumHappyClient(numHappyClient + 18);
      } else if (numHappyClient > 631) {
        setNumHappyClient(632);
      }
    }, 50);
  },[numBrand, numStore , numHappyClient])
  
  
  
  // const scrollCounterHandler = useCallback(()=>{
  //   if (scrollY > refCounter.current.offsetTop - window.innerHeight){
  //     console.log(scrollY);
  //     counterHandler()
  //     window.removeEventListener("scroll" , scrollCounterHandler)
  //   }
  // },[])
  
  useEffect(() => {
    // if (window.innerHeight - refCounter.current.offsetTop > 100) {
    //   counterHandler();
    // }
    // window.addEventListener("resize", () => {
    //   if (window.innerHeight - refCounter.current.offsetTop > 100) {
    //     counterHandler();
    //   }
    // });
    // window.addEventListener("scroll" , scrollCounterHandler)
    counterHandler()
  }, [numBrand, numStore, numHappyClient , counterHandler]);

  

  return (
    <>
      <div
        ref={refCounter}
        className="w-full bg-[#679509dd] py-10 mt-10 flex flex-wrap justify-center items-center md:px-60"
      >
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
