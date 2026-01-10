import { Link } from 'react-router-dom'
import React from 'react'

const Nav = () => {
  return (
     <div className='w-screen bg-red-800 h-fit p-3 flex justify-between '>
      <Link to='/shein'>Shein</Link>

      <div className=' flex gap-5 mr-4'>
        <Link to='/'>Home</Link>
        <Link to='/todo'>Todo</Link>
      </div>
     </div>
  )
}

export default Nav
