import React from 'react'
import { FaToolbox } from "react-icons/fa";

const GradientButtonToBottom = () => {
  return (
    <div className='bg-gradient-to-b mt-3 w-fit h-[65px] rounded-3xl shadow-sm cursor-pointer text-white text-2xl from-[#603CD2] via-[#7851DE] to-[rgbargba(82, 37, 195, 0.51)]'>
        <div className='flex flex-row gap-x-2 px-2'>
          <p className='flex justify-center pt-2'>Amenities</p>
          <FaToolbox  className='mt-3'/>
        </div>
    </div>
  )
}

export default GradientButtonToBottom