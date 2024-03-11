import Link from "next/link";
import React from "react";

export default function BlogHomePage({ blog }) {
  return (
    <div>
      <h3 className="text-center font-[Pacifico] text-3xl font-semibold text-slate-700">
        Latest from the Blog
      </h3>
      <div className="flex flex-wrap px-10">
        {blog.slice(0,3).map((item) => {
          return (
            <>
              <div className="lg:w-1/3 w-full p-10">
                <img
                  className="w-full object-cover h-64 cursor-pointer rounded-lg"
                  src={item.img}
                  alt=""
                />
                <h4 className="text-center mt-4 text-slate-700 font-semibold hover:text-[#679509] duration-300 cursor-pointer">
                  {item.title}
                </h4>
                <div className="flex justify-center mt-2">
                  <Link
                    className="text-xs text-[#0005] duration-300 hover:text-[#679509] mx-2"
                    href={"./"}
                  >
                    admin
                  </Link>
                  <Link
                    className="text-xs text-[#0005] duration-300 hover:text-[#679509] mx-2"
                    href={"./"}
                  >
                    {item.date}
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
