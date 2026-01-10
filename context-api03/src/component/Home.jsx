import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Home = () => {
  const data =useContext(ThemeDataContext)
  return (
    <div>
      <h1 className='text-6xl bg-fuchsia-900 font-bold absolute top-1/5 left-1/5 p-3 rounded'>Home Page</h1>
       <button className='mt-16 bg-gray-700 p-2 rounded-2xl text-black active:scale-95'>Change theme</button>
       <h1>{data}</h1>
    </div>
  )
}

export default Home
