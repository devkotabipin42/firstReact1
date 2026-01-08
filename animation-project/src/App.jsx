import Home from './pages/Home'
import Agence from './pages/Agence'
import { Link, Route, Routes } from 'react-router-dom'
import Projects from './pages/Projects'


const App = () => {
 
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/agence' element={<Agence/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </div>
  )
}

export default App
