import { products } from './mocks/products.json'
import './app.css'
import Filters from './components/Filters'
import Debugger from './components/Debugger'
import ProductList from './components/ProductList'
import { useContext } from 'react'
import { ShoppingCart } from './context/ShoppinCart'

function App() {
  const {filters, setFilters} = useContext(ShoppingCart)

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