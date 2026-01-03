import { Link } from 'react-router-dom'
import React from 'react'

const Product = () => {
  return (
    <div>
      <h1 className='text-6xl underline font-bold absolute top-1/2 left-1/2 '> Product Page</h1>
      <div className='text-5xl flex justify-between'>
        <Link to={'/product/men'}>Mens product</Link>
        <Link to={'/product/women'}>WoMen product</Link>
      </div>
    </div>
  )
}

export default Product
