import React from 'react'
import { useParams } from "react-router-dom";
const AnyCourse = () => {
  const param = useParams()
  console.log(param.id);
  
  return (
    <div>
       <h1 className='text-6xl underline font-bold absolute top-1/2 left-1/2 '> {param.id} Page</h1>
    </div>
  )
}

export default AnyCourse
