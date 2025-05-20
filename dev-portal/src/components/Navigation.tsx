import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navigation = () => {
  return (
    <div className=" w-full grid grid-cols-12  justify-self-center items-center  py-2 px-12 lg:px-28  mb-8">
      <div className="col-span-2 lg:col-span-3 flex items-center justify-start ">
        <NavLink to="/">
          <img src={logo} alt="Logo" className="w-32" />
        </NavLink>
      </div>
      <div className="col-span-10 lg:col-span-9 w-full flex items-center justify-end gap-x-4 md:gap-x-12 ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${
              isActive
                ? "text-green-300 underline underline-offset-4"
                : undefined
            }`
          }
        >
          About Me
        </NavLink>
        <NavLink
          to="/timer"
          className={({ isActive }) =>
            `${
              isActive
                ? "text-green-300 underline underline-offset-4"
                : undefined
            }`
          }
        >
          Timer
        </NavLink>
        <NavLink
          to="/jokes"
          className={({ isActive }) =>
            `${
              isActive
                ? "text-green-300 underline underline-offset-4"
                : undefined
            }`
          }
        >
          Jokes
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
