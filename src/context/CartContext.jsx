import { createContext, useEffect, useState } from "react"

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
                return prod;
            })
            setCart(carritoActualizado)
            /* window.sessionStorage.setItem("cart", JSON.stringify(carritoActualizado)); */
        }
        else {
            setCart([...cart, { ...item, cantidad }])
            /* window.sessionStorage.setItem("cart", JSON.stringify(cart));
    */ }
    }
    const removeItem = (id) => {
        const updateItems = cart.filter((item => item.id !== id))
        setCart(updateItems)
    }
    const emptyCart = (cart) => {
        setCart([]);
    }
    function getTotalItemCount() {
        let total = 0;
        cart.forEach(itemInCart => {
            total = total + itemInCart.cantidad
        })
        return total;
    }
    const getTotalPrice = () => {
        let totalPrice = 0;
        cart.forEach(itemInCart => {
            totalPrice = totalPrice + itemInCart.cantidad * itemInCart.price
        })
        return totalPrice;
    }
    const [quantity, setquantity] = useState(0)
    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeItem,
            emptyCart,
            getTotalItemCount,
            getTotalPrice
        }}>
            {children}
        </CartContext.Provider>
    )

}