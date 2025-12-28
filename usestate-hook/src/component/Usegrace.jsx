import React, { useState } from 'react'

const Usegrace = () => {
  const [Mark, setMark] = useState([27,29,65,96,82,12])
  function graceStudent(){
    const newMark = Mark.map(function(elem){
      return elem+5
    })
    setMark(newMark)
  }
  return (
    <div className='text-amber-50 ml-7 mb-7'>
     {Mark.map(function(elem,idx){
      return <h1 key={idx}>student {idx+1}= {elem} ({elem>32?'Pass':'FAIL'})</h1>
     })}
     <button onClick={graceStudent} className='bg-amber-600 text-black rounded-2xl px-5 '>Give them grace</button>
    </div>
  )
}

export default Usegrace
