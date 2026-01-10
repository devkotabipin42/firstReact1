import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { Link } from 'react-router-dom'

const Product = () => {
  const data = useContext(ProductDataContext)
  return (
    <div className='flex flex-wrap justify-center gap-20 bg-black p-5 h-full' >
     {data.map(function(elem,idx){
      return <Link to={`/product/${elem.id}`} className='text-center flex  items-center bg-gray-800 h-[250px] w-[250px]  decoration-0 rounded-2xl' href="/product" key={idx}>
        <div >
          <img  className='h-[200px] w-screen  object-contain mt-18' src={elem.image} alt="" />
          <h2 className=' text-[20px] '>{elem.title}</h2>
        </div>
      </Link>
     })}
    </div>
  )
}

export default Product
