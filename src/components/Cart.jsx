import { useContext } from 'react'
import './cart.css'
import { ShoppingCart } from '../context/ShoppingCart'
import { ShoppingCartIcon } from '../assets/svg'

function Cart() {
  const { cart, addToCart, removeFromCart } = useContext(ShoppingCart)

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
          cart.map((item) => <CartItem key={item.id} item={item} addToCart={()=> addToCart(item)} removeFromCart = {()=> removeFromCart(item)}/>)
        ) : (
          <p>No products added yet to the cart! 🛍 </p>
        )}
      </aside>
    </div>
  )
}

const CartItem = ({item, addToCart, removeFromCart}) => {
  return (
    <div key={item.id}>
      <p>{item.title}</p>
      <div>
        <button onClick={removeFromCart} disabled = {item.quantity === 1}>-</button>
        <p>{item.quantity}</p>
        <button onClick={addToCart}>+</button>
      </div>
    </div>
  )
}
export default Cart
