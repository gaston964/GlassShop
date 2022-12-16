import { createContext, useState } from "react"
import { products } from "../mock/products"

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const addToCart = (e) => {
        setCart([{
            ...products,
            cantidad: 1
        }])
    }
    return (
    <CartContext.Provider value={{
        cart,
        addToCart
    }}>
        {children}
    </CartContext.Provider>
    )
    
}