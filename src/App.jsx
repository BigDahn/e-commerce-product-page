import AppNav from "./components/AppNav"

import Hero from "./components/Hero"
import Modal from "./components/Modal"
import { useCart } from "./contexts/CartContext"



function App() {
 const { modalIsOpen } = useCart()

  return (
    <>
    
      {modalIsOpen && <Modal />}
      <AppNav />
      <Hero />
    </>
  )
}

export default App
