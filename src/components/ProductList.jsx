import { CartRemoveIcon } from '../assets/svg'

function ProductList({filteredProducts}) {
  return (
    <>
    <h1>Shopping Cart 🛍  </h1>
    <div className='productsContainer'>
      {filteredProducts.slice(0, 20).map(p => (
        <div className='product' key={p.id}>
          <img alt="" />
          <div>
            <p>{p.title} <strong>{p.price}</strong> </p>
            <strong>{p.category}</strong>
            <button><CartRemoveIcon /></button>
          </div>
        </div>
      ))}
    </div>
  </>
  )
}

export default ProductList