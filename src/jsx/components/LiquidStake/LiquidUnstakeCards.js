import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { LiquidStakeContext } from './LiquidstateContext';
export default function LiquidUnstakeCards() {


    const liquidContext = React.useContext(LiquidStakeContext);
    const { unStake, getCcipBalance, approveToken, ccipBalance, stakedAmount } = liquidContext;

    const [fieldValue, setFieldValue] = useState('0.0');


    const handleFieldValue = (e) => {
        setFieldValue(e.target.value)
    }


    return (
        <>

            <div className='container  justify-content-center align-items-center'>
                <div className="col-xl">
                    <div className="card">
                        <div className="card-header border-0 pb-0">
                            Available balance
                            <h4>{ccipBalance} CCIP</h4>
                        </div>
                        <div className="card-header border-0 pb-0">
                            Staked Amount
                            <h4>{stakedAmount} stCCIP</h4>
                        </div>
                        <div className="card-body pt-2 mt-0">

                            <form>
                                <div className="form-group ml-2 mt-3 mb-3">
                                    <label htmlFor="contractDropdown">Select Chain</label>
                                    <select
                                        defaultValue={"option"}
                                        className="form-control form-control-lg"
                                    >
                                        <option>Mumbai Testnet</option>
                                        <option>Sepolia Testnet</option>
                                        <option>Fuji Testnet</option>
                                        <option>BNB chain Testnet</option>
                                        <option>Base Goerli Testnet</option>
                                    </select>
                                </div>
                                <label htmlFor="contractDropdown">Amount</label>

                                <div className="input-group" style={{ zIndex: "0" }}>

                                    <input
                                        id="amount"
                                        className="form-control lg"
                                        style={{ height: "3.5rem" }}
                                        onChange={handleFieldValue}
                                        value={fieldValue}
                                    />
                                    <button
                                        className="btn btn-outline-primary btn-outline-primary"
                                        type="button"
                                        style={{ height: "3.5rem" }}
                                        onClick={() => {
                                            setFieldValue(stakedAmount);
                                        }}
                                    >
                                        Max
                                    </button>
                                </div>

                                <div className='row mt-4'>

                                    <div className=" d-flex justify-content-center">
                                        <Link
                                            onClick={() => unStake(fieldValue)}
                                            to={"#"} className="btn btn-primary py-2 text-uppercase">UnStake Now</Link>
                                    </div>
                                </div>

                            </form>
                            <div className="card-header border-0 pb-0">
                                You will receive
                                <h4>{fieldValue} CCIP</h4>
                            </div>
                            <div className="card-header border-0 pb-0">
                                Exchange rate
                                <h4>1 CCIP = 1 stCCIP</h4>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
