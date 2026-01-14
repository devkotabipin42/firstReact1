import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { getData } from '../Api/product'

export const ProductsData =createContext()
const ProductContext = (props) => {
  const [productData, setproductData] = useState([])

  const setData =async()=>{
    const data =await getData()
    setproductData(data)
    }
  useEffect(function(){
   setData()
  },[])
  return (
    <div>
      <ProductsData.Provider value={productData}>
        {props.children}
      </ProductsData.Provider>
    </div>
  )
}

export default ProductContext
