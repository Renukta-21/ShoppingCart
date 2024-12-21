import React from 'react'
import { products } from './mocks/products.json'
import './app.css'
import { CartRemoveIcon } from './assets/svg'
import Filters from './components/Filters'

function App() {
  const handleClick = () => {

  }
  return (
    <div>
      <Filters products={products}/>
      <div className='appContainer'>
        <h1>Shopping Cart 🛍  </h1>
        <div className='productsContainer'>
          {products.slice(0, 5).map(p => (
            <div className='product' key={p.id}>
              <img src={p.images[0]} alt="" />
              <div>
                <p>{p.title} <strong>{p.price}</strong> </p>
                <button onClick={handleClick}><CartRemoveIcon /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App