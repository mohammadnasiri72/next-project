// https://demo.templatemonster.com/demo/66344.html?_gl=1*g8ngwd*_ga*MjEwNzEzNjQ1Ni4xNjc4Mjg2ODg4*_ga_FTPYEGT5LY*MTcwOTcxOTMzMy4xNC4xLjE3MDk3MTk5OTMuOS4wLjA.
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
   <>
    <div className='w-full h-16 bg-[#679509] flex justify-between items-center px-10 text-white'>
        <div>
            <p>Last sale up to <span className='font-bold'>20%</span> OFF. Use code “<span className='font-bold'>SALE70</span>”.</p>
        </div>
        <div className='flex justify-center items-center'>
            <Link href={'./'}>Compare</Link>
            <Link href={'./'}>Wishlist</Link>
        </div>
    </div>
   </>
  )
}
