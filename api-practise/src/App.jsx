import React from 'react'
import {Routes,Route }from "react-router-dom";
import Home from './page/Home';
import Nav from './page/Nav';
import Shein from './page/Shein';
import ProductDetail from './Component/shein/ProductDetail';
import CartPage from './page/CartPage';
import Product from './Component/MyProduct/Product';
import CreateProduct from './Component/MyProduct/CreateProduct';
import HomeProduct from './Component/MyProduct/HomeProduct';

const App = () => {
  return (
    <div className=' h-screen'>
      <Nav/>
      <Routes >
        <Route path='/' element={<Home/>} />
        <Route path='/shein' element={<Shein/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/product/create' element={<CreateProduct/>}/>
        <Route path='/product/myproduct' element={<HomeProduct/>}/>
        <Route path='/shein/:Productid' element={<ProductDetail/>}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
    </div>
  )
}

export default App
