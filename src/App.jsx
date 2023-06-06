import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, Route, Routes } from 'react-router-dom';
import Coin from './routes/coin';
import NavbarSecond from './components/NavBar/navbar';
import Hero from './components/Header/header.jsx';
import Info from './components/Info/info';
import Footer from './components/Footer/footer';
import Convertor from './components/Calculator/calculator';
import { Coins } from './components/CryptoCurrency/coins';


function App() {
  const [coins, setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en';

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      console.log(response.data[0]);
    }).catch((error) => {
      console.log(error);
    })
  }, [])

  return (
    <>
      <NavbarSecond />
        <Hero />
      <div className='container'>
        <Convertor />
        <Link to='/'>
          <div className='navbar__logo'>
            <h1>Сводка по <span className='purple'>криптовалютам</span></h1>
          </div>
        </Link>
        <Routes >
          <Route path='/' element={<Coins coins={coins} />} />
          <Route path='/coin' element={<Coin />}>
            <Route path=':coinId' element={<Coin />} />
          </Route>
        </Routes>
        <Info />
      </div>
      <Footer />
    </>
  )
}

export default App
