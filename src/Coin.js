import React from 'react'
import { motion } from 'framer-motion'

const Coin = ({ image, name, symbol, price, volume, priceChange, marketcap}) => {
    return (
        <div className="bg-white">
            <motion.div initial={{ y:-10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.25}} className=""> 
                <div className="">
                    <img className="" src={image} alt="crypto" />
                    <h1 className="">{name}</h1>
                    <p className="">{symbol}</p>
                </div>
                <div className="">
                    <p className="">€{price}</p>
                </div>
                <div className="">
                    <p className="">€{volume.toLocaleString()}</p>
                </div>
                <div className="">
                    {priceChange < 0 ? (
                        <p className="text-red-600">{priceChange.toFixed(2)}%</p>
                    ) : (<p className="text-green-700">+{priceChange.toFixed(2)}%</p>)}
                </div>
                <div className="">
                    <p className="">€{marketcap.toLocaleString()}</p>
                </div>    
            </motion.div>
            </div>
    )
}

export default Coin
