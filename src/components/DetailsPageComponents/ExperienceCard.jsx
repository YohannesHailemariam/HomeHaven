import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ExperienceData = [
  {
    name: "Alicent Hightower",
    rating: 5,
    review: "A great place to stay at. Every thing is like as described in this website and the amenities work greatly. The host was very welcoming as well.",
    date: "21st January 2023",
  },
  {
    name: "Rhaenyra Targaryen",
    rating: 4,
    review: "The place was nice and cozy. Had a few issues with the amenities but overall a good experience.",
    date: "15th February 2023",
  },
  {
    name: "Daemon Targaryen",
    rating: 3,
    review: "The stay was average. The location was great but the amenities could use some improvement.",
    date: "10th March 2023",
  },
  {
    name: "Otto Hightower",
    rating: 5,
    review: "Excellent stay! The host was very accommodating and the place was exactly as described.",
    date: "5th April 2023",
  },
  {
    name: "Viserys Targaryen",
    rating: 4,
    review: "Good experience overall. The place was clean and the host was friendly.",
    date: "25th May 2023",
  },
];

const ExperienceCard = () => {
  const settings = {
    dots: true,
    arrows: true,  // Enable arrows
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="m-auto my-10">
      <Slider {...settings}>
        {ExperienceData.map((item, index) => (
          <div key={index} className="p-4 w-[350px] h-[300px] gap-y-2 border-2 rounded-2xl shadow-lg mx-4">
            <div className="flex items-start gap-x-4 mb-4">
              <div className="w-14 h-14">
                <img src="profile-1.jpeg" alt="Profile" className="w-full h-full rounded-full object-cover" />
              </div>
              <div className="flex flex-col">
                <div className="font-semibold">{item.name}</div>
                <div className="text-sm text-gray-500">Used our service for 5 Years</div>
              </div>
            </div>
            <span className="text-yellow-400 text-xl mb-2">
              {Array(item.rating).fill("★").join(" ")}
            </span>
            <div className="font-poppins mb-2">
              {item.review}
            </div>
            <div className="text-gray-400 font-poppins">
              {item.date}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ExperienceCard;
