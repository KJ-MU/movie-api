// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { getGenre } from "../store";
// import { Link } from "react-router-dom";
// function DropdownMenu({
//   isOpen,
//   selectedOption,
//   toggleDropdown,
//   handleOptionClick,
// }) {
//   const options = useSelector((state) => state.genre);

//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getGenre()); // Dispatch the action to fetch products
//   }, [dispatch]);
//   return (
//     <div className="ml-2 ">
//       <button onClick={toggleDropdown}>
//         {selectedOption ? selectedOption.label : "Genre"}
//       </button>

//       {isOpen && (
//         <div className="absolute bg-slate-800 p-1 ">
//           <ul className="flex flex-col items-start ">
//             {options.map((option) => (
//               <Link to={`/movies/${option.id}`}>
//                 <li
//                   className="flex shadow-2xl pl-2 w-32 hover:underline "
//                   key={option.id}
//                   onClick={() => handleOptionClick(option.id)}
//                 >
//                   {option.name}
//                 </li>
//               </Link>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default DropdownMenu;
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
    dispatch(getGenre()); // Dispatch the action to fetch genres
  }, [dispatch]);

  return (
    <div className="ml-2 relative">
      <button onClick={toggleDropdown}>
        {selectedOption ? selectedOption.label : "Genre"}
        <label className="hidden lg:block"> </label>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-slate-800 p-4 rounded-lg max-w-screen-md w-full">
            <ul className="flex flex-col items-start">
              {options.map((option) => (
                <Link key={option.id} to={`/movies/${option.id}`}>
                  <li
                    className="flex shadow-2xl pl-2 w-full hover:underline"
                    onClick={() => handleOptionClick(option.id)}
                  >
                    {option.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
