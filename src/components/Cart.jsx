import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'


const Cart = ({ condition }) => {
    const { cart, removeItem, emptyCart } = useContext(CartContext)
    console.log(cart)
    condition = cart.length === 0
    return (
        <>
            {condition &&
                <div className='cartPadreCondicional'>
                    <h2>No hay Items en el Carrito</h2>
                    <Link to={"/"}>
                    <button className='cartBtn'>Volver al inicio</button>
                    </Link>
                </div>
            }
            {!condition &&
                <div className='cartPadre'>
                    <h1>Carrito de Compras</h1>
                    <div className='cartContainer'>
                        {cart.map(cartItm => (
                            <div className='itemCard' key={cartItm.id}>
                                <img className='itemcard_img' src={cartItm.pictureUrl} alt={cartItm.title} />
                                <h1>{cartItm.title}</h1>
                                <h3>{cartItm.price}</h3>
                                <h4>Cantidad: {cartItm.cantidad}</h4>
                                <h4>Total: {cartItm.price}</h4>
                                <button onClick={() => removeItem(cartItm.id)} >Eliminar</button>
                            </div>
                        ))}
                    </div>
                    <h3>Total: </h3>
                    <button onClick={emptyCart}>Vaciar Carrito</button>
                </div>
            }

        </>
    )
}

export default Cart

/* 
 <div className="itemCard">
            <img className='itemcard_img' src={cartItm.pictureUrl} alt={cartItm.title} />
            <h1>{cartItm.title}</h1>
            <h3>{cartItm.price}</h3>
            <h4>Cantidad:{cartItm.cantidad}</h4>
            <h4>Total:{cartItm.price}</h4>
        </div>
*/