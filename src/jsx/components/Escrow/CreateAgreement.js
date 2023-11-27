import React, { useState, useRef } from 'react'
import { EscrowContext } from '../EscrowContext/EscrowContext'
import { destinationChainContractAddress, CCIP_TOKEN_ABI, CCIP_TOKEN_ADDRESS_SEPOLIA, ESCROW_CONTRACT_ADDRESS, ESCROW_ABI } from '../../../constants';
import Web3Modal from "web3modal";
import { ethers, Contract, providers, Signer } from 'ethers';


export default function CreateAgreement() {
    const escrowContext = React.useContext(EscrowContext);
    const web3ModalRef = useRef();

    const [title, setTitle] = useState('');
    const [serviceProviderAddress, setServiceProviderAddress] = useState();
    const [arbitratorAddress, setArbitratorAddress] = useState();
    const [clientAddress, setClientAddress] = useState();
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
        let receiverContract = "0x11433c4eb1ff81a49a257644ceff2ad09a204160";
        if (title == null || clientAddress == null || serviceProviderAddress == null || arbitratorAddress == null || amount == null) {
            alert('Please enter all required fields.');
            return;
        }

        const signer = await getProviderOrSigner(true);

        const ccipInstance = getCCIPTokenContractInstance(signer);
        console.log(ccipInstance);

        try {
            const tx = await ccipInstance.approve(ESCROW_CONTRACT_ADDRESS, ethers.utils.parseEther(fund))
            await tx.wait();
        } catch (error) {
            console.log(error);
        }

        const escroContract = getEscrowContractInstance(signer);
        try {
            const tx = await escroContract.createEscrowAgreement(title, clientAddress, serviceProviderAddress, arbitratorAddress, ethers.utils.parseEther(amount), receiverContract);

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

    const getProviderOrSigner = async (needSigner = false) => {
        const provider = await web3ModalRef.current.connect();

        const web3Provider = new providers.Web3Provider(provider);
        const signerForUserAddress = await web3Provider.getSigner();
        const clientAddress = await signerForUserAddress.getAddress();
        setClientAddress(clientAddress);
        const { chainId } = await web3Provider.getNetwork();
        // if (chainId !== 471100) {
        //     window.alert("Please switch to the patex-sepolia network!");
        //     throw new Error("Please switch to the patex-sepolia network");
        // }

        if (needSigner) {
            const signer = web3Provider.getSigner();
            return signer;
        }
        return web3Provider;
    }

    const getCCIPTokenContractInstance = (providerOrSigner) => {
        return new Contract(
            CCIP_TOKEN_ADDRESS_SEPOLIA,
            CCIP_TOKEN_ABI,
            providerOrSigner
        );
    };

    const getEscrowContractInstance = (providerOrSigner) => {
        return new Contract(
            ESCROW_CONTRACT_ADDRESS,
            ESCROW_ABI,
            providerOrSigner
        );
    };


    console.log(selectChain);
    console.log(chainContractAddress);
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
                                            onClick={createAgreement}

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
