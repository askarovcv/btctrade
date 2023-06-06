import React from 'react'
import {FaTelegram, FaWhatsapp} from 'react-icons/fa'
import './footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='col col-1'>
                    <h1>BTC<span className='primary'>Trade</span></h1>
                </div>
                <div className='col'>
                    <h5>Компания</h5>
                    <span className='bar'></span>
                        <p href='/'>OcOO "БТК Трейд"</p>
                        <p href='/'>Оператор обмена виртуальных активов</p>
                        <p href='/'>Лицензия №**** Серия NN от ** месяца **** года</p>

                </div>
                <div className='col'>
                    <h5>Навигация по сайту</h5>
                    <span className='bar'> </span>
                        <a href='/'>О нас</a>
                        <a href='/'>Новости</a>
                        <a href='/'>FAQ</a>
                        <a href='/'>Лицензия</a>
                </div>
                <div className='col'>
                    <h5>Свяжитесь с нами</h5>
                    <span className='bar'> </span>
                        <a href='https://t.me/Kushbeka97'><FaTelegram className='icon'/></a>
                        <a href='https://wa.me/996500979700'><FaWhatsapp className='icon'/></a>
                        <a href='tel:+996500979700'>+996500979700</a>
                </div>
            </div>
            
        </div>
    )
}

export default Footer