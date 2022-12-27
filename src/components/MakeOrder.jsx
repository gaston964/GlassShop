import React, { useContext } from 'react'
import {serverTimestamp} from 'firebase/firestore'
import { CartContext } from '../context/CartContext'
import { Navigate } from 'react-router-dom'

const MakeOrder = () => {
    const { cart, getTotalPrice } = useContext(CartContext)
    const makeOrder = () => {
        const user = {name: 'usuario', phone: '261455289', emial: 'usuario@gmail.com',}
        const order = {
            buyer: user,
            items: cart,
            total: getTotalPrice (),
            date: serverTimestamp()
        }
        console.log('Levantando la order', order);
    }
    return (
        <>
        <div>
        <h1>Gracias por su compra!</h1>
        <h2>Su orden es:</h2>
        <h3>{makeOrder}</h3>
        </div>
        <button onClick={()=> Navigate('/')}>Volver</button>
        </>
    )
}

export default MakeOrder