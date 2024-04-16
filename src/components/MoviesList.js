import React from "react";
import { useSelector } from "react-redux";
import MovieDetails from "./MovieDetails";

export const MoviesList = () => {
  const movies = useSelector((state) => state.popular);
  return (
    <div>
      MoviesList
      {movies.map((item, index) => (
        <MovieDetails key={index} movie={item} />
      ))}
    </div>
  );
};
