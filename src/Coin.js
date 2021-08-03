import React from 'react'
import { motion } from 'framer-motion'

const Coin = ({ image, name, symbol, price, volume, priceChange, marketcap}) => {
    return (
            <motion.div initial={{ y:-10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.25}} className="grid items-center grid-cols-4 px-4 pb-3 bg-white lg:grid-cols-6 md:grid-cols-5"> 
                <div className="flex items-center col-span-2">
                    <img className="w-12 h-12" src={image} alt="crypto" />
                    <h1 className="ml-2 font-semibold">{name}</h1>
                    <p className="hidden p-1 ml-2 text-xs font-semibold uppercase bg-purple-100 rounded lg:block md:block">{symbol}</p>
                </div>
                <div className="">
                    <p className="">€{price}</p>
                </div>
                <div className="hidden lg:block">
                    <p className="">€{volume.toLocaleString()}</p>
                </div>
                <div className="">
                    {priceChange < 0 ? (
                        <p className="text-red-600">{priceChange.toFixed(2)}%</p>
                    ) : (<p className="text-green-700">+{priceChange.toFixed(2)}%</p>)}
                </div>
                <div className="hidden lg:block md:block">
                    <p className="">€{marketcap.toLocaleString()}</p>
                </div>    
            </motion.div>
    )
}

export default Coin
