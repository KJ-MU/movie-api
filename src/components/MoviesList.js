import React from "react";
import { useSelector } from "react-redux";
import Movie from "./Movie";
export const MoviesList = () => {
  const movies = useSelector((state) => state.movies);
  console.log("🚀 ~ MoviesList ~ movies:", movies);

  return (
    <div>
      MoviesList
      {movies.map((item, index) => (
        <Movie key={index} item={item} />
      ))}
    </div>
  );
};
