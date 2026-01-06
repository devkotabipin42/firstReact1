import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className="text-4xl h-fit w-screen absolute bottom-0 bg-amber-800 p-4 flex justify-between text-amber-50">
      <h2>Footer</h2>
      <button onClick={()=>{
        navigate('/courses')
      }} className='bg-blue-800 p-3 rounded-3xl text-2xl active:scale-95 active:bg-cyan-800 cursor-pointer'>Explore courses</button>
    </div>
  )
}

export default Footer
