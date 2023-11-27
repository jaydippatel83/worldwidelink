import React, { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import {
  chain,
  chainParams,
  multiChains,
  networkIds,
} from "../config";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";

export const Web3Context = createContext(undefined);

export const Web3ContextProvider = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [address, setAddress] = useState();
  const [update, setUpdate] = useState(false);
  const [aLoading, setaLoading] = useState(false);

  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);

  let add = localStorage.getItem("address");

  useEffect(() => {
    const initialize = async () => {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = provider.getSigner();

      setProvider(provider);
      setSigner(signer);

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAddress(accounts[0]);
    };

    if (add) {
      initialize();
    }
  }, [add]);

  async function switchNetwork(chainId) {
    try {
      const chainData = await window.ethereum.request({
        method: "eth_chainId",
        params: [],
      });

      const selectedChain = chainParams.find(
        (chain) => chain.chainId === chainId
      );

      if (chainData !== chainId && selectedChain) {
        const methodName =
          selectedChain.chainId === chainId
            ? "wallet_addEthereumChain"
            : "wallet_switchEthereumChain";

        await window.ethereum.request({
          method: methodName,
          params: [
            selectedChain.chainId === chainId
              ? {
                chainId: selectedChain.chainId,
                chainName: selectedChain.chainName,
                nativeCurrency: {
                  name: selectedChain.chainName,
                  symbol: selectedChain.symbol,
                  decimals: selectedChain.decimals,
                },
                rpcUrls: [selectedChain.rpcUrl],
              }
              : { chainId: `${chainId}` },
          ],
        });
        await window.ethereum.request({ method: "eth_chainId" });

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = provider.getSigner();
        setProviderAndSigner(provider, signer);
      }
    } catch (error) {
      if (error.code == -32002) {
        alert(
          "Please approve the previous request, that is pending in Metamask!"
        );
      } else {
        toast.error(error.message);
      }
    }
  }

  function setProviderAndSigner(provider, signer) {
    setProvider(provider);
    setSigner(signer);
  }

  const connectWallet = async () => {
    const { ethereum } = window;
    setaLoading(true);

    if (!ethereum) {
      alert("Please install the Metamask Extension!");
    }
    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setAddress(accounts[0]);
      window.localStorage.setItem("address", accounts[0]);
      setUpdate(!update);
      setaLoading(false);
    } catch (err) {
      setaLoading(false);
      if (err.code === 4902) {
        try {
          setaLoading(true);
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });
          setAddress(accounts[0]);
          window.localStorage.setItem("address", accounts[0]);
          setUpdate(!update);
          setaLoading(false);
        } catch (err) {
          setaLoading(false);
          toast.error(err.message);
        }
      }
    }
  };


  const disconnectWallet = () => {
    navigate("/");
    window.localStorage.removeItem("address");
    setUpdate(!update);
    window.location.reload();
  };

  const shortAddress = (addr) =>
    addr.length > 10 && addr.startsWith("0x")
      ? `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`
      : addr;



  return (
    <Web3Context.Provider
      value={{
        connectWallet,
        shortAddress,
        disconnectWallet,
        setUpdate,
        address,
        update,
        aLoading,
        switchNetwork
      }}
      {...props}
    >
      {props.children}
    </Web3Context.Provider>
  );
};