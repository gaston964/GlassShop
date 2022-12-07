import React from 'react'


const Item = ({ id, title, pictureUrl }) => {
    return (
        <>
                <div className="itemCard">
                    <figure >
                        <img src={pictureUrl} alt={title} />
                    </figure>
                    <div>
                        <h2 >{id} - {title}</h2>
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