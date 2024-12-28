import { useCart } from '../contexts/CartContext'

const CartMenu = () => {
  const { totalCost, addedToCart, addedItems } = useCart()
  return (
    <div className="rounded-md w-[90%] h-[250px] lg:w-[320px] lg:h-[210px] bg-white shadow-xl lg:fixed lg:bottom-[24rem] lg:left-[57rem]  ">
      <h6 className="text-black lg:text-sm pl-3 lg:font-medium lg:pb-0 lg:pt-0  pb-2 pt-4">
        Cart
      </h6>
      <div className="border-b-2 pt-5"></div>
      {addedToCart ? (
        <div className="grid gap-6 ">
          <div className="flex items-center justify-evenly pt-6">
            <img
              src="/images/image-product-1.jpg"
              alt="image"
              className="w-12 rounded-sm"
            />
            <div>
              <p>Fall Limited Edition Sneakers</p>
              <p>
                $125.00 <span> x {addedItems}</span>{' '}
                <span className="ml-1">${totalCost}.00</span>
              </p>
            </div>
            <img src="/images/icon-delete.svg" alt="delete" />
          </div>
          <button className="bg-orange-500 rounded-md ml-2 mr-2 h-10">
            Checkout
          </button>
        </div>
      ) : (
        <div className=" justify-center flex items-center h-32">
          <h4>Your Cart Is Empty</h4>
        </div>
      )}
    </div>
  )
}

export default CartMenu
