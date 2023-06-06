import React from 'react'
import TetherLogo from '../../assets/images/tether2.jpg'
import TetherCoin from '../../assets/images/tether-coins.webp'
import './info.css'

const Info = () => {
  return (
    <div className='info__section' id='info'>
      <div className='info__about'>
        <div className='info__inner'>
          <div className='info__left'>
            <h1 className='info__title'>Что такое <span className='tether__title'>Tether</span>(USDT) ?</h1>
            <p className='info__paragraph'>Tether — один из самых популярных стейблкоинов, стоимость которого привязана к стоимости доллара США. В 2014 году руководители данного проекта Брок Пирс и Крейг Селлар объединили свои усилия с предпринимателем Ривом Коллинзом и запустили стартап Realcoin. В том же году была выпущена криптовалюта с таким же названием. В конце 2014 года был произведен ребрендинг Realcoin, и криптовалюта получила новое название — Tether (USDT), а уже в начале 2015 года она была включена в листинг нескольких бирж и начала торговаться в парах с разными криптовалютами. Tether был разработан в качестве подобия моста между фиатом и криптовалютой. Также он предлагает пользователям стабильность, прозрачность и минимальную комиссию. Важными достоинствами USDT являются абсолютная прозрачность расчетов и высокая скорость проведения операций.</p>
          </div>
          <div className='info__right'>
            <div className='info__img-inner'>
              <img src={TetherCoin} alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className='info__descr'>
        <div className='info__inner'>
          <div className='info__descr--right'>
            <div className='info__img-about'>
              <img src={TetherLogo} alt='' />
            </div>
          </div>
          <div className='info__left'>
            <h1 className='info__title'>Как работает <span className='tether__title'>Tether</span> ?</h1>
            <p className='info__paragraph'>Назвать USDT инвестиционным инструментом нельзя. Токен больше играет роль надежного хранилища имеющихся средств.

              Схема эмиссии Tether проста, так как USDT является двойником доллара США. Как это работает? Предположим, инвестор хочет начать торговать на бирже, покупать и продавать криптовалюту и т. д. У него есть доллары США, а крипты нет. Для этого ему следует открыть счет в компании Tether Limited и перевести доллары на свой депозит. После этого, компания создает USDT в эквивалентном количестве и помещает их на счет пользователя. Затем пользователь совершает операции со своими USDT на бирже. В какой-то момент пользователь решает вывести свои деньги обратно в фиат. Для этого он продает свою криптовалюту за USDT, после чего переводит USDT на свой счет в компании Tether, а компания переводит на его фиатный счет доллары США в эквивалентном количестве.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info