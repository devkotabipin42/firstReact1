import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center gap-2'>
      <Link className='text-[6.5vw] hover:text-[#D3FD50] border-5 border-white px-10 pt-3 rounded-full uppercase' to='/projects'>Projects</Link>  
      <Link className='text-[6.5vw] hover:text-[#D3FD50] border-5 border-white px-10 pt-3 rounded-full uppercase' to='/agence'>Agence</Link>
    </div>
  )
}

export default HomeBottomText
