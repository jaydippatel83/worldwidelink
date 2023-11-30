import React, { useContext, useEffect, useState } from 'react';
import { Box, Card, Typography, CardActions, CardContent, Divider} from '@mui/material';

import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SwapVerticalCircleIcon from '@mui/icons-material/SwapVerticalCircle';
import { Web3Context } from '../../../context/Web3Context';
import TokenTransferorABI from './TokenTransferor.json';
import {TokenTransferorContractSepoliya} from './config';
import {TokenTransferorContractMumbai} from './config';
import  ccipbnmABI  from './CCIPBnM.json';

const ethers = require("ethers");
const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};
const Input = styled('input')(
  ({ theme }) => `
      background-color: transparent; // or use the same color as the Typography
      border: none; // Remove the border
      height: 100%;
      width: 30%; // Adjust the width as needed
      font-size: 16px;
      padding-left: 8px;
      // color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]}; // Match the text color
      color: white;
    `
);
const Transfer = () => {
  const { connectWallet, address, disconnectWallet } = useContext(Web3Context);
  const [fromChain, setFromChain] = useState("20");
  const [toChain, setToChain] = useState("30");
  const [isSwapped, setIsSwapped] = useState(false);
  const [amount, setAmount] = useState('0');

  const handleChangeFrom = (event) => {
    setFromChain(event.target.value);
  };
  const handleChangeTO = (event) => {
    setToChain(event.target.value);
  };
  // useEffect(() => {
  //   const allowDestinationChain = async () => {
  //     try {
  //       if (window.ethereum) {
  //         const accounts = await window.ethereum.request({
  //           method: "eth_requestAccounts",
  //         });
  //         const address = accounts[0];
  //         const provider = new ethers.BrowserProvider(window.ethereum);
  //         const signer = await provider.getSigner();
  //         const transferorContract = new ethers.Contract(
  //           TokenTransferorContract,
  //           TokenTransferorABI.abi,
  //           signer
  //         );
  //         let whitelistChain = await transferorContract.allowlistDestinationChain('12532609583862916517', true);
  //         console.log(transferorContract, "contractObj");
  //         console.log(whitelistChain, "whitelistChain");
  //       } else {
  //         console.error("MetaMask not detected. Please install MetaMask extension.");
  //       }
  //     } catch (error) {
  //       console.error("Error during MetaMask initialization:", error.message);
  //     }
  //   };
  
  //   allowDestinationChain();
  // }, []);
  
  const handleSwap = () => {
    setFromChain(toChain);
    setToChain(fromChain);
  };

  const connect = () => {
    return (
      <Typography
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '16px',
          //backgroundColor: 'rgba(0, 0, 0, 0.2)', // Light black background
          backgroundColor: '#362465',
          //backdropFilter: 'blur(5px)', // Blurred effect
          padding: '5px',
          paddingLeft: '8px',
          paddingRight: '8px',
          height: '20%',
          width: '100%',
          //borderRadius: '8px', // You can adjust the borderRadius as needed
          //mb: '15px',
          color: 'white',
          fontWeight: 'bold',
          fontFamily: 'sans-serif',
          letterSpacing: '1px'
        }}
      >
        {!address ? (
          <>

            <Typography sx={{ fontWeight: 'bold', fontSize: '18px', fontFamily: 'sans-serif' }}>Connect wallet to continue</Typography>

            <button
              className="btn py-2 fs-5 px-5 text-uppercase"
              onClick={connectWallet}
              style={{ color: 'white', backgroundColor: '#362465'}}

            >
              Connect
            </button>
          </>
        ) : (
          <Typography sx={{fontWeight:'bold' }}>{address}</Typography>
        )
        }


      </Typography>


    )
  }

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
        if (fromChain === '20' && toChain === '30') {
          // Sepolia to Mumbai 
          transferorContract = transferorContractSepoliya ;
          destinationChain = '12532609583862916517';
          token = '0xFd57b4ddBf88a4e07fF4e34C487b99af2Fe82a05';
          linkToken = '0x779877A7B0D9E8603169DdbD7836e478b4624789';

        } else if (fromChain === '30' && toChain === '20') {
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
        console.log(transactionTransfer,"transactionTransfer");
        console.log(transferorContract,"contract address");
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
        console.log(address,"address");
        console.log(token,"token");
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
          <Card sx={{ width: '65%' }}>
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
          <MenuItem value={30}>Fuji Testnet</MenuItem>
          <MenuItem value={40}>BNB Chain Testnet</MenuItem>
          <MenuItem value={50}>Base goerli Testnet</MenuItem>

          </Select>

              </FormControl>
            </CardContent>
            <CardActions>
              {connect()}
            </CardActions>
            <CardActions
              sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '2px'
              }}
            >
  <Box sx={{ borderBottom: '1px solid #362465', flex: 1, marginRight: 1 }} />
              <SwapVerticalCircleIcon sx={{ fontSize: '40px' , color: '#362465'}} onClick={handleSwap} />
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
          <MenuItem value ={20}>Mumbai Testnet</MenuItem>
          <MenuItem value={30}>Fuji Testnet</MenuItem>
          <MenuItem value={40}>BNB Chain Testnet</MenuItem>
          <MenuItem value={50}>Base goerli Testnet</MenuItem>

          </Select>
          </FormControl>
                          </CardContent>

            <CardActions
              sx={{
                display: 'flex',
                flexDirection: 'column', // Display items vertically
                // Center items horizontally
              }}>
              {connect()}
            </CardActions>

            {address ? (
              <>
                <CardContent>

                  <Typography fontWeight='bold' m={1}>
                    ENTER AMOUNT
                  </Typography>

                  <Typography sx={{
                    fontSize: '16px',
                    //backgroundColor: 'rgba(0, 0, 0, 0.2)', // Light black background
                    backgroundColor : '#362465',
                     color: 'white',
                   // backdropFilter: 'blur(15px)', // Blurred effect
                    // padding: '5px',
                    // paddingLeft : '8px',
                    // paddingRight : '8px',
                    height: '70px',
                    // width : '100%',
                    //borderRadius: '8px', // You can adjust the borderRadius as needed
                    mb: '15px',
                   // color: '#00A389',
                    fontWeight: 'bold',
                    fontFamily: 'sans-serif',
                    letterSpacing: '1px'
                  }}>

                    <Input
                      type="number"
                      step="0.01"
                      placeholder="0.00"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </Typography>


                </CardContent>
                <CardActions
                  sx={{
                    display: 'flex',
                    flexDirection: 'column', // Display items vertically
                    alignContent: 'center',
                    alignItems: 'center'
                  }}>
                  <button
                    className="btn py-2 fs-5 px-5 text-uppercase"
                    onClick={handleTransfer}
                    style={{ backgroundColor : '#362465', color: 'white'}}
                  >
                    Transfer
                  </button>
                </CardActions>
              </>

            ) : ''}

          </Card>

        </div>
      </div>
    </div>
  );
};

export default Transfer;