import React from 'react'

const TypeOfHouseDropDown = () => {
  return (
    <div className='grid grid-cols-1'>
        <span className='text-[18px]'>Type of House</span>
        <select className='cursor-pointer text-[20px] w-fit' >
            <option disabled selected>Apartment</option>
            <option>G+1</option>
            <option>G+2</option>
            <option>G+3</option>
            <option>G+4</option>
            <option>G+5</option>
            <option>G+6</option>
            <option>G+7</option>
        </select>
    </div>
  )
}

export default TypeOfHouseDropDown