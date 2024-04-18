import React from 'react';
import { useSelector } from "react-redux";
import MovieCard from './MovieCard'

const Bookmark = () => {
    const bookmarkedMovies = useSelector((state) => state.bookmark);
    return (
        <div>
            {bookmarkedMovies.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
            ))}
        </div>
    )
}

export default Bookmark