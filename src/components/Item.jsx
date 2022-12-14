import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({ id, title, pictureUrl }) => {
    return (
        <>
        <div className="itemCard">
            <img className='itemcard_img' src={pictureUrl} alt={title} />
            <h1>{id} - {title}</h1>
            <Link to={`/item/${id}`}>
                <button className='item_button'>Ver más detalles</button>
            </Link>
        </div>
        </>
    )
}

export default Item

/* 
<div className="itemCard">
    <div>
        <h2 >{id} - {title}</h2>
    </div>
    <figure >
        <img className='itemcard_img' src={pictureUrl} alt={title} />
    </figure>
    <Link to={`/GlassShop/item/${id}`}>
        <button className='item_button'>Ver más detalles</button>
    </Link>
</div>




<div className="itemCard">
    <img className='itemcard_img' src={pictureUrl} alt={title} />
    <h1>{id} - {title}</h1>
    <Link to={`/GlassShop/item/${id}`}>
        <button className='item_button'>Ver más detalles</button>
    </Link>
</div>

*/