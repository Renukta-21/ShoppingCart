import { createContext, useState } from 'react'
import { products } from '../mocks/products.json'

export const ShoppingCart = createContext()

export const ShoppingCartProvider = ({ children }) => {
    const [filters, setFilters] = useState({
        maxPrice:0,
        category:'all'
      })

    return <ShoppingCart.Provider value={{filters,setFilters, products}}>{children}</ShoppingCart.Provider>
}
