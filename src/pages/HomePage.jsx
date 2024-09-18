import React from 'react'
import SearchInput from '../components/HomePageComponents/Filter/SearchInput'
import Header from '../components/HomePageComponents/header';
import ExperienceCard from '../components/DetailsPageComponents/ExperienceCard';


const HomePage = () => {
  console.log('hello');
  return (
    
    <>
    <Header/>
    <ExperienceCard/>
    <div>
      hello
    </div>
      <div className='text-4xl'>
        <SearchInput />
      </div>
    </>

  )
}

export default HomePage