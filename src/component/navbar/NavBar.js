import React from "react";
import { NavLink } from "react-router-dom";


const NavBar = () => {
  
  return (
    <div  >
      <nav>
        <ul className="flex justify-center space-x-2 font-inter italic	items-center  pb-4 pt-2 font-semibold">
          <li>
            <NavLink to="/"  className=" active:underline">Home</NavLink>
          </li>
          <li>
            <NavLink to="/About" className=" active:underline">-About</NavLink>
          </li>
          <p>-Lekha Jhoka-</p>
          <li>
            <NavLink to="/Music" className=" active:underline">Music-</NavLink>
          </li>
          <li>
            <NavLink to="/Work" className=" active:underline">Work</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
