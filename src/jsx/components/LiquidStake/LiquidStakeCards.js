import { Select } from '@mui/material';
import { Formik } from 'formik';
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Liquidstake } from './Liquidstake'
import { Link } from 'react-router-dom';
const LiquidStakeCards = () => {
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
                            <h4>1.5 MATIC</h4>
                        </div>
                        <div className="card-body pt-2 mt-0">
                            <div className="d-flex align-items-center justify-content-between my-3">
                                <span className="small text-muted">Avbl Balance</span>
                                <span className="">210.800 USDT</span>
                            </div>
                            <form>
                                <div className="input-group" style={{ zIndex: "0" }}>
                                    <input
                                        id="amount"
                                        className="form-control"
                                    // onChange={handleChange}
                                    // value={values.amount}
                                    />
                                    <button
                                        className="btn btn-outline-primary btn-outline-primary "
                                        type="button"
                                    // onClick={() => {
                                    //     setFieldValue("amount", balance);
                                    // }}
                                    >
                                        Max
                                    </button>
                                </div>

                                <div className='row mt-4'>
                                    <div className="col-xl-6 d-flex justify-content-center">
                                        <Link to={"#"} className="btn btn-primary py-2 text-uppercase">Unlock Token</Link>
                                    </div>
                                    <div className="col-xl-6 d-flex justify-content-center">
                                        <Link to={"#"} className="btn btn-primary py-2 text-uppercase">Stake Now</Link>
                                    </div>
                                </div>

                            </form>
                            <div className="card-header border-0 pb-0">
                                Available to stake
                                <h4>1.5 MATIC</h4>
                            </div>
                            <div className="card-header border-0 pb-0">
                                Exchange rate
                                <h4>1 MATIC = 0.432 stMATIC</h4>
                            </div>
                            <div className="card-header border-0 pb-0">
                                Allowance
                                <h4> 0.0 MATIC</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>

    );
};

export default LiquidStakeCards;
