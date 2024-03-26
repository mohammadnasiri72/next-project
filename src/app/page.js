import MainPage from "@/component/template/mainPage/mainPage";
import Product from "@/component/template/products/product";
import Welcome from "@/component/template/welcome/welcome";
import productModel from '../models/product'
import blogModel from '../models/blog'
import connectToDb from "@/utils/db";
import Shop from "@/component/template/shop/shop";
import BlogHomePage from "@/component/template/blogHomePage/blogHomePage";
import Testimonials from "@/component/template/Testimonials/Testimonials";
import testimonialsModel from "@/models/testimonials";
import NewsLetters from "@/component/template/newsLetters/newsLetters";

export default async function Home() {
  connectToDb()
  const product = await productModel.find({})
  const blog = await blogModel.find({})
  const testimonials = await testimonialsModel.find({})
  return (
   <>
    <MainPage />
    <Welcome />
    <Product product={product}/>
    <Shop />
    <BlogHomePage blog={blog} />
    <Testimonials testimonials={testimonials}/>
    <NewsLetters />
   </>
  )
}


