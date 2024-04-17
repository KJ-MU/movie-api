import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaStar } from "react-icons/fa6";
import ActorCard from './ActorCard';
import { getMovieDetails, getMovieCast, getDirector, getTrailer } from '../store';
import { useParams } from 'react-router-dom';
import { bookmark } from '../bookmark';

const MovieDetails = () => {
    const [isShown, setIsShown] = useState(false)

    const { id } = useParams();
    const movieDetails = useSelector((state) => state.movieDetails);
    const movieCast = useSelector((state) => state.movieCast);
    const director = useSelector((state) => state.director);
    const trailer = useSelector((state) => state.trailer);
    console.log(trailer);
    const dispatch = useDispatch();

    const handleBookmark = () => {
        bookmark.push(movieDetails);
        console.log("🚀 ~ handleBookmark ~ bookmark:", bookmark)

    }

    useEffect(() => {
        if (id) {
            dispatch(getMovieDetails(id));
            dispatch(getMovieCast(id));
            dispatch(getDirector(id));
            dispatch(getTrailer(id));
        }
    }, [dispatch, id]);
    return (
        <div className='bg-[#1C2026]'>
            <div className="">
                <div style={{ '--image-url': `url(https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path})` }}
                    className="w-full lg:h-[80vh] bg-[image:var(--image-url)] bg-no-repeat bg-cover">
                    <div className='bg-black bg-opacity-70 lg:h-[80vh] flex justify-center flex-wrap shrink-0'>
                        <div className='py-10 w-3/5 flex flex-col items-start lg:flex-row  lg:items-center justify-center gap-10 text-white'>
                            <div className='flex flex-col justify-center items-start lg:items-center  gap-2'>
                                <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                                    width={300}
                                    alt=''
                                    className='rounded-xl'
                                />
                                <button onClick={() => setIsShown(!isShown)} className='w-[300px] px-3 py-1 bg-[#1B6F93] rounded-lg'>Trailer</button>
                                <button onClick={() => handleBookmark} className='w-[300px] px-3 py-1 bg-[#1B6F93] rounded-lg'>Save</button>
                            </div>
                            <div className='flex flex-col justify-center items-start gap-2 text-white text-start'>
                                <h1 className='p-1 text-5xl'>{movieDetails.original_title}</h1>
                                <p className='p-1'>{movieDetails.overview}</p>
                                {/* <p className='p-1'>Director: {director[0].name}</p> */}

                                <div className='p-1 flex justify-start items-center gap-2'>
                                    <span>Rating: {parseFloat(movieDetails.vote_average).toFixed(1)}</span>
                                    <FaStar color='#FFE234' />
                                </div>
                                <p className='p-1'>Release date: {movieDetails.release_date}</p>
                                <p className='p-1'>Duration: {movieDetails.runtime} minutes</p>
                                <div className='flex gap-1'>
                                    {
                                        movieDetails.genres && movieDetails.genres.map((genre) => {
                                            return <span className='px-3 py-1 text-center text-white rounded-lg bg-[#1c2026db]' key={genre.id}>{genre.name}</span>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='actors-section' className='flex justify-center py-10'>
                <div className='w-3/5 '>
                    {isShown && <iframe title="movie trailer" width="420" height="345" src={trailer} />}

                    <h1 className='text-white text-3xl px-1 pb-5 text-start'>Actors</h1>
                    <div className='flex flex-wrap shrink-0 gap-5'>
                        {
                            movieCast.slice(0, 5).map((actor, index) => {
                                return <ActorCard actor={actor} key={index} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
