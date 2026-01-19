import { NavLink } from 'react-router-dom'
import React from 'react'

const Nav = () => {
  return (
    <div className='h-17 w-screen bg-black flex p-4 font-semibold text-2xl  justify-between text-amber-900' >
      <h1>KTM Town</h1>
      <div className='flex gap-4 pr-5'>
        <NavLink to='/' className={({ isActive }) =>
        isActive ? "text-red-500" : "text-amber-900"
        }>Home</NavLink>
        <NavLink to='/menu' className={({ isActive }) =>
        isActive ? "text-red-500" : "text-amber-900"
        }>Menu</NavLink>
        <NavLink to='/cart' className={({ isActive }) =>
        isActive ? "text-red-500" : "text-amber-900"
        }>Cart</NavLink>
        <NavLink to='/galary' className={({ isActive }) =>
        isActive ? "text-red-500" : "text-amber-900"
        }>Galary</NavLink>
      </div>
    </div>
  )
}

export default Nav
