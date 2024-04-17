import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import MovieDetails from "./MovieDetails";
import { Link } from "react-router-dom";
const MovieURL = "/movieDetails/id:";



const MovieCard = ({ item }) => {

  return (
    <div className="rounded-3xl w-48 object-contain h-auto shadow-sm bg-[#31363fe9] flex-col text-white">
      <Link to={`/movie/${item.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          className="rounded-t-3xl justify-center"
          // width="224"
          alt="movie.title"
        />
      </Link>
      <div className="flex flex-col h-32 text-sm justify-start items-start gap-1 p-5">
        <p className="font-bold flex flex-wrap text-left">
          {item.original_title}
        </p>
        <div className="flex justify-start items-center gap-2">
          <span>{item.vote_average}</span>
          <FaStar color="#FFE234" />
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="flex justify-start items-center gap-1">
            <p className="text-xs">{item.release_date}</p>
          </div>
          <FaRegBookmark size={20} />
        </div>
      </div>
    </div >
  );
};


export default MovieCard;

// import React from "react";
// import { FaRegBookmark } from "react-icons/fa";
// import { FaStar } from "react-icons/fa6";
// import { useDispatch } from "react-redux";
// import { setMovieDetailsId } from "../actions/movieActions"; 
// import MovieDetails from "./MovieDetails";

// const MovieCard = ({ item }) => {
//   const dispatch = useDispatch();

//   const handleDetailsPage = (movieId) => {
//     dispatch(setMovieDetailsId(movieId)); 
//   };

//   return (
//     <div
//       className="rounded-3xl w-48 object-contain h-auto shadow-sm bg-[#31363fe9] flex-col text-white cursor-pointer"
//       onClick={() => handleDetailsPage(item.id)}
//     >
//       <img
//         src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
//         className="rounded-t-3xl justify-center "
//         // width="224" // Optional width can be set here
//         alt="movie.title"
//       />
//       <div className="flex flex-col h-32 text-sm justify-start items-start gap-1 p-5">
//         <p className="font-bold flex flex-wrap text-left">
//           {item.original_title}
//         </p>
//         <div className="flex justify-start items-center gap-2">
//           <span>{item.vote_average}</span>
//           <FaStar color="#FFE234" />
//         </div>
//         <div className="w-full flex items-center justify-between">
//           <div className="flex justify-start items-center gap-1">
//             <p className="text-xs">{item.release_date}</p>
//           </div>
//           <FaRegBookmark size={20} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieCard;

