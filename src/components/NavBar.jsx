import React from 'react'
import {Link} from 'react-router-dom'
import { AiFillStar } from "react-icons/ai";
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <>
        <nav className='containerNavBar'>
            <Link to='/' className='iconNavBar'>
                <AiFillStar/>
                GlassShop
            </Link>
            <div className='linkNavBar'>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/category/Versace/'}>Versace</Link>
                    <Link to={'/category/RayBan/'}>Rayban</Link>
                    <Link to={'/category/Vogue/'}>Vogue</Link>
                    <Link to={'/category/Vulk/'}>Vulk</Link>
            </div>
            <div>
            <CartWidget/>
            </div>
        </nav>
        </>
    )
}

export default NavBar