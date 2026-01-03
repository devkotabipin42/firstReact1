import React from 'react'
import {Routes,Route  } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Navbar from './component/Navbar';
import Men from './pages/Men';
import Women from './pages/Women';
import Random from './pages/Random';
import Courses from './pages/Courses';
import Cohort2 from './pages/Cohort2';
import AnyCourse from './pages/AnyCourse';
import CoursesDetail from './pages/CoursesDetail';
const App = () => {
  return (
    <div >
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/product/men' element={<Men/>}/>
        <Route path='/product/women' element={<Women/>}/>
        <Route path='/about/:id' element={<Random/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/courses/:id' element={<AnyCourse/>}/>
        <Route path='/courses/:id/coursesdetail' element={<CoursesDetail/>}/>

      </Routes>
      
      
    </div>
  )
} 

export default App
