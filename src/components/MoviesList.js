import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import MovieDetails from "./MovieDetails";
const MoviesList = ({ searchResults }) => {
  return (
    <div className="bg-[#1C2026]  p-10 flex flex-wrap gap-10 justify-center items-center">
      {searchResults.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesList;
