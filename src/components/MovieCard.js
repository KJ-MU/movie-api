import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const Movie = ({ item }) => {
  return (
    <div className="rounded-3xl w-48 object-contain h-auto shadow-sm bg-[#31363fe9] flex-col text-white">
      <img
        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        className=" rounded-t-3xl justify-center "
        // width="224"
        alt="movie.title"
      />
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
    </div>
  );
};

export default Movie;
