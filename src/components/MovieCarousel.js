import { Carousel } from "flowbite-react";

function MovieCarousel({ slides }) {
  return (
    <div id="movie-slider" className="rounded-none h-fit lg:h-[80vh]  mb-10">
      <Carousel className="rounded-none" indicators={false}>
        {slides.map((item, index) => (
          <div className="w-full rounded-none py-20 " key={index}>
            <div className="rounded-none">
              <div
                style={{
                  "--image-url": `url(https://image.tmdb.org/t/p/w500${item.backdrop_path})`,
                }}
                className="w-full lg:h-[80vh] bg-[image:var(--image-url)] bg-no-repeat rounded-none bg-cover"
              >
                <div className="bg-black bg-opacity-70 rounded-none lg:h-[80vh] flex justify-center items-center p-10">
                  <div className="w-3/5 py-10 flex flex-col lg:flex-row justify-center gap-10">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      width={300}
                      alt=""
                    />
                    <div className="flex flex-col justify-center items-start gap-4 text-white">
                      <h1 className="p-1 font-bold text-5xl text-start">
                        {item.original_title}
                      </h1>
                      <p className="p-1  text-justify">{item.overview}</p>
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
}

export default MovieCarousel;
