import NavDirectori from '@/component/mudole/navDirectori/navDirectori'
import MainProductsPage from '@/component/template/mainProductsPage/mainProductsPage'
import productModel from '@/models/product'
import connectToDb from '@/utils/db'
import React from 'react'


export default async function Products() {
  connectToDb()
  const product = await productModel.find({})
  return (
    <>
    <NavDirectori />
    <MainProductsPage product={product}/>
    </>
  )
}
