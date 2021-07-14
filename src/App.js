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
    <div className="App container mx-auto w-8/12">
      <div className="text-center p-24">
        <h1 className="text-4xl text-gray-800 font-bold">Cryptocurrency Price Tracker</h1>
        <form>
          <input type="text" placeholder="Search all assets..." className="mt-16 w-96 bg-gray-200  placeholder-gray-500 px-6 py-3 focus:outline-none focus:ring rounded-xl" onChange={handleChange}/>
        </form>
      </div>
      <div className=" bg-white text-gray-800 px-6 py-4 font-semibold rounded-xl shadow grid grid-cols-7 gap-2">
        <div className="col-span-3">
          <h1>Name</h1>
        </div>
        <h2>Price</h2>
        <p>Volume</p>
        <p>Change</p>
        <p>Market Cap</p>
      </div>
    {filteredCoins.map(coin => {
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
  );
}

export default App;
