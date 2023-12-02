import React, { useState, createContext, useEffect, useRef } from "react";
import { ethers } from 'ethers';
import { LIQUID_SENDER_CONTRACT_ADDRESS, LIQUID_RECEIVER_CONTRACT_ADDRESS, LIQUID_SENDER_ABI, LIQUID_RECEIVER_ABI, CCIP_TOKEN_ADDRESS_SEPOLIA, CCIP_TOKEN_ADDRESS_MUMBAI } from "../../../constants";
import { EscrowContext } from "../EscrowContext/EscrowContext";
export const LiquidStakeContext = createContext(undefined);

export const LiquidStakeContextProvider = (props) => {

    const escrowContext = React.useContext(EscrowContext);
    const { getCCIPTokenContractInstance, getProviderOrSigner } = escrowContext;
    const stake = async () => {
        try {
            const signer = await getProviderOrSigner(true);

            const ccipInstance = getCCIPTokenContractInstance(CCIP_TOKEN_ADDRESS_SEPOLIA, signer);

            const tx = await ccipInstance.approve(LIQUID_SENDER_CONTRACT_ADDRESS, ethers.parseEther("0.1"))
            await tx.wait();

            const liquidSender = getLiquidSenderInstance(signer);

            const txx = await liquidSender.stake(ethers.parseEther("0.1"), LIQUID_RECEIVER_CONTRACT_ADDRESS, CCIP_TOKEN_ADDRESS_SEPOLIA);
            await txx.wait();
            alert('CCIP staked successfully.');
        } catch (error) {
            console.log(error);
        }
       
    }

    const unStake = async () => {
        try {
            const signer = await getProviderOrSigner(true);

            // const ccipInstance = getCCIPTokenContractInstance(CCIP_TOKEN_ADDRESS_SEPOLIA, signer);

            // const tx = await ccipInstance.approve(LIQUID_SENDER_CONTRACT_ADDRESS, ethers.parseEther("0.1"))
            // await tx.wait();
            const liquidSender = getLiquidReceiverInstance(signer);
            const txx = await liquidSender.unstake(ethers.parseEther("0.1"), LIQUID_SENDER_CONTRACT_ADDRESS, CCIP_TOKEN_ADDRESS_MUMBAI);
            await txx.wait();
            alert('CCIP unStaked successfully.');
        } catch (error) {
            console.error(error);
        }
       
    }
    
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
                unStake


            }}

            {...props}
        >
            {props.children}
        </LiquidStakeContext.Provider>
    )
}