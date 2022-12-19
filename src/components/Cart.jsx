import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'


const Cart = () => {
    const {cart, removeItem, emptyCart} = useContext(CartContext)
    return (
        <>
            <h1>Carrito de Compras</h1>
            <ul>
                {cart.map(cartItm => (
                    <li key={cartItm.id}>
                    {cartItm.title}
                    <button onClick={removeItem} >Eliminar</button>
                    </li>
                ))}
            </ul>
            <button onClick={emptyCart}>Vaciar Carrito</button>
        </>
    )
}

export default Cart