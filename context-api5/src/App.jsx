import React from 'react'
import Home from './pages/Home'
import Nav from './pages/Nav'
import { Routes,Route } from "react-router-dom";
import Todo from './component/Todo';
import Shein from './component/Shein';
import Detailproduct from './pages/Detailproduct';
import Carts from './component/Carts';

const App = () => {
  return (
    <div>
       <Nav/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/todo' element={<Todo/>}/>
        <Route path='/shein' element={<Shein/>}/>
        <Route path='/shein/:productId' element={<Detailproduct/>}/>
        <Route path='/shein/:productId/cart' element={<Carts/>}/>
       </Routes>
      
    </div>
  )
}

export default App
