import './cart.css'

function Cart() {
  return (
    <div>
        <label htmlFor="menuCheck" >Open Cart</label>
        <input type="checkbox" name="" id="menuCheck" onChange={(e)=> console.log(e.target.checked)}/>
        <aside className="cartMenu">
            sda
        </aside>
    </div>
  )
}

export default Cart