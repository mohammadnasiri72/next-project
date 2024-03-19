import React, { useEffect, useRef, useState } from "react";

export default function ProgressBar() {
  const [widthBest, setWidthBest] = useState(0);
  const [widthFarmer, setWidthFarmer] = useState(0);
  const [widthFast, setWidthFast] = useState(0);
  const refPrpgress = useRef(null);
  const scrollHandler = () => {
    if (scrollY > refPrpgress.current.offsetTop - window.innerHeight + 50) {
      setWidthBest(90);
      setWidthFarmer(80);
      setWidthFast(70);
    }
    if (scrollY < refPrpgress.current.offsetTop - window.innerHeight + 50) {
      setWidthBest(0);
      setWidthFarmer(0);
      setWidthFast(0);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);
  return (
    <>
      <div ref={refPrpgress}>
        <h6 className="text-start text-xl font-semibold text-slate-700 whitespace-nowrap">
          {" "}
          Best Quality Products{" "}
        </h6>
        <div className="w-full h-4 bg-slate-200 mt-3">
          <div
            style={{ width: widthBest + "%" }}
            className="duration-1000 h-full bg-[#86ae34] rounded-e-lg text-white text-xs flex justify-end px-2"
          >
            90%
          </div>
        </div>
        <h6 className="text-start text-xl font-semibold text-slate-700">
          {" "}
          Farmer Products{" "}
        </h6>
        <div className="w-full h-4 bg-slate-200 mt-3">
          <div
            style={{ width: widthFarmer + "%" }}
            className="duration-1000 h-full bg-[#86ae34] rounded-e-lg text-white text-xs flex justify-end px-2"
          >
            80%
          </div>
        </div>
        <h6 className="text-start text-xl font-semibold text-slate-700">
          {" "}
          Fast Delivery{" "}
        </h6>
        <div className="w-full h-4 bg-slate-200 mt-3">
          <div
            style={{ width: widthFast + "%" }}
            className="duration-1000 h-full bg-[#86ae34] rounded-e-lg text-white text-xs flex justify-end px-2"
          >
            70%
          </div>
        </div>
      </div>
    </>
  );
}
