import React from 'react'
import Card3 from './Card3'

const Card2 = (props) => {
  return (
    <div className='flex flex-col items-center'>
      <h4 className='font-[10px]'>{props.workers.job}</h4>
      <p className='text-[10px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, est.</p>
      <Card3 workers = {props.workers}/>
    </div>
  )
}

export default Card2
