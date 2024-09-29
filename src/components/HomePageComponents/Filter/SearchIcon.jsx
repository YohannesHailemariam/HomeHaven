import React from 'react'
import { IoSearch } from "react-icons/io5";
import '../../../../src/App.css'

const SearchIcon = () => {
  return (
    <div className='mt-3 cursor-pointer'>
        <IoSearch className='w-[63px] h-[56px]'/>
    </div>
  )
}

export default SearchIcon