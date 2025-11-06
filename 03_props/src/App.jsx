import React from 'react'
import Card from './component/Card'
const App = () => {
  return (
    <div className='parent'>
      
      <Card user ='Bipin' age = {22} img = 'https://images.unsplash.com/photo-1756137074695-88e71b00ef77?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2080'/>
      <Card user ='Biplav' age = {20} img = 'https://images.unsplash.com/photo-1760008486599-e62d30e2ca95?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032'/>
      <Card user = 'Badal' age ={20} img='https://plus.unsplash.com/premium_photo-1761359334133-29f3e6fe1a0e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=1000'/>
      <Card user = 'Bipasha' age = {3 }img ='https://plus.unsplash.com/premium_photo-1723526592766-15d1fd0de4a5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=1000'/>
      <Card user ='Big Boss' age= {222} img = 'https://plus.unsplash.com/premium_photo-1761827497707-e29b16317241?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=1000'/>
      <Card user = 'Games' age = {123} img= 'https://plus.unsplash.com/premium_photo-1751667124857-32b5a1c63d8a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQxfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=1000'/>
    </div>
  )
}

export default App
