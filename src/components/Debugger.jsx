import { useContext } from 'react'
import './debugger.css'
import { ShoppingCart } from '../context/ShoppingCart'

function Debugger() {
  const {filters} = useContext(ShoppingCart)

  return (
    <footer>
            <div>
                {JSON.stringify(filters, null, 2)}
            </div>
    </footer>
  )
}

export default Debugger