import React, { useContext, useState } from 'react';
import { Box, Card, Typography, CardActions, CardContent } from '@mui/material';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/system';
import SwapVerticalCircleIcon from '@mui/icons-material/SwapVerticalCircle';
import { Web3Context } from '../../../context/Web3Context';
import TokenTransferorABI from './TokenTransferor.json';
import { TokenTransferorContractSepoliya } from './config';
import { TokenTransferorContractMumbai } from './config';
import ccipbnmABI from './CCIPBnM.json';
import { ethers } from 'ethers';


const Input = styled('input')(
  ({ theme }) => `
      background-color: #eee; 
      width:100%;
      border: none; 
      height: 100%; 
      border-radius:12px;
      font-size: 16px;
      padding : 10px 20px; 
      color: #3d3d3d;
    `
);
const Transfer = () => {
  const { address, shortAddress } = useContext(Web3Context);
  const [fromChain, setFromChain] = useState(10);
  const [toChain, setToChain] = useState(20);
  const [amount, setAmount] = useState('0');

  const handleChangeFrom = (event) => {
    setFromChain(event.target.value);
  };
  const handleChangeTO = (event) => {
    setToChain(event.target.value);
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
        if (fromChain === 10 && toChain === 20) {
          // Sepolia to Mumbai 
          transferorContract = transferorContractSepoliya;
          destinationChain = '12532609583862916517';
          token = '0xFd57b4ddBf88a4e07fF4e34C487b99af2Fe82a05';
          linkToken = '0x779877A7B0D9E8603169DdbD7836e478b4624789';

        } else if (fromChain === 20 && toChain === 10) {
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
        console.log('Transfer successful. Message ID:', messageId);
      } else {
        console.error("MetaMask not detected. Please install MetaMask extension.");
      }
    } catch (error) {
      console.error('Error during transfer:', error.message);
    }
  };

  return (
    <div className="row">
      <div className="col-lg-10 col-12 mx-auto ">
        <Card >
          <CardContent>
            <FormControl sx={{ width: '100%' }}>

              <Typography fontWeight="bold" m={1}>
                FROM
              </Typography>
              <Select
                value={fromChain}
                onChange={handleChangeFrom}

                sx={{ width: '100%', fontSize: '16px' }}
              >

                <MenuItem value={10}>Sepolia testnet</MenuItem>
                <MenuItem value={20}>Mumbai Testnet</MenuItem>
              </Select>

            </FormControl>
          </CardContent>
          <CardActions>
            <Typography sx={{ fontWeight: 'bold' }} className='text-primary'> <span className='text-dark'>Wallet Address: </span> {shortAddress(address)}</Typography>
          </CardActions>
          <CardActions
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '2px',
              cursor: 'pointer'
            }}
          >
            <Box sx={{ borderBottom: '1px solid #362465', flex: 1, marginRight: 1 }} />
            <SwapVerticalCircleIcon sx={{ fontSize: '40px', color: '#362465' }} onClick={handleSwap} />
            <Box sx={{ borderBottom: '1px solid #362465', flex: 1, marginLeft: 1 }} />
          </CardActions>
          <CardContent>
            <FormControl sx={{ width: '100%' }}>

              <Typography fontWeight="bold" mt={0.3} mb={1} ml={1} mr={1}>
                TO
              </Typography>

              <Select
                value={toChain}
                onChange={handleChangeTO}

                sx={{ width: '100%', fontSize: '16px' }}
              >

                <MenuItem value={10}>Sepolia testnet</MenuItem>
                <MenuItem value={20}>Mumbai Testnet</MenuItem>
              </Select>
            </FormControl>
          </CardContent>

          <CardActions>
            <Typography sx={{ fontWeight: 'bold' }} className='text-primary'> <span className='text-dark'> Wallet Address:</span> {shortAddress(address)}</Typography>
          </CardActions>

          {address ? (
            <>
              <CardContent>

                <Typography fontWeight='bold' m={1}>
                  ENTER AMOUNT
                </Typography>



                <Input
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </CardContent>
              <CardActions
                sx={{
                  display: 'flex',
                  flexDirection: 'column', // Display items vertically
                  alignContent: 'center',
                  alignItems: 'center'
                }}>
                <button
                  className="btn py-2 mb-4 fs-5 px-5 text-uppercase btn-primary"
                  onClick={handleTransfer}
                >
                  Transfer
                </button>
              </CardActions>
            </>

          ) : ''}

        </Card>

      </div>
    </div>
  );
};

export default Transfer;
