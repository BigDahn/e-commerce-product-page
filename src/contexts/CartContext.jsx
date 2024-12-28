import { createContext, useContext, useReducer } from 'react'

const CartContext = createContext()

const price = 125.0

const initialState = {
  numOfItems: 0,
  addedToCart: false,
  cartMenu: false,
  totalCost: 0,
  addedItems: 0,
  modalIsOpen: false,
  sidebar: false,
}

function reducer(state, action) {
  switch (action.type) {
    case 'increase':
      return {
        ...state,
        numOfItems: state.numOfItems + 1,
      }

    case 'reduce':
      return {
        ...state,
        numOfItems: state.numOfItems === 0 ? 0 : state.numOfItems - 1,
      }

    case 'addToCart':
      return {
        ...state,
        addedToCart: true,
        totalCost: state.numOfItems * price,
        addedItems: state.numOfItems,
      }

    case 'openCartMenu':
      return {
        ...state,
        cartMenu: !state.cartMenu,
      }

    case 'openModal':
      return {
        ...state,
        modalIsOpen: true,
      }

    case 'closeModal':
      return {
        ...state,
        modalIsOpen: false,
      }

    case 'closeSidebar':
      return {
        ...state,
        sidebar: false,
      }

    case 'openSidebar':
      return {
        ...state,
        sidebar: true,
      }
  }
}

function CartProvider({ children }) {
  const [
    {
      numOfItems,
      addedToCart,
      cartMenu,
      totalCost,
      addedItems,
      modalIsOpen,
      sidebar,
    },
    dispatch,
  ] = useReducer(reducer, initialState)
  return (
    <CartContext.Provider
      value={{
        numOfItems,
        addedToCart,
        cartMenu,
        addedItems,
        totalCost,
        modalIsOpen,
        sidebar,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

function useCart() {
  const context = useContext(CartContext)
  if (context === undefined)
    throw new Error('CartContext was used Outside the CartProvider')
  return context
}

export { CartProvider, useCart }
