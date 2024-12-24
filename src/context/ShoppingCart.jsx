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

  const removeFromCart = (product) => {
    const productIdx = cart.findIndex((c) => c.id === product.id)
    
    if (productIdx.quantity === -1) {
      console.log('product not found in cart')
      return
    }
    const updatedCart = [...cart]
    const productInCart = updatedCart[productIdx]

    if(productInCart.quantity >1){
      productInCart.quantity -=1
    }else{
      updatedCart.splice(productIdx, 1)
    }
    setCart(updatedCart)
  }

  return (
    <ShoppingCart.Provider
      value={{ filters, setFilters, products, cart, addToCart, removeFromCart }}
    >
      {children}
    </ShoppingCart.Provider>
  )
}
