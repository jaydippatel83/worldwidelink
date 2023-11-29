import React, { createContext, useEffect, useState, useRef } from "react";
const ethers = require("ethers");

export const Web3Context = createContext();

const Web3ContextProvider = (props) => {

  const [accounts, setAccount] = useState("");
  const [signer, setSigner] = useState();
  const [address, setAddress] = useState("");

    useEffect(() => {
        const connect = async() => {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            setSigner(signer);
            const accounts = await window.ethereum.request({
              method: "eth_requestAccounts",
            });
            localStorage.setItem('userAddress', accounts[0]);
            setAddress(accounts[0]);
        } 
        connect();
      }, []);




  const connectWallet = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install the Metamask Extension!");
    }
    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Found an account! Address: ", accounts[0]);
      // console.log(accounts);
      setAddress(accounts[0]);
    } catch (err) {
      console.log(err);
      if (err.code === 4902) {
        try {
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });
          // console.log(accounts);
          setAddress(accounts[0]);
        } catch (err) {
          alert(err.message);
        }
      }
    }
  };
  const disconnectWallet = () => {
    // Reset the address to disconnect the wallet
    setAddress(null);
    localStorage.removeItem('userAddress')
  };

  return (
    <Web3Context.Provider
      value={{
        connectWallet,
        accounts,
        signer,
        address,
        disconnectWallet

      }}

    >
      {props.children}

    </Web3Context.Provider>
  )
}
export default Web3ContextProvider;