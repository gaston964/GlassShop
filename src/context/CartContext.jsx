import { createContext, useEffect, useState } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    /* useEffect(() => {
        const storedItems = localStorage.getItem('cart');
        if (storedItems) {
            // Actualizar el estado con los items leídos desde LocalStorage
            setCart(JSON.parse(storedItems));
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]); */
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
            return setCart([...cart, { ...item, cantidad }])
        }
    }
    const removeItem = (id) => {
        const updateItems = cart.filter((item => item.id !== id))
        setCart(updateItems)
    }
    const emptyCart = (cart) => {
        setCart([]);
    }
    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeItem,
            emptyCart,
        }}>
            {children}
        </CartContext.Provider>
    )

}