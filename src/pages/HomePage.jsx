import React from 'react'
import Header from '../components/HomePageComponents/header';
import ExperienceCard from '../components/DetailsPageComponents/ExperienceCard';

import Filter from '../components/HomePageComponents/Filter/Filter'

const HomePage = () => {
  console.log('hello');
  return (
    <>
      <Header />
      <ExperienceCard />
    </>
  )
}

export default HomePage