import React, { createContext, useEffect, useState } from 'react'

export const CartsContext = createContext()

const CART_KEY = 'cart-items'
const CartContext = ({children}) => {

  const [cartItems, setcartItems] = useState(()=>{
    const saved = localStorage.getItem(CART_KEY)
    return saved ? JSON.parse(saved) :[]
  })

  useEffect(()=>{
    localStorage.setItem(CART_KEY,JSON.stringify(cartItems))
  },[cartItems])


  const addToCart = (product,qty=1)=>{
    if(!product)return
    setcartItems((prev)=>{
      const exists = prev.find((item)=> item.id===product.id)
      if(exists){
      return prev.map((item)=>item.id===product.id?{...item,qty:item.qty+qty}:item)

      }
      return [...prev,{...product,qty}]
    })
  }

  const updateQty = (id, qty) => {
    setcartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, qty) } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setcartItems((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div>
      <CartsContext.Provider value ={{cartItems,addToCart,updateQty,removeFromCart}}>
        {children}
      </CartsContext.Provider>
    </div>
  )
}

export default CartContext
