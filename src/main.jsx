import React from 'react'
import ReactDOM from 'react-dom/client'
import { CartContextProvider } from './context/CartContext'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartContextProvider>
      <BrowserRouter>
        <App id='principal' />
      </BrowserRouter>
    </CartContextProvider>
  </React.StrictMode>
)
