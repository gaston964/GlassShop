import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../mock/products'
import ItemCount from './ItemCount'
const ItemDetailContainer = () => {
    const [itemDetail, setItemDetail] = useState([])
    useEffect(() => {
        getItemDetail()
            .then(response => setItemDetail(response))
    }, [])
    const {id}= useParams()
    const getItemDetail = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products.find((item) => item.id === parseInt(id)))
            }, 2000);
        })
    }

    return (
        <>
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
                <ItemCount />
            </div>
        </>
    )
}

export default ItemDetailContainer

/* 
({ id, title, pictureUrl, stock, description }) => {
    return (
        <>
                <div className="itemCard">
                    <figure >
                        <img src={pictureUrl} alt={title} />
                    </figure>
                    <div>
                        <h2 >{id} - {title}</h2>
                        <p>{description}</p>
                        <h4 >Stock: {stock}</h4>
                    </div>
                </div>
        </>
    )
}




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