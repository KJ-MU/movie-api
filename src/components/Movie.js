import React from 'react';
import { FaRegBookmark } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";



const Movie = () => {
    return (
        <div className='rounded-3xl max-w-[370px] shadow-sm bg-[#31363fe9] flex-col text-white'>
            <img
                src="https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_QL75_UX380_CR0,1,380,562_.jpg"
                width="375"
                height="200"
                class="rounded-t-3xl justify-center grid h-80 object-cover"
                alt="movie.title"
            />
            <div className='flex flex-col justify-start items-start gap-2 p-5'>
                <span className='font-bold'>Spiderman</span>
                <div className='flex justify-start items-center gap-2'>
                    <span>8.8 </span>
                    <FaStar color='#FFE234' />
                </div>
                <div className='w-full flex items-center justify-between'>
                    <div className='flex justify-start items-center gap-1'>
                        <span>Animation - </span>
                        <span>2000</span>
                    </div>
                    <FaRegBookmark size={20} />
                </div>
            </div>
        </div>
    )
}

export default Movie;