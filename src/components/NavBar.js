import React, { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import DropdownMenu from "./DropdownMenu";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../store";
import { useNavigate } from "react-router-dom";
import { FaRegBookmark } from "react-icons/fa";

const NavBar = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [icon, setIcon] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState(""); //!FOR SEARCH

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = () => {
    setIsSearching(!isSearching);
    setIcon(!icon);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  //!FOR SEARCH

  const handleSearchBtn = () => {
    if (searchValue === "") {
      return;
    }
    dispatch(search(searchValue));
    setSearchValue("");
    handleSearch();
    navigate("/search");
  };

  const handleSendByEnter = (event) => {
    if (event.keyCode === 13) {
      handleSearchBtn();
    }
  };

  //!FOR SEARCH

  const handleOptionClick = () => {
    setIsOpen(false);
  };
  return (
    <div className="bg-[#1C2026] sticky border-b-2 top-0 z-10  w-full h-16 flex justify-between lg:justify-around">
      <div className="flex justify-center self-center text-xl text-white ml-3">
        <Link to={"/"}>EML </Link>
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
          <Link to={"/actors"}>
            <li className="hover:underline">Actors</li>
          </Link>
          <Link to={"/about"}>
            <li className="hover:underline">About</li>
          </Link>
        </ul>
      </nav>
      <div className="text-white flex justify-end self-center gap-3 md: w-1/2 lg:w-1/4">
        {isSearching ? (
          <div className="flex self-center w-full gap-2">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="py-1 px-4 block w-full border-gray-200 rounded-full text-sm text-black focus:border-[#1C2026] focus:ring-[#1C2026] disabled:opacity-50 disabled:pointer-events-none placeholder:text-sm md:py-1"
              placeholder="Search Movies & series"
              value={searchValue} //!FOR SEARCH
              onChange={handleChange} //!FOR SEARCH
              onKeyDown={handleSendByEnter} //!FOR SEARCH
            />
            <div className="self-center">
              <MdOutlineSearch
                className="self-center mr-3 cursor-pointer size-7"
                onClick={handleSearchBtn} //!FOR SEARCH
              />
            </div>
          </div>
        ) : null}

        {!isSearching ? (
          <div className="self-center">
            <MdOutlineSearch
              className="self-center size-7 mr-3 cursor-pointer"
              onClick={handleSearch}
            />
          </div>
        ) : null}
        <Link to={"./bookmarked"} className="self-center">
          <FaRegBookmark size={20} />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
