import AppNav from "./components/AppNav"

import Hero from "./components/Hero"
import Modal from "./components/Modal"
import { useCart } from "./contexts/CartContext"
import Sidebar from "./components/Sidebar"


function App() {
 const { modalIsOpen, sidebar } = useCart()

  return (
    <>
      {modalIsOpen && <Modal />}
      <AppNav />
      <Hero />
      {sidebar && <Sidebar />}
    </>
  )
}

export default App
