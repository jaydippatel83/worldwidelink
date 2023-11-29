import React, { useState, useContext } from 'react'
import { EscrowContext } from '../EscrowContext/EscrowContext'
import { destinationChainContractAddress, CCIP_TOKEN_ABI, CCIP_TOKEN_ADDRESS_SEPOLIA, ESCROW_SENDER_CONTRACT_ADDRESS, ESCROW_ABI, CCIP_TOKEN_ADDRESS_MUMBAI, ESCROW_RECEIVER_CONTRACT_ADDRESS } from '../../../constants';
import Web3Modal from "web3modal";
import { ethers } from 'ethers';

export default function CreateAgreement() {

    const escrowContext = React.useContext(EscrowContext);
    const { getProviderOrSigner, getCCIPTokenContractInstance, getEscrowContractInstance, fetchAgreementById, fetchAllAgreements } = escrowContext;

    const [title, setTitle] = useState('');
    const [serviceProviderAddress, setServiceProviderAddress] = useState();
    const [arbitratorAddress, setArbitratorAddress] = useState();
    const [clientAddress, setClientAddress] = useState(localStorage.getItem('userAddress'));
    const [loading, setLoading] = useState(false);
    const [everyAgreementAsClient, setEveryAgreementAsClient] = useState([]);
    const [amount, setAmount] = useState(0);
    const [fund, setFund] = useState(0);
    const [totalNumOfAgreement, setTotalNumOfAgreements] = useState(0);
    // const [fundsReleased, setFundsReleased] = useState(false);
    const [walletConnected, setWalletConnected] = useState(false);

    const [selectChain, setSelectChain] = useState('Mumbai testnet');
    const [chainContractAddress, setChainContractAddress] = useState(destinationChainContractAddress['Mumbai testnet']);


    const createAgreement = async () => {
        // let receiverContract = "0xf1E3A5842EeEF51F2967b3F05D45DD4f4205FF40";
        // if (title == null || clientAddress == null || serviceProviderAddress == null || arbitratorAddress == null || amount == null) {
        //     alert('Please enter all required fields.');
        //     return;
        // }

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
            const tx = await escroContract.createEscrowAgreement(title, clientAddress, serviceProviderAddress, arbitratorAddress, ethers.parseEther(amount), ESCROW_RECEIVER_CONTRACT_ADDRESS
            );

            setLoading(true)
            await tx.wait();
            setAmount(0);
            // Update the state to reflect the new escrow agreement
            // setFundsReleased(false);

            // getNumOfAgreements();
            setLoading(false);
            alert('Funds deposited successfully.');
        } catch (error) {
            console.error("Transaction failed:", error.message);
            setLoading(false);
        }
    }

    const handleChange = (event) => {
        setSelectChain(event.target.value);
        setChainContractAddress(destinationChainContractAddress[selectChain]);

    };


    return (
        <>
            <div className='container'>
                <div className="col-xl-12 col-lg-12">
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
                                                value={selectChain}
                                                onChange={handleChange}
                                                defaultValue={"option"}
                                                className="form-control form-control-lg" aria-label="label for the select"
                                            >

                                                {Object.keys(destinationChainContractAddress).map((key) => (
                                                    <option key={key} value={key}>
                                                        {key}
                                                    </option>
                                                ))}


                                                {/* <option>Sepolia testnet</option>
                                                <option>Optimism Goerli testnet</option>
                                                <option>Mumbai testnet</option>
                                                <option>Fuji testnet</option>
                                                <option>BNB Chain testnet</option>
                                                <option> Base Goerli testnet</option> */}

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
                                            // onClick={createAgreement}
                                            onClick={fetchAllAgreements}

                                        >Create</button>
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
