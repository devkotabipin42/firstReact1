import React, { createContext, useEffect, useState } from 'react'
import { getData } from "../Api/SheinApi";

export const dataContext =createContext()

const CardContext = (props) => {
  const [Product, setProduct] = useState([])

  useEffect(()=>{
    const fetchData = async ()=> {
      const res = await getData()
      setProduct(res)
    }
    fetchData()
  },[])
  
  
return (
    <div>
      <dataContext.Provider value = {Product}>
      {props.children}
      </dataContext.Provider>
      
    </div>
  )
}

export default CardContext
