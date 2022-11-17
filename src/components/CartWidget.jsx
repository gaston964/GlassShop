import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import styled from 'styled-components';

const Cart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    cursor: pointer;
`;
const CartWidget = () => {
    return (
        <Cart>
            <AiOutlineShoppingCart/>
            8
        </Cart>
    )
}

export default CartWidget