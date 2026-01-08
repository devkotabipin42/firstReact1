import React, { useContext } from 'react'
import { userData } from '../context/UserContext'

const Navbar = () => {
 const data = useContext(userData)
 console.log(data);
 
  return (
    <div className='text-3xl bg-red-700'>
      hello 
    </div>
  )
}

export default Navbar
