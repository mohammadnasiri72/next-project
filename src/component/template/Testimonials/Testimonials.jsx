import React from 'react'
import Slider from './slider'

export default function Testimonials({testimonials}) {
  return (
    <>
    <div className='box-slider-home-page px-10 bg-cover bg-no-repeat pb-10'>
        <h3 className='text-4xl font-[Pacifico] text-white font-semibold text-center pt-36'>Our Clients Testimonials</h3>
        <Slider testimonials={testimonials}/>
    </div>
    </>
  )
}
