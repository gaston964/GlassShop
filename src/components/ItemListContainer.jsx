import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { products } from '../mock/products';

const ItemListContainer = ({ greeting }) => {
    const [productList, setProductList] = useState([])
    const getProduct = () => {
        new Promise((resolve, reject) => {
            resolve(products)
            .then(products => setProductList(products))
        })
    }
    useEffect(() => {
    getProduct()
    }, [])
    
    return (
        <>
            <div className='itemListContaier'>
                <h2>{greeting}</h2>
                <ItemList productList = {productList} />
            </div>
        </>
    )
}

export default ItemListContainer