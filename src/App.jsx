import './app.css'
import Filters from './components/Filters'
import Debugger from './components/Debugger'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import { IS_DEVELOPMENT } from './config'

function App() {

  return (
    <div className='appContainer'>
      <h1>Shopping Cart 🛍 </h1>
      <Cart/>
      <Filters/>
      <ProductList/>
      {IS_DEVELOPMENT && <Debugger />}
    </div>
  )
}

export default App