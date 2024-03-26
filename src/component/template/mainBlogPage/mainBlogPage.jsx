"use client";
import React from "react";

export default function MainBlogPage({ blog }) {
  return (
    <div className="flex flex-wrap px-10">
      {blog.map((e) => (
        <div key={e._id} className="md:w-1/2 w-full p-5">
          <img className="w-full cursor-pointer object-cover" src={e.img} alt=""/>
          <div className="flex">
            <span className="text-xs text-[#0008] p-3 cursor-pointer duration-300 hover:text-[#679509]">
              admin
            </span>
            <span className="text-xs text-[#0008] p-3 cursor-pointer duration-300 hover:text-[#679509]">
              {e.date}
            </span>
          </div>
          <h2 className="text-4xl font-[Pacifico] font-semibold text-slate-700 cursor-pointer duration-300 hover:text-[#679509] mt-3">
            {e.title}
          </h2>
          <p className="text-[#0008] mt-5">
            {e.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
