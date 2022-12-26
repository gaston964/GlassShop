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
            .then(response => setItemDetail(response))
    }, [])
    const { id } = useParams()
    /* caputura lo de la URL y lo pasa a codigo, lo pasa como string por eso usamos un parseInt o Number
    es para capturar datos en este caso "id" */
    const [loading, setLoading] = useState(false)
    const getItemDetail = () => {
        
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
                    <h1>{itemDetail.id} - {itemDetail.title}</h1>
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

/* 
<div className="itemCard">
                <figure >
                    <img src={itemDetail.pictureUrl} alt={itemDetail.title} />
                </figure>
                <div>
                    <h2 >{itemDetail.id} - {itemDetail.title}</h2>
                    <p>{itemDetail.description}</p>
                    <h4 >Stock: {itemDetail.stock}</h4>
                </div>
            </div>
            <div>

<div className="itemCard">
    <img src={itemDetail.pictureUrl} alt={itemDetail.title} />
    <h1>{itemDetail.id} - {itemDetail.title}</h1>
    <p class="price">${itemDetail.price}</p>
    <p>{itemDetail.description}</p>
    <h4 >Stock: {itemDetail.stock}</h4>
    <p><button>Add to Cart</button></p>
</div>


const route = useParams()
    const [item, setItem] = useState({})
    const getProducts = () => {
        return new Promise((resolve, reject) => {
            resolve(products.find(product => product.id === 1))
        })
    }
useEffect(() => {
    getProducts()
        .then(response => setItem(response))
}, [])

*/