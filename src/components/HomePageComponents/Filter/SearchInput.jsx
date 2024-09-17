import React from 'react'
import { IoSearch } from "react-icons/io5";

const SearchInput = () => {
  return (
    <div>
        <div className='flex flex-row gap-x-1'>
            <IoSearch className='w-[20px] h-[20px] text-gray-400'/>
            <input type='text' placeholder='Search by Location' className=' text-lg mt-[-5px]'/>
        </div>
        <div className="w-[200px] border-b-2 border-gray-300"></div>
    </div>
  )
}

export default SearchInput