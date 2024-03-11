"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function Slider({ testimonials }) {
  return (
    <>
     <div className="pb-20">
     <Swiper className="mySwiper" loop="true">
        {testimonials.map((e) => (
            <SwiperSlide key={e._id}>
            <div key={e._id} className="w-20 h-20 mx-auto mt-5 rounded-full">
              <img className="rounded-full" src={e.img} alt="" />
            </div>
            <h3 className="text-white mt-3 text-xl font-semibold cursor-default">
              {e.name}
            </h3>
            <p className="text-white w-1/2 mx-auto text-sm font-semibold cursor-default">
              {e.desc}
            </p>
            <p className="text-white font-semibold cursor-default">Tim Diaz</p>
            <p className="text-white cursor-default">Customer</p>
          </SwiperSlide>
        ))}
        
      </Swiper>
     </div>
    </>
  );
}
