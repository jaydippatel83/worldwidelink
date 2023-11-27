import React, { useState } from 'react'
import { EscrowContext } from '../EscrowContext/EscrowContext'

export default function CreateAgreement() {
    const escrowContext = React.useContext(EscrowContext);
    const { createAgreement, setTitle, setAmount, setArbitratorAddress, setClientAddress,
        setFund, setServiceProviderAddress, amount,fund } = escrowContext;

    // const [title, setTitle] = useState('');
    // const [serviceProviderAddress, setServiceProviderAddress] = useState();
    // const [arbitratorAddress, setArbitratorAddress] = useState();
    // const [clientAddress, setClientAddress] = useState();
    // const [loading, setLoading] = useState(false);
    // const [everyAgreementAsClient, setEveryAgreementAsClient] = useState([]);
    // const [amount, setAmount] = useState(0);
    // const [fund, setFund] = useState(0);
    // const [totalNumOfAgreement, setTotalNumOfAgreements] = useState(0);
    // const [fundsReleased, setFundsReleased] = useState(false);
    // const [walletConnected, setWalletConnected] = useState(false);



    // Create an escrow agreement and deposite fund
    // const createAgreement = async () => {
    //     // Validate inputs
    //     if (title == null || clientAddress == null || serviceProviderAddress == null || arbitratorAddress == null || amount == null) {
    //         alert('Please fillup, all the fields are required!');
    //         return;
    //     }
    // console.log(ethers.utils.parseEther(amount));
    // const signer = await getProviderOrSigner(true);
    // const escroContract = getEscrowContractInstance(signer);

    // Send the transaction to create the escrow agreement
    // console.log(fund);

    // const tx = await escroContract.createEscrowAgreement(title, clientAddress, serviceProviderAddress, arbitratorAddress,recieverContractAddress, ethers.utils.parseEther(amount), { value: ethers.utils.parseEther(fund) });

    // setLoading(true)
    // await tx.wait();
    // setAmount(0);
    // // Update the state to reflect the new escrow agreement
    // setFundsReleased(false);

    // getNumOfAgreements();
    // setLoading(false);
    // alert('Funds deposited successfully.');
    // }




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
                                            <label>Select Chain</label>
                                            <select
                                                defaultValue={"option"}
                                                className="form-control form-control-lg" aria-label="label for the select"
                                            >
                                                <option>Sepolia testnet</option>
                                                <option>Optimism Goerli testnet</option>
                                                <option>Mumbai testnet</option>
                                                <option>Fuji testnet</option>
                                                <option>BNB Chain testnet</option>
                                                <option> Base Goerli testnet</option>

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
