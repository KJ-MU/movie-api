import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const initialState = {
  nowPlaying: [],
  popular: [],
  topRated: [],
  upComing: [],
  searchResults: [],
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "nowPlaying/fetch":
      return { ...state, nowPlaying: action.payload };

    case "popular/fetch":
      return { ...state, popular: action.payload };

    case "topRated/fetch":
      return { ...state, topRated: action.payload };

    case "upComing/fetch":
      return { ...state, upComing: action.payload };

    case "search/fetch":
      return { ...state, searchResults: action.payload };

    default:
      return state;
  }
};

export const getNowPlaying = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=51b15414097474cf95e6f8917f62ca5e"
      );
      const data = await res.json();
      dispatch({ type: "nowPlaying/fetch", payload: data.results });
    } catch (error) {
      console.error("Error fetching nowPlaying:", error);
    }
  };
};

export const getPopular = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=51b15414097474cf95e6f8917f62ca5e"
      );
      const data = await res.json();
      dispatch({ type: "popular/fetch", payload: data.results });
    } catch (error) {
      console.error("Error fetching popular:", error);
    }
  };
};

export const getTopRated = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=51b15414097474cf95e6f8917f62ca5e"
      );
      const data = await res.json();
      dispatch({ type: "topRated/fetch", payload: data.results });
    } catch (error) {
      console.error("Error fetching topRated:", error);
    }
  };
};

export const getUpComing = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=51b15414097474cf95e6f8917f62ca5e"
      );
      const data = await res.json();
      dispatch({ type: "upComing/fetch", payload: data.results });
    } catch (error) {
      console.error("Error fetching upComing:", error);
    }
  };
};

export const search = (query) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=51b15414097474cf95e6f8917f62ca5e`
      );
      const data = await res.json();
      dispatch({ type: "search/fetch", payload: data.results });
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };
};

const store = createStore(moviesReducer, applyMiddleware(thunk));

export default store;
