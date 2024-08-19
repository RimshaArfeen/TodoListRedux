
import React from 'react'

const Navbar = () => {
  return (
    <header class="body-font text-gray-200">
    <div class="mx-auto flex w-full flex-col flex-wrap items-center justify-center md:justify-end bg-purple-950 p-4 md:flex-row">
      <nav class="flex w-full md:w-3/4 flex-wrap items-center justify-end text-sm md:text-lg uppercase">
        <a class="mr-5 hover:text-gray-900">Home</a>
        <a class="mr-5 hover:text-gray-900">About Us</a>
        <a class="mr-5 hover:text-gray-900">Contact</a>
        <a class="mr-5 hover:text-gray-900">Services</a>
      </nav>
    </div>
  </header>
  
  )
}

export default Navbar
