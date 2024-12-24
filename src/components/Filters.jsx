import { useContext } from 'react'
import { ShoppingCart } from '../context/ShoppingCart'
import './filters.css'
function Filters() {
  const { state, filters, setFilters } = useContext(ShoppingCart)
  const { products } = state

  const getCategories = () => {
    const names = {}
    products.forEach((p) => {
      if (!names[p.category]) {
        names[p.category] = p.category
      }
    })
    return Object.keys(names)
  }

  return (
    <div className="inputsBox">
      <div>
        <input
          type="range"
          name=""
          id=""
          min={0}
          max={1500}
          onChange={(e) =>
            setFilters((prevFilters) => ({
              ...prevFilters,
              maxPrice: e.target.value,
            }))
          }
        />
        <label htmlFor=""> $ {filters.maxPrice}</label>
      </div>
      <select
        name=""
        id=""
        onChange={(e) =>
          setFilters((prevFilters) => ({
            ...prevFilters,
            category: e.target.value,
          }))
        }
      >
        <option value="all">All categories</option>
        {getCategories().map((c, idx) => (
          <option key={idx} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Filters
