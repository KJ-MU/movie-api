import React, { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
const NavBar = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [icon, setIcon] = useState(true);
  const handleSearch = () => {
    setIsSearching(!isSearching);
    setIcon(!icon);
  };

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
        {isSearching ? (
          <div>
            <input
              type="text"
              class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            ></input>
            <button>Search</button>
          </div>
        ) : (
          console.log("object")
        )}
        <MdOutlineSearch
          className="size-8 mr-3 cursor-pointer"
          onClick={handleSearch}
        />
      </div>
    </div>
  );
};

export default NavBar;
