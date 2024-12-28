import { useCart } from '../contexts/CartContext'

function Sidebar() {
  const { sidebar, dispatch } = useCart()
  return (
    <div
      className={`fixed inset-0 w-[60%]  bg-white ${
        sidebar
          ? 'translate-x-0 ease-linear transition-all duration-300 delay-100'
          : '-translate-x-60 ease-linear transition-all duration-300  delay-100 '
      }`}
    >
      <div className="flex flex-col gap-10 justify-center pl-6 mt-10">
        <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="#69707D"
            role="button"
            fill-rule="evenodd"
            onClick={() => dispatch({ type: 'closeSidebar' })}
          />
        </svg>

        <ul className="grid gap-3 text-lg font-semibold ">
          <li className=" hover:text-orange-500 ">Collections</li>
          <li className="hover:text-orange-500">Men</li>
          <li className=" hover:text-orange-500 ">Women</li>
          <li className=" hover:text-orange-500 ">About</li>
          <li className=" hover:text-orange-500 ">Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
