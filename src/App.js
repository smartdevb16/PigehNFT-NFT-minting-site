import React from 'react';
import Web3 from 'web3';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import eventBus from './Components/EventBus';
import contractInfo from './contractInfo'
import Mint from './Components/Mint.js';
import NFT from './Components/NFT';
import Intro from './Components/Intro';
import Interesting from './Components/Interesting';
import Temple from './Components/Temple';
import Roadmap from './Components/Roadmap';
import Faq from './Components/Faq';

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import '@fortawesome/fontawesome-free/css/all.css'
import './App.css';

let web3, contract, contractAddress;
class Container extends React.Component {

  constructor() {
    super()

    this.state = {
      address: '',
      connected: false
    }

    this.mintNFT = this.mintNFT.bind(this)
    this.connectWallet = this.connectWallet.bind(this)
    this.displayNotification = this.displayNotification.bind(this)
    this.scanConnectedWallet = this.scanConnectedWallet.bind(this)
  }

  connectWallet() {
    if (window.ethereum) {
      (async () => {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        let accounts = await web3.eth.getAccounts();
        
        this.setState({
          address: accounts[0],
          connected: true
        })

        eventBus.dispatch('connectedWallet', {
          address: accounts[0]
        })
      })()
    } else {
      alert('Install Metamask please.');
    }
  }

  scanConnectedWallet() {
    if(this.state.connected === true) return;

    web3.eth.getAccounts(async (err, accounts) => {
        if (err != null) {
            console.error("An error occurred: " + err)
        } else if (accounts.length !== 0 ) {
            this.setState({
              connected: true,
              address: accounts[0]
            })
            eventBus.dispatch('connectedWallet', {
              address: accounts[0]
            })
        }
    })
  }

  async mintNFT(mintCount) {
    let address = this.state.address
    let saleActive = await contract.methods.Sale().call()
    let presaleActive = await contract.methods.preSale().call()

    if(this.state.connected === false) {
      this.displayNotification('info', 'Please connect wallet.')
      return
    }

    if(presaleActive === true) {
      let price = await contract.methods._presale_price().call()

      await contract.methods.presaleMintItems(mintCount).send({
        from: address,
        to: contractAddress,
        value: parseInt(price) * mintCount
      })
      .then(() => {
        this.displayNotification('success', 'You have minted successfully.')
      })
      .catch((err) => {
        console.log(err)
        this.displayNotification('warning', 'Transaction error. Please check all again.')
      })
    }
    else if(saleActive === true) {
      let price = await contract.methods._price().call()

      await contract.methods.mintItems(mintCount).send({
        from: address,
        to: contractAddress,
        value: parseInt(price) * mintCount
      })
      .then(() => {
        this.displayNotification('success', 'You have minted successfully.')
      })
      .catch((err) => {
        console.log(err)
        this.displayNotification('warning', 'Transaction error. Please check all again.')
      })
    }
  }

  displayNotification(appearance, text) {

    switch(appearance) {
        case 'warning':
            toast.warn(text)
            break
        case 'info':
            toast.info(text)
            break
        case 'error':
            toast.error(text)
            break
        case 'success':
            toast.success(text)
            break
        default:
            break
    }
  }

  componentDidMount() {
    if(window.ethereum) {
      web3 = new Web3(window.ethereum);
      contractAddress = contractInfo.address;
      contract = new web3.eth.Contract(contractInfo.abi, contractInfo.address);
      this.scanConnectedWallet()
    }

    eventBus.on('mint', (_event) => {
      this.mintNFT(_event.mintCount)
    })
    eventBus.on('connectWallet', (_event) => {
      this.connectWallet()
    })

    return () => {
      eventBus.remove('mint', (_event) => {
        this.mintNFT(_event.mintCount)
      })
      eventBus.remove('connectWallet', (_event) => {
        this.connectWallet()
      })
    }
  }

  render() {
    return (
      <div className="relative w-full h-full bg-color-primary">
        <ToastContainer />
        <Mint />
        <NFT />
        <Intro />
        <Interesting />
        <Temple />
        <Roadmap />
        <Faq />
      </div>
    )
  }
}

function App() {

  return (
    <Container>
    </Container>
  );
}

export default App;
