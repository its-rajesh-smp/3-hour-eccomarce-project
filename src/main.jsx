import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App'
import './index.css'
import { CartContextProvider } from './Context/CartContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartContextProvider>
    <App />
  </CartContextProvider>

)
