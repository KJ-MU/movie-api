import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getGenre } from "../store";
import { Link } from "react-router-dom";
function DropdownMenu({
  isOpen,
  selectedOption,
  toggleDropdown,
  handleOptionClick,
}) {
  const options = useSelector((state) => state.genre);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGenre()); // Dispatch the action to fetch products
  }, [dispatch]);
  return (
    <div className="ml-2 ">
      <button onClick={toggleDropdown}>
        {selectedOption ? selectedOption.label : "Genre"}
      </button>

      {isOpen && (
        <div className="absolute bg-slate-800 p-1 ">
          <ul className="flex flex-col items-start ">
            {options.map((option) => (
              <Link to={`/movies/${option.id}`}>
                <li
                  className="flex shadow-2xl pl-2 w-32 hover:underline "
                  key={option.id}
                  onClick={() => handleOptionClick(option.id)}
                >
                  {option.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
