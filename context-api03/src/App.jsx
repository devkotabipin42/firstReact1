import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Section from './component/Section'
import Footer from './component/Footer'
import About from './component/About'
import Navbar from './component/Navbar'
import AllSection from './component/AllSection'
import Section1 from './component/Section1'
import Section2 from './component/Section2'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/footer' element={<Footer/>}/>
        <Route path='/section' element={<Section/>}>
        <Route path='/section' element={<AllSection/>}/>
        <Route path='/section/section1' element={<Section1/>}/>
        <Route path='/section/section2' element={<Section2/>}/>
        
        </Route>
      </Routes>
    </div>
  )
}

export default App
