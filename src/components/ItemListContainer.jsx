import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

const ItemListContainer = ({ greeting }) => {
    const [productList, setProductList] = useState([])
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const getProducts = async () => {
        const db = getFirestore()
        const collectionRef = id ? query(collection(db, "products"), where("category", "==", id)) : collection(db, "products")
        const snapshot = await getDocs(collectionRef)
        setTimeout(() => {
            setProductList(snapshot.docs.map(d => ({ id: d, ...d.data() })))
            setLoading(false)
        }, 2000);
    }
    useEffect(() => {

        setLoading(true)
        getProducts()
            .then((res) => setProductList(res))


    }, [id]);
    console.log(productList)
    return (
        <>
            <div className='itemListContaier'>
                <h2>{greeting}</h2>
                {loading ? <div className='loader'><Loader /></div> : <ItemList productList={productList} />}
            </div>

        </>
    )
}

export default ItemListContainer