import React, { createContext, useEffect, useState, useRef } from "react";
import { networks, chainsIds } from "../network";
import ccipBnMAbi from "../abis/CCIPBnM.json";
import ccipLnMAbi from "../abis/CCIPLnM.json";
import senderAbi from "../abis/Sender.json";
import wwlProtocolAbi from "../abis/WorlWideLinkProtocol.json";
import { ethers } from "ethers";
import { toast } from "react-toastify";

export const Web3Context = createContext();

const Web3ContextProvider = (props) => {
  const [accounts, setAccount] = useState("");
  const [signer, setSigner] = useState();
  const [address, setAddress] = useState("");
  const [latestMessageId, setLatestMessageId] = useState("");
  const [collateralValue, setCollateralValue] = useState(0);
  const [borrowings, setBorrowings] = useState([]);
  const [deposits, setDeposits] = useState([]);

  useEffect(() => {
    const connect = async () => {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        setSigner(signer);
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        setAddress(accounts[0]);
      } catch (error) {
        console.log(error, "error");
      }
    };
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
      console.log(accounts);
      setAddress(accounts[0]);
    } catch (err) {
      console.log(err);
      if (err.code === 4902) {
        try {
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });
          console.log(accounts);
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
  };

  const calculateColletralValue = async (data) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const protocolContract = new ethers.Contract(
      data.network.protocol,
      wwlProtocolAbi,
      signer
    );
    var price;
    var decimal;

    if (data.token == "1") {
      let priceFeed = await protocolContract.getPriceAndDecimal(
        data.network.usdcPriceFeed
      );
      price = priceFeed.price;
      decimal = priceFeed.decimal;
    } else {
      console.log(data.network);
      let priceFeed = await protocolContract.getPriceAndDecimal(
        data.network.daiPriceFeed
      );
      price = priceFeed.price;
      decimal = priceFeed.decimal;
    }

    // Calculate the deposited amount required for the given borrowable amount
    var depositedIn8decimals = (data.amount * 10 ** decimal) / price;

    // Assuming 80% collateralization ratio
    var deposited = (depositedIn8decimals * 100) / data.percentage;

    setCollateralValue(deposited.toFixed(3));
    toast.info(`${deposited.toFixed(3)} needs to be colletralized!`);
  };

  const supplyAsset = async (supplyData) => {
    try {
      const params = {
        sender: networks[supplyData.from.value].sender,
        protocol: networks[supplyData.to.value].protocol,
        destChainSelector: networks[supplyData.to.value].chainSelector,
        amount: ethers.utils.parseUnits(supplyData.amount.toString(), "ether"),
        token: networks[supplyData.from.value][supplyData.token.value],
      };

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const tokenContract = new ethers.Contract(
        networks[supplyData.from.value].bnmToken,
        supplyData.token.value == "bnmToken" ? ccipBnMAbi : ccipLnMAbi,
        signer
      );

      let transactionTransfer = await tokenContract.transfer(
        params.sender,
        params.amount
      );
      let txt = await transactionTransfer.wait();
      if (txt) {
        const senderContract = new ethers.Contract(
          params.sender,
          senderAbi,
          signer
        );

        var txdepositCCIP = await senderContract.sendMessage(
          params.destChainSelector,
          params.protocol,
          params.token,
          params.amount
        );

        await senderContract.once(
          "MessageSent",
          async (
            messageId,
            destinationChainSelector,
            receiver,
            depositor,
            tokenAmount,
            fees
          ) => {
            console.log(messageId, "messageId");
            let txd = await txdepositCCIP.wait();
            setLatestMessageId(messageId);
            toast.success("Congratulation! You supplied asset successfully!");
            setTimeout(() => {
              toast.success(
                "Hang on tight :)! This transaction might take approx 10 to 15 minutes to get completed!"
              );
            }, "10000");
          }
        );
      }
    } catch (error) {
      toast.error("Oops! Something went wrong!");
      console.log(error, "error");
    }
  };

  const borrowToken = async (borrowData) => {
    try {
      await calculateColletralValue({
        network: networks[borrowData.to.value],
        token: borrowData.token.value,
        percentage: parseInt(borrowData.token.ratio),
        amount: parseFloat(borrowData.amount),
      });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const protocolContract = new ethers.Contract(
        networks[borrowData.to.value].protocol,
        wwlProtocolAbi,
        signer
      );

      const latestDeposit = deposits[deposits.length - 1];

      let messageId = latestDeposit.messageId;
      if (borrowData.token.value == "1") {
        // USDC
        let borrowUSDCTransaction = await protocolContract.borrowUSDC(
          messageId,
          networks[borrowData.to.value].usdcPriceFeed
        );

        let butx = await borrowUSDCTransaction.wait();
      } else {
        // DAI
        let borrowDAITransaction = await protocolContract.borrowDAI(
          messageId,
          networks[borrowData.to.value].daiPriceFeed
        );
        let bdtx = await borrowDAITransaction.wait();
      }
      toast.success("Congratulation! You borrowed asset successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Oops! execution reverted: Caller has already borrowed USDC");
    }
  };

  const getBorrowData = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const { chainId } = await provider.getNetwork();

    const network = networks[chainsIds[chainId]];

    const protocolContract = new ethers.Contract(
      network.protocol,
      wwlProtocolAbi,
      signer
    );

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const borrowings = await protocolContract.getBorrowings(accounts[0]);
    setBorrowings(borrowings);
  };

  const getDepositsData = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const { chainId } = await provider.getNetwork();

    const network = networks[chainsIds[chainId]];

    const protocolContract = new ethers.Contract(
      network.protocol,
      wwlProtocolAbi,
      signer
    );

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    var deposits = await protocolContract.getDeposits(accounts[0]);

    setDeposits(deposits);
  };

  return (
    <Web3Context.Provider
      value={{
        connectWallet,
        accounts,
        signer,
        address,
        latestMessageId,
        collateralValue,
        deposits,
        borrowings,
        disconnectWallet,
        supplyAsset,
        borrowToken,
        calculateColletralValue,
        getDepositsData,
        getBorrowData,
      }}
    >
      {props.children}
    </Web3Context.Provider>
  );
};
export default Web3ContextProvider;
