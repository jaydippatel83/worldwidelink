import React, { useContext } from 'react';
import { Box, Card, Typography, CardActions, CardContent, Button, capitalize } from '@mui/material';
import PropTypes from 'prop-types';
import { Select as BaseSelect, selectClasses } from '@mui/base/Select';
import { Option as BaseOption, optionClasses } from '@mui/base/Option';
import { Popper as BasePopper } from '@mui/base/Popper';
import { styled } from '@mui/system';
// import { ExpandMoreIcon } from '@mui/icons-material'
import SwapVerticalCircleIcon from '@mui/icons-material/SwapVerticalCircle';
import { Web3Context } from '../../../context/Web3Context';

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
      {/* <ExpandMoreIcon /> */}
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
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]}; // Match the text color
    `
);
const Trnasfer = () => {
  const { connectWallet, address, disconnectWallet } = useContext(Web3Context);
  const connect = () => {
    return (
      <Typography
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '16px',
          //backgroundColor: 'rgba(0, 0, 0, 0.2)', // Light black background
          backgroundColor: '#d1e7dd',
          //backdropFilter: 'blur(5px)', // Blurred effect
          padding: '5px',
          paddingLeft: '8px',
          paddingRight: '8px',
          height: '20%',
          width: '100%',
          //borderRadius: '8px', // You can adjust the borderRadius as needed
          //mb: '15px',
          color: '#00A389',
          fontWeight: 'bold',
          fontFamily: 'sans-serif',
          letterSpacing: '1px'
        }}
      >
        {!address ? (
          <>

            <Typography sx={{ fontWeight: 'bold', fontSize: '18px', fontFamily: 'sans-serif' }}>Connect wallet to continue</Typography>

            <button
              className="btn btn-success py-2 fs-5 px-5 text-uppercase"
              onClick={connectWallet}
            >
              Connect
            </button>
          </>
        ) : (
          <Typography>{address}</Typography>
        )
        }


      </Typography>


    )
  }
  return (
    <div className='container'>
      <div className="row">
        <div className="col">
          <Card sx={{ width: '65%' }}>
            <CardContent>
              <Typography fontWeight='bold' m={1}>
                FROM
              </Typography>
              <Select defaultValue={20} sx={{ width: '100%', fontSize: '16px' }}>
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
              <SwapVerticalCircleIcon sx={{ fontSize: '40px' }} />
            </CardActions>
            <CardContent>
              <Typography fontWeight='bold' m={1} >
                TO
              </Typography>

              <Select defaultValue={20} sx={{ width: '100%', fontSize: '16px' }}>
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
                    backgroundColor: '#d1e7dd',
                    //backdropFilter: 'blur(5px)', // Blurred effect
                    // padding: '5px',
                    // paddingLeft : '8px',
                    // paddingRight : '8px',
                    height: '70px',
                    // width : '100%',
                    //borderRadius: '8px', // You can adjust the borderRadius as needed
                    mb: '15px',
                    color: '#00A389',
                    fontWeight: 'bold',
                    fontFamily: 'sans-serif',
                    letterSpacing: '1px'
                  }}>

                    <Input
                      type="number"
                      step="0.01"
                      placeholder="0.00"
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
                    className="btn btn-success py-2 fs-5 px-5 text-uppercase"
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

export default Trnasfer;