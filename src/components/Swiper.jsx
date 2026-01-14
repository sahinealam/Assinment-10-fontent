import React from "react";

const Swiper = () => {
  return (
    <div className="w-full overflow-hidden">

      <div className="carousel w-full rounded-xl overflow-hidden">

        {/* Slide 1 */}
        <div
          id="slide1"
          className="carousel-item relative w-full aspect-[3/2] sm:aspect-[16/9] lg:aspect-[21/9]"
        >
          <img
            src="https://gosta.ua/wp-content/uploads/2025/08/beagle-1-1.webp"
            alt="Adopt a dog"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-3 sm:px-6">
            <h2 className="text-white text-base sm:text-2xl md:text-4xl font-bold leading-snug sm:leading-tight">
              Find Your Furry Friend Today!
            </h2>
            <p className="text-white mt-1 sm:mt-3 text-xs sm:text-base md:text-lg">
              Loving pets are waiting for a forever home
            </p>
          </div>
          <div className="absolute inset-x-3 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide3" className="btn btn-circle btn-xs sm:btn-sm md:btn-md">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle btn-xs sm:btn-sm md:btn-md">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div
          id="slide2"
          className="carousel-item relative w-full aspect-[3/2] sm:aspect-[16/9] lg:aspect-[21/9]"
        >
          <img
            src="https://aldf.org/wp-content/uploads/2018/05/lamb-iStock-665494268-16x9-e1559777676675-1200x675.jpg"
            alt="Pet adoption"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-3 sm:px-6">
            <h2 className="text-white text-base sm:text-2xl md:text-4xl font-bold leading-snug sm:leading-tight">
              Adopt, Don’t Shop
            </h2>
            <p className="text-white mt-1 sm:mt-3 text-xs sm:text-base md:text-lg">
              Give a pet a second chance at life
            </p>
          </div>
          <div className="absolute inset-x-3 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide1" className="btn btn-circle btn-xs sm:btn-sm md:btn-md">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle btn-xs sm:btn-sm md:btn-md">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div
          id="slide3"
          className="carousel-item relative w-full aspect-[3/2] sm:aspect-[16/9] lg:aspect-[21/9]"
        >
          <img
            src="https://media.cntraveler.com/photos/53d9bf256dec627b149ce9f7/16:9/w_1280,c_limit/mei-xiang-giant-panda.jpg"
            alt="Happy pets"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-3 sm:px-6">
            <h2 className="text-white text-base sm:text-2xl md:text-4xl font-bold leading-snug sm:leading-tight">
              Because Every Pet Deserves Love
            </h2>
            <p className="text-white mt-1 sm:mt-3 text-xs sm:text-base md:text-lg">
              Care, comfort, and a forever home
            </p>
          </div>
          <div className="absolute inset-x-3 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide2" className="btn btn-circle btn-xs sm:btn-sm md:btn-md">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle btn-xs sm:btn-sm md:btn-md">
              ❯
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Swiper;
