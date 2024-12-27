
import Info from './Info'
import Product from './Product'

const Hero = () => {
  return (
    <div className="  lg:flex justify-evenly  lg:mt-20 pl-0 lg:align-element overflow-hidden">
      <Product />
      <Info />
    </div>
  )
}

export default Hero
