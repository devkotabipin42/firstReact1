import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Product = () => {

  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-900 flex  items-center gap-4 flex-col text-white p-6 cursor-pointer">
     
     <div className='h-[200px] w-[400px] bg-red-900 rounded flex flex-col justify-center p-2 items-center'>
      <h1 className='bg-blue-950 rounded-3xl text-center px-3 py-2'>Create a new Product</h1>
      <button onClick={()=>{
        navigate(`/product/create`)
      }} className='bg-blue-950 rounded-3xl px-3 py-2 h-fit w-fit mt-2 cursor-pointer active:scale-95'>Click here</button>
     </div>
     <Link to='/product/myproduct' className='h-[200px] w-[400px] bg-green-700 rounded flex flex-col p-2 justify-center items-center'>
      <h1  className='bg-green-950 rounded-3xl text-center px-3 py-2'>Go to my product</h1>
      <button onClick={()=>{
        navigate(`/product/myproduct`)
      }} className='bg-green-950 rounded-3xl px-3 py-2 h-fit w-fit mt-2 cursor-pointer active:scale-95'>Click here</button>
     </Link>
    </div>
  )
}

export default Product
