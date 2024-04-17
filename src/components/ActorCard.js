import React from 'react'
import { Link } from 'react-router-dom';

const ActorCard = ({ actor }) => {
    return (

        (actor.profile_path &&
            <div className="rounded-xl w-48 object-contain h-fit shadow-sm bg-[#31363fe9] flex-col text-white">
                <Link to={`/actor/${actor.credit_id}`}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                        className=" rounded-t-xl justify-center "
                        // width="224"
                        alt="actor"
                    />
                </Link>
                <div className="flex flex-col text-sm justify-start items-start gap-1 p-5">
                    <p className="font-bold flex flex-wrap text-left">
                        {actor.name}
                    </p>
                </div>
            </div>)

    );
}

export default ActorCard