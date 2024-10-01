import React from 'react'

const SearchInput = () => {
  return (
    <div  className='mt-7 ml-5'>
        <div className='flex flex-row gap-x-1'>
            <input type='text' placeholder=' Search by Location' className=' outline-none text-lg mt-[-5px]'/>
        </div>
        <div className="w-[200px] border-b-2 border-gray-300"></div>
    </div>
  )
}

export default SearchInput