import React from 'react'
import { Link } from 'react-router-dom'
import './coins.css'

const Navbar = () => {
  return (
    <Link to='/'>
      <div className='navbar__logo'>
        <h1>Сводка по <span className='purple'>криптовалютам</span></h1>
      </div>
    </Link>
  )
}

export default Navbar