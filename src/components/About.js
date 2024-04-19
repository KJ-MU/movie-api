import React from 'react';

import { Info } from "../Info.js";


const About = () => {
    return (
        <div className='h-full lg:h-screen bg-[#31363fe9] flex flex-col justify-evenly items-start lg:items-center'>
            <h1 className='text-6xl font-bold p-10'>Our Team</h1>
            <div className='mb-10 lg:mb-0 flex flex-col lg:flex-row justify-center items-center flex-wrap shrink-0 gap-5'>
                {
                    Info.map((person, index) => (
                        <div className='w-full lg:w-3/12 p-10'>
                            <div className='flex flex-col justify-center items-start gap-2 text-white text-start'>
                                <h1 className='p-1 text-5xl'>{person.name}</h1>
                                <p className='p-1'>{person.bio}</p>
                                <a href={person.linkedin} target='_blank' rel='noreferrer' className='hover:underline font-bold'>LinkedIn</a>
                                <a href={person.github} target='_blank' rel='noreferrer' className='hover:underline font-bold'>Github</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
export default About;