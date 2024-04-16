import React from "react";
import { BsPerson } from "react-icons/bs";
import { MdOutlineTheaterComedy } from "react-icons/md";
import { GrHomeRounded } from "react-icons/gr";
import { BiCameraMovie } from "react-icons/bi";

const BottomBar = () => {
  return (
    <div className="bg-[#1C2026] h-16 flex justify-between lg:hidden">
      <div className="w-full text-white flex justify-around self-center">
        <div className="flex flex-col">
          <GrHomeRounded className="self-center size-7" />
        </div>
        <div className="flex flex-col">
          <BiCameraMovie className="self-center size-7" />
        </div>
        <div className="flex flex-col">
          <MdOutlineTheaterComedy className="self-center size-7" />
        </div>
        <div className="flex flex-col">
          <BsPerson className="self-center size-7" />
          {}
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
