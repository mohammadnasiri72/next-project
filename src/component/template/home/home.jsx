import React from 'react'

export default function HomePage() {
  return (
    <div className='homePage h-screen bg-cover p-20'>
        <div>
            <p className='text-7xl font-semibold text-slate-600'>Green Leaves</p>
            <p className='text-7xl font-semibold text-slate-600'>Up To <span className='text-[#679509]'>20% Off</span></p>
            <p className='text-3xl font-semibold text-slate-600 mt-3 font-[Pacifico]'>Always Fresh, Crispy and Full of Vitamins</p>
            <button className='text-white bg-[#679509] px-6 py-4 mt-10 font-semibold text-lg duration-300 hover:bg-slate-600'>ADD TO CART</button>
        </div>
    </div>
  )
}
