import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
    const {items} = useContext(CartContext)


    return (
        <>
            <h1>Cart</h1>
            {items}
        </>
    )
}

export default Cart