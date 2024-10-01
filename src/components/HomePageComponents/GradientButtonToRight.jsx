import React from 'react'

const GradientButtonToRight = ({text, onClick}) => {
  return (
    <div className='bg-gradient-to-r cursor-pointer w-[169px] h-[48px] text-2xl text-white rounded-3xl from-[#550685] via-[#BA49FF] to-[#550685]' onClick={onClick}>
        <p className='flex justify-center pt-1'>{text}</p>
    </div>
  )
}

export default GradientButtonToRight