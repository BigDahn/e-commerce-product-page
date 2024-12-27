import { useCart } from '../contexts/CartContext'
import CartMenu from './CartMenu'
const CartIcon = () => {
  const { addedItems, addedToCart, dispatch, cartMenu } = useCart()
  return (
    <div>
      {addedToCart && (
        <div className="rounded-full bg-orange-600 text-center h-[14px] w-[22px] relative bottom-[-4px] left-2   ">
          <p className="text-[10px]  text-white cursor-none"> {addedItems}</p>
        </div>
      )}
      <img
        src="/images/icon-cart.svg"
        alt=""
        role="button"
        className="pb-1 relative"
        onClick={() => dispatch({ type: 'openCartMenu' })}
      />
      <div className="absolute top-[10rem] w-[100%] left-5 z-50">
        {cartMenu && <CartMenu />}
      </div>
    </div>
  )
}

export default CartIcon
