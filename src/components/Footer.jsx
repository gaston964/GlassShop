import React from 'react'
import { FooterContainer,FooterNav, FooterNavLi, FooterNavUl, FooterRedes } from './FooterElements'
const Footer = () => {
    return (
    <>
    <FooterContainer>
        <FooterNav>
            <FooterNavUl>
                <FooterNavLi><a href="">Home</a></FooterNavLi>
                <FooterNavLi><a href="">About Us</a></FooterNavLi>
                <FooterNavLi><a href="">Glasses</a></FooterNavLi>
                <FooterNavLi><a href="">Glasses</a></FooterNavLi>
            </FooterNavUl>
            <FooterRedes>
                <FooterNavLi>Facebook</FooterNavLi>
                <FooterNavLi>Instagram</FooterNavLi>
                <FooterNavLi>Whatsupp</FooterNavLi>
            </FooterRedes>
        </FooterNav>
    </FooterContainer>
    </>
    )
}

export default Footer