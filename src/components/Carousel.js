// import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useSelector } from "react-redux";
import Movie from "./MovieCard";
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
    <div className="flex flex-col justify-start items-start gap-20">
      <div className="carousel" ref={nowPlayingViewportRef}>
        <div className="carousel__container">
          {nowPlaying.map((item, index) => (
            <div className="carousel__slide " key={index}>
              <Movie item={item} />
            </div>
          ))}
        </div>
      </div>

      <div className="carousel" ref={topRatedViewportRef}>
        <div className="carousel__container">
          {topRated.map((item, index) => (
            <div className="carousel__slide" key={index}>
              <Movie item={item} />
            </div>
          ))}
        </div>
      </div>

      <div className="carousel" ref={upComingViewportRef}>
        <div className="carousel__container">
          {upComing.map((item, index) => (
            <div className="carousel__slide" key={index}>
              <Movie item={item} />
            </div>
          ))}
        </div>
      </div>
      <div className="carousel" ref={popularViewportRef}>
        <div className="carousel__container">
          {popular.map((item, index) => (
            <div className="carousel__slide" key={index}>
              <Movie item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
