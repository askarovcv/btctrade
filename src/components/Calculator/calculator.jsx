import React, { useEffect, useState } from 'react'
import './calculator.css'
import ConverterItem from './converter-item';


const Convertor = () => {

  const [usdtValue, setUsdtValue] = useState('');
  const [usdValue, setUsdValue] = useState('');

  const usdtHandleChange = (event) => {
    setUsdtValue(event.target.value)
  }

  const usdHandleChange = (event) => {
    setUsdValue(event.target.value)
  }

  const calculateUsd = (usdtValue) => {
    const percent = 0.011;
    if (usdtValue !== undefined) {
      const usdValue = usdtValue * (1 + percent);
      return usdValue.toFixed(2);
    }
  }

  const calculateUsdt = (usdValue) => {
    const percent = 0.011;
    if (usdValue !== undefined) {
      const usdtValue = usdValue * (1 - percent);
      return usdtValue.toFixed(2);
    }
  }

  return (
    <div className='converter' id='calculator'>
      <div className='converter__inner'>
        <h2 className='converter__title'>Калькулятор обмена</h2>
        <div className='converter__rates'>
          <div className='rates__text'>Курс: <span className='rates__value'>1 USDT = 1.011 USD</span></div>
          <span className='rates__fee'>Комиссия - 1.1%</span>
        </div>
        <div className='converter__body'>
          <div className='converter__first'>
            <ConverterItem handleChange={usdtHandleChange} title={'Вы покупаете'} value={usdtValue} currency='USDT' disabled={false} placeholder="введите сумму" />
            <ConverterItem handleChange={usdtHandleChange} title={'Вы отдаёте'} value={calculateUsd(usdtValue)} currency='USD' disabled={true} placeholder="0" />
          </div>
          <div className='converter__second'>
            <ConverterItem handleChange={usdHandleChange} title={'Вы покупаете'} value={usdValue} currency='USD' disabled={false} placeholder="введите сумму" />
            <ConverterItem handleChange={usdHandleChange} title={'Вы отдаёте'} value={calculateUsdt(usdValue)} currency='USDT' disabled={true} placeholder="0" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Convertor;