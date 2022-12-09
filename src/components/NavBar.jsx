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
            <div className='linkNavBar'>
                    <Link to={'/GlassShop/'}>Home</Link>
                    <Link to={'/GlassShop/category/Versace/'}>Versace</Link>
                    <Link to={'/GlassShop/category/RayBan/'}>Rayban</Link>
                    <Link to={'/GlassShop/category/Vogue/'}>Vogue</Link>
            </div>
            <div>
            <CartWidget/>
            </div>
        </nav>
        </>
    )
}

export default NavBar