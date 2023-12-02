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
                            <h4>1.5 MATIC</h4>
                        </div>
                        <div className="card-body pt-2 mt-0">

                            <form>
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
                                    <div className=" d-flex justify-content-center">
                                        <Link
                                        onClick={unStake}
                                        to={"#"} className="btn btn-primary py-2 text-uppercase"
                                        >Unstake</Link>
                                    </div>
                                </div>
                            </form>
                            <div className="card-header border-0 pb-0">
                                You will receive
                                <h4>1.5 MATIC</h4>
                            </div>
                            <div className="card-header border-0 pb-0">
                                Exchange rate
                                <h4>1 MATIC = 0.432 stMATIC</h4>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
