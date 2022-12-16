import React, { useState } from 'react'
import { createContext } from 'react'

const CartContext = createContext()

const CartContextProvider = ({children}) => {
    const[cart, setCart]=useState([])
    const context = {
        items: []
    }
    return (
        <CartContext.Provider value={{context, cart}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartContextProvider}