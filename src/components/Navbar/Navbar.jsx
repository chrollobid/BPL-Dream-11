import React from 'react';
import dollarImg from "../../assets/BPL-dream-11-resource/assets/dollar 1.png"
import logoImg from "../../assets/BPL-dream-11-resource/assets/logo.png"
const Navbar = ({coin}) => {
    return (
 <div className="navbar container mx-auto bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl"><img src={logoImg} alt="" /></a>
  </div>
  <div className="flex-none">
    <button className=" flex justify-between items-center gap-2">
   {coin} Coins <img src={dollarImg} alt="" />
    </button>
  </div>
</div>
    );
};

export default Navbar;