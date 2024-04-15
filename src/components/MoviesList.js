import React from "react";
import { useSelector } from "react-redux";
import Movie from "./Movie";
export const MoviesList = () => {
  const movies = useSelector((state) => state.movies);
  console.log("🚀 ~ MoviesList ~ movies:", movies);

  return (
    <div className="flex flex-wrap justify-center items-center gap-16 p-7">
      {movies.map((item, index) => (
        <Movie key={index} item={item} />
      ))}
    </div>
  );
};
