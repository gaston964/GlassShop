import React, { useEffect, useState } from 'react'
import ItemCount from './ItemCount'

const ItemDetailContainer = () => {

    return (
        <>
            <div>
                <h3>ItemDetailContainer</h3>
            </div>
            <div>
                <ItemCount/>
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
*/