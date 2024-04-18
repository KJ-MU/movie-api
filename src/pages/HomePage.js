import React from "react";
import MovieCarousel from "../components/MovieCarousel";
import { useSelector } from "react-redux";
import Carousel from "../components/Carousel";
export const HomePage = () => {
  const popular = useSelector((state) => state.popular);
  return (
    <div>
      <MovieCarousel movies={popular} />
      <Carousel />
    </div>
  );
};
