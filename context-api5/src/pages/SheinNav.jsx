import { Link } from 'react-router-dom'
import React from 'react'

const SheinNav = () => {
  return (
    <div className='w-screen bg-red-800 h-fit  flex justify-between cursor-pointer'>
      <Link className='p-2' to='/'>Back</Link>
      <div className='flex gap-7 p-3 mr-3'>
        <p>Add Product</p>
        <p>My Product</p>
        <p> Card</p>
      </div>
    </div>
  )
}

export default SheinNav
