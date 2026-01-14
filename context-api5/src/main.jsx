import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import ProductContext from './Context/ProductContext.jsx';
import CartContext from './Context/CartContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <BrowserRouter>
    <CartContext>
    <ProductContext>
      <App/>
    </ProductContext>
    </CartContext>
    </BrowserRouter>
  </StrictMode>,
)
