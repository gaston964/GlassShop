import React from 'react'

const Item = ({ id, name, status, image }) => {
    return (
        <>
            <div>
                <figure >
                    <img src={image} alt={name} />
                </figure>
                <div>
                    <h2 >{id} - {name}</h2>
                    <h4 >Status: {status}</h4>
                </div>
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