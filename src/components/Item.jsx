import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({ id, title, pictureUrl }) => {
    return (
        <>
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
        </>
    )
}

export default Item

/* 
<div>
                <figure >
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes"  />
                </figure>
                <div>
                    <h2 >{id} - {title}</h2>
                    <h4 >Stock: {stock}</h4>
                    <p>{description}</p>
                    <div>
                        <button>Buy Now</button>
                    </div>
                </div>
            </div>
*/