import React from "react";
import { MdOutlineSearch } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
const NavBar = () => {
  return (
    <div className="bg-[#1C2026] h-16 flex justify-between lg:justify-around">
      <div className="flex justify-center self-center text-xl text-white ml-3">
        EML
      </div>
      <nav className="hidden w-1/2 lg:flex justify-center self-center">
        <ul className="flex w-full justify-center gap-20 list-none text-white">
          <li>Home</li>
          <li>Movies</li>
          <li>Actors</li>
          <li>About</li>
        </ul>
      </nav>
      <div className="text-white flex self-center gap-2 lg:gap-5">
        <MdOutlineSearch className="size-8" />
        <BsFillPersonFill className="size-8 mr-3" />
      </div>
    </div>
  );
};

export default NavBar;
