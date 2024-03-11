import Link from "next/link";
import React from "react";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosClock } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <div className="footer py-10 bg-no-repeat bg-cover">
        <div className="flex flex-wrap justify-center items-start md:px-32 px-10 mt-36">
          <div className="lg:w-1/4 sm:w-1/2 w-full flex flex-col justify-center items-start mt-10">
            <h4 className="font-[Pacifico] text-3xl mb-5">Categories</h4>
            <Link
              className="mt-3 hover:text-[#679509] duration-300 text-[#0008]"
              href={"./"}
            >
              New Products
            </Link>
            <Link
              className="mt-3 hover:text-[#679509] duration-300 text-[#0008]"
              href={"./"}
            >
              Our Stores
            </Link>
            <Link
              className="mt-3 hover:text-[#679509] duration-300 text-[#0008]"
              href={"./"}
            >
              Top sellers
            </Link>
            <Link
              className="mt-3 hover:text-[#679509] duration-300 text-[#0008]"
              href={"./"}
            >
              Your Health
            </Link>
          </div>
          <div className="lg:w-1/4 sm:w-1/2 w-full flex flex-col justify-center items-start mt-10">
            <h4 className="font-[Pacifico] text-3xl mb-5">Information</h4>
            <Link
              className="mt-3 hover:text-[#679509] duration-300 text-[#0008]"
              href={"./"}
            >
              Home
            </Link>
            <Link
              className="mt-3 hover:text-[#679509] duration-300 text-[#0008]"
              href={"./"}
            >
              About
            </Link>
            <Link
              className="mt-3 hover:text-[#679509] duration-300 text-[#0008]"
              href={"./"}
            >
              Blog
            </Link>
            <Link
              className="mt-3 hover:text-[#679509] duration-300 text-[#0008]"
              href={"./"}
            >
              Shop
            </Link>
            <Link
              className="mt-3 hover:text-[#679509] duration-300 text-[#0008]"
              href={"./"}
            >
              Contacts
            </Link>
          </div>
          <div className="lg:w-1/4 sm:w-1/2 w-full flex flex-col justify-center items-start mt-10">
            <h4 className="font-[Pacifico] text-3xl mb-5">My account</h4>
            <Link
              className="mt-3 hover:text-[#679509] duration-300 text-[#0008]"
              href={"./"}
            >
              Checkout
            </Link>
            <Link
              className="mt-3 hover:text-[#679509] duration-300 text-[#0008]"
              href={"./"}
            >
              Compare
            </Link>
            <Link
              className="mt-3 hover:text-[#679509] duration-300 text-[#0008]"
              href={"./"}
            >
              My account
            </Link>
            <Link
              className="mt-3 hover:text-[#679509] duration-300 text-[#0008]"
              href={"./"}
            >
              Wishlist
            </Link>
          </div>
          <div className="lg:w-1/4 sm:w-1/2 w-full flex flex-col justify-center items-start mt-10">
            <h4 className="font-[Pacifico] text-3xl mb-5 whitespace-nowrap">Store Information</h4>
            <div className="mt-3 flex justify-center items-center text-[#0008]">
              <IoLocation className="text-[#679509] text-2xl mx-2" />
              <p>Address: 4578 Marmora Road, Glasgow</p>
            </div>
            <div className="mt-3 flex justify-center items-center text-[#0008] whitespace-nowrap">
              <FaPhoneAlt className="text-[#679509] text-xl mx-2" />
              <div className="flex flex-col items-center">
                <p>
                  phones:
                  <Link
                    className="hover:text-[#679509] duration-300"
                    href={"./"}
                  >
                    +3(800) 2345-6789
                  </Link>
                  ,
                </p>
                <p>
                  <Link
                    className="hover:text-[#679509] duration-300"
                    href={"./"}
                  >
                    +3(800) 2345-6790
                  </Link>
                </p>
              </div>
            </div>
            <div className="mt-3 flex justify-center items-center text-[#0008]">
              <IoIosClock className="text-[#679509] text-3xl mx-2" />
              Hours: 7 Days a week from 9:00 am to 7:00 pm
            </div>
            <div className="mt-3 flex justify-center items-center text-[#0008] whitespace-nowrap">
            <AiOutlineMail className="text-[#679509] text-2xl mx-2"/>
            E-mail: 
            <Link className="hover:text-[#679509] duration-300" href={'./'}>info@demolink.org</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
