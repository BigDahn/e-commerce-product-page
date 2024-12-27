import AddToCart from "./AddToCart"
import Amount from "./Amount"


const CartAmount = () => {
  return (
    <div className=" grid gap-3 lg:flex lg:gap-3 pt-7">
      <Amount/>
      <AddToCart/>
    </div>
  )
}

export default CartAmount
