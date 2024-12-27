import CartIcon from './CartIcon'

const AppNav = () => {
  return (
    <>
      <div className=" pb-3 align-element mt-6 flex items-center justify-between lg:pb-0">
        <div className="flex items-center gap-4  lg:gap-10 ">
          <img src="/images/icon-menu.svg" alt="" className="lg:hidden" />
          <img src="/images/logo.svg" />
          <ul className=" hidden lg:flex gap-6 cursor-pointer text-gray-400">
            <li className=" hover:border-b-2 border-orange-500 ">
              Collections
            </li>
            <li className=" hover:border-b-2 border-orange-500 ">Men</li>
            <li className=" hover:border-b-2 border-orange-500 ">Women</li>
            <li className=" hover:border-b-2 border-orange-500 ">About</li>
            <li className=" hover:border-b-2 border-orange-500 ">Contact</li>
          </ul>
        </div>
        <div className="flex items-center gap-3 lg:gap-10">
          <CartIcon />
          <img
            src="/images/image-avatar.png"
            alt="profile"
            className="w-10 cursor-pointer hover:border-orange-400 border-2 rounded-full
      "
          />
        </div>
      </div>
      <div className="hidden lg:block lg:border-b-2 align-element w-[80%] lg:pt-7"></div>
    </>
  )
}

export default AppNav
