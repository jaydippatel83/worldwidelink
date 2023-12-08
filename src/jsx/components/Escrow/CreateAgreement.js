import React, { useState, useRef, useEffect, useContext } from 'react'
import { EscrowContext } from '../EscrowContext/EscrowContext'
import { destinationChainContractAddress, CCIP_TOKEN_ABI, CCIP_TOKEN_ADDRESS_SEPOLIA, ESCROW_SENDER_CONTRACT_ADDRESS, ESCROW_ABI, CCIP_TOKEN_ADDRESS_MUMBAI, ESCROW_MUMBAI_RECEIVER_CONTRACT_ADDRESS, ESCROW_FUJI_RECEIVER_CONTRACT_ADDRESS, CCIP_TOKEN_ADDRESS_FUJI } from '../../../constants';
import Web3Modal from "web3modal";
import { ethers } from 'ethers';
import { Web3Context } from "../../../context/Web3Context";

export default function CreateAgreement() {

    const escrowContext = React.useContext(EscrowContext);
    const web3Context = React.useContext(Web3Context);

    const { getProviderOrSigner, getCCIPTokenContractInstance, getEscrowContractInstance, fetchAgreementById, fetchAllAgreements } = escrowContext;

    const { address } = web3Context;

    const [title, setTitle] = useState('');
    const [serviceProviderAddress, setServiceProviderAddress] = useState();
    const [arbitratorAddress, setArbitratorAddress] = useState();
    const [clientAddress, setClientAddress] = useState(address);
    const [loading, setLoading] = useState(false);
    const [everyAgreementAsClient, setEveryAgreementAsClient] = useState([]);
    const [amount, setAmount] = useState(0);
    const [fund, setFund] = useState(0);
    const [totalNumOfAgreement, setTotalNumOfAgreements] = useState(0);
    const [destinationSelector, setDestinationSelector] = useState('14767482510784806043');
    const [ccipTokenAddress, setCcipTokenAddress] = useState(CCIP_TOKEN_ADDRESS_FUJI);
    const [chainContractAddress, setChainContractAddress] = useState(ESCROW_FUJI_RECEIVER_CONTRACT_ADDRESS);
    const [crossChains, setCrossChains] = useState("Fuji");

    const createAgreement = async () => {
        const signer = await getProviderOrSigner(true);

        const ccipInstance = getCCIPTokenContractInstance(CCIP_TOKEN_ADDRESS_SEPOLIA, signer);

        try {
            const tx = await ccipInstance.approve(ESCROW_SENDER_CONTRACT_ADDRESS, ethers.parseEther(fund))
            await tx.wait();
        } catch (error) {
            console.log(error);
        }

        const escroContract = getEscrowContractInstance(ESCROW_SENDER_CONTRACT_ADDRESS, signer);
        try {
            const tx = await escroContract.createEscrowAgreement(title, clientAddress, serviceProviderAddress, arbitratorAddress, ethers.parseEther(amount), chainContractAddress, destinationSelector, crossChains
            );

            setLoading(true)
            await tx.wait();
            setAmount(0);
            // Update the state to reflect the new escrow agreement
            // setFundsReleased(false);

            setLoading(false);
            alert('Funds deposited successfully.');
        } catch (error) {
            console.error("Transaction failed:", error.message);
            setLoading(false);
        }
    }
    // console.log(destinationSelector);
    // console.log(chainContractAddress);

    const handleChange = (event) => {
        // console.log(event);
        const [selectedContractAddress, destination, crossChain, ccipTokenAdd] = JSON.parse(event.target.value);
        setChainContractAddress(selectedContractAddress);
        setDestinationSelector(destination);
        setCrossChains(crossChain);
        setCcipTokenAddress(ccipTokenAdd);
        console.log(selectedContractAddress);
        console.log(destination);
        console.log(crossChain);

    };
 
    return (
        <>
            <div className='container'>
                <div className="container col-xl-12 col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="basic-form">
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <div className="form-group mb-3">
                                        <label>Agreement Title</label>

                                        <input
                                            type="text"
                                            className="form-control input-default form-control-lg "
                                            placeholder="Agreement Title"
                                            onChange={(e) => {
                                                setTitle(e.target.value)
                                            }}
                                        />
                                    </div>

                                    <div className="row">
                                        <div className="form-group mb-3 col-md-6">
                                            <label htmlFor="contractDropdown">Destination Chain</label>
                                            <select
                                                id="contractDropdown"
                                                onChange={handleChange}
                                                defaultValue={"option"}
                                                className="form-control form-control-lg" aria-label="label for the select"
                                            >
                                                <option value={JSON.stringify([ESCROW_FUJI_RECEIVER_CONTRACT_ADDRESS, "14767482510784806043", "Fuji",CCIP_TOKEN_ADDRESS_FUJI])}>Fuji testnet</option>
                                                <option value={JSON.stringify([ESCROW_MUMBAI_RECEIVER_CONTRACT_ADDRESS, "12532609583862916517", "Mumbai", CCIP_TOKEN_ADDRESS_MUMBAI])} >Mumbai testnet</option>
                                                <option value={JSON.stringify(["0xa27727Aa9F790924c3f04cc69eC6692877A7187D", "16015286601757825753", "Sepolia", CCIP_TOKEN_ADDRESS_SEPOLIA])} >Sepolia testnet</option>
                                                <option value={JSON.stringify(["0xa27727Aa9F790924c3f04cc69eC6692877A7187D", "13264668187771770619", "BNB"])}>BNB Chain testnet</option>
                                                <option value={JSON.stringify(["0xa27727Aa9F790924c3f04cc69eC6692877A7187D", "5790810961207155433", "Base"])}>Base Goerli testnet</option>

                                            </select>
                                        </div>
                       
                                        <div className="form-group mb-3 col-md-6">
                                            <label>Amount</label>
                                            <input
                                                type="number"
                                                className="form-control form-control-lg"
                                                placeholder="0.1"
                                                onChange={(e) => {
                                                    setAmount(e.target.value);
                                                    setFund((Number(e.target.value) * 2).toString());
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div style={{ overflow: "hidden", textAlign: "center" }} >
                                        <h5 className='note-class'>
                                            {amount > 0 ? <div><p>Note that you have to provide    <span style={{ color: "red", fontSize: "20px" }}>{fund}</span>  CCIP-BnM  to Stake</p></div> : ""}
                                        </h5>
                                    </div>


                                    <div className="form-group mb-3">
                                        <label>Service Provider</label>

                                        <input
                                            type="text"
                                            className="form-control input-default form-control-lg "
                                            placeholder="Address of service Provider"
                                            onChange={(e) => {
                                                setServiceProviderAddress(e.target.value)
                                            }}
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Arbitrator</label>
                                        <input
                                            type="text"
                                            className="form-control input-default form-control-lg "
                                            placeholder="Address of Arbitrator"
                                            onChange={(e) => {
                                                setArbitratorAddress(e.target.value)
                                            }}
                                        />
                                    </div>
                                    <div class="text-center mt-4">
                                        <button type="button" class="btn btn-primary"
                                            // onClick={stakeCcipProvider}
                                            // onClick={submitWork}
                                            // onClick={releaseFund}
                                            onClick={createAgreement}
                                        // onClick={fetchAllAgreements}

                                        >Create escrow</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </>
    )
}
