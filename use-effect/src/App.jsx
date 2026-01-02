import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Useeffect from './component/Useeffect'
import Apiuseeffect from './component/Apiuseeffect'

const App = () => {
  const [addData, setaddData] = useState(0)
  const [title, settitle] = useState('')
  useEffect(function(){
    console.log('useEffect')
  },[title])

  return (
    <div>
      <h1 className='text-3xl'>{addData}</h1>
      <button onClick={()=>{
        setaddData(addData+1)
      }}
       className='bg-cyan-800 px-5 py-5 rounded active:scale-95'>Button
      </button>
      <div><input className='border-2 border-red-600 text-amber-300 font-bold px-4 py-5 mt-6 text-3xl' value={title} onChange={(e)=>{
        settitle(e.target.value) 
      }} type="text"  />
      <Useeffect/>
      <Apiuseeffect/>
      </div>
    </div>
  )
}

export default App
