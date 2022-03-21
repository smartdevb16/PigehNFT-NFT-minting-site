import React from 'react'
import eventBus from '../Components/EventBus'

class Mint extends React.Component {

    constructor() {
        super()

        this.state = {
            mintCount: 1,
        }

        this.changeValue = this.changeValue.bind(this)
    }

    changeValue(v) {
        let mintCount = this.state.mintCount

        mintCount += v
        if(mintCount < 1) {
            mintCount = 1
        }
        this.setState({
            mintCount
        })
    }

    mint() {
        eventBus.dispatch('mint', {
            mintCount: this.state.mintCount
        })
    }

    render() {
        return (
            <div className='relative bg-color-primary w-full min-h-screen flex flex-col justify-end'>
                <div className='w-full h-full flex justify-between'>
                    <div className='w-1/4'>
                        <img className='object-contain' src='/images/left_character.png' alt='character'></img>
                    </div>
                    <div className='w-1/4'>
                        <img className='object-contain' src='/images/right_character.png' alt='character'></img>
                    </div>
                </div>
                
                <div className='absolute flex flex-col place-items-center space-y-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <div className='flex flex-col place-items-center w-fit h-fit relative z-10 border border-white rounded-xl px-8 py-10'>
                        <h1 className='text-4xl text-white font-bold border-b border-white py-3'>How Many Gnomies?</h1>
                        <div className='w-fit h-fit mt-10 p-6 bg-color-yellow'>
                            <div className='relative aligin-middle text-white text-xl font-bold bg-white bg-opacity-20 border border-white rounded-lg w-fit h-fit px-2 py-1'>
                                <button onClick={() => this.changeValue(-1)}>
                                    <span className='font-bold text-xl'>-</span>
                                </button>
                                <span className='px-12'>{ this.state.mintCount }</span>
                                <button onClick={() => this.changeValue(1)}>
                                    <span className='font-bold text-xl'>+</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <button
                        className='text-white text-2xl font-bold bg-white bg-opacity-20 border border-white rounded-lg px-7 py-1'
                        onClick={() => {
                            this.mint()
                        }}>
                            Mint Now
                    </button>
                </div>
            </div>
        )
    }
}

export default Mint