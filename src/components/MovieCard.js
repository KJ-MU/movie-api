import React, { useMemo } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { addBookmark, removeBookmark } from "../store";

const MovieURL = "/movie/id:";

const MovieCard = ({ movie }) => {
  const bookmark = useSelector((state) => state.bookmark);
  const dispatch = useDispatch();

  const isBookmarked = useMemo(() => {
    return bookmark.some((bookmarkedMovie) => bookmarkedMovie.id === movie.id);
  }, [bookmark, movie.id]);

  const handleBookmark = () => {
    if (movie) {
      if (isBookmarked) {
        dispatch(removeBookmark(movie.id));
      } else {
        dispatch(addBookmark(movie));
      }
    }
    console.log("🚀 ~ movie ~ bookmark:", bookmark);
  };

  return (
    <div className="rounded-3xl w-48 object-contain h-auto shadow-sm bg-[#31363fe9] flex-col text-white">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className="rounded-t-3xl justify-center"
          // width="224"
          alt="movie.title"
        />
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
            {isBookmarked ? (
              <FaBookmark size={20} />
            ) : (
              <FaRegBookmark size={20} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
