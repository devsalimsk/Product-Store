import React from 'react'

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <a href="#" className="text-xl font-bold">
            Product Showcase
          </a>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
              Home
            </a>
            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
              About
            </a>
            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
              Products
            </a>
            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
