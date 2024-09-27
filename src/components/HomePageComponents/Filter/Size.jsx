import React from 'react'

const Size = () => {
  return (
    <div className='grid grid-cols-1'>
        <span className='text-[18px]'>Maximum Size</span>
        <select className='cursor-pointer text-[20px] w-fit ml-3' >
            <option disabled selected>250m2</option>
            <option>250m2</option>
            <option>250m2</option>
            <option>250m2</option>
            <option>250m2</option>
            <option>250m2</option>
            <option>250m2</option>
            <option>250m2</option>
        </select>
    </div>
  )
}

export default Size