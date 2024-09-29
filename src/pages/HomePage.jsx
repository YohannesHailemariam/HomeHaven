import React from 'react'
import SearchInput from '../components/HomePageComponents/Filter/SearchInput'
import Header from '../components/HomePageComponents/header';
import ExperienceCard from '../components/DetailsPageComponents/ExperienceCard';

import Filter from '../components/HomePageComponents/Filter/Filter'

const HomePage = () => {
  console.log('hello');
  return (
    <>
      <Header />
      {/* <Filter /> */}
      <ExperienceCard />
    </>
  )
}

export default HomePage