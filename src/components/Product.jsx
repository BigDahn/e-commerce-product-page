import { useEffect, useState } from "react"
import { useCart } from "../contexts/CartContext"
import { useWindowSize } from '@react-hook/window-size'

const Hero1 = '/images/image-product-1.jpg'
const Hero2 = '/images/image-product-2.jpg'
const Hero3 = '/images/image-product-3.jpg'
const Hero4 = '/images/image-product-4.jpg'


const Images = [Hero1, Hero2, Hero3, Hero4]



const Product = () => {
  const[image,setImage] = useState(Images[0])

const {dispatch} = useCart()
const [num,setNum] = useState(0)
  function nextButton () {
setNum((n)=> n >= 3 ? 0 : n + 1)
    setImage(Images[num])
  }
  function prevButton() {
    setNum((n) => (n <= 0  ? 3 : n - 1))
    setImage(Images[num])
    
  }
const [width] = useWindowSize()
useEffect(() => {
 if (width >= 768) {
   setImage(Images[0])
 } else if (width >= 1280) {
   setImage(Images[0])
 } else  setImage(Images[0])
}, [width])
  return (
    <div className="lg:grid lg:gap-3  ">
      <img
        src={image}
        alt="image"
        className=" lg:w-96 lg:rounded-xl relative "
        role="button"
        onClick={() => dispatch({ type: 'openModal' })}
      />
      <div className=" absolute lg:hidden">
        <button
          className="rounded-full bg-white h-12 w-12 lg:h-8 lg:w-8 flex items-center justify-center absolute bottom-[12rem] left-3 "
          onClick={() => prevButton()}
        >
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 1 3 9l8 8"
              stroke="#1D2026"
              stroke-width="3"
              fill="none"
              fill-rule="evenodd"
              className="  hover:stroke-orange-500"
            />
          </svg>
        </button>
        <button
          className="rounded-full bg-white h-12 w-12 lg:h-8 lg:w-8 flex items-center justify-center absolute bottom-[12rem] left-[21rem]"
          onClick={() => nextButton()}
        >
          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m2 1 8 8-8 8"
              stroke="#1D2026"
              stroke-width="3"
              fill="none"
              fill-rule="evenodd"
              className="  hover:stroke-orange-500"
            />
          </svg>
        </button>
      </div>
      <div className=" hidden lg:flex gap-6">
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
                onClick={() => setImage(Images[index])}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Product
