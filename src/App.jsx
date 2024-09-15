import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Advert from './pages/Advert'
import FAQ from './pages/FAQ'
import Notifications from './pages/Notifications'
import Sell from './pages/Sell'
import Subscription from './pages/Subscription'
import Wishlist from './pages/Wishlist'
import Details from './pages/Details'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      
    </Routes>
  )
}

export default App