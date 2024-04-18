// import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import "../App.css";
import { useState } from "react";
const Carousel = () => {
  const [nowPlayingViewportRef, nowPlayingEmbla] = useEmblaCarousel();
  const [topRatedViewportRef, topRatedEmbla] = useEmblaCarousel();
  const [upComingViewportRef, upComingEmbla] = useEmblaCarousel();
  const [popularViewportRef, popularEmbla] = useEmblaCarousel();

  const nowPlaying = useSelector((state) => state.nowPlaying);
  const popular = useSelector((state) => state.popular);
  const topRated = useSelector((state) => state.topRated);
  const upComing = useSelector((state) => state.upComing);

  return (
    <div className="mt-20 flex flex-col justify-start items-start gap-10 overflow-hidden">
      <p className=" font-bold text-2xl  px-5">Now Playing</p>
      <div className="carousel" ref={nowPlayingViewportRef}>
        <div className="carousel__container">
          {nowPlaying.map((movie, index) => (
            <div className="carousel__slide " key={index}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
      <p className=" font-bold text-2xl px-5 mt-20">Top Rated</p>
      <div className="carousel" ref={topRatedViewportRef}>
        <div className="carousel__container">
          {topRated.map((movie, index) => (
            <div className="carousel__slide" key={index}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
      <p className=" font-bold text-2xl px-5 mt-20">Up Coming</p>
      <div className="carousel" ref={upComingViewportRef}>
        <div className="carousel__container">
          {upComing.map((movie, index) => (
            <div className="carousel__slide" key={index}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
      <p className=" font-bold text-2xl px-5 mt-20">Popular</p>
      <div className="carousel" ref={popularViewportRef}>
        <div className="carousel__container">
          {popular.map((movie, index) => (
            <div className="carousel__slide" key={index}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
