import React, { useState, createContext, useEffect, useRef } from "react";
import { ethers, Contract, providers, Signer } from 'ethers';

export const EscrowContext = createContext(undefined);


export const EscrowContextProvider = (props) => {


    const [title, setTitle] = useState('');
    const [serviceProviderAddress, setServiceProviderAddress] = useState();
    const [arbitratorAddress, setArbitratorAddress] = useState();
    const [clientAddress, setClientAddress] = useState();
    const [loading, setLoading] = useState(false);
    const [everyAgreementAsClient, setEveryAgreementAsClient] = useState([]);
    const [amount, setAmount] = useState(0);
    const [fund, setFund] = useState(0);
    const [totalNumOfAgreement, setTotalNumOfAgreements] = useState(0);
    const [fundsReleased, setFundsReleased] = useState(false);
    const [walletConnected, setWalletConnected] = useState(false);



    const createAgreement = async () => {
        // Validate inputs
        if (title == null || clientAddress == null || serviceProviderAddress == null || arbitratorAddress == null || amount == null) {
            alert('Please enter all required fields.');
            return;
        }
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
    }

    return (
        <EscrowContext.Provider
            value={{
                createAgreement,
                setTitle,
                setAmount,
                setArbitratorAddress,
                setClientAddress,
                setFund,
                setServiceProviderAddress,
                amount,
                fund,
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
