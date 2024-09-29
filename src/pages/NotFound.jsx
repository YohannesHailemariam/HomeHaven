import React from 'react'
import { NavLink } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      Page NOt Found!
      <p> Go back to 
        <NavLink to={'/'} className='text-lg text-blue-600 m-1'>
          Home
        </NavLink>
      </p>
    </div>
  )
}

export default NotFound
