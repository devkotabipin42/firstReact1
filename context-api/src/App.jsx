import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'

const App = () => {

  const [theme, setTheme] = useState('light')
  const changeThem = (newTheme)=>{
    setTheme(newTheme)
  }
  return (
    <div>
       <h1>theme is {theme}</h1>
      <Navbar  changeThem={changeThem} />
     
    </div>
  )
}

export default App
