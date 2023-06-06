import React from 'react';
import './calculator.css'

const ConverterItem = ({ title, value, handleChange, currency, disabled, placeholder }) => {
  return (
    <div className='converter__body--item'>
      <h3 className='body__title'>{title}</h3>
      <div className='converter__input'>
        <input onChange={(event) => { handleChange(event) }} value={value} type='number' className='input__number' placeholder={placeholder} disabled={disabled} onWheel={(e) => e.target.blur()} />
        <span className='input__currency'>{currency}</span>
      </div>
    </div>
  )
}

export default ConverterItem