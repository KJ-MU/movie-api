import { Carousel } from "flowbite-react";

function MovieCarousel({ slides }) {
    return (
        <div id="movie-slider" className="h-[80vh]">
            <Carousel indicators={false}>
                {slides.map((item, index) => (
                    <div className="w-full" key={index}>
                        <div className="">
                            <div style={{ '--image-url': `url(https://image.tmdb.org/t/p/w500${item.backdrop_path})` }}
                                className="w-full h-[80vh] bg-[image:var(--image-url)] bg-no-repeat bg-cover">
                                <div className='bg-black bg-opacity-70 h-[80vh] flex justify-center items-center gap-10'>

                                    <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                        width={300}
                                        alt=''
                                    />
                                    <div className='w-1/3 flex flex-col justify-center items-start gap-2 text-white'>
                                        <h1 className='p-1 text-5xl'>{item.original_title}</h1>
                                        <p className='p-1 text-start'>{item.overview}</p>
                                        <button className='px-3 py-1 bg-[#1B6F93] rounded-lg'>More Info</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                }
            </Carousel >
        </div >
    );
}

export default MovieCarousel;