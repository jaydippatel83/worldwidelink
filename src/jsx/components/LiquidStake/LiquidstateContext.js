import React, { useState, createContext, useEffect, useRef } from "react";
import { ethers } from 'ethers';
import { LIQUID_SENDER_CONTRACT_ADDRESS, LIQUID_RECEIVER_CONTRACT_ADDRESS, LIQUID_SENDER_ABI, LIQUID_RECEIVER_ABI, CCIP_TOKEN_ADDRESS_SEPOLIA, CCIP_TOKEN_ADDRESS_MUMBAI } from "../../../constants";
import { EscrowContext } from "../EscrowContext/EscrowContext";
import { Web3Context } from "../../../context/Web3Context";
import { toast } from "react-toastify";
export const LiquidStakeContext = createContext(undefined);

export const LiquidStakeContextProvider = (props) => {

    const escrowContext = React.useContext(EscrowContext);
    const web3context = React.useContext(Web3Context);
    const { getCCIPTokenContractInstance, getProviderOrSigner } = escrowContext;
    const { address } = web3context;
    const [ccipBalance, setCcipBalance] = useState(0);
    const [stakedAmount, setStakedAmount] = useState(0);

    const approveToken = async (_amount) => {
        try {
            const signer = await getProviderOrSigner(true);

            const ccipInstance = getCCIPTokenContractInstance(CCIP_TOKEN_ADDRESS_SEPOLIA, signer);

            const tx = await ccipInstance.approve(LIQUID_SENDER_CONTRACT_ADDRESS, ethers.parseEther(_amount))
            await tx.wait();

            alert('CCIP Unlocked for stake successfully.');
        } catch (error) {
            console.log(error);
        }
    }
    const stake = async (_amount) => {
        try {
            const signer = await getProviderOrSigner(true);

            const liquidSender = getLiquidSenderInstance(signer);

            const txx = await liquidSender.stake(ethers.parseEther(_amount), LIQUID_RECEIVER_CONTRACT_ADDRESS, CCIP_TOKEN_ADDRESS_SEPOLIA);
            await txx.wait();
            toast.success('CCIP staked successfully.');
        } catch (error) {
            console.log(error);
        }

    }

    const unStake = async (_amount) => {
        try {
            const signer = await getProviderOrSigner(true);
            const liquidSender = getLiquidReceiverInstance(signer);
            const txx = await liquidSender.unstake(ethers.parseEther(_amount), LIQUID_SENDER_CONTRACT_ADDRESS, CCIP_TOKEN_ADDRESS_MUMBAI);
            await txx.wait();
            toast.success('CCIP unStaked successfully.');
        } catch (error) {
            console.error(error);
        }

    }

    const getCcipBalance = async () => {
        console.log('addr--', address)
        const provider = await getProviderOrSigner();
        const network = await provider.getNetwork();
        let chainId = network?.chainId
        let instance;
        if (chainId == 11155111) {
            instance = getCCIPTokenContractInstance(CCIP_TOKEN_ADDRESS_SEPOLIA, provider)
        } else if (chainId == 80001) {
            instance = getCCIPTokenContractInstance(CCIP_TOKEN_ADDRESS_MUMBAI, provider)
        } else {
            alert(" please switch to sepolia of mumbai testnet.")
        }
        const bal = await instance.balanceOf(address);
        setCcipBalance(ethers.formatEther(bal));
    }
    const getStakedAmount = async () => {
        const provider = await getProviderOrSigner();
        const network = await provider.getNetwork();
        let chainId = network?.chainId
        let instance;
        if (chainId == 11155111) {
            instance = getLiquidSenderInstance(provider)
        } else if (chainId == 80001) {
            instance = getLiquidReceiverInstance(provider)
        } else {
            alert(" please switch to sepolia of mumbai testnet.")
        }
        const info = await instance.stakingInfos(address);
        setStakedAmount(ethers.formatEther(info?.stTokenBalance));
    }
    getStakedAmount();

    const getLiquidSenderInstance = (providerOrSigner) => {
        return new ethers.Contract(
            LIQUID_SENDER_CONTRACT_ADDRESS,
            LIQUID_SENDER_ABI,
            providerOrSigner
        );
    };
    const getLiquidReceiverInstance = (providerOrSigner) => {
        return new ethers.Contract(
            LIQUID_RECEIVER_CONTRACT_ADDRESS,
            LIQUID_RECEIVER_ABI,
            providerOrSigner
        );
    };


    return (
        <LiquidStakeContext.Provider
            value={{
                stake,
                unStake,
                getCcipBalance,
                ccipBalance,
                stakedAmount,
                approveToken


            }}

            {...props}
        >
            {props.children}
        </LiquidStakeContext.Provider>
    )
}