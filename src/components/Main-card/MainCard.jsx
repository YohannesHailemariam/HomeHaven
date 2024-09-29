import React, { useEffect, useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { FaHeart, FaStar } from 'react-icons/fa';
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

function MainCard() {
  const [images, setImages] = useState([]);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [current, setCurrent] = useState(0);
  const [liked, setLiked] = useState(false);

  async function fetchImage() {
    try {
      const response = await fetch('https://picsum.photos/v2/list?page=1&limit=5');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setImages(data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchImage();
  }, []);

  function handleWishlist() {
    setLiked(!liked);
  }

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  function handlePrevious() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  function handleNext() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  return (
    <div className='flex flex-col w-[250px] justify-center m-1'>
      <div className='relative w-full mx-3'>
        {/* Heart Button */}
        <FaHeart
          onClick={handleWishlist}
          className={`absolute z-10 w-6 h-6 right-2 top-2 cursor-pointer ${
            liked ? 'text-purple-600' : 'text-[#FAF9F6]'
          }`}
        />
        {/* Left Arrow */}
        <div className='absolute z-10 w-6 h-6 left-2 top-1/2 bg-purple-600 cursor-pointer rounded-full'>
          <BiChevronLeft onClick={handlePrevious} className='text-white drop-shadow-md w-full h-full' />
        </div>
        {/* Image Slider */}
        <div className='relative w-full h-[200px] overflow-hidden'>
          <div
            className='flex transition-transform ease-in-out duration-700'
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.length > 0 &&
              images.map((image) => (
                <img
                  key={image.id}
                  src={image.download_url}
                  alt='placeholder'
                  className='rounded-lg shadow-sm w-full h-[200px]'
                />
              ))}
          </div>
        </div>
        {/* Right Arrow */}
        <div className='absolute z-10 w-6 h-6 right-2 top-1/2 bg-purple-600 cursor-pointer rounded-full'>
          <BiChevronRight onClick={handleNext} className='text-white drop-shadow-md w-full h-full' />
        </div>
        {/* Dots Navigation */}
        <span className='flex absolute bottom-4 ml-14'>
          {images.length > 0 &&
            images.map((_, index) => (
              <button
                key={index}
                className={
                  current === index
                    ? 'bg-purple-600 h-2 w-2 rounded-full mx-1 cursor-pointer'
                    : 'bg-gray-400 h-2 w-2 rounded-full mx-1 cursor-pointer'
                }
                onClick={() => setCurrent(index)}
              ></button>
            ))}
        </span>
      </div>
      <div className='mt-2 text-center ml-3 flex flex-col justify-start'>
        <span className='font-bold text-base text-start'>Bole, Addis Ababa</span>
        <span className='text-gray-600 text-sm text-start'>2,500,000 Birr</span>
        <span className='text-gray-600 text-sm text-start'>2 Bedroom Apartment</span>
        <span className='text-gray-600 text-sm text-start'>150m2</span>
        <div className='flex justify-between'>
          <div className='flex items-center'>
            {[...Array(5)].map((_, index) => {
              index += 1;
              return (
                <FaStar
                  key={index}
                  className={index <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'}
                  onClick={() => handleClick(index)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  size={17}
                />
              );
            })}
          </div>
          <NavLink to={'/details/:122'} className='text-purple-600 flex gap-[2px] items-center ml-1 pb-1'>
            <span className='text-xs'>see more</span>
            <FaArrowRightLong size={13} className='mt-1' />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
