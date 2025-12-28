
import React, { useState } from 'react'


const Adding = () => {
 const [Num, setNum] = useState(1)
  return (
    <div className='text-amber-200 ml-7'>
      <h1>{Num}</h1>
      <button onClick={()=>{
        setNum(Num+1)
      }} className='bg-blue-200 px-2 text-black rounded'>adding</button>
      <button onClick={()=>{
        setNum(Num+5)
      }} className='bg-blue-200 m-4 px-2 text-black rounded'>jumping</button>
      <button onClick={()=>{
        setNum(Num-1)
      }} className='bg-blue-200  px-2 text-black rounded'>sub</button>
    </div>
  )
}

export default Adding
