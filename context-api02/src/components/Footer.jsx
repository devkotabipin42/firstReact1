import React, { useContext } from 'react'
import { userData } from '../context/UserContext'

const Footer = () => {
 const data = useContext(userData)
  return (
    <div className='text-3xl absolute bottom-0 bg-amber-900 w-screen overflow-hidden'>
      My footer {data}
    </div>
  )
}

export default Footer
