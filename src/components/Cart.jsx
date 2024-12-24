import { useContext } from 'react'
import './cart.css'
import { ShoppingCart } from '../context/ShoppingCart'
import { ShoppingCartIcon } from '../assets/svg'

function Cart() {
  const { cart } = useContext(ShoppingCart)

  return (
    <div>
      <label htmlFor="menuCheck" className='shoppingLabel'><ShoppingCartIcon/></label>
      <input
        type="checkbox"
        name=""
        id="menuCheck"
        hidden
        onChange={(e) => console.log(e.target.checked)}
      />

      <aside className="cartMenu">
        {cart.length > 0 ? (
          cart.map((c) => (
            <div key={c.id}>
              <p>{c.title}</p>
              <div>
                <button>+</button>
                <p>{c.quantity}</p>
                <button>+</button>
              </div>
            </div>
          ))
        ) : (
          <p>No products added yet to the cart! 🛍 </p>
        )}
      </aside>
    </div>
  )
}

export default Cart
