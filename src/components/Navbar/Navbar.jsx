import React from "react";
import logo from "../../assets/logo.png"
import coin from "../../assets/DoubleDollar.png"

const Navbar = () => {
  return (
    <div className="navbar w-10/12 mx-auto">
      <div className="flex-1">
        <img className="w-15 h-15" src={logo} alt="" />
      </div>
      <div className="flex gap-6 justify-center items-center">
        <div className="flex gap-6">
          <a>Home</a>
          <a>Fixture</a>
          <a>Teams</a>
          <a>Schedules</a>
        </div>
        <div className="flex justify-center items-center gap-1 font-bold border-2 border-gray-300 px-4 py-3 rounded-md">
          <span>0</span>
          <span>Coin</span>
          <img className="w-5 h-5" src={coin} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
