import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { getData } from '../Api/FoodApi'
import { useEffect } from 'react'


export const Productdata =createContext()
const RestroContext = (props) => {
  const [firstdata, setfirstData] = useState([])

  const setData = async()=>{
    const data = await getData()
    setfirstData(data)
    console.log(data);
    
  }

  useEffect(function(){
    setData()
  },[])

  return (
    <div>
      <Productdata.Provider value ={firstdata}>
      {props.children}
      </Productdata.Provider>
    </div>
  )
}

export default RestroContext
