import React from 'react'

const Price = () => {
  return (
    <div className='grid grid-cols-1'>
        <span className='text-[18px]'>Maximum Price</span>
        <select className='cursor-pointer text-[20px] ml-3' >
            <option disabled selected>50,000</option>
            <option>10,000</option>
            <option>10,000</option>
            <option>10,000</option>
            <option>10,000</option>
            <option>10,000</option>
            <option>10,000</option>
            <option>10,000</option>
        </select>
    </div>
  )
}

export default Price