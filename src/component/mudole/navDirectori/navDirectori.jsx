"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavDirectori({ product }) {
  let url = usePathname().slice(1);
  let ArrUrl = [];
  while (url.indexOf("/") !== -1) {
    ArrUrl.push(url.slice(0, url.indexOf("/")));
    url = url.slice(url.indexOf("/") + 1);
  }
  product?.map((e) => {
    if (e._id === url) {
      url = e.title;
    }
  });

  return (
    <div className="w-full bg-slate-200 py-3 px-10 flex flex-wrap justify-between">
      <span className="font-semibold text-slate-700 text-xl">{url}</span>
      <div className="flex">
        <Link
          className="text-[#0005] duration-300 hover:text-slate-700"
          href={"./"}
        >
          Home
        </Link>
        <span className="px-2">/</span>
        {ArrUrl.map((e, i) => (
          <div key={i}>
            <Link
              className="text-[#0005] duration-300 hover:text-slate-700"
              href={"./"}
            >
              {e}
            </Link>
            <span className="px-2">/</span>
          </div>
        ))}
        <span>{url}</span>{" "}
        {/* {
          url.indexOf('/')===-1 ?
          <span className="mx-3">{url.slice(0,url.indexOf('/'))}</span> :
          <div>
            <Link className="text-[#0005] duration-300 hover:text-slate-700 mx-3" href={'./'}>{url.slice(0,url.indexOf('/'))}</Link> / 
            
            </div>
        } */}
      </div>
    </div>
  );
}
