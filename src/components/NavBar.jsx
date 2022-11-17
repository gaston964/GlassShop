import React from 'react'
import { Menu, NavContainer, MenuItems, IconNav } from './NavBarElements'
import { AiFillStar } from "react-icons/ai";
import CartWidget from './CartWidget';
const NavBar = () => {
    return (
        <>
        <NavContainer>
            <IconNav>
                <AiFillStar/>
                GlassShop
            </IconNav>
            <Menu>
                <MenuItems>
                <a href="">Home</a>
                </MenuItems>
                <MenuItems>
                <a href="">Glasses</a>
                </MenuItems>
                <MenuItems>
                <a href="">About Us</a>
                </MenuItems>
                <MenuItems>
                <a href="">Contact</a>
                </MenuItems>
            </Menu>
            <CartWidget/>
        </NavContainer>
        </>
    )
}

export default NavBar