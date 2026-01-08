import React, { createContext } from 'react'

export const userData = createContext()
const UserContext = (props) => {
const data  = [
  { id: 1, name: "Sita Sharma", age: 22, city: "Tokyo" },
  { id: 2, name: "Ram Thapa", age: 25, city: "Osaka" },
  { id: 3, name: "Hari Devkota", age: 21, city: "Nagoya" },
  { id: 4, name: "Maya Gurung", age: 24, city: "Fukuoka" },
  { id: 5, name: "Gopal Rai", age: 23, city: "Sapporo" }
];
  return (
    <div className='context'>
      <userData.Provider value ={data}>
      {props.children}
      </userData.Provider>
    </div>
  )
}

export default UserContext
