import React, { useEffect, useState } from 'react'
import Item from './Item'

const Producs = [
    { id: 1, title: "RayBan", description: "Son un Gran Marco de Lentes", price: 1500, pictureURL: "", stock: 10 },
    { id: 2, title: "Vogue", description: "Son un Gran Marco de Lentes", price: 1500, pictureURL: "", stock: 10 },
    { id: 3, title: "Rusty", description: "Son un Gran Marco de Lentes", price: 1500, pictureURL: "", stock: 10 },
    { id: 4, title: "Vulk", description: "Son un Gran Marco de Lentes", price: 1500, pictureURL: "", stock: 10 },
]
const ItemList = () => {
    const [item, setItem] = useState([])
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
    }
    return (
        <>
            <div>
                Items
                {item.map(i => <Item key={i.id} {...i} />)}
            </div>
        </>
    )
}

export default ItemList