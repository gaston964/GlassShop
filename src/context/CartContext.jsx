import { createContext, useState } from "react"
import { products } from "../mock/products"

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const addToCart = (item, cantidad) => {
        const existsInCart = cart.find((prod) => prod.id === item.id)
        if (existsInCart) {
            const carritoActualizado = cart.map((prod) => {
                if (prod.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad }
                }
            })
            setCart(carritoActualizado)
        } else {
            setCart([...cart, { ...item, cantidad }])
        }
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