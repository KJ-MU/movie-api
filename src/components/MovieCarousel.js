import { Carousel } from "flowbite-react";
import MovieCard from "./MovieCard";

function MovieCarousel({ slides }) {
<<<<<<< HEAD
    return (
        <div id="movie-slider" className=" h-fit lg:h-[80vh]">
            <Carousel indicators={false}>
                {slides.map((item, index) => (
                    <div className="w-full" key={index}>
                        <div className="">
                            <div style={{ '--image-url': `url(https://image.tmdb.org/t/p/w500${item.backdrop_path})` }}
                                className="w-full lg:h-[80vh] bg-[image:var(--image-url)] bg-no-repeat bg-cover">
                                <div className='bg-black bg-opacity-70 lg:h-[80vh] flex justify-center items-center'>
                                    <div className="w-3/5 py-10 flex flex-col lg:flex-row justify-center gap-10">
                                        <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                            width={300}
                                            alt=''
                                        />
                                        <div className='flex flex-col justify-center items-start gap-2 text-white'>
                                            <h1 className='p-1 text-5xl text-start'>{item.original_title}</h1>
                                            <p className='p-1 text-start'>{item.overview}</p>
                                            <button className='px-3 py-1 bg-[#1B6F93] rounded-lg'>More Info</button>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                    </div>
                ))
                }
            </Carousel >
            {slides.map((item, index) => (
                <MovieCard key={index} item={item} />
            ))}
        </div >
    );
=======
  return (
    <div
      id="movie-slider"
      className="flex flex-col justify-center items-center rounded-none  h-[80vh]  mb-10"
    >
      <Carousel className="rounded-none" indicators={false}>
        {slides.map((item, index) => (
          <div className="w-full rounded-none" key={index}>
            <div className="rounded-none">
              <div
                style={{
                  "--image-url": `url(https://image.tmdb.org/t/p/w500${item.backdrop_path})`,
                }}
                className="w-full  bg-[image:var(--image-url)] bg-no-repeat rounded-none bg-cover"
              >
                <div className="bg-black bg-opacity-60 rounded-none h-[80vh] top-0 flex justify-center items-center p-10">
                  <div className="w-3/5 py-10 flex flex-col items-center xl:flex-row justify-center gap-10">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      width={300}
                      alt=""
                    />
                    <div className="sm:pb-20 flex flex-col justify-center items-center xl:items-start gap-4 text-white">
                      <h1 className="p-1 font-bold md:text-3xl text-lg text-center xl:text-start">
                        {item.original_title}
                      </h1>
                      <p className="hidden p-1 text-justify xl:block xl:pb-20">
                        {item.overview}
                      </p>
                      <button className="p-2 bg-[#1B6F93] rounded-lg hover:brightness-75">
                        More Info
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
>>>>>>> 20c41033d918a189e8d0d77ce60d4bd352a9be2e
}

export default MovieCarousel;
