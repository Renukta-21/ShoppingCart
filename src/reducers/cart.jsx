import { products } from '../mocks/products.json'

const updateLocalStorage = (state)=>{
  localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART': {
        const index = state.cart.findIndex((p) => p.id === action.payload.id)
        const updatedCart = [...state.cart]

        if (index === -1) {
            updatedCart.push({...action.payload, quantity:1})
          }else{
            updatedCart[index].quantity +=1
          }
          updateLocalStorage(updatedCart)
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
        updateLocalStorage(updatedCart)
        return {
          ...state,
          cart:updatedCart
        } 
      }
  
      case 'REMOVE_FROM_CART':{
        const productIdx = state.cart.findIndex(p=> p.id === action.payload.id)
        const updatedCart = [...state.cart]
        updatedCart.splice(productIdx, 1)
        updateLocalStorage(updatedCart)
        return {
          ...state,
          cart:updatedCart
        } 
      }

      case 'CLEAR_CART':{
        updateLocalStorage([])
        return {
          ...state,
          cart:[]
        }
      }
    }
  }
  export const cartInitialState = {
    products,
    cart: JSON.parse(window.localStorage.getItem('cart')) || [] ,
    filters: { maxPrice: 0, category: 'all' },
  }