import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const Bookmark = () => {
  const bookmarkedMovies = useSelector((state) => state.bookmark);
  return (
    <div className="bg-[#1C2026]  p-10 flex flex-wrap gap-10 justify-center items-center">
      {bookmarkedMovies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default Bookmark;
