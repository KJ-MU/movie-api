import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MoviesList = ({ searchResults }) => {
  return (
    <div className="flex flex-wrap gap-10 justify-center items-center">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    <div>
      <div>
        {searchResults.map((item, index) => (
          <MovieDetails key={index} movie={item} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
