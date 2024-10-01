import React from 'react'

const BuyOrRent = () => {
  return (
    <div className='grid grid-cols-1'>
        <span className='text-[18px] flex place-items-center justify-center'>Select</span>
        <div className='flex flex-row gap-x-4'>
            <div className='flex flex-row gap-x-2'>
                <input type='radio' className='mt-[-8px]' value='Buy'/>
                <label className='text-[20px]'>
                    Buy
                </label>
            </div>
            <div className='flex flex-row gap-x-2'>
                <input type='radio' className='mt-[-8px]' value='Rent'/>
                <label className='text-[20px]'>
                    Rent
                </label>
            </div>
        </div>
    </div>
  )
}

export default BuyOrRent