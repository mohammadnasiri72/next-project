import React from 'react'

export default function Welcome() {
  return (
    <>
      <div className='flex justify-center items-center mt-10'>
        <p className='text-[#679509] font-[Pacifico] text-5xl font-semibold'>Welcome to our healthy farm!</p>
      </div>
      <div className='flex justify-center items-center px-10'>
        <div className='flex items-center flex-col w-1/3 mx-5'>
          <img src="./images/1.webp" alt="" />
          <p className='font-[Pacifico] text-2xl font-semibold text-slate-600 mt-5'>Best Quality Products</p>
          <p className='text-slate-600 text-justify text-last-center mt-5'>We stand for providing the most fresh organic products which will serve your health and be a source of vitamins and minerals for our clients.</p>
        </div>
        <div className='flex items-center flex-col w-1/3 mx-5'>
          <img src="./images/2.webp" alt="" />
          <p className='font-[Pacifico] text-2xl font-semibold text-slate-600 mt-5'>Farmer Products</p>
          <p className='text-slate-600 text-justify text-last-center mt-5'>We work with many farms to provide you with natural products grown with love and care with no GMO or pesticides.</p>
        </div>
        <div className='flex items-center flex-col w-1/3 mx-5'>
          <img src="./images/3.webp" alt="" />
          <p className='font-[Pacifico] text-2xl font-semibold text-slate-600 mt-5'>Fast Delivery</p>
          <p className='text-slate-600 text-justify text-last-center mt-5'>We want our client to receive their fresh products as soon as possible, so we process and ship the order at once.</p>
        </div>
      </div>
      <div className='flex justify-center items-center px-10'>
        <div className="box-img1-welcome h-[50vh] w-1/2 mx-5">

        </div>
        <div className="box-img1-welcome h-[50vh] w-1/2 mx-5">

        </div>
      </div>
    </>
  )
}
