import React, { useContext, useEffect, useState } from 'react'
import { ProductsData } from '../Context/ProductContext'
import { useParams } from 'react-router-dom'


const CartsUnder = () => {
  const data = useContext(ProductsData)
  const {productId} = useParams() 

  const [AddCount, setAddCount] = useState(()=>{
    const saved = localStorage.getItem(`cart-qty-${productId}`)
    return saved ? JSON.parse(saved):1
  })

  
  const selectedProduct = data.length > 0 ? data.find((item)=>item.id ==productId):null
  useEffect(()=>{
    localStorage.setItem(
      `cart-qty-${productId}`,
      JSON.stringify(AddCount)
    )
  },[AddCount,productId])

  if(!selectedProduct){
    return <p>Loading..</p>
  }
  return (
    <div className='flex justify-between items-center mt-6 w-full h-fit'>
      <img className='h-[60px] w-[60px] object-cover object-fill rounded-2xl' src={selectedProduct.image} alt="" />
      <h1>{selectedProduct.category}</h1>
      <h2>{'-'}</h2>
      <div className='flex gap-3'>
        <button onClick={()=>setAddCount((prev)=>Math.max(1,prev-1))}
         className='h-fit w-fit bg-amber-950 px-2 rounded-full active:scale-95 cursor-pointer'>{'-'}</button>
        <p>{AddCount}</p>
        <button onClick={()=>{
          setAddCount(AddCount+1)
        }} className='h-fit w-fit bg-amber-950 px-2 rounded-full active:scale-95 cursor-pointer'>{'+'}</button>

      </div>
      <p>{(selectedProduct.price*100)*AddCount}</p>
      <p>X</p>
    </div>
  )
}

export default CartsUnder
