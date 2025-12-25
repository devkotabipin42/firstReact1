import React, { useState } from 'react'
import Numbers from './Numbers'

const Asap = () => {

  
  const [num, setNum] = useState(10)
  const [username, setusername] = useState('Bipin')
  function changeNum(){
    setNum(40)
    setusername('Sujata')
  }
  return (
    <div className='h-fit w-[100%] bg-black '>
      <h1 className='h-[30px] w-[fit] bg-blue p-3.5 text-white'>Value of num is {num} <br /> value of user is {username}</h1>
      <button onClick={changeNum} className=' h-fit w-fit bg-amber-600  text-amber-50 px-3 cursor-pointer mt-10 '>click</button>
      
    </div>
  )
}

export default Asap
