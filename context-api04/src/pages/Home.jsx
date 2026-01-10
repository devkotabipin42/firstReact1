import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className='h-screen bg-black'>
      <h1 className='text-[6vw] bg-fuchsia-900 font-bold absolute top-[45%] left-[35%] p-3 rounded'>Home Page</h1>
       <button onClick={()=>{
        navigate('/product')
       }} className='absolute top-[75%] text-[2vw] left-[45%] bg-gray-700 p-2 rounded-2xl text-black active:scale-95'>Explore product</button>
    </div>
  )
}

export default Home
