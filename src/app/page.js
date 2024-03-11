import MainPage from "@/component/template/mainPage/mainPage";
import Product from "@/component/template/products/product";
import Welcome from "@/component/template/welcome/welcome";
import productModel from '../models/product'
import connectToDb from "@/utils/db";
import Shop from "@/component/template/shop/shop";

export default async function Home({data}) {
  connectToDb()
  const product = await productModel.find({})
  return (
   <>
    <MainPage />
    <Welcome />
    <Product product={product}/>
    <Shop />
   </>
  )
}


// export async function getStaticProps() {
//   connectToDb()
//   const product = await productModel.find({})
  
//   return {
//     props: {
//       data: {
//         product: JSON.parse(JSON.stringify(product)),
//       },
//     },
//     revalidate: 60 * 60 * 12, // Second
//   };
// }