import React from 'react'
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';
const Apiuseeffect = () => {
  const [first, setfirst] = useState('')
  const [num, setNum] = useState(0)
  const getData = async ()=>{
    const response = await axios.get('https://randomuser.me/api/')
    setfirst((response.data.results[0].name.first)+' '+(response.data.results[0].name.last))
  }
  useEffect(function(){
    getData()
  },[num])
  
  return (
    <div>
      <h1 className="text-3xl  mt-10">{first}</h1>
      <h2 className="text-3xl  mt-10">{num}</h2>
      <button onClick={()=>{
        setNum(num+1)
      }}
      className="bg-cyan-800 px-5 py-5 rounded active:scale-95" >Click me</button>
    </div>
  )
}

export default Apiuseeffect
