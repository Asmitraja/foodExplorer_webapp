import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/186a71018df06ce2bea1db55086d32e4",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/90b990bd1dc16bba234f5002627f71d3",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/2568f3f6928c7615151b9df37ed6f8b8",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/1095c62afafd16a1e99289880fddfc5b",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/afb1b49f7fcb84d2b3a73a1139f33299",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/1e3e7c66f97538f591be562b75297a8d",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/870fc64dc5157fb9b691934d2406ec8f",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/7004bb67da2bc79145552e05a4605d6e",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/7dec1c62b4e539323ea54bae5e152c62",
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the slide duration (in milliseconds) here

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className=" w-full h-56 md:h-80 bg-blue-950 rounded-sm ">
      <div className="flex justify-between pt-7 px-16">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-1/5 transition-transform transform $ hover: cursor-pointer hover:scale-105 ease-out duration-500`}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-auto object-cover rounded"
            />
          </div>
        ))}
      </div>

      <div className="absolute top-1/2 left-0 right-0 flex justify-between">
        <button
          className="w-12 h-12  text-white rounded-full flex items-center justify-center"
          onClick={prevImage}
        >
          {}
        </button>
        <button
          className="w-12 h-12  text-white rounded-full flex items-center justify-center"
          onClick={nextImage}
        >
          {}
        </button>
      </div>
    </div>
  );
};

export default Carousel;