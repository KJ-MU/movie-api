import "./App.css";
import "./App.css";
import "./slider.css";
import { useEffect } from "react";
import { getNowPlaying, getUpComing, getPopular, getTopRated } from "./store";
import MovieCarousel from "./components/MovieCarousel";
import { useSelector, useDispatch } from "react-redux";

import Carousel from "./components/Carousel";
import NavBar from "./components/NavBar";
import BottomBar from "./components/bottomBar";
function App() {
  // const movies = useSelector((state) => state.movies);
  const nowPlaying = useSelector((state) => state.nowPlaying);
  console.log("🚀 ~ App ~ nowPlaying:", nowPlaying);
  const popular = useSelector((state) => state.popular);
  const topRated = useSelector((state) => state.topRated);
  const upComing = useSelector((state) => state.upComing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNowPlaying());
    dispatch(getPopular());
    dispatch(getUpComing());
    dispatch(getTopRated()); // Dispatch the action to fetch products
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <MovieCarousel slides={popular} />
      <Carousel />
      <BottomBar />
    </div>
  );
}

export default App;
