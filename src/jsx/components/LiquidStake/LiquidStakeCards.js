import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { Dropdown } from 'react-bootstrap';
import { Liquidstake } from './Liquidstake'
import { Link } from 'react-router-dom';
import { LiquidStakeContext } from './LiquidstateContext';

const LiquidStakeCards = () => {


    const liquidContext = React.useContext(LiquidStakeContext);
    const { stake, getCcipBalance, approveToken, ccipBalance, stakedAmount, getStakedAmount } = liquidContext;
    const [fieldValue, setFieldValue] = useState('0.0');


    useEffect(() => {
        getStakedAmount();
        getCcipBalance();
    }, [])

    const handleFieldValue = (e) => {
        setFieldValue(e.target.value)
    }
    return (
        <>

            <div className='container col-xl-8 d-flex justify-content-center align-items-center mt-5'>
                <div className="col-xl">
                    <div className="card">
                        <div className="card-header border-0 pb-0">
                            Available to stake
                            <h4>{ccipBalance} CCIP</h4>
                        </div>
                        <div className="card-header border-0 pb-0">
                            Staked Amount
                            <h4>{stakedAmount} stCCIP</h4>
                        </div>
                        <div className="card-body pt-2 mt-0">
                            {/* <div className="d-flex align-items-center justify-content-between my-3">
                                <span className="small text-muted">Avbl Balance</span>
                                <span className="">210.800 USDT</span>
                            </div> */}

                            <form>
                                <div className="form-group mt-3 mb-3">
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
                                        className="btn btn-outline-primary btn-outline-primary "
                                        type="button"
                                        style={{ height: "3.5rem" }}

                                        onClick={() => {
                                            setFieldValue(ccipBalance);
                                        }}
                                    >
                                        Max
                                    </button>
                                </div>

                                <div className='row mt-4'>
                                    <div className="col-xl-6 d-flex justify-content-center">
                                        <Link
                                            onClick={() => approveToken(fieldValue)}
                                            to={"#"} className="btn btn-primary py-2 text-uppercase">Unlock Token</Link>
                                    </div>
                                    <div className="col-xl-6 d-flex justify-content-center">
                                        <Link
                                            onClick={() => stake(fieldValue)}
                                            to={"#"} className="btn btn-primary py-2 text-uppercase">Stake Now</Link>
                                    </div>
                                </div>

                            </form>

                            <div className="card-header border-0 pb-0">
                                Exchange rate
                                <h4>1 CCIP = 1 stCCIP</h4>
                            </div>
                            <div className="card-header border-0 pb-0">
                                Allowance
                                <h4> 0.0 CCIP</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>

    );
};

export default LiquidStakeCards;
