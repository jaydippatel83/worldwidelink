import React, { useState, createContext, useEffect, useRef } from "react";
import { ethers, Contract, providers, Signer } from 'ethers';

export const EscrowContext = createContext(undefined);


export const EscrowContextProvider = (props) => {


    



    
        // console.log(ethers.utils.parseEther(amount));
        // const signer = await getProviderOrSigner(true);
        // // const escroContract = getEscrowContractInstance(signer);

        // // Send the transaction to create the escrow agreement
        // console.log(fund);

        // const tx = await escroContract.createEscrowAgreement(title, clientAddress, serviceProviderAddress, arbitratorAddress, ethers.utils.parseEther(amount), { value: ethers.utils.parseEther(fund) });

        // setLoading(true)
        // await tx.wait();
        // setAmount(0);
        // // Update the state to reflect the new escrow agreement
        // setFundsReleased(false);

        // getNumOfAgreements();
        // setLoading(false);
        // alert('Funds deposited successfully.');

    return (
        <EscrowContext.Provider
            value={{
              
                // getProviderOrSigner,
                // getEscrowContractInstance,
                // getNumOfAgreements

            }}
            
            {...props}
        >
            {props.children}
        </EscrowContext.Provider>
    )
}
