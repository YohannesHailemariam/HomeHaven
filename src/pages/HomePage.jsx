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
      <div className='absolute top-[380px] left-[100px]'>
        <p className=' w-[550px] font-semibold text-black text-[40px] text-opacity-[70%]'>Your Perfect Home Awaits: Explore Rentals and Purchases</p>
        <div className='mt-6 ml-12 gap-x-12 flex'>
          <GradientButtonToRight text={'SELL/RENT'} />
          <GradientButtonToRight text={'BUY/RENT'} />
        </div>
      </div>
      <div className='absolute top-[1060px] left-[100px]'> 
        <Filter/>
      </div>
      <p className='mt-[100px] text-[20px] w-[1328px] '>
      Welcome to your gateway for finding the perfect home. 
      Below, you'll discover a curated selection of properties 
      available for rent and purchase. Whether you're looking 
      for a cozy apartment or a spacious family house, our 
      listings offer a variety of options to suit your needs. 
      Begin your journey to finding your dream home right here.
      </p>
    </>
  )
}

export default HomePage