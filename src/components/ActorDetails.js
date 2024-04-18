import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCastDetails } from "../store";
import { getActorMovies } from "../store";
import MovieCard from "./MovieCard";
const ActorDetails = () => {
  const { id } = useParams();
  const castDetails = useSelector((state) => state.castDetails);
  console.log("🚀 ~ ActorDetails ~ castDetails:", castDetails);
  const actorMovies = useSelector((state) => state.AcotrMovies);
  console.log("🚀 ~ ActorDetails ~ actorMovies:", actorMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getCastDetails(id));
      dispatch(getActorMovies(id));
    }
  }, [dispatch, id]);
  return (
    <div id="main-container">
      <div className="bg-[#1C2026]">
        <div className="">
          <div className="w-full lg:h-screen bg-black bg-opacity-70">
            <div className="bg-black bg-opacity-70 lg:h-[80vh] flex justify-center flex-wrap shrink-0">
              <div className="py-10 w-3/5 flex flex-col items-start lg:flex-row  lg:items-center justify-center gap-10 text-white">
                <div className="flex flex-col justify-center items-start lg:items-center  gap-2">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${castDetails.profile_path}`}
                    width={300}
                    alt=""
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col justify-center items-start gap-2 text-white text-start">
                  <h1 className="p-1 text-5xl">{castDetails.name}</h1>
                  <p className="p-1">{castDetails.overview}</p>
                  <p className="p-1">Birthday: {castDetails.birthday}</p>
                  <p className="p-1 text-start">
                    Origin {castDetails.place_of_birth}
                  </p>
                  <div className="flex gap-1">
                    {castDetails.genres &&
                      castDetails.genres.map((genre) => {
                        return (
                          <span
                            className="px-3 py-1 text-center text-white rounded-lg bg-[#1c2026db]"
                            key={genre.id}
                          >
                            {genre.name}
                          </span>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div id="movies-container">
        {actorMovies && (
          <p className=" font-bold text-2xl  px-5 mt-10">Participated In</p>
        )}
        <div className="flex flex-wrap gap-10 justify-center items-center my-10">
          {actorMovies?.map((item, index) => (
            <div>
              <MovieCard index={index} item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActorDetails;
