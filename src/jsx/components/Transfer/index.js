import React, { useContext, useEffect, useState } from 'react';
import { Box, Card, Typography, CardActions, CardContent, Divider} from '@mui/material';
import PropTypes from 'prop-types';
import { Select as BaseSelect, selectClasses } from '@mui/base/Select';
import { Option as BaseOption, optionClasses } from '@mui/base/Option';
import { Popper as BasePopper } from '@mui/base/Popper';
import { styled } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SwapVerticalCircleIcon from '@mui/icons-material/SwapVerticalCircle';
import { Web3Context } from '../../../context/Web3Context';
import TokenTransferorABI from './TokenTransferor.json';
import {TokenTransferorContract} from './config';
const ethers = require("ethers");
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
const Select = React.forwardRef(function CustomSelect(props, ref) {
  const slots = {
    root: StyledButton,
    listbox: Listbox,
    popper: Popper,
    ...props.slots,
  };

  return <BaseSelect {...props} ref={ref} slots={slots} />;
});

Select.propTypes = {
  /**
   * The components used for each slot inside the Select.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: PropTypes.shape({
    listbox: PropTypes.elementType,
    popper: PropTypes.func,
    root: PropTypes.elementType,
  }),
};

const blue = {
  100: '#DAECFF',
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  900: '#003A75',
};

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

const Button1 = React.forwardRef(function Button(props, ref) {
  const { ownerState, ...other } = props;
  return (
    <button type="button" {...other} ref={ref}>
      {other.children}
      <ExpandMoreIcon />
    </button>
  );
});

Button1.propTypes = {
  children: PropTypes.node,
  ownerState: PropTypes.object.isRequired,
};

const StyledButton = styled(Button1, { shouldForwardProp: () => true })(
  ({ theme }) => `
      font-family: IBM Plex Sans, sans-serif;
      font-size: 0.875rem;
      box-sizing: border-box;
      min-width: 320px;
      padding: 8px 12px;
      border-radius: 8px;
      text-align: left;
      line-height: 1.5;
      background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
      border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
      position: relative;
      box-shadow: 0px 2px 4px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
    };
    
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 120ms;
    
      &:hover {
        background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
        border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
      }
    
      &.${selectClasses.focusVisible} {
        outline: 0;
        border-color: ${blue[400]};
        box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[700] : blue[200]};
      }
    
      & > svg {
        font-size: 1rem;
        position: absolute;
        height: 100%;
        top: 0;
        right: 10px;
      }
      `,
);

const Listbox = styled('ul')(
  ({ theme }) => `
      font-family: IBM Plex Sans, sans-serif;
      font-size: 0.875rem;
      box-sizing: border-box;
      padding: 6px;
      margin: 12px 0;
      min-width: 320px;
      border-radius: 12px;
      overflow: auto;
      outline: 0px;
      background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
      border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
      box-shadow: 0px 2px 4px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
    };
      `,
);

const Option = styled(BaseOption)(
  ({ theme }) => `
      list-style: none;
      padding: 8px;
      border-radius: 8px;
      cursor: default;
    
      &:last-of-type {
        border-bottom: none;
      }
    
      &.${optionClasses.selected} {
        background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
        color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
      }
    
      &.${optionClasses.highlighted} {
        background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
      }
    
      &.${optionClasses.highlighted}.${optionClasses.selected} {
        background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
        color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
      }
    
      &.${optionClasses.disabled} {
        color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
      }
    
      &:hover:not(.${optionClasses.disabled}) {
        background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
      }
      `,
);

const Popper = styled(BasePopper)`
      z-index: 1;
  `
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
  const [fromChain, setFromChain] = useState(20);
  const [toChain, setToChain] = useState(30);
  const [isSwapped, setIsSwapped] = useState(false);
  const [amount, setAmount] = useState('0');

  useEffect(() => {
    const allowDestinationChain = async () => {
      try {
        if (window.ethereum) {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          const address = accounts[0];
          const provider = new ethers.BrowserProvider(window.ethereum);
          const signer = await provider.getSigner();
          const transferorContract = new ethers.Contract(
            TokenTransferorContract,
            TokenTransferorABI.abi,
            signer
          );
          let whitelistChain = await transferorContract.allowlistDestinationChain('12532609583862916517', true);
          console.log(transferorContract, "contractObj");
          console.log(whitelistChain, "whitelistChain");
        } else {
          console.error("MetaMask not detected. Please install MetaMask extension.");
        }
      } catch (error) {
        console.error("Error during MetaMask initialization:", error.message);
      }
    };
  
    allowDestinationChain();
  }, []);
  
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

      // Create contract instance
      const transferorContract = new ethers.Contract(
        TokenTransferorContract,
        TokenTransferorABI.abi,
        signer
      );

      // Hardcoded values
      const destinationChain = '12532609583862916517'; 
      console.log(address,"add");
      const receiver = address; 
      const token = '0xFd57b4ddBf88a4e07fF4e34C487b99af2Fe82a05'; 

      // Your logic to allowlist destination chain can go here

      // Convert the input amount to the correct format (wei)
      const amountInWei = ethers.parseEther(amount.toString());
      // Call your transferTokensPayLINK function
      const messageId = await transferorContract.transferTokensPayLINK(
        destinationChain,
        receiver,
        token,
        amountInWei.toString()
      );    
      console.log(destinationChain, "destinationChain");
      console.log(receiver, "receiver");
      console.log(token, "token");
      console.log(amountInWei.toString(), 'amountInWei');
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
              <Typography fontWeight="bold" m={1}>
                {isSwapped ? 'TO' : 'FROM'}
              </Typography>
              <Select
                value={isSwapped ? toChain : fromChain}
                onChange={(e) => {
                  setIsSwapped(!isSwapped); // Toggle isSwapped state
                }}
                sx={{ width: '100%', fontSize: '16px' }}
              >
                <Option value={10}>Ethereum</Option>
                <Option value={20}>Sapholia testnet</Option>
                <Option value={30}>Mumbai Testnet</Option>
                <Option value={40}>Fuji Testnet</Option>
                <Option value={50}>BNB Chain Testnet</Option>
                <Option value={60}>Base goerli Testnet</Option>
              </Select>
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
              <Typography fontWeight="bold" mt={0.3} mb={1} ml={1} mr={1}>
                {isSwapped ? 'FROM' : 'TO'}
              </Typography>
              <Select
                value={isSwapped ? fromChain : toChain}
                onChange={(e) => {
                  setIsSwapped(!isSwapped); // Toggle isSwapped state
                }}
                sx={{ width: '100%', fontSize: '16px' }}
              >
                <Option value={10}>Ethereum</Option>
                <Option value={20}>Sapholia testnet</Option>
                <Option value={30}>Mumbai Testnet</Option>
                <Option value={40}>Fuji Testnet</Option>
                <Option value={50}>BNB Chain Testnet</Option>
                <Option value={60}>Base goerli Testnet</Option>
              </Select>
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