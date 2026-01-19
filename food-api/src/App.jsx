import React from 'react'
import { Routes,Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Nav from './pages/Nav';
import Menu from './pages/Menu';
import ViewProduct from './component/ViewProduct';

const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/menu/:productId' element={<ViewProduct/>}/>
      </Routes>
    </div>
  )
}

export default App
