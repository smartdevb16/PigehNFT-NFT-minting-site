import React, { useState, useEffect } from 'react'
import eventBus from '../Components/EventBus'

export default function Header() {
    
    const [connected, setConnected] = useState(false)
    const [address, setAddress] = useState('')

    const convertAddresstoName = (address) => {
        const len = address.length
        return address.slice(0, 5) + '...' + address.slice(len - 4, len)
    }

    const connectWallet = () => {
        eventBus.dispatch('connectWallet', {})
    }

    const listener = (e) => {
        setConnected(true)
        setAddress(e.address)
    }

    useEffect(() => {
        eventBus.on('connectedWallet', listener)

        return eventBus.remove('connectedWallet', listener)
    }, [])

    return (
        <nav className='bg-white w-full h-fit flex justify-between items-center pl-3 pr-5 py-2'>
            <div className='w-44 object-contain'>
                <img className='object-contain' src='./images/SiteTitle.png' alt='logo' />
            </div>
            <div className='flex items-center space-x-5'>
                <button
                    className='uppercase bg-color-primary h-fit text-white font-bold px-3 py-1'
                    onClick={() => connectWallet()}>
                    { connected === true
                        ? convertAddresstoName(address)
                        : "connect wallet"
                    }
                </button>
                <ul className="flex flex-row items-center space-x-1 list-none">
                    <li className="nav-item">
                        <a className="flex items-center text-xs uppercase font-bold hover:opacity-75"
                            href='#home' target="_blank" rel="noopener noreferrer">
                            <span className='cursor-pointer'>
                                <img className='w-10' src='./images/twitter.png' alt='twitter_img' />
                            </span>
                        </a>
                    </li>
                    <li className="nav-item pr-1">
                        <a className="flex items-center text-xs uppercase font-bold hover:opacity-75"
                            href='#home' target="_blank" rel="noopener noreferrer">
                            <span className='cursor-pointer'>
                                <img className='w-8' src='./images/discord.png' alt='discord_img' />
                            </span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="flex items-center text-xs uppercase font-bold hover:opacity-75"
                            href='' target="_blank" rel="noopener noreferrer">
                            <span className='cursor-pointer'>
                                <img className='w-8' src='./images/opensea.png' alt='opensea_img' />
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}