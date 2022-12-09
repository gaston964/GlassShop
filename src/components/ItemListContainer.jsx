import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { products } from '../mock/products';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
    const [productList, setProductList] = useState([])
    const {categoryId} = useParams()
    const getProducts = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(products)
            }, 2000)
        })
    }



    useEffect(() => {
        if (categoryId) {
            getProducts()
            .then((res) => setProductList(res.filter(elem => elem.category === categoryId)))
        } else{
            getProducts()
            .then((res) => setProductList(res))
        }
        
    }, [categoryId]);

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