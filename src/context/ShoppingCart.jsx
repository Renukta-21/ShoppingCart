import { createContext, useReducer, useState } from 'react'
import {cartReducer, cartInitialState} from '../reducers/cart'

export const ShoppingCart = createContext()

export const ShoppingCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)
  const [filters, setFilters] = useState({
    maxPrice: 0,
    category: 'all',
  })
  const addToCart = (product) => {
    dispatch({type:'ADD_TO_CART', payload:product})
  }
  const removeFromCart = (product) => {
    dispatch({type:'REMOVE_FROM_CART', payload:product})
  }
  const removeOneFromCart = (product) => {
    dispatch({type:'REMOVE_ONE_FROM_CART', payload:product})
  }
  const clearCart = ()=>{
    dispatch({type:'CLEAR_CART'})
  }
  return (
    <ShoppingCart.Provider
      value={{ state, filters, setFilters, addToCart, removeFromCart, removeOneFromCart, clearCart }}
    >
      {children}
    </ShoppingCart.Provider>
  )
}
