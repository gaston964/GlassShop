import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";


const CartWidget = () => {
    return (
        <div className='cart'>
            <button>
            <AiOutlineShoppingCart/>
            </button>
            <span>{5}</span>
        </div>
    )
}

export default CartWidget