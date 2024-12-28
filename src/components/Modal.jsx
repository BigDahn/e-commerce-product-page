import { useState } from 'react'
import { useCart } from '../contexts/CartContext'

const Hero1 = '/images/image-product-1.jpg'
const Hero2 = '/images/image-product-2.jpg'
const Hero3 = '/images/image-product-3.jpg'
const Hero4 = '/images/image-product-4.jpg'

const Images = [Hero1, Hero2, Hero3, Hero4]

const Modal = () => {
  const { dispatch } = useCart()
  const [image, setImage] = useState(Images[0])
  const [num, setNum] = useState(0)
  function nextButton() {
    setNum((n) => (n >= 3 ? 0 : n + 1))
    setImage(Images[num])
  }
  function prevButton() {
    setNum((n) => (n <= 0 ? 3 : n - 1))
    setImage(Images[num])
  }
  return (
    <div className=" hidden lg:fixed inset-0 bg-black backdrop-blur-sm bg-opacity-25 lg:flex justify-center items-center z-50">
      <button
        className="rounded-full bg-white h-8 w-8 flex items-center justify-center relative bottom-[3rem] right-[-3rem] "
        onClick={() => prevButton()}
      >
        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 1 3 9l8 8"
            stroke="#1D2026"
            stroke-width="2"
            fill="none"
            fill-rule="evenodd"
            className="  hover:stroke-orange-500"
          />
        </svg>
      </button>
      <button
        className="rounded-full bg-white h-8 w-8 flex items-center justify-center relative bottom-[3.2rem] left-[29rem]"
        onClick={() => nextButton()}
      >
        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m2 1 8 8-8 8"
            stroke="#1D2026"
            stroke-width="2"
            fill="none"
            fill-rule="evenodd"
            className="  hover:stroke-orange-500"
          />
        </svg>
      </button>
      <section className="flex flex-col  gap-3 items-center">
        <div className="flex flex-col gap-2">
          <button
            className="place-self-end"
            onClick={() => dispatch({ type: 'closeModal' })}
          >
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#fff"
                fill-rule="evenodd"
                className="hover:fill-orange-500"
              />
            </svg>
          </button>
          <div>
            <img
              src={image}
              alt="image"
              className="w-[450px] rounded-xl  "
              role="button"
            />
          </div>
        </div>

        <div className="flex gap-6">
          {Images.map((img, index) => {
            return (
              <div key={index}>
                <img
                  src={img}
                  alt={image}
                  className={`w-20 rounded-lg ${
                    img === image &&
                    'opacity-45 border-orange-500 rounded-lg border-2'
                  } cursor-pointer hover:opacity-35`}
                  onClick={() => {
                    setImage(Images[index]), setNum(index)
                  }}
                />
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Modal
