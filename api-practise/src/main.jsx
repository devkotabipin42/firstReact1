import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import CardContext from './Context/CardContext.jsx';
import CardProvider from './Context/CartContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <CardContext>
      <CardProvider>
    <App />
    </CardProvider>
    </CardContext>
    </BrowserRouter>
  </StrictMode>,
)
