import React from 'react';
import { FaStar } from "react-icons/fa6";
import ActorCard from './ActorCard';


const MovieDetails = ({ movie }) => {
    return (
        <div className='bg-[#1C2026]'>
            <div className="" >
                <div style={{ '--image-url': `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})` }}
                    className="w-full h-[80vh] bg-[image:var(--image-url)] bg-no-repeat bg-cover">
                    <div className='bg-black bg-opacity-70 h-[80vh] flex justify-center'>
                        <div className='w-3/5 flex justify-center items-center gap-10 text-white'>
                            <div className='flex flex-col justify-center items-center gap-2'>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    width={300}
                                    alt=''
                                />
                                <button className='w-[300px] px-3 py-1 bg-[#1B6F93] rounded-lg'>Trailer</button>
                                <button className='w-[300px] px-3 py-1 bg-[#1B6F93] rounded-lg'>Save</button>

                            </div>
                            <div className='flex flex-col justify-center items-start gap-2 text-white text-start'>
                                <h1 className='p-1 text-5xl'>{movie.original_title}</h1>
                                <p className='p-1'>{movie.overview}</p>
                                <div className='p-1 flex justify-start items-center gap-2'>
                                    <span>Rating: {movie.vote_average.toFixed(1)}</span>
                                    <FaStar color='#FFE234' />
                                </div>
                                {/* <p className='p-1 text-start'>Written by: {movie.}</p> */}
                                <p className='p-1'>Release Year: {movie.release_date.substring(0, 4)}</p>
                                {/* <p className='p-1 text-start'>Genre: {movie.}</p> */}
                                {/* <p className='p-1 text-start'>Duration {movie.} minutes</p> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='actors-section' className='flex justify-center py-10'>
                <div className='w-3/5 '>
                    <h1 className='text-white text-3xl px-1 pb-5 text-start'>Actors</h1>

                    {/* Actors loop here */}\
                    <ActorCard actor={movie} />

                </div>
            </div>
        </div>
    )
}

export default MovieDetails;