import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

export const MoviesList = () => {
  const movies = useSelector((state) => state.popular);
  return (
    <div className="flex flex-wrap gap-10 justify-center items-center">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};
