import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCastDetails } from "../store";
import { getActorMovies } from "../store";
import MovieCard from "./MovieCard";
import { FaStar } from "react-icons/fa6";
import "../App.css";
const ActorDetails = () => {
  const { id } = useParams();
  const castDetails = useSelector((state) => state.castDetails);
  const actorMovies = useSelector((state) => state.AcotrMovies);
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
            <div className="bg-black bg-opacity-70  flex justify-center flex-wrap shrink-0">
              <div className="py-10 w-3/5 flex flex-col items-start lg:flex-row   justify-center gap-10 text-white">
                <div className="flex flex-col justify-center items-start lg:items-start  gap-2">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${castDetails.profile_path}`}
                    width={300}
                    alt=""
                    className="rounded-xl"
                  />
                </div>
                <div className="lg:w-3/5  flex flex-col justify-center items-start gap-2 text-white text-start">
                  <h1 className="p-1 text-5xl">{castDetails.name}</h1>
                  <p className="p-1">
                    Gender: {castDetails.gender == 1 ? "Female" : "Male"}
                  </p>
                  <p className="p-1">Birthday: {castDetails.birthday}</p>
                  <p className="p-1 text-start">
                    Origin {castDetails.place_of_birth}
                  </p>
                  <div className="p-1 flex justify-start items-center gap-2">
                    <span>
                      Popularity:{" "}
                      {parseFloat(castDetails.popularity).toFixed(1)}
                    </span>
                    <FaStar color="#FFE234" />
                  </div>
                  <div className="p-1 max-h-52 overflow-auto">
                    <p className="text-wrap">{castDetails.biography}</p>
                  </div>
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
            <div key={index}>
              <MovieCard movie={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActorDetails;
