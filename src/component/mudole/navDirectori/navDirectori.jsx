"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavDirectori() {
  const url = usePathname().slice(1);
  return (
    <div className="w-full bg-slate-200 py-3 px-10 flex justify-between">
        <span className="font-semibold text-slate-700 text-xl">{url}</span>
      <div>
        <Link className="text-[#0005] duration-300 hover:text-slate-700 mx-3" href={"./"}>Home</Link>/
        <span className="mx-3">{url}</span>
      </div>
      
    </div>
  );
}
