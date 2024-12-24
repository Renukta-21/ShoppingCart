import { useContext } from 'react'
import './cart.css'
import { ShoppingCart } from '../context/ShoppingCart'
import { ShoppingCartIcon } from '../assets/svg'

function Cart() {
  const { cart } = useContext(ShoppingCart)

  return (
    <div>
      <label htmlFor="menuCheck" className="shoppingLabel">
        <ShoppingCartIcon />
      </label>
      <input
        type="checkbox"
        name=""
        id="menuCheck"
        hidden
        onChange={(e) => console.log(e.target.checked)}
      />

      <aside className="cartMenu">
        {cart.length > 0 ? (
          cart.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <p>No products added yet to the cart! 🛍 </p>
        )}
      </aside>
    </div>
  )
}

const CartItem = ({item}) => {
  return (
    <div key={item.id}>
      <p>{item.title}</p>
      <div>
        <button>+</button>
        <p>{item.quantity}</p>
        <button>+</button>
      </div>
    </div>
  )
}
export default Cart
