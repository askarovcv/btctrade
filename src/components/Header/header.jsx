import React from 'react'
import './header.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'>
                    <p>покупка & продажа криптовалюты по выгодным условиям</p>
                    <h1>Обмен Криптовалют в Бишкеке</h1>
                    <p>Покупайте & продавайте быстро и безопасно</p>
                    <div className='input-container'>
                        <a href='https://wa.me/996500979700' className='whatsapp__link'>Написать на WhatsApp</a>
                        <a href='https://t.me/Kushbeka97' className='telegram__link'>Написать в Telegram</a>
                    </div>
            </div>
        </div>
    )
}

export default Hero