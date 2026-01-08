import React from 'react'
import { useState } from 'react'


const Navbar = (props) => {
  const [newTheme, setnewTheme] = useState('')

  return (
    <div>
    
      <form  onSubmit={(e)=>{
          e.preventDefault()
          props.changeThem(newTheme)
          setnewTheme('')

          console.log(newTheme);
          
        }}>
        <input value={newTheme} onChange={(e)=>{
          setnewTheme(e.target.value)
        }} type="text" placeholder='enter theme' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Navbar
