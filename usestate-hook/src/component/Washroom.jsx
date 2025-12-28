import React from 'react'

const Washroom = (props) => {
  return (
    <div className=' h-[200px] w-[300px] bg-blue-400  rounded-3xl m-7 flex justify-center items-center text-3xl '>
     {props.user} Washroom
    </div>
  )
}

export default Washroom
