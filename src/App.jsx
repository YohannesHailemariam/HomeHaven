import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/advert' element={<Advert />}></Route>
      <Route path='/faq' element={<FAQ />}></Route>
      <Route path='/notifications' element={<Notifications />}></Route>
      <Route path='/sell' element={<Sell />}></Route>
      <Route path='/subscription' element={<Subscription />}></Route>
      <Route path='/wishlist' element={<Wishlist />}></Route>
      <Route path='/details' element={<Details />}></Route>
    </Routes>
  )
}

export default App