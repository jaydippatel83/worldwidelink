import React from 'react'
import { Link } from 'react-router-dom';
import { LiquidStakeContext } from './LiquidstateContext';
export default function LiquidUnstakeCards() {


    const liquidContext = React.useContext(LiquidStakeContext);
    const { unStake} = liquidContext;
    return (
        <>

            <div className='container-fluid d-flex justify-content-center align-items-center mt-5'>
                <div className="col-xl">
                    <div className="card">
                        <div className="card-header border-0 pb-0">
                            Available to stake
                            <h4>1.5 MATIC</h4>
                        </div>
                        <div className="card-header border-0 pb-0">
                            Staked Amount
                            <h4>1.5 stMATIC</h4>
                        </div>
                        <div className="card-body pt-2 mt-0">

                            <form>
                                <div className="form-group mb-3">
                                    <label htmlFor="contractDropdown">Select Chain</label>
                                    <select
                                        defaultValue={"option"}
                                        className="form-control form-control-lg"
                                    >
                                        <option>Sepolia Testnet</option>
                                        <option>Mumbai Testnet</option>
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
                                    />
                                    <button
                                        className="btn btn-outline-primary btn-outline-primary"
                                        type="button"
                                        style={{ height: "3.5rem" }}
                                    >
                                        Max
                                    </button>
                                </div>

                                <div className='row mt-4'>
                                    <div className="col-xl-6 d-flex justify-content-center">
                                        <Link to={"#"} className="btn btn-primary py-2 text-uppercase p-5">Unlock Token</Link>
                                    </div>
                                    <div className="col-xl-6 d-flex justify-content-center">
                                        <Link to={"#"} className="btn btn-primary py-2 text-uppercase">Stake Now</Link>
                                    </div>
                                </div>

                            </form>
                            <div className="card-header border-0 pb-0">
                                You will receive
                                <h4>1.5 MATIC</h4>
                            </div>
                            <div className="card-header border-0 pb-0">
                                Exchange rate
                                <h4>1 MATIC = 0.432 MATIC</h4>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
