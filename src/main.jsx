import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ShoppingCartProvider } from './context/ShoppingCart.jsx'

createRoot(document.getElementById('root')).render(
  <ShoppingCartProvider>
    <App />
  </ShoppingCartProvider>
)
