import React from 'react'
import Filter from '../components/HomePageComponents/Filter/Filter'
import MainCard from '../components/Main-card/MainCard'

const HomePage = () => {
  return (
    <div className='text-4xl'>
      <Filter />
      <MainCard />
    </div>
  )
}

export default HomePage