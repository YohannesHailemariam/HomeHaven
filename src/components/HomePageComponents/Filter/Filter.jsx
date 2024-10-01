import React from 'react'
import SearchInput from '../Filter/SearchInput'
import TypeOfHouseDropDown from '../Filter/TypeOfHouseDropDown'
import BuyOrRent from './BuyOrRent'
import Price from '../Filter/Price'
import Size from '../Filter/Size'
import GradientButtonToBottom from './GradientButtonToBottom'
import SearchIcon from '../Filter/SearchIcon'
import VerticalLine from '../Filter/VerticalLine'

const Filter = () => {
  return (
    <div className='w-fit border rounded-[40px] bg-white shadow-lg p-3 flex flex-row gap-x-7'>
        <SearchInput/>
        <VerticalLine />
        <TypeOfHouseDropDown />
        <VerticalLine />
        <BuyOrRent />
        <VerticalLine />
        <Price />
        <VerticalLine />
        <Size />
        <VerticalLine />
        <GradientButtonToBottom />
        <VerticalLine />
        <SearchIcon />
    </div>
  )
}

export default Filter