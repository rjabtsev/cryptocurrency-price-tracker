import React from 'react'

const Coin = ({ image, name, symbol, price, volume, priceChange, marketcap}) => {
    return (
            <div className="bg-white text-gray-800 my-6 rounded-xl p-6 grid grid-cols-7 shadow gap-2"> 
                <div className="flex items-center col-span-3">
                    <img className="w-10 h-10 mr-4" src={image} alt="crypto" />
                    <h1 className="text-lg font-bold mr-4">{name}</h1>
                    <p className="uppercase text-xs font-bold text-gray-500 bg-gray-200 py-1 px-2 rounded">{symbol}</p>
                </div>
                <div className="flex items-center">
                    <p className="">€{price}</p>
                </div>
                <div className="flex items-center">
                    <p className="">€{volume.toLocaleString()}</p>
                </div>
                <div className="flex items-center">
                    {priceChange < 0 ? (
                        <p className="text-red-500">{priceChange.toFixed(2)}%</p>
                    ) : (<p className="text-green-500">+{priceChange.toFixed(2)}%</p>)}
                </div>
                <div className="flex items-center">
                    <p className="">€{marketcap.toLocaleString()}</p>
                </div>    
            </div>
    )
}

export default Coin
