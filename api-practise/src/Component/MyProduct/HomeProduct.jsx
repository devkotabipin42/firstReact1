import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HomeProduct = () => {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    const saved = localStorage.getItem('myproduct')
    setProducts(saved?JSON.parse(saved):[])
  },[])
  console.log(products)

   const navigate = useNavigate()
  return (
<div className="min-h-screen w-full bg-gray-900 text-white p-6">
      {products.length === 0 ? (<p>No products found</p>) : (
        <div className="flex flex-wrap gap-4 justify-center">
          {products.map((elem, idx) => (
            <div
              key={idx}
              className="w-[280px] bg-gray-800 relative rounded-2xl p-4"
            >
              <img
                className="h-[200px] w-full object-contain bg-gray-700 rounded-xl p-2"
                src={elem.image}
                alt={elem.title || "product"}
              />

              <h2 className="mt-3 text-xl font-bold">{elem.title}</h2>
              <p className="opacity-80">{elem.description}</p>
              <p className="mt-2 font-semibold">Rs. {elem.price}</p>
              <p className="text-sm opacity-70">Category: {elem.userName}</p>
              <div className='absolute top-[70%] right-3 flex  flex-col gap-3'>
              <button className='h-fit w-fit bg-red-900 px-5 py-1 cursor-pointer rounded-3xl active:scale-95'>Sell</button> 
              <button className='h-fit w-fit bg-red-900 px-5 py-1 cursor-pointer rounded-3xl active:scale-95'>Delete</button>
              
              </div>
            </div>
          ))}
          <button onClick={()=>{
            navigate(-1)
          }} className="absolute top-20 left-0 mx-6 bg-red-900 cursor-pointer active:scale-95 px-5 py-1 text-2xl font-semibold active:scale-95 rounded-xl">Back</button>
        </div>
      )}
    </div>
  )
}

export default HomeProduct
