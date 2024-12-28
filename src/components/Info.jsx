
import CartAmount from './CartAmount'

const Info = () => {
  return (
    <div className="mx-auto max-w-6xl px-8  lg:pl-0 lg:w-[40%] pt-10 lg:mx-0  ">
      <h6 className="text-gray-400 pb-2">SNEAKER COMPANY</h6>
      <h3 className=" font-bold text-[2rem] text-black leading-10">
        Fall Limited Edition Sneakers
      </h3>
      <p className="pt-8 text-gray-400 text-[16px]">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>

      <article className='flex items-center justify-between lg:grid'>
        <div className="flex items-center gap-4 pt-3">
          <h6 className="font-medium text-[2rem]">$ 125.00</h6>
          <p className="rounded-md h-6 w-10 mt-1 bg-black text-white text-center">
            50%
          </p>
        </div>

        <p className="line-through text-gray-400 pt-4 lg:pt-0">$250.00</p>
      </article>

      <CartAmount />
    </div>
  )
}

export default Info
