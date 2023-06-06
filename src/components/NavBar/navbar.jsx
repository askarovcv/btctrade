import React, { useState } from 'react'
import { FaBars, FaTelegram, FaTimes, FaWhatsapp } from 'react-icons/fa'
import './navbar.css'
import { Link } from 'react-scroll'

const NavbarSecond = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='header'>
            <div className='container'>
              <Link  className='hero__title' activeclass="active" to="hero" spy={true} smooth={true} offset={-210} duration={500}><h1>BTC<span className='primary'>Trade</span></h1></Link>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link activeclass="active" to="calculator" spy={true} smooth={true} offset={-210} duration={500}>Калькулятор обмена</Link>
                    </li>
                    <li className='nav-item'>
                        <Link activeclass="active" to="coins" spy={true} smooth={true} offset={-200} duration={500}>Курс криптовалют</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/'>Лицензия</Link>
                    </li>
                    <li className='nav-item'>
                        <Link activeclass="active" to="info" spy={true} smooth={true} offset={-150} duration={500}>FAQ</Link>
                    </li>
                </ul>
                <ul className='social__list'>
                    <li className='social__item'>
                        <a href='https://wa.me/996500979700'>
                            <FaWhatsapp className='social__icon whatsapp--icon'></FaWhatsapp>
                        </a>
                    </li>
                    <li className='social__item'>
                        <a href='https://t.me/Kushbeka97'>
                            <FaTelegram className='social__icon tg--icon'></FaTelegram>
                        </a>
                    </li>
                    <li className='social__item'>
                        <a className='tel__link' href='tel:+996500979700'>
                            +996 500 97 97 00
                        </a>
                    </li>
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{ color: '#333' }} />) : (<FaBars size={20} style={{ color: '#333' }} />)}

                </div>
            </div>
        </div>
    )
}

export default NavbarSecond