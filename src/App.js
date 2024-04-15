import logo from './logo.svg';
import './App.css';
import "./slider.css";
import Movie from './components/Movie';
import Carousel from './components/Carousel';
import { useSelector, useDispatch, useEffect } from "react";


function App() {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies()); // Dispatch the action to fetch products
  }, [dispatch]);

  return (
    <div className="App">
      <Carousel slides={SLIDES} options={OPTIONS} />

      <Movie />
    </div>
  );
}

export default App;
