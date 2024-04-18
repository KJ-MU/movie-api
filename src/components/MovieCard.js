import React, { useMemo } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { addBookmark, removeBookmark } from '../store';

<<<<<<< HEAD
const MovieURL = "/movie/id:";

const MovieCard = ({ movie }) => {
  const bookmark = useSelector((state) => state.bookmark);

  const dispatch = useDispatch();

  const isBookmarked = useMemo(() => {
    return bookmark.some((bookmarkedMovie) => bookmarkedMovie.id === movie.id);
  }, [bookmark, movie.id]);

  const handleBookmark = () => {
    if (isBookmarked) {
      dispatch(removeBookmark(movie.id));
    } else {
      dispatch(addBookmark(movie));
    }
    console.log("🚀 ~ movie ~ bookmark:", bookmark)
  };

=======
const MovieCard = ({ item }) => {
>>>>>>> d46b4c4c6c9a696979b518b3371ddb770cd236d4
  return (
    <div className="rounded-3xl w-48 object-contain h-auto shadow-sm bg-[#31363fe9] flex-col text-white">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className="rounded-t-3xl justify-center"
          // width="224"
          alt="movie.title"
        />
<<<<<<< HEAD
      </Link>
      <div className="flex flex-col h-32 text-sm justify-start items-start gap-1 p-5">
        <p className="font-bold flex flex-wrap text-left">
          {movie.original_title}
        </p>
        <div className="flex justify-start items-center gap-2">
          <span>{movie.vote_average.toFixed(1)}</span>
          <FaStar color="#FFE234" />
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="flex justify-start items-center gap-1">
            <p className="text-xs">{movie.release_date.slice(0, 4)}</p>
          </div>
          <button onClick={handleBookmark}>
            {isBookmarked ? <FaBookmark size={20} />
              : <FaRegBookmark size={20} />
            }
          </button>

        </div>
      </div>
    </div >
=======
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
        </div>{" "}
      </Link>
    </div>
>>>>>>> d46b4c4c6c9a696979b518b3371ddb770cd236d4
  );
};

export default MovieCard;

<<<<<<< HEAD
=======
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
>>>>>>> d46b4c4c6c9a696979b518b3371ddb770cd236d4
