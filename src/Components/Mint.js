import React from 'react'
import eventBus from '../Components/EventBus'
import Header from '../Layout/Header'

class Mint extends React.Component {

    constructor() {
        super()

        this.state = {
            mintCount: 1,
            connected: false,
            address: '',
        }

        this.changeValue = this.changeValue.bind(this)
        this.listener = this.listener.bind(this)
        this.mint = this.mint.bind(this)
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

    listener(e) {
        this.setState({
            connected: true,
            address: e.address
        })
    }

    componentDidMount() {
        eventBus.on('connectedWallet', this.listener)

        return eventBus.remove('connectedWallet', this.listener)
    }

    render() {
        return (
            <div className='relative bg-color-primary w-full flex flex-col pt-12' id='home'>
                <Header />
                <div className='relative w-full h-fit object-contain'>
                    <img src='./images/SiteTop.png' alt='logo_img' />
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 w-fit h-fit z-10 flex flex-col place-items-center space-y-8'>
                        <h1 className='text-5xl font-bold uppercase'>mint a pigeh</h1>
                        <button
                            className='bg-black px-10 py-1 text-white font-bold uppercase hover:opacity-75'
                            onClick={this.mint}>mint</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Mint