"use client";
import React from "react";
import ProgressBar from "../progressBar/progressBar";

export default function MainTeamPage({ team }) {
  return (
    <>
      <div className="text-center">
        <h4 className="text-slate-700 font-semibold font-[Pacifico] text-4xl mt-20">
          Our Team
        </h4>
        <p className="lg:w-1/3 sm:w-2/3 w-11/12 mx-auto text-center text-[#0005] font-semibold mt-5">
          With their unusual shapes and varied colors, winter squash — including
          acorn, spaghetti and butternut squash — make beautiful table
          decorations.
        </p>
      </div>
      <div className="px-20 flex flex-wrap justify-around pb-20">
        {team.map((person) => {
          return (
            <div key={person._id} className="md:w-1/4 w-full relative mt-5">
            <img src={person.img} alt="" />
            <div className="absolute w-full bottom-0 top-0 left-0 ring-0 flex items-end duration-300 box-desc">
                <div className=" w-full h-0 duration-500 bg-[#3f3f3faa] desc overflow-hidden flex flex-col justify-center items-center">
                  <h6 className="text-white font-[Pacifico] text-2xl">{person.name}</h6>
                  <p className="text-[#679509]">{person.char}</p>
                  <p className="text-white text-center px-5">{person.desc}</p>
                </div>
            </div>
        </div>
          );
        })}
      </div>
      <div className="box-attachment-team"></div>
      <div className="mt-10">
        <h4 className="text-center font-[Pacifico] text-3xl text-slate-700 font-semibold pb-6">Our skills</h4>
        <div className="flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:px-20 px-10 ">
            <p className="text-[#0005]">Coconut Oil is a great-tasting, nutritious alternative to use when cooking or baking. Coconut Oil is a naturally rich source of medium chain triglycerides (MCTs), which are quickly absorbed by the body to produce energy. MCTs are hydrolyzed more rapidly and metabolized more readily than long chain fatty acids. Our cold-pressed, organic extra virgin oil is from the Philippines and is naturally free of trans fat, 100% cholesterol free, contains no hexane and is certified non-GMO.  Vita Extra Virgin Organic Coconut Oil is highly heat stable, ideal for cooking and makes a delicious, energizing substitute for regular oils, butter or shortening in recipes. Spread on bread or mix into your favorite smoothie</p>
          </div>
          <div className="lg:w-1/2 w-full px-10">
            <ProgressBar />
          </div>
        </div>
      </div>
    </>
  );
}
