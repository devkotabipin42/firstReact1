import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const data =useContext(ProductDataContext)
  const {productId}=useParams()
  let selectedproduct =''
  if(data.length>0){
   selectedproduct = data.find((elem)=>elem.id == productId)
  }
  console.log(selectedproduct);
  
  
  
  return (
    <div>
      <img  className='h-[200px] w-screen  object-contain mt-18' src={selectedproduct.image} alt="" />
      <h2 className=' text-[20px] '>{selectedproduct.title}</h2>
    </div>
  )
}

export default ProductDetails
