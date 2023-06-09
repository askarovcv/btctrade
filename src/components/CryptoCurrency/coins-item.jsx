import React from 'react'
import './coins.css'
import { format } from 'date-fns'

const CoinItem = ({ coins }) => {
  const percentage24h = coins.price_change_percentage_24h.toFixed(2);
  const percentage7d = coins.price_change_percentage_7d_in_currency.toFixed(2);
  return (
    <div className='coin-row'>
      <div className='img-symbol'>
        <img className='coin__img' src={coins.image} alt='' />
        <p>{coins.name}</p>
      </div>
      <p className='coin-price'>${coins.current_price.toLocaleString()}</p>
      <p className={percentage24h < 0 ? 'negative_percentage' : 'percentage'}>{percentage24h}%</p>
      <p className={percentage7d < 0 ? 'hide-mobile negative_percentage' : 'hide-mobile percentage'}>{percentage7d}%</p>
      <p className='hide-mobile'>{format(new Date(coins.last_updated), 'dd.MM.yyyy hh:mm') }</p>
    </div>
  )
}

export default CoinItem
