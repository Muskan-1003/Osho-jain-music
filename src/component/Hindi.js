import React from "react";
import Marquee from "react-fast-marquee";

const Hindi = () => {
  return (
    <Marquee autoFill pauseOnHover>
      <div className="bg-slate-100 shadow-md m-5 mt-7 rounded-xl space-x-5 p-4 font-bold text-black text-xl cursor-pointer">
        <span>
          Immerse Yourself in Osho Jain's Melodic Odyssey With Osho Jain
        </span>
      </div>
      <div className="bg-slate-100 shadow-md m-5 mt-7 rounded-xl space-x-5 p-4 font-bold text-black text-xl cursor-pointer">
        <span>
          ओशो जैन की आवाज में समाहित हों: एक नए संगीत के सफर में लीपने का समय!
        </span>
      </div>
    </Marquee>
  );
};

export default Hindi;
