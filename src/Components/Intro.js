import React from 'react'

export default function Intro() {

    return (
        <div className='relative w-full border-t border-indigo-300'>
            <img src='./images/CloudandCoinExamples.png' alt='cloudandcoin_img' />
            <div className='absolute top-16 flex flex-col place-items-center space-y-3'>
                <h1 className='text-5xl uppercase font-bold'>what are pigehs</h1>
                <p className='uppercase w-8/12 text-2xl text-center font-bold'>
                    pigehs are a collection of 10,000 nfts that are fed up with that farmer richard guy. because of the terrible conditions on his farm they're decided to go on their own path. firthly by taking charge and moving onto the ethereum blockchain. this collection of pigehs will be the foundation for developing the pigeh bank collection. within the larger collection of pigeh banks, future holders will have the opportunity to mint pigeh coins for free. with the coin, holders will be able to choose wich variation of pigeh they want their pigeh bank to represent. proceeds of the mint will go to the holders of this collection of pigehs
                </p>
            </div>
        </div>
    )
}