
import NavDirectori from '@/component/mudole/navDirectori/navDirectori'
import MainBlogPage from '@/component/template/mainBlogPage/mainBlogPage'
import blogModel from '@/models/blog'
import connectToDb from '@/utils/db'
import React from 'react'

export default async function Blog() {
    connectToDb()
    const blog = await blogModel.find({})
  return (
    <>
    <NavDirectori />
    <MainBlogPage blog={blog}/>
    </>
  )
}
