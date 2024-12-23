import './app.css'
import Filters from './components/Filters'
import Debugger from './components/Debugger'
import ProductList from './components/ProductList'

function App() {

  return (
    <div className='appContainer'>
      <h1>Shopping Cart 🛍 </h1>
      <Filters/>
      <ProductList/>
      <Debugger />
    </div>
  )
}

export default App