import logo from "./logo.svg";
import "./App.css";

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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
