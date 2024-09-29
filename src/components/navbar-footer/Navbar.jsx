import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Navbar() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-gray-200 p-4">
        Navigation
      </header>

      {/* Main content with Outlet */}
      <main className="flex-grow overflow-y-auto">
        <Outlet />
      </main>

      {/* Footer stays at the bottom */}
      <footer className="bg-gray-200 p-2">
        <Footer />
      </footer>
    </div>
  )
}

export default Navbar
