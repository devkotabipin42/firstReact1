import React from 'react'
import Card2 from './Card2'

const Card1 = (props) => {
  const worker = props.workers
  return (
    <div className=' bg-cyan-700 text-red-800 p-7 rounded'>
      <div className='h-55 w-40 bg-emerald-900 rounded p-4 flex flex-col items-center'>
        <img src={worker.image} alt="" className='h-20 w-20 rounded-full object-cover'/>
        <h2>{worker.name}</h2>
        <Card2 workers ={worker} />

      </div>
    </div>
  )
}

export default Card1
