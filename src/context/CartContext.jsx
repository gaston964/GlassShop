import React from 'react'
import { createContext } from 'react'


const CartContext = createContext({
    items: [1,2,3]
})



const CartContextProvider = ({children}) => {
    const context = {
        items: [2,4,6]
    }
    return (
        <CartContext.Provider value={{context}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartContextProvider}
