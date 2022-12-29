import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore'
import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'


const MyForm = () => {
    const { cart, getTotalPrice } = useContext(CartContext)
    const makeOrder = () => {
        const user = { name: 'usuario', phone: '261455289', emial: 'usuario@gmail.com', }
        const order = {
            buyer: user,
            items: [{ id, title, price }],
            total: getTotalPrice(),
            date: serverTimestamp()
        }
        console.log('Levantando la order', order);
        saveOrder(order)
    }
    const saveOrder = async (order) => {
        const db = getFirestore();
        const orderCollection = collection(db, "orders")
        const { id } = await addDoc(orderCollection, order)
        console.log("Nueva Orden: ", id);
    }

    return (
        <>
            <div className='formularioPadre'>
                <form className='formulario'>
                    <h2>Formulario de compra!</h2>
                    <input type="text" name="name" placeholder="Nombre" />
                    <input type="tel" name="phone" placeholder="Número de celular" />
                    <input type="email" name="email" placeholder="Correo electrónico" />
                    <button type="submit">Generar orden</button>
                </form>
                <div className='cartFormularioP'>
                    {cart.map(cartOrder => {
                        <div className='cartFormulario'>
                            <h2>{cartOrder.title}</h2>
                            <h3>${cartOrder.price}</h3>
                            <h4>Cantidad: {cartOrder.cantidad}</h4>
                            <h4>Subtotal: ${cartOrder.cantidad * cartOrder.price} </h4>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default MyForm

