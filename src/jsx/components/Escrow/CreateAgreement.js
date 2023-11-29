import React, { useState, useRef, useEffect } from 'react'
import { EscrowContext } from '../EscrowContext/EscrowContext'
import { destinationChainContractAddress, CCIP_TOKEN_ABI, CCIP_TOKEN_ADDRESS_SEPOLIA, ESCROW_CONTRACT_ADDRESS, ESCROW_ABI } from '../../../constants';
import Web3Modal from "web3modal";
import { ethers, Contract, providers, Signer } from 'ethers';
import { Web3Context } from '../../../context/Web3Context';



export default function CreateAgreement() {
    const web3Context = React.useContext(Web3Context);
    const { connectWallet } = web3Context;
    const web3ModalRef = useRef(null);
    const [title, setTitle] = useState('');
    const [serviceProviderAddress, setServiceProviderAddress] = useState();
    const [arbitratorAddress, setArbitratorAddress] = useState();
    const [clientAddress, setClientAddress] = useState(localStorage.getItem('userAddress'));
    const [loading, setLoading] = useState(false);
    const [everyAgreementAsClient, setEveryAgreementAsClient] = useState([]);
    const [amount, setAmount] = useState(0);
    const [fund, setFund] = useState(0);
    const [totalNumOfAgreement, setTotalNumOfAgreements] = useState(0);
    const [walletConnected, setWalletConnected] = useState(false);
    const [selectChain, setSelectChain] = useState('Mumbai testnet');
    const [chainContractAddress, setChainContractAddress] = useState(destinationChainContractAddress['Mumbai testnet']);




    useEffect(() => {
        if (totalNumOfAgreement > 0) {
            fetchAllAgreements();
        }
    }, [totalNumOfAgreement])

    useEffect(() => {
        if (!walletConnected) {
            web3ModalRef.current = new Web3Modal({
                network: "goerli",
                providerOptions: {},
                disableInjectedProvider: false,
            });
            connectWallet().then(async () => {
                await getNumOfAgreements();
            })
        }
    }, []);


    function ParsedAgreement(_agreeId, _AgreementTitle, _clientAdd, _providerAdd, _arbitrator, _agreementAmount, _clientStake, _completed, _released, _serviceProviderStake, _dispute, _fundReceiver) {
        this.agreeId = _agreeId;
        this.title = _AgreementTitle;
        this.clientAdd = _clientAdd;
        this.providerAdd = _providerAdd;
        this.arbitratorAdd = _arbitrator;
        this.agreementAmount = _agreementAmount;
        this.clientStake = _clientStake
        this.completed = _completed;
        this.release = _released;
        this.serviceProviderStake = _serviceProviderStake
        this.dispute = _dispute;
        this.fundReceiver = _fundReceiver;
    }

    const createAgreement = async () => {

        let receiverContract = "0xb904b50e2fabc70aed142760fdc3df1338633dd4";

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

            getNumOfAgreements();
            setLoading(false);
            alert('Funds deposited successfully.');
            console.log('----');
        } catch (error) {
            console.error("Transaction failed:", error.message);
            setLoading(false);
        }


    }

    const getProviderOrSigner = async (needSigner = false) => {


        const web3Provider = new ethers.providers.Web3Provider(window.ethereum);

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

    const getNumOfAgreements = async () => {
        try {
            const provider = await getProviderOrSigner();
            const contract = getEscrowContractInstance(provider);
            const numOfAgreements = await contract.numOfAgreement();
            console.log(Number(numOfAgreements), '--');
            // cdccd
            console.log('in try---', contract);
            setTotalNumOfAgreements(numOfAgreements);
        } catch (error) {
            console.log('from getNumOfAgreements function: ', error);
        }
    };

    // console.log(selectChain);
    // console.log(chainContractAddress);


    const handleChange = (event) => {
        setSelectChain(event.target.value);
        setChainContractAddress(destinationChainContractAddress[selectChain]);

    };

    const fetchAgreementById = async (id) => {
        // console.log('erntered fetch by id', id);

        try {
            const provider = await getProviderOrSigner();
            const escroContract = getEscrowContractInstance(provider);
            console.log('escroContract', escroContract);
            let agreement = await escroContract.agreements(id);
            console.log('agreement==>', agreement);
            const agrmnt = new ParsedAgreement(agreement.agreementID.toNumber(), agreement.title, agreement.client, agreement.serviceProvider, agreement.arbiter, agreement.agreementAmount.toNumber(), agreement.clientStake.toNumber() / 1000000000000000000, agreement.completed, agreement.fundsReleased, agreement.serviceProviderStake.toNumber() / 1000000000000000000, agreement.dispute, agreement.fundreceiver.toNumber())

            console.log(agrmnt, 'agreement by ID');
            return agrmnt;

        } catch (error) {
            console.log(error);
        };
    }

    const fetchAllAgreements = async () => {
        // console.log('erntered fetch all');
        try {
            const allAgreements = [];
            for (let i = 1; i < totalNumOfAgreement; i++) {
                const agreement = await fetchAgreementById(i);

                allAgreements.push(agreement);

            }
            setEveryAgreementAsClient(allAgreements);
        } catch (error) {
            console.log(error);
        }
    }



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
