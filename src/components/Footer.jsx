import React from 'react'
import { AiFillStar, AiOutlineInstagram, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai'
const Footer = () => {
    return (
    <>
    <footer className='footerContainer'>
        <div>
            <ul className='footerUl'>
                <li><a href="">Home</a></li>
                <li><a href="">Glasses</a></li>
                <li><a href="">Contact Us</a></li>
            </ul>
        </div>
        <div className='footerRedes'>
        <ul className='wrapper'>
                <li className='icon facebook'><a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer"><AiOutlineWhatsApp/></a><span className='tooltip'>Whatsapp</span></li>
                <li className='icon instagram'><a href="http://instagram.com" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram/></a><span className='tooltip'>Instagram</span></li>
                <li className='icon twitter'><a href="http://twitter.com" target="_blank" rel="noopener noreferrer"><AiOutlineTwitter/></a><span className='tooltip'>Twitter</span></li>
            </ul>
        </div>
        <div className='logoFooter'>
            <AiFillStar/>
            GlassShop
        </div>
    </footer>
    </>
    )
}

export default Footer