"use client"
import React, { useState } from 'react'

export default function NewsLetters() {
  const [email , setEmail] = useState("")
  const joinHandler = async ()=>{
    const response = await fetch("/api/newsLetters" , {
        method:"POST",
        headers:{
            "content-type" : "application/json"
        },
        body: JSON.stringify({ email })
    })
    if (response.status===201) {
        setEmail("")
        alert("successfully joined")
    }
}
  return (
    <>
        <div className='mt-20'>
        <div className='text-center'>
            <h3 className='text-4xl font-[Pacifico] font-semibold text-slate-700'>Subscribe Newsletter</h3>
        </div>
        <div className='flex justify-center items-center mt-3'>
            <input onChange={(e)=> setEmail(e.target.value)} className='sm:w-1/4 w-full border p-3 m-2 outline-none' type="text" placeholder='Enter Your Email' value={email}/>
            <button onClick={joinHandler} className='bg-[#679509] px-7 py-3 text-white duration-300 hover:bg-slate-700'>Subscribe</button>
        </div>
        </div>
    </>
  )
}
