import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const Movie = ({ item }) => {
  return (
    <div className="rounded-3xl max-w-[370px] shadow-sm bg-[#31363fe9] flex-col text-white">
      <img
        src={item.poster_path}
        width="375"
        height="200"
        class="rounded-t-3xl justify-center grid h-80 object-cover"
        alt="movie.title"
      />
      <div className="flex flex-col justify-start items-start gap-2 p-5">
        <span className="font-bold">{item.original_title}</span>
        <div className="flex justify-start items-center gap-2">
          <span>{item.vote_average}</span>
          <FaStar color="#FFE234" />
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="flex justify-start items-center gap-1">
            <span>Animation , </span>
            <span>{item.release_date}</span>
          </div>
          <FaRegBookmark size={20} />
        </div>
      </div>
    </div>
  );
};

export default Movie;
