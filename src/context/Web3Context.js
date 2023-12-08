import React, { createContext, useEffect, useState } from "react";
import { ethers, Contract } from "ethers";
import { chainParams } from "../config";
import { useNavigate, useLocation } from "react-router-dom";
import { networks, chainsIds } from "../network";
import ccipBnMAbi from "../abis/CCIPBnM.json";
import ccipLnMAbi from "../abis/CCIPLnM.json";
import senderAbi from "../abis/Sender.json";
import functionClientAbi from "../abis/FunctionClient.json";
import porAbi from "../abis/Por.json";
import sosAbi from "../abis/Sos.json";
import wwlProtocolAbi from "../abis/WorlWideLinkProtocol.json";
import { toast } from "react-toastify";
import axios from "axios";

export const Web3Context = createContext(undefined);

export const Web3ContextProvider = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [address, setAddress] = useState();
  const [update, setUpdate] = useState(false);
  const [aLoading, setaLoading] = useState(false);

  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);

  const [latestMessageId, setLatestMessageId] = useState("");
  const [collateralValue, setCollateralValue] = useState(0);
  const [borrowings, setBorrowings] = useState([]);
  const [deposits, setDeposits] = useState([]);

  let add = localStorage.getItem("address");

  useEffect(() => {
    const initialize = async () => {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

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
        const signer = await provider.getSigner();
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
        method: "wallet_requestPermissions",
        params: [{ eth_accounts: {} }],
      });
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const { chainId } = await provider.getNetwork();

      const network = networks[chainsIds[chainId]];

      if (chainId != 43113) {
        const sosContract = new Contract(
          network.sosTokenTransfer,
          sosAbi,
          signer
        );

        const loginTransaction = await sosContract.recordLogin();
        const txl = await loginTransaction.wait();
        if (txl) {
          setAddress(accounts[0]);
          window.localStorage.setItem("address", accounts[0]);
          setUpdate(!update);
          setaLoading(false);
        }
      } else {
        setAddress(accounts[0]);
        window.localStorage.setItem("address", accounts[0]);
        setUpdate(!update);
        setaLoading(false);
      }
    } catch (err) {
      setaLoading(false);
      if (err.code === 4902) {
        try {
          setaLoading(true);
          const accounts = await ethereum.request({
            method: "wallet_requestPermissions",
            params: [{ eth_accounts: {} }],
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

  const calculateColletralValue = async (data) => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const protocolContract = new Contract(
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
      let priceFeed = await protocolContract.getPriceAndDecimal(
        data.network.daiPriceFeed
      );
      price = priceFeed.price;
      decimal = priceFeed.decimal;
    }

    // Calculate the deposited amount required for the given borrowable amount
    var depositedIn8decimals =
      (data.amount * 10 ** Number(decimal)) / Number(price);

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
        amount: ethers.parseUnits(supplyData.amount.toString(), "ether"),
        token: networks[supplyData.from.value][supplyData.token.value],
      };

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const tokenContract = new Contract(
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
        const senderContract = new Contract(params.sender, senderAbi, signer);

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
            let txd = await txdepositCCIP.wait();
            console.log(txd, "txd");
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
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const protocolContract = new Contract(
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

  function daysToSeconds(days) {
    // 👇️        hour  min  sec
    return days * 24 * 60 * 60;
  }

  const sosAlert = async (sosData) => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const { chainId } = await provider.getNetwork();
      const user = sosData.action.value == "1" ? address : sosData.address;
      const trigger = sosData.action.value == "1" ? 1 : 2;
      const daysInseconds =
        sosData.days == 0 ? 40 : daysToSeconds(sosData.days);
      console.log(daysInseconds);

      const network = networks[chainsIds[chainId]];

      const sosContract = new Contract(
        network.sosTokenTransfer,
        sosAbi,
        signer
      );
      const setAlertTx = await sosContract.setAlert(
        user,
        sosData.email,
        daysInseconds,
        sosData.message,
        trigger
      );
      const txs = await setAlertTx.wait();
      if (txs) {
        toast.success("SoS Alert is enabled successfully!");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  const getBorrowData = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const { chainId } = await provider.getNetwork();

    const network = networks[chainsIds[chainId]];

    const protocolContract = new Contract(
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
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const { chainId } = await provider.getNetwork();

    const network = networks[chainsIds[chainId]];

    const protocolContract = new Contract(
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

  const notifyFunction = async (data) => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const { chainId } = await provider.getNetwork();

      const network = networks[chainsIds[chainId]];
      const subscriptionId = 1038;

      const routerAddress = "0x6E2dc0F9DB014aE19888F539E59285D2Ea04244C";
      const donId = "fun-polygon-mumbai-1";
      const gasLimit = 3000000;
      const args = [
        JSON.stringify({
          message: data.message,
          reply_to: data.email,
        }),
      ];

      const response = await axios.get(
        "https://gist.githubusercontent.com/mansijoshi17/2879e0198968d0e2edd054724a0dfbed/raw"
      );
      const source = response.data.toString();

      const functionClientContract = new Contract(
        network.consumer,
        functionClientAbi,
        signer
      );

      console.log([...functionClientContract], "functionClientContract");

      const sendTransaction = await functionClientContract.sendRequest(
        source, // source
        "0x", // user hosted secrets - encryptedSecretsUrls - empty in this example
        0, // don hosted secrets - slot ID - empty in this example
        0, // don hosted secrets - version - empty in this example
        args,
        [], // bytesArgs - arguments can be encoded off-chain to bytes.
        subscriptionId,
        gasLimit,
        ethers.encodeBytes32String(donId) // jobId is bytes32 representation of donId
      );

      console.log(sendTransaction, "sendTransaction");
    } catch (error) {
      console.log(error);
    }
  };

  const por = async (percentage) => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const { chainId } = await provider.getNetwork();

    const network = networks[chainsIds[chainId]];

    const porContract = new Contract(network.por, porAbi, signer);

    const transaction = await porContract.getCreditScore(percentage);
    const tx = await transaction.wait();
    if (tx) {
      const creditscore = await porContract.creditScore();
      console.log(Number(creditscore), "creditscore");
    }
  };

  return (
    <Web3Context.Provider
      value={{
        connectWallet,
        signer,
        address,
        latestMessageId,
        collateralValue,
        deposits,
        borrowings,
        update,
        aLoading,
        provider,
        disconnectWallet,
        supplyAsset,
        borrowToken,
        calculateColletralValue,
        getDepositsData,
        getBorrowData,
        shortAddress,
        setUpdate,
        switchNetwork,
        sosAlert,
        notifyFunction,
        por,
      }}
    >
      {props.children}
    </Web3Context.Provider>
  );
};
export default Web3ContextProvider;
