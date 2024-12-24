import { useContext } from 'react'
import { CartRemoveIcon, CartAddIcon } from '../assets/svg'
import { ShoppingCart } from '../context/ShoppingCart'

function ProductList() {
  const { filters, products, addToCart, removeFromCart, cart } = useContext(ShoppingCart)

  const filteredProducts = products.filter((p) => {
    return (
      p.price >= filters.maxPrice &&
      (filters.category === 'all' || p.category === filters.category)
    )
  })

  return (
    <>
      <div className="productsContainer">
        {filteredProducts.slice(0, 20).map((p) => {
          const productInCart = cart.some(product=> product.id === p.id)
          return(
            <div className="product" key={p.id}>
            <img alt="" src={p.images[0]}/>
            <div>
              <p>
                {p.title} <strong>{p.price}</strong>{' '}
              </p>
              <strong>{p.category}</strong>
              <button
              className={`${productInCart && 'removeClass'}`} 
              onClick={()=> productInCart ? removeFromCart(p) : addToCart(p)}>
                {productInCart ? <CartRemoveIcon/> : <CartAddIcon/>}
              </button>
            </div>
          </div>
          )
})}
      </div>
    </>
  )
}

export default ProductList
