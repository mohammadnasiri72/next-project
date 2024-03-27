import Link from "next/link";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

export default function MainContactPage() {
  return (
    <>
      <iframe
        className="w-full h-[80vh]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d416.65247298006085!2d51.443934748132335!3d35.74271978951797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e03f704929699%3A0x4e906f7b9b8f3ac4!2z2YXYrNiq2YXYuSDZgdmG24wg2KrZh9ix2KfZhg!5e0!3m2!1sfa!2s!4v1670358228335!5m2!1sfa!2s"
      ></iframe>
      <div className="flex flex-wrap p-2 sm:p-10">
        <div className="lg:w-1/3 w-full p-0 sm:p-5 flex items-center lg:justify-start justify-center flex-col lg:flex-row">
          <FaPhone className="text-[#679509] text-7xl rounded-full border-[#679509] border p-4" />
          <div className="p-2">
            <p className="font-[Pacifico] text-xl text-slate-700 font-semibold text-center lg:text-start">
              Phone:
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start">
              <Link
                className="duration-300 hover:text-[#679509] p-1"
                href={"./contact"}
              >
                (719) 445-2808
              </Link>
              ;
              <Link
                className="duration-300 hover:text-[#679509] p-1"
                href={"./contact"}
              >
                (719) 445-2809
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 w-full p-0 sm:p-5 flex items-center lg:justify-start justify-center flex-col lg:flex-row">
          <IoLocation className="text-[#679509] text-7xl rounded-full border-[#679509] border p-4" />
          <div className="p-2">
            <p className="font-[Pacifico] text-xl text-slate-700 font-semibold text-center lg:text-start">
              Address:
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start">
              <p className="p-1 text-center lg:text-start">
                {" "}
                4578 Marmora Road, Glasgow{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 w-full p-0 sm:p-5 flex items-center lg:justify-start justify-center flex-col lg:flex-row">
          <MdOutlineMail className="text-[#679509] text-7xl rounded-full border-[#679509] border p-4" />
          <div className="p-2">
            <p className="font-[Pacifico] text-xl text-slate-700 font-semibold text-center lg:text-start">
              E-mail:
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start">
              <Link
                className="duration-300 hover:text-[#679509] p-1"
                href={"./contact"}
              >
                info@demolink.org
              </Link>
            </div>
          </div>
        </div>
      </div>
      <form action="post">
        <div className="flex flex-wrap px-10">
          <div className="lg:w-1/2 w-full">
            <input
              className="w-full border p-3 mt-2 outline-none"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="w-full border p-3 mt-2 outline-none"
              type="text"
              placeholder="Your Email"
            />
            <input
              className="w-full border p-3 mt-2 outline-none"
              type="text"
              placeholder="Your Website"
            />
            <input
              className="w-full border p-3 mt-2 outline-none"
              type="text"
              placeholder="Your Company"
            />
          </div>
          <div className="lg:w-1/2 w-full lg:p-2 p-0 mt-2 lg:mt-0">
            <textarea
              className="w-full h-36 p-3 outline-none border"
              placeholder="Your Comment"
            ></textarea>
          </div>
          <button className="bg-slate-700 p-3 text-white mt-3 duration-300 hover:bg-[#679509]">SEND MESSAGE</button>
        </div>
      </form>
    </>
  );
}
