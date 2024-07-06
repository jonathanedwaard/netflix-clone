import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-8">
        <h1 className="text-red-600 font-bold text-4xl">NETFLIX</h1>
        <div className="">
            <button className="text-white mr-4">Sign In</button>
            <button className="text-white bg-red-600 rounded px-6 py-2">Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar