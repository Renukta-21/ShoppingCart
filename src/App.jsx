import { products } from './mocks/products.json'
import './app.css'
import { CartRemoveIcon } from './assets/svg'
import Filters from './components/Filters'
import { useState } from 'react'
import Debugger from './components/Debugger'

function App() {
  const [filters, setFilters] = useState({
    minPrice:0,
    category:'all'
  })
  const handleClick = () => {

  }

  const filteredProducts = products.filter(p=>{})


  return (
    <div>
      <Filters products={products} setFilters={setFilters}/>
      <div className='appContainer'>
        <h1>Shopping Cart 🛍  </h1>
        <div className='productsContainer'>
          {products.slice(0, 5).map(p => (
            <div className='product' key={p.id}>
              <img src={p.images[0]} alt="" />
              <div>
                <p>{p.title} <strong>{p.price}</strong> </p>
                <strong>{p.category}</strong>
                <button onClick={handleClick}><CartRemoveIcon /></button>
              </div>
            </div>
          ))}
        </div>
        <Debugger filters={filters}/>
      </div>
    </div>
  )
}

export default App