import { createContext, useState } from 'react'

export const ShoppingCart = createContext()

export const ShoppingCartProvider = ({ children }) => {
    const [filters, setFilters] = useState({
        maxPrice:0,
        category:'all'
      })

    return <ShoppingCart.Provider value={{filters,setFilters}}>{children}</ShoppingCart.Provider>
}
