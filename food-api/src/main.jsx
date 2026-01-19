import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import RestroContext from './Context/RestroContext.jsx';
import AllinOneContext from './Context/AllinOneContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <RestroContext>
      <AllinOneContext>
    <App />
    </AllinOneContext>
    </RestroContext>
    </BrowserRouter>
  </StrictMode>,
)
