import { products } from './mocks/products.json'
import './app.css'
import Filters from './components/Filters'
import { useState } from 'react'
import Debugger from './components/Debugger'
import ProductList from './components/ProductList'

function App() {
  const [filters, setFilters] = useState({
    maxPrice:0,
    category:'all'
  })

  const filteredProducts = products.filter(p=>{
    return p.price >= filters.maxPrice && 
    (
      filters.category==='all' || p.category === filters.category
    )
  })


  return (
    <div className='appContainer'>
      <Filters products={products} setFilters={setFilters}/>
      <ProductList filteredProducts={filteredProducts}/>
      <Debugger filters={filters}/>
    </div>
  )
}

export default App