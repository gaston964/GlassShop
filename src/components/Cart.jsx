import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'



const Cart = ({ condition }) => {
    const { cart, removeItem, emptyCart, getTotalPrice } = useContext(CartContext)
    condition = cart.length === 0

    return (
        <div className='cartview'>
            {condition &&
                <div className='cartPadreCondicional'>
                    <h2>No hay Items en el Carrito</h2>
                    <Link to={"/"}>
                        <button className='cartBtn'>Volver al inicio</button>
                    </Link>
                </div>
            }
            {!condition &&
                <>
                    <h1>Carrito de Compras</h1>
                    <div className='cartPadre'>
                        <div className='cartContainer'>
                            {cart.map(cartItm => (
                                <div className='itemCard' key={cartItm.id}>
                                    <img className='itemcard_img' src={cartItm.pictureUrl} alt={cartItm.title} />
                                    <h1>{cartItm.title}</h1>
                                    <h3>${cartItm.price}</h3>
                                    <h4>Cantidad: {cartItm.cantidad}</h4>
                                    <h4>Subtotal: ${cartItm.cantidad * cartItm.price} </h4>
                                    <button className='item-det-button' onClick={() => removeItem(cartItm.id)} >Eliminar</button>
                                </div>
                            ))}
                        </div>
                        <div className='cartBoE'>
                            <h3>Total: ${getTotalPrice()}</h3>
                            <button className='item-det-button' onClick={emptyCart}>Vaciar Carrito</button>
                            <Link to={"/form"} >
                                <button className={`item-det-button`} >Comprar</button>
                            </Link>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Cart
