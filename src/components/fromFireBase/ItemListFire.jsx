import React, { useEffect, useState } from 'react'
import { doc, getDoc, getFirestore, collection, getDocs } from 'firebase/firestore'

const ItemListFire = () => {
    const [item, setItem] = useState({});
    const [items, setItems] = useState([])

    useEffect(() => {
        getItemData()
        getColeccionData()
    }, [])

    const getItemData = () => {
        const db = getFirestore()
        const docRef = doc(db, 'products', '0A24cly5q5hDQy50PBjo')
        getDoc(docRef).then(snapshot => {
            setItem({ id: snapshot.id, ...snapshot.data() });
            console.log({ id: snapshot.id, ...snapshot.data() });
        })
    }
    const getColeccionData = async () => {
        const db = getFirestore()
        const collectionRef = collection(db, 'products')
        const snapShot = await getDocs(collectionRef)
        setItems(snapShot.docs.map(d => ({ id: d.id, ...d.data() })));
        console.log(snapShot.docs.map(d => ({ id: d.id, ...d.data() })));
    }
    return (
        <div className='itemListContaier'>
            <h1>
                ItemListFire
            </h1>
            <h2>Producto destacado: </h2>
            <h3>{item.title} - Precio: {item.price} - Stock : {item.stock}</h3>
            {items.map(i => <li key={i.id}>{i.title} - Price: {i.price}</li>)}
        </div>
    )
}

export default ItemListFire