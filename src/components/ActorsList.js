import React, { useEffect } from 'react';
import { getActors } from '../store';
import ActorCard from './ActorCard';
import { useSelector, useDispatch } from "react-redux";


const ActorsList = () => {
    const actors = useSelector((state) => state.actors);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getActors());
    }, []);

    return (
        <div className="flex flex-wrap gap-10 justify-center items-center p-10">
            {actors.map((actor, index) => (
                <ActorCard key={index} actor={actor} />
            ))}
        </div>
    )
}

export default ActorsList;