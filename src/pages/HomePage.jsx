import React from 'react'
import Header from '../components/HomePageComponents/header';
import HeroImage from '../../public/HeroImage.jpg'
import GradientButtonToRight from '../components/HomePageComponents/GradientButtonToRight';
import Filter from '../components/HomePageComponents/Filter/Filter'
const HomePage = () => {
  console.log('hello');
  return (
    <>
      <Header />
      <img src={HeroImage} 
      className='w-full relative'
      alt='Hero Image'/>
      <div className='absolute top-[300px] left-[100px]'>
        <p className=' w-[550px] font-semibold text-black text-[40px] text-opacity-[70%]'>Your Perfect Home Awaits: Explore Rentals and Purchases</p>
        <div className='mt-6 ml-12 gap-x-12 flex'>
          <GradientButtonToRight text={'SELL/RENT'} />
          <GradientButtonToRight text={'BUY/RENT'} />
        </div>
      </div>
      <div className='absolute top-[1060px] left-[100px]'> 
        <Filter/>
      </div>
    </>
  )
}

export default HomePage