import { useContext } from 'react'
import { CartRemoveIcon, CartAddIcon } from '../assets/svg'
import { ShoppingCart } from '../context/ShoppingCart'

function ProductList() {
  const { filters, products, addToCart } = useContext(ShoppingCart)

  const filteredProducts = products.filter((p) => {
    return (
      p.price >= filters.maxPrice &&
      (filters.category === 'all' || p.category === filters.category)
    )
  })

  return (
    <>
      <div className="productsContainer">
        {filteredProducts.slice(0, 20).map((p) => (
          <div className="product" key={p.id}>
            <img alt="" />
            <div>
              <p>
                {p.title} <strong>{p.price}</strong>{' '}
              </p>
              <strong>{p.category}</strong>
              <button onClick={() => addToCart(p)}>
                <CartRemoveIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ProductList
