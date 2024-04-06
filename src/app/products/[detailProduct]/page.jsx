import NavDirectori from "@/component/mudole/navDirectori/navDirectori";
import MainProductDetails from "@/component/template/mainProductDetails/mainProductDetails";
import cartModel from "@/models/cart";
import productModel from "@/models/product";
import connectToDb from "@/utils/db";
import React from "react";

export default async function DetailProduct(props) {
  connectToDb();
  const products = await productModel.find({});
  const cart = await cartModel.find({});
  let product = products.filter((e) => e._id == props.params.detailProduct)[0];
  return (
    <div>
      <NavDirectori product={products} />
      <MainProductDetails product={product} cart={cart}/>
     
    </div>
  );
}
