import { doc, getDoc, getFirestore } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import ItemCount from './ItemCount'
import Loader from './Loader'

const ItemDetailContainer = () => {
    const [itemDetail, setItemDetail] = useState({})
    useEffect(() => {
        setLoading(true)
        getItemDetail()
    }, [])
    const { id } = useParams()
    /* caputura lo de la URL y lo pasa a codigo, lo pasa como string por eso usamos un parseInt o Number
    es para capturar datos en este caso "id" */
    const [loading, setLoading] = useState(false)
    const getItemDetail =  async () => {
        const db = getFirestore()
        const docRef = doc(db, "products",id)
        const snapshot = await getDoc(docRef)
        setTimeout(() => {
            setItemDetail({id: snapshot.id, ...snapshot.data()})
            setLoading(false)
        }, 2000);
    }
    const [quantity, setquantity] = useState(0)
    const {addToCart, cart} = useContext(CartContext)
    const addHandler = (cantidad) => {
        addToCart(itemDetail, cantidad)
        setquantity(cantidad)
    }
    return (
        <div className='item_datail'>
            {loading ?
                <div className='loader'><Loader/></div>
                :
                <div className="itemCard">
                    <img className='itemcard_img' src={itemDetail.pictureUrl} alt={itemDetail.title} />
                    <h1>{itemDetail.title}</h1>
                    <p className="item_price">${itemDetail.price}</p>
                    <p>{itemDetail.description}</p>
                    <h4 >Stock: {itemDetail.stock}</h4>
                    {quantity === 0 ? 
                    <ItemCount stock={itemDetail.stock} onAdd={addHandler} /> 
                    : 
                    <Link to={"/cart"}><button className='item-det-button'>Terminar mi compra</button></Link>}
                </div>
            }
        </div>
    )
}

export default ItemDetailContainer
