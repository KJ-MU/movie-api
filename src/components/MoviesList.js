import React from "react";
import MovieDetails from "./MovieDetails";

const MoviesList = ({ searchResults }) => {
  return (
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
