import React from 'react'

const GradientButtonToBottom = ({text, onClick}) => {
  return (
    <div className='bg-gradient-to-b w-[181px] h-[65px] rounded-3xl text-white text-3xl from-[#603CD2] to-[#845EE3]' onClick={onClick}>
        <p className='flex justify-center pt-2'>{text}</p>
    </div>
  )
}

export default GradientButtonToBottom