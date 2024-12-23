import { createContext, useState } from 'react'
import { products } from '../mocks/products.json'

export const ShoppingCart = createContext()

export const ShoppingCartProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    maxPrice: 0,
    category: 'all',
  })
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    const index = cart.findIndex((p) => p.id === product.id)

    if (index === -1) {
      return setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }])
    }

    setCart((prevState) => {
      const updatedCart = [...prevState]
      updatedCart[index].quantity += 1
      return updatedCart
    })
  }

  return (
    <ShoppingCart.Provider value={{ filters, setFilters, products, addToCart }}>
      {children}
    </ShoppingCart.Provider>
  )
}
