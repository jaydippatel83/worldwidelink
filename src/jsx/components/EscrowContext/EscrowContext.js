import React, { useState, createContext, useEffect, useRef } from "react";
import { ethers, Contract, providers, Signer } from 'ethers';
import { CCIP_TOKEN_ABI, ESCROW_ABI, ESCROW_SENDER_CONTRACT_ADDRESS, ESCROW_RECEIVER_CONTRACT_ADDRESS } from "../../../constants";
export const EscrowContext = createContext(undefined);


export const EscrowContextProvider = (props) => {

    const [everyAgreement, setEveryAgreement] = useState([]);
    console.log(everyAgreement);
    const getProviderOrSigner = async (needSigner = false) => {
        const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
        if (needSigner) {
            const signer = web3Provider.getSigner();
            return signer;
        }
        return web3Provider;
    }
    const getCCIPTokenContractInstance = (_tokenAddress, providerOrSigner) => {
        return new Contract(
            _tokenAddress,
            CCIP_TOKEN_ABI,
            providerOrSigner
        );
    };
    const getEscrowContractInstance = (_contractAddress, providerOrSigner) => {
        return new Contract(
            _contractAddress,
            ESCROW_ABI,
            providerOrSigner
        );
    };

    function ParsedAgreement(_agreeId, _AgreementTitle, _clientAdd, _providerAdd, _arbitrator, _agreementAmount, _clientStake, _providerStake, _released, _fundReceiver, _dispute, _workSubmitted) {
        this.agreeId = _agreeId;
        this.title = _AgreementTitle;
        this.clientAdd = _clientAdd;
        this.providerAdd = _providerAdd;
        this.arbitratorAdd = _arbitrator;
        this.agreementAmount = _agreementAmount;
        this.clientStake = _clientStake;
        this.providerStake = _providerStake;
        this.release = _released;
        this.fundReceiver = _fundReceiver;
        this.dispute = _dispute;
        this.workSubmitted = _workSubmitted;
    }
    const fetchAllAgreements = async () => {
        try {
            const allAgrmnt = [];
            for (let i = 1; i <= 1; i++) {
                const agreement = await fetchAgreementById(i);

                allAgrmnt.push(agreement);

            }
            setEveryAgreement(allAgrmnt);
        } catch (error) {
            console.log(error);
        }
    }

    const fetchAgreementById = async (id) => {
        // console.log('erntered fetch by id', id);

        try {
            const provider = await getProviderOrSigner();
            const network = await provider.getNetwork();

            console.log('network name', network?.chainId);
            let escroContract;
            if (network?.chainId == 11155111) {
                escroContract = getEscrowContractInstance(ESCROW_SENDER_CONTRACT_ADDRESS, provider);
            } else if (network?.chainId == 80001) {
                escroContract = getEscrowContractInstance(ESCROW_RECEIVER_CONTRACT_ADDRESS, provider);
            } else{
                alert('Please connect to Sepolia or Mumbai network')
            }
            // const escroContract = getEscrowContractInstance(ESCROW_SENDER_CONTRACT_ADDRESS, provider);
            let agreement = await escroContract.agreements(id);
            let isDispute = await escroContract.isDisputed(id);
            let isSubmitted = await escroContract.isWorkSubmitted(id);

            const agrmt = new ParsedAgreement(agreement.agreementID.toNumber(), agreement.title, agreement.client, agreement.serviceProvider, agreement.arbitrator, ethers.utils.formatEther(agreement.agreementAmount), ethers.utils.formatEther(agreement.clientStake), ethers.utils.formatEther(agreement.serviceProviderStake), agreement.fundsReleased, agreement.fundreceiver, isDispute, isSubmitted)

            return agrmt;

        } catch (error) {
            console.log(error);
        };
    }




    return (
        <EscrowContext.Provider
            value={{

                getProviderOrSigner,
                getEscrowContractInstance,
                getCCIPTokenContractInstance,
                fetchAgreementById,
                everyAgreement,
                fetchAllAgreements
                // getNumOfAgreements

            }}

            {...props}
        >
            {props.children}
        </EscrowContext.Provider>
    )
}
