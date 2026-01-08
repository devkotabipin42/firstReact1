import React, { useContext } from 'react'
import { userData } from '../context/UserContext'

const Section = () => {
 const data = useContext(userData)
  return (
    <div className='text-2xl bg-blue-800 h-119'>
      All section {data}
    </div>
  )
}

export default Section


