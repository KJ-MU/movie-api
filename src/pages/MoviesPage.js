import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMoviesByGenre } from "../store";
import MovieCard from "../components/MovieCard";
export const MoviesPage = () => {
  const { id } = useParams();
  const moviesByGenre = useSelector((state) => state.moviesByGenre);
  const genre = useSelector((state) => state.genre);
  console.log("🚀 ~ MoviesPage ~ genre:", genre);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getMoviesByGenre(id));
    }
  }, [dispatch, id]);
  return (
    <div>
      {/* <div>
        {genre.find((item, index) =>
          id === String(index) ? (
            <div key={index}>
              <p className="font-bold text-2xl px-5">{item.name}</p>
            </div>
          ) : null
        )}
      </div> */}
      <div className="mt-20 flex flex-wrap justify-center items-center gap-10 ">
        {moviesByGenre.map((movie, index) => (
          <div key={index}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};
