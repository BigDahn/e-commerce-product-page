import { useCart } from "../contexts/CartContext"


const Amount = () => {
  const { numOfItems,dispatch } = useCart()
  return (
    <div className="rounded-md bg-gray-200 ">
      <div className="flex items-center justify-between pl-2 h-12 pr-2 lg:w-32 lg:h-10">
        <div>
          <img
            src="/images/icon-minus.svg"
            alt=""
            role="button"
            className="hover:opacity-25"
            onClick={() => dispatch({ type: 'reduce' })}
          />
        </div>
        <div>
          <p>{numOfItems}</p>
        </div>
        <div>
          <img
            src="/images/icon-plus.svg"
            alt=""
            role="button"
            className="hover:opacity-25"
            onClick={() => dispatch({ type: 'increase' })}
          />
        </div>
      </div>
    </div>
  )
}

export default Amount
