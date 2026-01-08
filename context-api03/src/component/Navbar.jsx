import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-screen h-fit bg-lime-900 text-blue-50 p-3 flex justify-between '>
      <h1>SHEIN</h1>
      <div className=' flex gap-5'>
      <Link to='/' >Home</Link>
      <Link to='/section' >Section</Link>
      <Link to='/about' >About</Link>
      </div>
    </div>
  )
}

export default Navbar
