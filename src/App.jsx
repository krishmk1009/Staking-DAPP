import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Abi from './abi.json';
import "./App.css"

import Navbar from './components/Navbar';
import Stake from './components/Stake';
import StakeForm from './components/NewStake';
import Unstake from './components/UnstakeToken';

function App() {
  const [account, setAccount] = useState("")
  const [contract, setContract] = useState(null)
  const [provider, setProvider] = useState(null)



  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = "0xaCBC9E801bB6A5BfBfA0922b6E7B6c3A04C853C0";

        const contract = new ethers.Contract(
          contractAddress,
          Abi.abi,
          signer
        );
        console.log(contract);
        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    };
    provider && loadProvider();
  }, []);





  return (

    <div className="app">


      <Navbar account={account} contract={contract} />
      <Stake account={account} contract={contract} />
      <StakeForm account={account} contract={contract} />
      <Unstake account={account} contract={contract} />

      {/* <p>how are you {Balance}</p> */}
      {/* <button onClick={handleClick}>Click</button> */}

    </div>
  );
}

export default App;
