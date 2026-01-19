import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='h-fit w-screen  p-3 bg-blue-900 flex justify-between '>
      <Link to='/Shein'>Shein</Link>
     <div className=' flex gap-6 mr-3'>
       <Link to='/' >Home</Link>
      <Link to='/about' >About</Link>
      <Link to='/cart' >Cart</Link>
      <Link to='/Product' >Product</Link>
     </div>
    </div>
  )
}

export default Nav
