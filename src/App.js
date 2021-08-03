import React, {useState, useEffect} from 'react';
import './App.css';
import './index.css'
import axios from 'axios';
import Coin from './Coin';

function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
 
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data);

    }).catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLocaleLowerCase())
    )

  return (
    <div className="min-h-screen bg-indigo-800 App">
      <div className="pt-12 pb-16 bg-indigo-800">
        <h1 className="text-3xl font-semibold text-center text-white">Cryptocurrency Price Tracker</h1>
        <form className="mx-4 mt-6 md:flex md:justify-center">
          <input type="text" placeholder="Search all coins..." className="w-full px-4 py-3 placeholder-gray-500 bg-white rounded-full focus:ring-4 focus:ring-purple-300 focus:outline-none md:w-96" onChange={handleChange}/>
        </form>
      </div>
      <div className="grid grid-cols-4 px-4 py-3 font-semibold bg-white border-b-2 lg:grid-cols-6 md:grid-cols-5 lg:mx-36 rounded-t-2xl">
        <h3 className="col-span-2">Name</h3>
        <h3>Price</h3>
        <h3 className="hidden lg:block">Volume</h3>
        <h3>Change</h3>
        <h3 className="hidden lg:block md:block">Market Cap</h3>
      </div>
      <div className="pt-3 bg-white lg:mx-36">
    {filteredCoins.length === 0 ? (<p className="pt-2 pb-5 text-center">Sorry, no results found</p>) : filteredCoins.map(coin => {
      return (
        <Coin 
        key={coin.id} 
        name={coin.name} 
        image={coin.image} 
        symbol={coin.symbol} 
        marketcap={coin.market_cap} 
        price={coin.current_price} 
        priceChange={coin.price_change_percentage_24h}
        volume={coin.total_volume}
        />
      )
    })}
    </div>
    <div className="h-12 bg-white border-t-2 lg:mx-36 rounded-b-2xl">
    </div>
    </div>
  );
}

export default App;
