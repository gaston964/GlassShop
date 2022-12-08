import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { products } from '../mock/products';

const ItemListContainer = ({ greeting }) => {
    const [productList, setProductList] = useState([])
    const getProducts = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(products)
            }, 2000)
        })
    }
    useEffect(() => {
        getProducts()
            .then((res) => setProductList(res))
    }, []);

    return (
        <>
            <div className='itemListContaier'>
                <h2>{greeting}</h2>
                <ItemList productList={productList} />
            </div>
        </>
    )
}

export default ItemListContainer