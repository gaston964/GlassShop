import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'


const MyForm = () => {
    const { cart, getTotalPrice, emptyCart } = useContext(CartContext)
    const [user, setUser] = useState({})
    const [orderId, setOrderId] = useState('')
    const datosComprador = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const makeOrder = async (e) => {
        e.preventDefault()
        let order = {
            buyer: user,
            items: cart,
            total: getTotalPrice(),
            date: serverTimestamp()
        }

        const db = getFirestore();
        const orderCollection = collection(db, "orders")
        const res = await addDoc(orderCollection, order)
        setOrderId(res.id)
        emptyCart()
    }
    console.log(cart)
    return (
        <>
            <div className='formularioPadre' onSubmit={makeOrder}>
                {orderId ? <h2>Muchas gracias por su compra su número de orden es: {orderId}</h2>
                    : <form className='formulario'>
                        <h2>Formulario de compra!</h2>
                        <input onChange={datosComprador} type="text" name="name" placeholder="Nombre" />
                        <input onChange={datosComprador} type="tel" name="phone" placeholder="Número de celular" />
                        <input onChange={datosComprador} type="email" name="email" placeholder="Correo electrónico" />
                        <button type="submit">Generar orden</button>
                    </form>}
                <div className='cartFormularioP'>
                    {cart.map(cartOrder => {
                        return (
                            <div className='cartFormulario'>
                                <h2>{cartOrder.title}</h2>
                                <h3>${cartOrder.price}</h3>
                                <h4>Cantidad: {cartOrder.cantidad}</h4>
                                <h4>Subtotal: ${cartOrder.cantidad * cartOrder.price} </h4>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default MyForm




