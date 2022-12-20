import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from '../context/CartContext';


const CartWidget = () => {
    const {getTotalItemCount} = useContext(CartContext)
    return (
        <div className='cart'>
            <button>
            <AiOutlineShoppingCart/>
            </button>
            <span>{getTotalItemCount()}</span>
        </div>
    )
}

export default CartWidget