import React from 'react'
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai'


const Icon = () => {
    return (
        <div>
            <h1>Icons</h1>
            <ul className='wrapper'>
                <li className='icon facebook'><a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer"><AiOutlineWhatsApp/></a><span className='tooltip'>Whatsapp</span></li>
                <li className='icon instagram'><a href="http://instagram.com" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram/></a><span className='tooltip'>Instagram</span></li>
                <li className='icon twitter'><a href="http://twitter.com" target="_blank" rel="noopener noreferrer"><AiOutlineTwitter/></a><span className='tooltip'>Twitter</span></li>
            </ul>
        </div>
    )
}

export default Icon