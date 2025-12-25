import React, { useState } from 'react'

const Numbers = () => {
  const [num, setNum] = useState(2)

  function increase(){
    setNum(num+1)
  }

   function decrese(){
    setNum(num-1)
  }
  return (
    <div className='text-white ml-6'>
      <h1 className='text-amber-200  h-[150px] w-[160px] bg-blue-400 flex justify-center items-center text-[80px] font-[600]  '>{num}</h1>
      <button onClick={increase} className='px-4 bg-green-400 rounded mt-4 mr-5'>buttom</button>
      <button onClick={decrese}  className='px-4 bg-green-400 rounded mt-4'>buttom</button>
      
    </div>
  )
}

export default Numbers
