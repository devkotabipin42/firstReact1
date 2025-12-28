import React from 'react'
import { useState } from 'react'

const Propsdeal = () => {
    const [username, setUsername] = useState('')
    const [alluser, setAlluser] = useState([])

        const submitHandler=(e)=>{
            e.preventDefault()
            const newAllusers=[...alluser]
            newAllusers.push(username)
            console.log(newAllusers);
            setUsername('')
            setAlluser(newAllusers)
        }
  return (
    <div className='text-4xl h-[100vh] p-7'>
      <form className=' flex flex-col gap-7 p-7 bg-gray-700 rounded ' onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" placeholder='Enter your name' value={username} required onChange={(e)=>{
            setUsername(e.target.value)
        }}/>
        <button className='bg-amber-500 rounded-4xl active:scale-95'>submittt</button>
      </form>
      {alluser.map((elem,idx)=>{
        return <h4 className='text-amber-200' key={idx}>{elem}</h4>
      })}
    </div>
  )
}

export default Propsdeal
