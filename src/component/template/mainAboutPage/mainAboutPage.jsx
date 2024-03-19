"use client";
import React from "react";
import Counter from "../counter/counter";
import ProgressBar from "../progressBar/progressBar";

export default function MainAboutPage() {
  return (
    <>
      <div className="text-center">
        <h3 className="text-4xl text-slate-700 font-semibold font-[Pacifico] mt-10">
          About Us
        </h3>
        <h5 className="text-xl text-slate-700 font-semibold mt-4">
          5 Reasons to Love Butternut Squash
        </h5>
        <p className="text-[#0005] w-1/2 mx-auto mt-3">
          Look beyond butternut squash’s intimidating hard skin, and you’ll find
          a bright orange flesh, buttery texture and slightly sweet, nutty
          flavor — with so many meal possibilities! Why should you make
          butternut squash your go-to ingredient for fall and winter meals?
        </p>
      </div>
      <Counter />
      <div className="bg-main-about bg-cover bg-no-repeat lg:h-[70vh] min-h-64"></div>
      <div className="flex flex-wrap mt-10">
        <div className="lg:w-1/3 w-full flex flex-col items-center">
          <h4 className="font-[Pacifico] text-3xl text-slate-700 font-semibold">
            Free Shipping
          </h4>
          <p className="w-5/6 mx-auto text-center text-[#0005] mt-4">
            we work with proven designers and manufacturers, that’s why we can
            guarantee 100% quality of all items.
          </p>
        </div>
        <div className="lg:w-1/3 w-full flex flex-col items-center lg:mt-0 mt-10">
          <h4 className="font-[Pacifico] text-3xl text-slate-700 font-semibold">
            24/7 Support
          </h4>
          <p className="w-5/6 mx-auto text-center text-[#0005] mt-4">
            we ship all over USA as well as overseas. It takes 3-5 business days
            for package to be delivered within US.{" "}
          </p>
        </div>
        <div className="lg:w-1/3 w-full flex flex-col items-center lg:mt-0 mt-10">
          <h4 className="font-[Pacifico] text-3xl text-slate-700 font-semibold">
            Payment Process
          </h4>
          <p className="w-5/6 mx-auto text-center text-[#0005] mt-4">
            we offer affordable prices and regularly announce sales on last
            season’s items.{" "}
          </p>
        </div>
      </div>
      <div className="lg:mt-40 md:mt-20 sm:mt-10 mt-5">
        <h3 className="font-[Pacifico] text-3xl text-slate-700 font-semibold text-center">
          What We Can Do
        </h3>
        <p className="text-[#0005] mt-5 text-center">
          Check out the recent additions to our autumn collection and be
          fashionable!
        </p>
        <div className="lg:w-1/2 lg:px-0 md:px-10 sm:px-6 px-3 mx-auto mt-5 box-progress-bar">
          <ProgressBar />
        </div>
      </div>
      <div className="shop lg:h-[70vh] lg:min-h-96 h-full bg-cover bg-no-repeat bg-top flex flex-col items-center lg:mt-20 sm:mt-5 mt-0 pt-28 lg:pb-0 pb-48">
        <h3 className="font-[Pacifico] text-5xl font-semibold text-slate-700">
          The Founder
        </h3>
        <p className="md:w-1/2 sm:w-3/4 w-11/12 mx-auto text-center text-slate-700 font-semibold mt-4">
          Look beyond butternut squash’s intimidating hard skin, and you’ll find
          a bright orange flesh, buttery texture and slightly sweet, nutty
          flavor — with so many meal possibilities! Why should you make
          butternut squash your go-to ingredient for fall and winter meals?
        </p>
      </div>
    </>
  );
}
