import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Navbar from './components/navbar-footer/Navbar'

//pages
import HomePage from './pages/HomePage'
import Advert from './pages/Advert'
import FAQ from './pages/FAQ'
import Notifications from './pages/Notifications'
import Sell from './pages/Sell'
import Subscription from './pages/Subscription'
import Wishlist from './pages/Wishlist'
import Details from './pages/Details'
import NotFound from './pages/NotFound'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Navbar />}>
    <Route index element={<HomePage />} />
      <Route path='/advert' element={<Advert />} />
      <Route path='/faq' element={<FAQ />} />
      <Route path='/notifications' element={<Notifications />}/>
      <Route path='/sell' element={<Sell />}/>
      <Route path='/subscription' element={<Subscription />}/>
      <Route path='/wishlist' element={<Wishlist />} />
      <Route path='/details' element={<Details />} />
      <Route path="*" element={<NotFound />} />
  </Route>
));


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App