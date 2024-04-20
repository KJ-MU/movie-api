import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const Bookmark = () => {
  const bookmarkedMovies = useSelector((state) => state.bookmark);
  return (
    <div className="flex flex-wrap gap-10 justify-start items-center p-10">
      {bookmarkedMovies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default Bookmark;
