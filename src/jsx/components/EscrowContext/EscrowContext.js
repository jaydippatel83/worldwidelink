import React, { useState, createContext, useEffect, useRef } from "react";
import { ethers } from 'ethers';
import { CCIP_TOKEN_ABI, ESCROW_ABI, ESCROW_SENDER_CONTRACT_ADDRESS, ESCROW_RECEIVER_CONTRACT_ADDRESS, CCIP_TOKEN_ADDRESS_MUMBAI, CCIP_TOKEN_ADDRESS_SEPOLIA } from "../../../constants";
export const EscrowContext = createContext(undefined);


export const EscrowContextProvider = (props) => {


    const [everyAgreement, setEveryAgreement] = useState([]);
    const [totalNumOfAgreement, setTotalNumOfAgreements] = useState(0);

    useEffect(() => {
        getNumOfAgreements()
        console.log(totalNumOfAgreement);
        if (totalNumOfAgreement > 0) {
            fetchAllAgreements();
        }
    }, [totalNumOfAgreement])

    // useEffect(() => {
    //     console.log(localStorage.getItem('userAddress'));
    //     if (localStorage.getItem('userAddress') !== null) {
    //             let num =  getNumOfAgreements();
    //     }
    // }, [])


    const getNumOfAgreements = async () => {
        try {
            const provider = await getProviderOrSigner();
            const network = await provider.getNetwork();

            let escroContract;
            if (network?.chainId == 11155111) {
                escroContract = getEscrowContractInstance(ESCROW_SENDER_CONTRACT_ADDRESS, provider);
            } else if (network?.chainId == 80001) {
                escroContract = getEscrowContractInstance(ESCROW_RECEIVER_CONTRACT_ADDRESS, provider);
            } else {
                alert('Please connect to Sepolia or Mumbai network')
            }
            let num = await escroContract?.numOfAgreement();
            setTotalNumOfAgreements(Number(num))
            return Number(num);
        } catch (error) {
            console.log(error);
        }
    };

    const getProviderOrSigner = async (needSigner = false) => {
        try {
            const web3Provider = new ethers.BrowserProvider(window.ethereum);
            // providers.Web3Provider(window.ethereum);
            if (needSigner) {
                const signer = await web3Provider.getSigner();
                return signer;
            }
            return web3Provider;
        } catch (error) {
            console.log(error);
        }
       
    }
    const getCCIPTokenContractInstance = (_tokenAddress, providerOrSigner) => {
        return new ethers.Contract(
            _tokenAddress,
            CCIP_TOKEN_ABI,
            providerOrSigner
        );
    };
    const getEscrowContractInstance = (_contractAddress, providerOrSigner) => {
        return new ethers.Contract(
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
            for (let i = 1; i <= totalNumOfAgreement; i++) {
                const agreement = await fetchAgreementById(i);
                console.log(agreement);
                allAgrmnt.push(agreement);

            }
            setEveryAgreement(allAgrmnt);
        } catch (error) {
            console.log(error);
        }
    }

    const fetchAgreementById = async (id) => {

        try {
            const provider = await getProviderOrSigner();
            const network = await provider.getNetwork();

            let escroContract;
            if (network?.chainId == 11155111) {
                escroContract = getEscrowContractInstance(ESCROW_SENDER_CONTRACT_ADDRESS, provider);
            } else if (network?.chainId == 80001) {
                escroContract = getEscrowContractInstance(ESCROW_RECEIVER_CONTRACT_ADDRESS, provider);
            } else {
                alert('Please connect to Sepolia or Mumbai network')
            }
            let agreement = await escroContract.agreements(id);
            // console.log(agreement);
            let isDispute = await escroContract.isDisputed(id);
            let isSubmitted = await escroContract.isWorkSubmitted(id);

            const agrmt = new ParsedAgreement(Number(agreement.agreementID), agreement.title, agreement.client, agreement.serviceProvider, agreement.arbitrator, ethers.formatEther(agreement.agreementAmount), ethers.formatEther(agreement.clientStake), ethers.formatEther(agreement.serviceProviderStake), agreement.fundsReleased, Number(agreement.fundreceiver), isDispute, isSubmitted)

            return agrmt;

        } catch (error) {
            console.log(error);
        };
    }

    const stakeCcipProvider = async (_agreementId, _agreementAmount) => {
        try {
            const signer = await getProviderOrSigner(true);

            const ccipInstance = getCCIPTokenContractInstance(CCIP_TOKEN_ADDRESS_MUMBAI, signer);

            const tx = await ccipInstance.approve(ESCROW_RECEIVER_CONTRACT_ADDRESS, ethers.parseEther('0.20'))
            await tx.wait();

            const escroContract = getEscrowContractInstance(ESCROW_RECEIVER_CONTRACT_ADDRESS, signer);

            const txx = await escroContract.stakeProviderEth(_agreementId, ESCROW_SENDER_CONTRACT_ADDRESS, CCIP_TOKEN_ADDRESS_MUMBAI);
            await txx.wait();
        } catch (error) {
            console.log(error);
        }
        // fetchAllAgreements();
        // alert('ETH staked successfully.');
    }

    const submitWork = async (_agreementId) => {
        try {
            const signer = await getProviderOrSigner(true);

            const escroContract = getEscrowContractInstance(ESCROW_RECEIVER_CONTRACT_ADDRESS, signer);

            const txx = await escroContract.SubmitWork(_agreementId, ESCROW_SENDER_CONTRACT_ADDRESS);
            await txx.wait();
        } catch (error) {
            console.log(error);
        }
    }
    const releaseFund = async (_agreementId) => {
        try {
            const signer = await getProviderOrSigner(true);

            const escroContract = getEscrowContractInstance(ESCROW_SENDER_CONTRACT_ADDRESS, signer);

            const txx = await escroContract.releaseFunds(_agreementId, ESCROW_RECEIVER_CONTRACT_ADDRESS, CCIP_TOKEN_ADDRESS_SEPOLIA);
            await txx.wait();
        } catch (error) {
            console.log(error);
        }
    }

    const raiseDispute = async (_agreementId, _client, _serviceProvider) => {
        const signer = await getProviderOrSigner(true);
        try {
            if (localStorage.getItem('userAddress') == _client) {
                const escroContract = getEscrowContractInstance(ESCROW_SENDER_CONTRACT_ADDRESS, signer);
                const txx = await escroContract.setDispute(_agreementId, ESCROW_RECEIVER_CONTRACT_ADDRESS);
                await txx.wait();
            } else if (localStorage.getItem('userAddress') == _serviceProvider) {
                const escroContract = getEscrowContractInstance(ESCROW_RECEIVER_CONTRACT_ADDRESS, signer);
                const txx = await escroContract.setDispute(_agreementId, ESCROW_SENDER_CONTRACT_ADDRESS);
                await txx.wait();
            } else {
                alert('please connect to the sepolia or mumbai testnet network!')
            }

        } catch (error) {
            console.log(error);
        }
    }




    return (
        <EscrowContext.Provider
            value={{

                getProviderOrSigner,
                getEscrowContractInstance,
                getCCIPTokenContractInstance,
                fetchAgreementById,
                everyAgreement,
                fetchAllAgreements,
                stakeCcipProvider,
                submitWork,
                releaseFund,
                raiseDispute,
                getNumOfAgreements

            }}

            {...props}
        >
            {props.children}
        </EscrowContext.Provider>
    )
}
