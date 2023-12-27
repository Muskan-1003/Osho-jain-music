import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitterSquare, FaYoutube, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <div className="flex flex-row space-x-10 text-3xl   ">
        <FaFacebookSquare className="bgg-slate-200 box-content px-3 py-2 rounded-lg shadow-lg
         shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-blue-600" />
        <FaTwitterSquare className="bgg-slate-200 box-content px-3 py-2 rounded-lg shadow-lg
         shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-blue-600" />
        <FaYoutube className="bgg-slate-200 box-content px-3 py-2 rounded-lg shadow-lg
         shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-blue-600" />
        <FaSquareInstagram className="bgg-slate-200 box-content px-3 py-2 rounded-lg shadow-lg
         shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-blue-600" />
      </div>
      <p className="font-semi-bold font-inter mt-4 cursor-pointer text-slate-400 ">
        @Terms & Condition
      </p>

    </div>
  );
};


export default Footer;
