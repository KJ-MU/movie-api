import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMovies } from "./store";
function App() {
  const movies = useSelector((state) => state.movies);
  console.log("🚀 ~ App ~ movies:", movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies()); // Dispatch the action to fetch products
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        {" "}
        {movies.map((movie) => (
          <p>{movie.original_title}</p>
        ))}
      </header>
    </div>
  );
}

export default App;
