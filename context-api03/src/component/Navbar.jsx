import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = () => {
    const [theme,setTheme] =useContext(ThemeDataContext)
  
  return (
    <div className='w-screen h-fit bg-lime-900 text-blue-50 p-3 flex justify-between '>
      <h1>SHEIN</h1>
      <button onClick={()=>{
        if(theme == 'light'){
          setTheme('dark')
        }else{
          setTheme('light')
        }
      }} className='bg-gray-700 p-2 rounded-2xl text-black active:scale-95'>Change theme</button>
      <h1>{theme}</h1>
      <div className=' flex gap-5'>
      <Link to='/' >Home</Link>
      <Link to='/section' >Section</Link>
      <Link to='/about' >About</Link>
      </div>
    </div>
  )
}

export default Navbar
