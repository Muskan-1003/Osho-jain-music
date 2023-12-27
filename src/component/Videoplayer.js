import React from "react";
import img4 from "../assets/img4.png";
import play from "../assets/play.png";

const Videoplayer = () => {
  return (
    <div className="relative">
      <img
        src={img4}
        alt="img4"
        // height={500}
        // width={1343}
        className="rounded-xl w-screen	 h-screen	 "
      />
      <img
        src={play}
        alt="play"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      <p
        className="flex justify-center  font-inter italic items-center text-xl
       mt-2 font-medium "
      >
        Osho Jain-2024
      </p>
    </div>
  );
};

export default Videoplayer;
