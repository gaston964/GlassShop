import React from 'react'
import {Link} from 'react-router-dom'
import { AiFillStar } from "react-icons/ai";
import CartWidget from './CartWidget';
const NavBar = () => {
    return (
        <>
        <nav className='containerNavBar'>
            <Link to='/GlassShop/' className='iconNavBar'>
                <AiFillStar/>
                GlassShop
            </Link>
            <div>
                <ul className='linkNavBar'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Glasses</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>
            </div>
            <div>
            <CartWidget/>
            </div>
        </nav>
        </>
    )
}

export default NavBar