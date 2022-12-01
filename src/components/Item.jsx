import React from 'react'

const Item = ({id, title, stock}) => {
    return (
        <>
            <li>{id}. {title} - {stock}</li>
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