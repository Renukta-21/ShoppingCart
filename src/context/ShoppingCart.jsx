import { createContext, useReducer, useState } from 'react'
import { products } from '../mocks/products.json'

export const ShoppingCart = createContext()

const initialState = {
  products,
  cart: [],
  filters: { maxPrice: 0, category: 'all' },
}

const globalReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const index = state.cart.findIndex((p) => p.id === action.payload.id)
      if (index === -1) {
        return {
          ...state,
          cart: [...state.cart, {...action.payload, quantity:1}]
        }
      }

      const updatedCart = [...state.cart]
      updatedCart[index].quantity +=1
      return {
        ...state,
        cart:updatedCart
      }
    }

    case 'REMOVE_ONE_FROM_CART':{
      const productIdx = state.cart.findIndex(p=> p.id === action.payload.id)
      const updatedCart = [...state.cart]
      
      if(updatedCart[productIdx].quantity > 1){
        updatedCart[productIdx].quantity -=1
      }else{
        updatedCart.splice(productIdx, 1)
      }
      return {
        ...state,
        cart:updatedCart
      } 
    }

    case 'REMOVE_FROM_CART':{
      const productIdx = state.cart.findIndex(p=> p.id === action.payload.id)
      const updatedCart = [...state.cart]
      updatedCart.splice(productIdx, 1)

      return {
        ...state,
        cart:updatedCart
      } 
    }
  }
}

export const ShoppingCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState)
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

  return (
    <ShoppingCart.Provider
      value={{ state, filters, setFilters, addToCart, removeFromCart, removeOneFromCart }}
    >
      {children}
    </ShoppingCart.Provider>
  )
}
