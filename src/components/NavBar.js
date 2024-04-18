import React, { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import DropdownMenu from "./DropdownMenu";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const [icon, setIcon] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleSearch = () => {
    setIsSearching(!isSearching);
    setIcon(!icon);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = () => {
    setIsOpen(false);
  };
  return (
    <div className="bg-[#1C2026] sticky border-b-2 top-0 z-10  w-full h-16 flex justify-between lg:justify-around">
      <div className="flex justify-center self-center text-xl text-white ml-3">
        EML
      </div>
      <nav className="hidden w-1/2 lg:flex justify-center self-center">
        <ul className="flex w-full justify-center gap-20 list-none  text-white">
          <Link to={"/"}>
            {" "}
            <li className="hover:underline">Home</li>
          </Link>
          <DropdownMenu
            isOpen={isOpen}
            selectedOption={selectedOption}
            toggleDropdown={toggleDropdown}
            handleOptionClick={handleOptionClick}
          />
          <li className="hover:underline">Actors</li>
          <li className="hover:underline">About</li>
        </ul>
      </nav>
      <div className="text-white flex justify-end self-center gap-3 md: w-1/2 lg:w-1/4">
        {isSearching ? (
          <div className="flex self-center w-full gap-2">
            <input
              type="text"
              class="py-1 px-4 block w-full border-gray-200 rounded-full text-sm text-black focus:border-[#1C2026] focus:ring-[#1C2026] disabled:opacity-50 disabled:pointer-events-none placeholder:text-sm md:py-1"
              placeholder="Search Movies & series"
            ></input>
            <div className="self-center">
              <MdOutlineSearch className="self-center mr-3 cursor-pointer size-7" />
            </div>
          </div>
        ) : (
          console.log(null)
        )}

        {!isSearching ? (
          <div className="self-center">
            <MdOutlineSearch
              className="self-center size-7 mr-3 cursor-pointer"
              onClick={handleSearch}
            />
          </div>
        ) : (
          console.log(null)
        )}
      </div>
    </div>
  );
};

export default NavBar;
