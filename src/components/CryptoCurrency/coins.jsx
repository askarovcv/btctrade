import React from 'react'
import CoinItem from './coins-item'
import './coins.css'
import { Link } from 'react-router-dom'
import Coin from '../../routes/coin'

export const Coins = ({ coins }) => {
  return (
    <div className='coins__inner' id='coins'>
      <div className='heading'>
        <p className='coin-name'>Монета</p>
        <p className='coin-price'>Цена</p>
        <p className='day-percent'>% / 1 день</p>
        <p className='week_percent hide-mobile'>% / 7 дней</p>
        <p className='hide-mobile'>Дата</p>
      </div>
      {coins.map(coins => {
        return (
          <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
            <CoinItem coins={coins} />
          </Link>
        )
      })}
    </div>
  )
}
