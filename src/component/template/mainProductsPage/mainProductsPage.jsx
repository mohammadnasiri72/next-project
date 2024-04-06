"use client";
import React, { useState } from "react";
import FilterProduct from "../filterProduct/filterProduct";
import ProductList from "../productList/productList";

export default function MainProductsPage({ product }) {
  const [checkBaking, setCheckBaking] = useState(false);
  const [checkFruit, setCheckFruit] = useState(false);
  const [checkOrganic, setCheckOrganic] = useState(false);
  const [checkPackage, setCheckPackage] = useState(false);
  const [checkVegetable, setCheckVegetable] = useState(false);
  let ArrPrice = [];
  function sortNumber(a, b) {
    return a - b;
  }
  product.map((e) => {
    ArrPrice.push(Number(e.price));
    ArrPrice.sort(sortNumber);
  });
 
  const max = Math.ceil(ArrPrice[ArrPrice.length - 1])
  const [valueFilter, setValueFilter] = useState([0, max]);
  const [value, setValue] = useState([0, max]);
  let products  = []
  if (!checkBaking && !checkFruit && !checkOrganic && !checkPackage && !checkVegetable) {
    products=[...product]
  }
  if (checkBaking) {
    products = [...products , ...product.filter((e)=>e.category==='Baking')]
  }
  if (checkFruit) {
    products = [...products , ...product.filter((e)=>e.category==='Fruit')]
  }
  if (checkOrganic) {
    products = [...products , ...product.filter((e)=>e.category==='Organic')]
  }
  if (checkPackage) {
    products = [...products , ...product.filter((e)=>e.category==='Package')]
  }
  if (checkVegetable) {
    products = [...products , ...product.filter((e)=>e.category==='Vegetable')]
  }
  products = products.filter((e)=> Number(e.price) >= valueFilter[0] && Number(e.price) <= valueFilter[1])
  
  
  
   
  
  return (
    <div className="px-10 flex flex-wrap">
      <div className="lg:w-1/4 w-full lg:border-r lg:pr-10">
        <FilterProduct
          product={products}
          checkBaking={checkBaking}
          setCheckBaking={setCheckBaking}
          checkFruit={checkFruit}
          setCheckFruit={setCheckFruit}
          checkOrganic={checkOrganic}
          setCheckOrganic={setCheckOrganic}
          checkPackage={checkPackage}
          setCheckPackage={setCheckPackage}
          checkVegetable={checkVegetable}
          setCheckVegetable={setCheckVegetable}
          max={max}
          setValueFilter={setValueFilter}
          value={value}
          setValue={setValue}
        />
      </div>
      <div className="lg:w-3/4 w-full lg:pl-10">
        <ProductList product={products} />
      </div>
    </div>
  );
}
