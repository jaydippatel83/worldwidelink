import React, { useContext, useState } from 'react';
import { Web3Context } from '../../../context/Web3Context';
import TokenTransferorABI from './TokenTransferor.json';
import { TokenTransferorContractSepoliya } from './config';
import { TokenTransferorContractMumbai } from './config';
import ccipbnmABI from './CCIPBnM.json';

const ethers = require("ethers");

const Transfer = () => {
  const { address } = useContext(Web3Context);
  const [fromChain, setFromChain] = useState(10);
  const [toChain, setToChain] = useState(20);
  const [amount, setAmount] = useState('0');

  const handleChangeFrom = (event) => {
    setFromChain(event.target.value);
    console.log(event.target.value, "from");
  };
  const handleChangeTO = (event) => {
    setToChain(event.target.value);
    console.log(event.target.value, "To");
  };


  const handleSwap = () => {
    setFromChain(toChain);
    setToChain(fromChain);
  };



  const handleTransfer = async () => {
    try {
      if (!address) {
        console.error('Wallet not connected. Please connect your wallet.');
        return;
      }

      // Connect to Ethereum provider
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        // Create contract instances for Sepolia and Mumbai
        const transferorContractSepoliya = new ethers.Contract(
          TokenTransferorContractSepoliya,
          TokenTransferorABI.abi,
          signer
        );
        const transferorContractMumbai = new ethers.Contract(
          TokenTransferorContractMumbai,
          TokenTransferorABI.abi,
          signer
        );

        let transferorContract;
        let destinationChain;
        let token;
        let linkToken;
        console.log(fromChain, "fromChain");
        console.log(toChain, "toChain");
        if (fromChain === "10" && toChain === "20") {
          // Sepolia to Mumbai 
          transferorContract = transferorContractSepoliya;
          destinationChain = '12532609583862916517';
          token = '0xFd57b4ddBf88a4e07fF4e34C487b99af2Fe82a05';
          linkToken = '0x779877A7B0D9E8603169DdbD7836e478b4624789';

        } else if (fromChain === "20" && toChain === "10") {
          // Mumbai to Sepolia 
          transferorContract = transferorContractMumbai;
          destinationChain = '16015286601757825753';
          token = '0xf1E3A5842EeEF51F2967b3F05D45DD4f4205FF40';
          linkToken = '0x326C977E6efc84E512bB9C30f76E30c160eD06FB';

        } else {
          console.log("You have selected unsupported networks!");
          return;
        }
        const ccipBnMAmountInWei = ethers.parseEther(amount.toString(), "ether");
        const ccipBnMTokenContract = new ethers.Contract(
          token,
          ccipbnmABI,
          signer
        );
        const transactionTransfer = await ccipBnMTokenContract.transfer(
          transferorContract,
          ccipBnMAmountInWei
        );
        await transactionTransfer.wait();
        console.log(transactionTransfer, "transactionTransfer");
        console.log(transferorContract, "contract address");
        let whitelistChain = await transferorContract.allowlistDestinationChain(destinationChain, true);
        console.log("Allowlist Chain:", whitelistChain);

        const amountInWei = ethers.parseEther(amount.toString());

        const messageId = await transferorContract.transferTokensPayLINK(
          destinationChain,
          address,
          token,
          amountInWei.toString()
        );
        console.log(destinationChain, "destinationChain");
        console.log(address, "address");
        console.log(token, "token");
        console.log(amountInWei.toString(), "amount");
        console.log('Transfer successful. Message ID:', messageId);
      } else {
        console.error("MetaMask not detected. Please install MetaMask extension.");
      }
    } catch (error) {
      console.error('Error during transfer:', error.message);
    }
  };

  return (
    <div className='container'>
      <div className="row">
        <div className="col">
          <div className="card" style={{ width: '65%', margin: 'auto' }}>
            <div className="card-body">
              <div className="basic-form">
                <form onSubmit={(e) => e.preventDefault()}>
                  <p style={{ fontWeight: 'bold', color: 'black' }}>FROM</p>
                  <div className="form-group mb-3">
                    <select className="form-control" value={fromChain}
                      onChange={handleChangeFrom}
                    >
                      <option value="10">Sepolia testnet</option>
                      <option value="20">Mumbai Testnet</option>
                      <option value="30">Fuji Testnet</option>
                      <option value="40">BNB Chain Testnet</option>
                      <option value="50">Base goerli Testnet</option>
                    </select>
                  </div>
                  <p style={{ fontWeight: 'bold' }} className='text-primary'> <span className='text-dark'>Wallet Address: </span> {address}</p>

                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src='swap.png' alt="Swap Icon" style={{ width: '50px', height: '50px' }} onClick={handleSwap} />
                  </div>
                  <p style={{ fontWeight: 'bold', color: 'black' }}>TO</p>

                  <div className="form-group mb-3 mt-3">
                    <select className="form-control" value={toChain}
                      onChange={handleChangeTO}>
                      <option value="10">Sepolia testnet</option>
                      <option value="20">Mumbai Testnet</option>
                      <option value="30">Fuji Testnet</option>
                      <option value="40">BNB Chain Testnet</option>
                      <option value="50">Base goerli Testnet</option>
                    </select>
                  </div>
                  <p style={{ fontWeight: 'bold' }} className='text-primary'> <span className='text-dark'>Wallet Address: </span> {address}</p>

                  <p style={{ fontWeight: 'bold', color: 'black' }}>ENTER AMOUNT</p>
                  <div className="form-group mb-3">
                    <input
                      className="form-control form-control-lg"
                      type="number"
                      step="0.01"
                      placeholder="0.00"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                  <div class="text-center">
                    <button
                      className="btn py-2 mb-4 fs-5 px-5 text-uppercase btn-primary"
                      onClick={handleTransfer}
                    >
                      Transfer
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;