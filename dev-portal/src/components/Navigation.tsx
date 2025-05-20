import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className=" w-full grid grid-cols-12 h-20 justify-self-center  py-2 px-12 lg:px-28 mt-4 mb-8">
      <div className="col-span-2 lg:col-span-3 flex items-center justify-start ">
        {/* <img src="/logo.png" alt="Logo" className="h-10" /> */}
        <p>Logo</p>
      </div>
      <div className="col-span-10 lg:col-span-9 w-full flex items-center justify-end gap-x-12 ">
        <NavLink to="/">About Me</NavLink>
        <NavLink to="/timer">Timer</NavLink>
        <NavLink to="/jokes">Joke5</NavLink>
      </div>
    </div>
  );
};

export default Navigation;
