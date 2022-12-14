import React from 'react'
import { AiFillStar, AiOutlineInstagram, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>
            <footer className='footerContainer'>
                <div className='footerUl'>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/category/Versace/'}>Versace</Link>
                    <Link to={'/category/RayBan/'}>Rayban</Link>
                    <Link to={'/category/Vogue/'}>Vogue</Link>
                    <Link to={'/category/Vulk/'}>Vulk</Link>
                </div>
                <div className='footerRedes'>
                    <ul className='wrapper'>
                        <li className='icon facebook'><a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer"><AiOutlineWhatsApp /></a><span className='tooltip'>Whatsapp</span></li>
                        <li className='icon instagram'><a href="http://instagram.com" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram /></a><span className='tooltip'>Instagram</span></li>
                        <li className='icon twitter'><a href="http://twitter.com" target="_blank" rel="noopener noreferrer"><AiOutlineTwitter /></a><span className='tooltip'>Twitter</span></li>
                    </ul>
                </div>
                <div className='logoFooter'>
                    <AiFillStar />
                    GlassShop
                </div>
            </footer>
        </>
    )
}

export default Footer