import React, { useEffect, useState } from 'react'
import Item from './Item'


const ItemList = () => {
/*     const [item, setItem] = useState([])
    useEffect(() => {
        getItems().then(response => {
            setItem(response)
        })
    }, [])

    const getItems = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Producs)
            }, 2000);
        })
    } */
    return (
        <>
            <div>
                Items
                {/* {item.map(i => <Item key={i.id} {...i} />)} */}
            </div>
        </>
    )
}

export default ItemList