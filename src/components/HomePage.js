import React from "react";
import MovieCarousel from "./MovieCarousel";
import { useSelector } from "react-redux";
import Carousel from "./Carousel";
export const HomePage = () => {
  const popular = useSelector((state) => state.popular);
  return (
    <div>
      <MovieCarousel slides={popular} />
      <Carousel />
    </div>
  );
};
