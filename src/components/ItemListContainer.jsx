import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { products } from '../mock/products';
import { useParams } from 'react-router-dom';
import Loader from './Loader';

const ItemListContainer = ({ greeting }) => {
    const [productList, setProductList] = useState([])
    const {id} = useParams()
    const [loading, setLoading] = useState(false)
    const getProducts = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(products)
                setLoading(false)
            }, 2000)
        })
    }
    useEffect(() => {
        if (id) {
            setLoading(true)
            getProducts()
            .then((res) => setProductList(res.filter(elem => elem.category === id)))
        } else{
            setLoading(true)
            getProducts()
            .then((res) => setProductList(res))
        }
        
    }, [id]);

    return (
        <>
            <div className='itemListContaier'>
                <h2>{greeting}</h2>
                {loading ? <div className='loader'><Loader/></div>: <ItemList productList={productList} />}
            </div>
            
        </>
    )
}

export default ItemListContainer