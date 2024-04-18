import React from "react";
import { BsPerson } from "react-icons/bs";
import { MdOutlineTheaterComedy } from "react-icons/md";
import { GrHomeRounded } from "react-icons/gr";
import { BiCameraMovie } from "react-icons/bi";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import { useState } from "react";
const BottomBar = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = () => {
    setIsOpen(false);
  };
  return (
    <div className="bg-[#1C2026] fixed bottom-0 w-full h-16 flex justify-between lg:hidden">
      <div className="w-full text-white flex justify-around self-center">
        <div className="flex flex-col">
          <Link to={"/"}>
            <GrHomeRounded className="self-center size-7" />{" "}
          </Link>
        </div>

        <div className="flex flex-col">
          <BiCameraMovie className="self-center size-7" />
          <DropdownMenu
            isOpen={isOpen}
            selectedOption={selectedOption}
            toggleDropdown={toggleDropdown}
            handleOptionClick={handleOptionClick}
          />
        </div>
        <div className="flex flex-col">
          <MdOutlineTheaterComedy className="self-center size-7" />
        </div>
        <div className="flex flex-col">
          <BsPerson className="self-center size-7" />
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
