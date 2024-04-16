import React from 'react'

const ActorCard = ({ actor }) => {
    return (
        <div className="rounded-xl w-48 object-contain h-fit shadow-sm bg-[#31363fe9] flex-col text-white">
            <img
                src={`https://image.tmdb.org/t/p/w500${actor.poster_path}`}
                className=" rounded-t-xl justify-center "
                // width="224"
                alt="movie.title"
            />
            <div className="flex flex-col text-sm justify-start items-start gap-1 p-5">
                <p className="font-bold flex flex-wrap text-left">
                    Johnny
                </p>
            </div>
        </div>
    );
}

export default ActorCard