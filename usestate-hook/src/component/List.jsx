import React, { useState } from 'react'

const List = () => {
  const arr = ['Bipin','Ajay','Kalim','Soraj','kamal']
  const [Num, setNum] = useState(0)
  return (
    <div className=''>
      <h1 className='text-amber-50 text-3xl h-[150px] w-[150px] ml-7 rounded flex items-center justify-center bg-amber-950'>{arr[Num]}</h1>
      <button onClick={()=>{
        if (Num<arr.length-1){
        setNum(Num+1)
        }
      }} className='text-amber-50 bg-amber-950 rounded-2xl px-5 ml-7 mt-7 mb-7 active:scale-95 '>click me</button>
    </div>
  )
}

export default List
