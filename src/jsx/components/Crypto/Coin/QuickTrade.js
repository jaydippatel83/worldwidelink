import React from 'react';

const QuickTrade = () =>{
    return(
        <>
            <div className="card quick-trade">
                <div className="card-header pb-0 border-0 flex-wrap">
                    <div>
                        <h4 className="heading mb-0">Quick Trade</h4>
                        <p className="mb-0 fs-14">Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                </div>
                <div className="card-body pb-0">
                    <div className="basic-form">
                        <form className="form-wrapper trade-form">
                            <div className="input-group mb-3 ">
                                <span className="input-group-text">Amount BTC</span>
                                <input className="form-control form-control text-end" type="text" placeholder="0,000000" />
                            </div>	
                            <div className="input-group mb-3 ">
                                <span className="input-group-text">Price BPL</span>
                                <input className="form-control form-control text-end" type="text" placeholder="0,000000" />
                            </div>	
                            <div className="input-group mb-3 ">
                                <span className="input-group-text">Fee (1%)</span>
                                <input className="form-control form-control text-end" type="text" placeholder="0,000000" />
                            </div>
                            <div className="input-group mb-3 ">
                                <span className="input-group-text">Total BPL</span>
                                <input className="form-control form-control text-end" type="text" placeholder="0,000000" />
                            </div>	
                        </form>
                    </div>
                </div>
                <div className="card-footer border-0">
                    <div className="row">
                        <div className="col-6">
                            <button className="btn d-flex  btn-success justify-content-between w-100">
                            BUY
                                <svg className="ms-4 scale5" width="16" height="16" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.35182 13.4965L5.35182 13.4965L5.33512 6.58823C5.33508 6.5844 5.3351 6.58084 5.33514 6.57759M5.35182 13.4965L5.83514 6.58306L5.33514 6.58221C5.33517 6.56908 5.33572 6.55882 5.33597 6.5545L5.33606 6.55298C5.33585 6.55628 5.33533 6.56514 5.33516 6.57648C5.33515 6.57684 5.33514 6.57721 5.33514 6.57759M5.35182 13.4965C5.35375 14.2903 5.99878 14.9324 6.79278 14.9305C7.58669 14.9287 8.22874 14.2836 8.22686 13.4897L8.22686 13.4896L8.21853 10.0609M5.35182 13.4965L8.21853 10.0609M5.33514 6.57759C5.33752 5.789 5.97736 5.14667 6.76872 5.14454C6.77041 5.14452 6.77217 5.14451 6.77397 5.14451L6.77603 5.1445L6.79319 5.14456L13.687 5.16121L13.6858 5.66121L13.687 5.16121C14.4807 5.16314 15.123 5.80809 15.1211 6.6022C15.1192 7.3961 14.4741 8.03814 13.6802 8.03626L13.6802 8.03626L10.2515 8.02798L23.4341 21.2106C23.9955 21.772 23.9955 22.6821 23.4341 23.2435C22.8727 23.8049 21.9625 23.8049 21.4011 23.2435L8.21853 10.0609M5.33514 6.57759C5.33513 6.57959 5.33514 6.58159 5.33514 6.5836L8.21853 10.0609M6.77407 5.14454C6.77472 5.14454 6.77537 5.14454 6.77603 5.14454L6.77407 5.14454Z" fill="white" stroke="white"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="col-6">
                            <button className="btn d-flex  btn-danger justify-content-between w-100">
                            SELL
                                <svg className="ms-4 scale3" width="16" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.9638 11.5104L16.9721 14.9391L3.78954 1.7565C3.22815 1.19511 2.31799 1.19511 1.75661 1.7565C1.19522 2.31789 1.19522 3.22805 1.75661 3.78943L14.9392 16.972L11.5105 16.9637L11.5105 16.9637C10.7166 16.9619 10.0715 17.6039 10.0696 18.3978C10.0677 19.1919 10.7099 19.8369 11.5036 19.8388L11.5049 19.3388L11.5036 19.8388L18.3976 19.8554L18.4146 19.8555L18.4159 19.8555C18.418 19.8555 18.42 19.8555 18.422 19.8555C19.2131 19.8533 19.8528 19.2114 19.8555 18.4231C19.8556 18.4196 19.8556 18.4158 19.8556 18.4117L19.8389 11.5035L19.8389 11.5035C19.8369 10.7097 19.1919 10.0676 18.3979 10.0695C17.604 10.0713 16.9619 10.7164 16.9638 11.5103L16.9638 11.5104Z" fill="white" stroke="white"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="d-flex mt-3 align-items-center">
                        <div className="form-check custom-checkbox me-3">
                            <input type="checkbox" className="form-check-input" id="customCheckBox1" required />
                            <label className="form-check-label fs-14 font-w400" htmlFor="customCheckBox1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</label>
                        </div>
                        <p className="mb-0"></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default QuickTrade;