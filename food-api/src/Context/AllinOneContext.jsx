import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const AllProduct = createContext()
const CART_KEY= 'cart-items'
const AllinOneContext = ({children}) => {
  const [cart, setCart] = useState(()=>{
    const saved = localStorage.getItem(CART_KEY)
    return saved ?JSON.parse(saved):[]
  })
  useEffect(function(){
    localStorage.getItem(CART_KEY,JSON.stringify(cart))
  },[cart])
  return (
    <div>
      <AllProduct.Provider value={setCart}>
        {children}
    </AllProduct.Provider>
    </div>
  )
}

export default AllinOneContext
