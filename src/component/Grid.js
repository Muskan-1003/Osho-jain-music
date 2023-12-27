import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const Grid = () => {
  return (
    <div className=" bg-black w-full h-[700px]">
      <div className="grid grid-rows-3 grid-flow-col gap-4 ">
        <img
          src={img1}
          alt="img1"
          height={700}
          width={550}
          className="mt-8 row-span-3 ml-16 rounded-lg hover:scale-105 
          transition-transform duration-300 ease-in-out"
        />
        <img
          src={img2}
          alt="img2"
          className="col-span-2 mt-8 ml-12 rounded-lg hover:scale-105 
          transition-transform duration-300 ease-in-out"
        />
        <img
          src={img3}
          alt="img3"
          className="row-span-2 col-span-2 mt-5 rounded-lg 
          hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>
    </div>
  );
};

export default Grid;
