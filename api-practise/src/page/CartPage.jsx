import React, { useContext } from 'react'
import { CartsContext } from '../Context/CartContext'
import { useNavigate } from 'react-router-dom'



const CartPage = () => {

  const {cartItems,updateQty, removeFromCart}=useContext(CartsContext)
  const navigate = useNavigate()

  const total = cartItems.reduce((sum,item)=>sum + 100*item.price*item.qty,0)
  return (
   <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Cart</h1>
        <button
          className="px-4 py-2 bg-gray-700 rounded-xl"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>

      {cartItems.length === 0 ? (
        <p className="mt-6">Cart is empty</p>
      ) : (
        <div className="mt-6 flex flex-col gap-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 rounded-2xl p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  className="h-16 w-16 object-contain bg-gray-700 rounded-xl p-2"
                  alt=""
                />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm opacity-80">Rs. {(item.price)*100}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  className="px-3 py-1 bg-gray-700 rounded-lg"
                  onClick={() => updateQty(item.id, item.qty - 1)}
                >
                  -
                </button>
                <span>{item.qty}</span>
                <button
                  className="px-3 py-1 bg-gray-700 rounded-lg"
                  onClick={() => updateQty(item.id, item.qty + 1)}
                >
                  +
                </button>

                <button
                  className="px-3 py-1 bg-red-600 rounded-lg"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div>
            <div className="mt-4 text-xl font-bold flex justify-between items-center px-4">
            Total: Rs. {total.toFixed(2)}
            <button className='h-fit w-fit bg-blue-900 px-5 py-2 rounded-3xl active:scale-95'>Buy Now</button>
          </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartPage
